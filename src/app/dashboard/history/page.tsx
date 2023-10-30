/* eslint-disable @next/next/no-img-element */
"use client";
import { useStore } from "@/app/store/Store";
import React, { useEffect, useState } from "react";
import { ToastContainer, toast, Flip } from "react-toastify";
import TrxHistoryTable from "@/app/_component/TrxHistoryTable";
type Transaction = {
  transaction_hash: string;
  block_number: number;
  block_timestamp: string;
  from_address: string;
  to_address: string;
  value: string;
};
const History = () => {
  const eth = useStore((state) => state.ethAddr);
  const chain = useStore((state) => state.chain);
  const [cpage, setCPage] = useState<number>(1);
  const [tx, setTx] = useState<Transaction[]>([]);
  // const [toAddress, setToAddress] = useState<string>('');
  useEffect(() => {
   
    async function getHistory() {
      try {
        if(!eth || !chain){
          toast.error("Please add your Wallet Address and Chain")
          return
         }

        const options = {
          method: "GET",
          headers: {
            accept: "application/json",
            "x-api-key": process.env.NEXT_PUBLIC_CHAINBASE as string,
          },
        };

        //fetch('https://api.chainbase.online/v1/account/txs?chain_id=136&address=ffgfds&limit=100', options)

        const res = await fetch(
          `https://api.chainbase.online/v1/account/txs?chain_id=${chain}&address=${eth}&page=${cpage}&limit=20`,
          options
        );
        const { data } = await res.json();
        if (data) {
          setTx(data);
          if (data.length > 0) {
            // setToAddress(data[0].to_address);
          }
        }
        // console.log(data);
      } catch (err) {
        console.log(err);
        return "";
      }
    }
    getHistory();
  }, [chain, cpage, eth]);

  return (
    <div className={` `}>
      <h1 className="text-2xl w-full text-center text-gray-800 font-bold lg:text-4xl mb-5">
        Transaction History
      </h1>
      {/* {toAddress && <h3 className='text-base sm:text-lg font-semibold text-gray-800'>To Address: {toAddress}</h3>} */}
      <div>
        <div className="relative overflow-y-auto min-h-screen shadow-md sm:rounded-lg px-10">
          <div className=" overflow-y-auto custom-scrollbar">
            <table className="w-full text-sm text-left ">
              <thead className="text-xs text-gray-800 uppercase bg-gray-300 sticky top-0">
                <tr>
                  <th scope="col" className="px-6 py-3">
                    Transaction Hash
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Block
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Date
                  </th>
                  <th scope="col" className="px-6 py-3">
                    From
                  </th>
                  <th scope="col" className="px-6 py-3">
                    To
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Value
                  </th>
                </tr>
              </thead>
              {tx.map((transaction, index) => (
                <TrxHistoryTable key={index} transaction={transaction} />
              ))}
            </table>
            {tx && (
              <div
                className={`flex items-center justify-center gap-4  mx-auto mt-7 mb-[30%] `}
              >
                <img
                  className={`w-7 cursor-pointer `}
                  onClick={() =>
                    setCPage((prev) => (prev > 1 ? prev - 1 : prev))
                  }
                  alt="img"
                  src="https://img.icons8.com/external-dashed-line-kawalan-studio/100/external-minus-shape-dashed-line-kawalan-studio.png"
                />
                <div className={`text-xl font-mono`}>{cpage}</div>
                <img
                  className={`w-7 cursor-pointer  `}
                  onClick={() => setCPage((prev) => prev + 1)}
                  alt="img"
                  src="https://img.icons8.com/pulsar-line/48/000000/plus-math.png"
                />
              </div>
            )}
          </div>
        </div>
      </div>
     
    </div>
  );
};

export default History;
