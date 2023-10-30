/* eslint-disable @next/next/no-img-element */
"use client";
import React, { useEffect, useMemo, useState } from "react";
import useDebounce from "./useDebounce";
import { useSearchParams } from "next/navigation";
import Link from "next/link";
import { useStore } from "../store/Store";

const Dashboard = () => {
  const eth = useStore((state) => state.ethAddr);
  const chain = useStore((state) => state.chain);
  // console.log({ addr, network });
 const [bal, setBal] = useState<number | string>(0);
 const [erc20, setErc20] = useState<any>('');
 const [cpage, setCPage] = useState<number >(1);
 

  // console.log(selectedChain);

  useEffect(() => {
    async function getWalletData() {
      try {
        if (!eth || !chain) return;
        // console.log(inputVal);

        const options = {
          method: "GET",
          headers: {
            accept: "application/json",
            "x-api-key": process.env.NEXT_PUBLIC_CHAINBASE as string,
          },
        };

        const res = await fetch(
          `https://api.chainbase.online/v1/account/balance?chain_id=${chain}&address=${eth}`,
          options
        );

        const res2 = await fetch(
          `https://api.chainbase.online/v1/account/tokens?chain_id=${chain}&address=${eth}&limit=20&page=${cpage}`,
          options
        );

        const { data } = await res.json();
        const { data: erc20Data } = await res2.json();
        // console.log(parseInt(erc20) / 10 ** 18);
        setErc20(erc20Data);
        setBal((parseInt(data) / 10 ** 18).toFixed(2));
      } catch (err) {
        console.log(err);
      }
    }

    getWalletData();
  }, [chain, cpage, eth]);

  // "0x176961411f7e0c150"
  function getTokenSymbol() {
    if(!chain)return
    if (chain === "1") return "ETH";
    if (chain === "137") return "MATIC";
    if (chain === "56") return "BSC";
    if (chain === "43114") return "AVAX";
    if (chain === "42161") return "ARB";
    if (chain === "10") return "OPT";
    if (chain === "8453") return "BASE";
    if (chain === "324") return "ZKS";
  }

  console.log(erc20);
  return (
    <div
      className={`flex flex-col items-start  justify-start bg-white p-20  text-black w-full min-h-screen `}
    >
      
      <div className={`w-max bg-black/5 rounded-xl py-3 px-4 `}>
        <p className={`text-sm font-mono text-black/60 mb-2  `}>Your Balance </p>
        <p className={`text-3xl font-mono  `} > {bal == 0 ? "Enter Wallet Address" : bal} {getTokenSymbol()} 🤑</p>
      </div>
      
      <p className={`text-xl  text-black  mt-6 mx-4 mb-5 `}>Other Tokens {"   "}&darr;</p>
      

        <div className={`grid grid-cols-4 auto-rows-max w-full gap-y-4 `}>
      {erc20 ? erc20.map((token : any , idx: number) =><div key={idx}  className={`w-[80%] mx-auto `}>
        <p className={`text-xs truncate text-black/50`}>{token?.symbol.toUpperCase()}</p>
        <p className={`text-base truncate text-black/70`}>{(parseInt(token?.balance)/ 10**token.decimals).toFixed(2).toString()}</p>
      </div>) : <div className={`text-xl font-mono`}>No Balance in Erc20 🥲</div>}
        </div>

     { erc20 && <div className={`flex items-center justify-center gap-4  mx-auto mt-7 `}>
      <img className={`w-7 cursor-pointer `} onClick={()=>setCPage(prev =>  prev > 1 ? prev- 1 : prev )} alt="img" src="https://img.icons8.com/external-dashed-line-kawalan-studio/100/external-minus-shape-dashed-line-kawalan-studio.png" />
      <div className={`text-xl font-mono`} >{cpage}</div>
      <img className={`w-7 cursor-pointer  `} onClick={()=>setCPage(prev =>  prev + 1 )}  alt="img" src="https://img.icons8.com/pulsar-line/48/000000/plus-math.png"/>
      
      </div>}
    </div>
  );
};

export default Dashboard;
// <div className={``} ></div>
{/* <div>
0x15acfD6c3C7Ca01Fc3a11C6cB3155377984305f2 -------
0xd8dA6BF26964aF9D7eEd9e03E53415D37aA96045
</div> */}