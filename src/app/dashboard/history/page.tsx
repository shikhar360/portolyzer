"use client"
import { useStore } from '@/app/store/Store'
import React, { useEffect, useState } from 'react'
import { ToastContainer, toast , Flip } from "react-toastify";
import TrxHistoryTable from '@/app/_component/TrxHistoryTable';
type Transaction = {
  transaction_hash: string;
  block_number: number;
  block_timestamp: string;
  from_address: string;
  to_address: string;
  value: string
};
const History = () => {
  const eth = useStore(state => state.ethAddr)
  const chain = useStore(state => state.chain)

  const [tx, setTx] = useState<Transaction[]>([]);
  // const [toAddress, setToAddress] = useState<string>('');
  useEffect(()=>{
    if(!eth || !chain){
     toast.error("Please add your Wallet Address and Chain")
    }

      async function getHistory() {
        try {
          if (!eth || !chain) return;
  
          const options = {
            method: "GET",
            headers: {
              accept: "application/json",
              "x-api-key": process.env.NEXT_PUBLIC_CHAINBASE as string,
            },
          };
  
          //fetch('https://api.chainbase.online/v1/account/txs?chain_id=136&address=ffgfds&limit=100', options)

          const res = await fetch(
            `https://api.chainbase.online/v1/account/txs?chain_id=${
                 chain ? chain : null
              }&address=${eth ? eth : null}&limit=100`,
            options
          );
          const { data } = await res.json();
          if(data){
  
            setTx(data)
            if (data.length > 0) {
              // setToAddress(data[0].to_address);
            }
          }
          // console.log(data);
        } catch (err) {
          console.log(err);
          return ""
        }
      }
      getHistory();

    
  },[chain, eth])
  
  return (
    <div className={` pt-28 pl-10`}>
      <h1 className='text-2xl text-gray-800 font-bold lg:text-4xl mb-5'>Transaction History</h1>
      {/* {toAddress && <h3 className='text-base sm:text-lg font-semibold text-gray-800'>To Address: {toAddress}</h3>} */}
    <div>

    <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
    <div className="max-h-screen overflow-y-auto custom-scrollbar">
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
    </div>
</div>
        
      </div>
    <ToastContainer
    position="bottom-right"
    autoClose={3000}
    hideProgressBar={true}
    transition={Flip}
    />
    </div>
  )
}

export default History