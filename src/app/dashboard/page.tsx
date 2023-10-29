/* eslint-disable @next/next/no-img-element */
"use client";
import React, { useEffect, useMemo, useState } from "react";
import useDebounce from "./useDebounce";
import { useSearchParams } from "next/navigation";
import Link from "next/link";
import { useStore } from "../store/Store";

const Dashboard = () => {
  const searchParams = useSearchParams();
  const addr = searchParams.get("a");
  const network = searchParams.get("c");
  const setChain = useStore(state => state.setChain)
  const setEthAddr = useStore(state => state.setEthAddr)
  const [inputVal, setInputVal] = useState<string>("");
  const [bal, setBal] = useState<number | string>(0);

  console.log({ addr, network });

  const [selectedChain, setSelectedChain] = useState<string>("");
  const [nftsData, setNftsData] = useState<any>("");

  console.log(selectedChain);

  useEffect(() => {
    if (addr) {
      setInputVal(addr);
    }
    if (network) {
      setSelectedChain(network);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    async function getWalletData() {
      try {
        if (!inputVal || !selectedChain) return;
        // console.log(inputVal);
        setChain(selectedChain)
        setEthAddr(inputVal)

        const options = {
          method: "GET",
          headers: {
            accept: "application/json",
            "x-api-key": process.env.NEXT_PUBLIC_CHAINBASE as string,
          },
        };

        const res = await fetch(
          `https://api.chainbase.online/v1/account/balance?chain_id=${
            network ? network : selectedChain
          }&address=${addr ? addr : inputVal}`,
          options
        );
        const { data } = await res.json();
        console.log(parseInt(data) / 10 ** 18);
        setBal((parseInt(data) / 10 ** 18).toFixed(2));
      } catch (err) {
        console.log(err);
      }
    }

    getWalletData();
  }, [inputVal, selectedChain, network, addr, setChain, setEthAddr]);

  useEffect(() => {
    async function getNftData() {
      try {
        const options = {
          method: "GET",
          headers: {
            accept: "application/json",
            "x-api-key": process.env.NEXT_PUBLIC_CHAINBASE as string,
          },
        };

        const res = await fetch(
          `https://api.chainbase.online/v1/account/nfts?chain_id=${
            network ? network : selectedChain
          }&address=${addr ? addr : inputVal}&limit=100`,
          options
        );
        const { data } = await res.json();
        if(data){

          setNftsData(data)
        }
        console.log(data);
      } catch (err) {
        console.log(err);
        return ""
      }
    }
    getNftData();
  }, [addr, inputVal, network, selectedChain]);

  // "0x176961411f7e0c150"
  function getTokenSymbol() {
    if (selectedChain === "1") return "ETH";
    if (selectedChain === "137") return "MATIC";
    if (selectedChain === "56") return "BSC";
    if (selectedChain === "43114") return "AVAX";
    if (selectedChain === "42161") return "ARB";
    if (selectedChain === "10") return "OPT";
    if (selectedChain === "8453") return "BASE";
    if (selectedChain === "324") return "ZKS";
  }

   function checkImage(url : string) {
    // try {
  
    //   return new Promise((resolve, reject) => {
    //     let imageData = new Image();
    //     imageData.src = url;
    //     imageData.onload = function () {
    //         resolve(true);
    //         return true
    //     };
    //     imageData.onerror = function () {
    //         return reject(false)
    //         return false
    //     };
    //     // not really sure why you have this here, but ok
    //   });
    // } catch (err) {
    //   const error = {
    //     code: 'Fetching image',
    //     message: 'Something went wrong.',
    //     rawError: err,
    //   }
    //   return false
    //   // const isError = true
    //   // return isError
    //   console.log(error)
    // }
  }

  console.log(checkImage("https://img-hester.xyz/image.png"));
  return (
    <div
      className={`flex flex-col items-center justify-start bg-white pt-28 text-black w-full min-h-screen `}
    >
      <div
        className={`min-w-[70%] flex items-center justify-center border-b border-black  py-2 px-4`}
      >
        <input
          value={addr ? addr : inputVal}
          type="text"
          onChange={(e) => setInputVal(e.target.value)}
          className={`w-full py-2 px-4 text-sm bg-transparent rounded-md placeholder:text-black/40 focus:outline-none  `}
          placeholder="0xabcdEnterYourWalletAddress"
        />

        <div className=" w-[30%] flex items-center justify-center">
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

          {/* <Link
            href={`/dashboard?a=${inputVal}&c=${selectedChain}`}
            className=" bg-lime-400 py-1.5 px-3 rounded-xl hover:bg-lime-300"
          >
            Search
          </Link> */}
        </div>
      </div>
      <div>
        {bal && bal} {selectedChain && getTokenSymbol()}
      </div>

      <div className={`grid grid-cols-4 auto-rows-max w-full h-max`}>{nftsData && nftsData?.map((nft : any , idx : number)=><div key={idx}>
        <img src={nft.image_uri } alt="nft" onLoad={(e)=>{
         e.currentTarget.naturalWidth == 0 ? e.currentTarget.style.display = "hidden" : null
        }} className={`  w-[10rem] h-[20rem]`}  /> 
      </div>)}</div>
      <div onClick={()=>checkImage("https://img-hester.xyz/image.png")}>0x15acfD6c3C7Ca01Fc3a11C6cB3155377984305f2</div>
    </div>
  );
};

export default Dashboard;
// <div className={``} ></div>
