
"use client";
import React, { useEffect, useState } from "react";
import useDebounce from "./useDebounce";
import { useSearchParams } from "next/navigation";
import Link from "next/link";
const Dashboard = () => {
  const searchParams = useSearchParams();
  const addr = searchParams.get("a");
  const network = searchParams.get("c");

  const [inputVal, setInputVal] = useState<string>("");

  console.log({addr , network});

  const [selectedChain, setSelectedChain] = useState<string>("");

  console.log(selectedChain);

  useEffect(()=>{
    if(addr ){
     setInputVal(addr)
    }
    if(network ){
     setSelectedChain(network)
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  },[])


  useEffect(() => {
    async function getWalletData() {
      if (!inputVal || !selectedChain  ) return;
      console.log(inputVal);
  
      const options = {
        method: "GET",
        headers: {
          accept: "application/json",
          "x-api-key": process.env.NEXT_PUBLIC_CHAINBASE as string,
        },
      };
  
      const res = await fetch(
        `https://api.chainbase.online/v1/account/balance?chain_id=${network ? network: selectedChain}&address=${addr ? addr : inputVal}`,
        options
      );
      const {data} = await res.json();
      console.log(parseInt(data)/ 10 **18);
  
    }
    getWalletData();
  }, [inputVal , selectedChain , network , addr]);

  // "0x176961411f7e0c150"

  return (
    <div
      className={`flex flex-col items-center justify-start bg-white pt-24 text-black w-full min-h-screen `}
    >
      <div className={`w-[70%] flex items-center justify-center border-b border-black rounded xl py-2 px-4`}>

      <input
        value={addr ? addr : inputVal}
        type="text"
        onChange={(e) => setInputVal(e.target.value)}
        className={`w-[80%] py-2 px-4 text-sm bg-transparent rounded-md placeholder:text-black/40 focus:outline-none  `}
        placeholder="0xabcdEnterYourWalletAddress"
        />

      <div className="w-[20%] flex items-center">
        <select
          value={network ? network : selectedChain}
          onChange={(e) => setSelectedChain(e.target.value)}
          className=" px-4 py-2  mx-1.5 rounded"
          >
          <option value="" disabled>
            Select Chain
          </option>
          <option value="1">Ethereum</option>
          <option value="137">Polygon</option>
          <option value="56">BSC</option>
          <option value="43114">Avalanche</option>
          <option value="42161">Arbitrum One</option>
          <option value="10">Optimism</option>
          <option value="8453">Base</option>
          <option value="324">zkSync</option>
        </select>

      <Link href={`/dashboard?a=${inputVal}&c=${selectedChain}`} className=" bg-lime-400 py-1.5 px-3 rounded-xl hover:bg-lime-300" >Search</Link>

        </div>
        
      </div>
      <div>0x15acfD6c3C7Ca01Fc3a11C6cB3155377984305f2</div>
    </div>
  );
};

export default Dashboard;
// <div className={``} ></div>
