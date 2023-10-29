/* eslint-disable @next/next/no-img-element */
"use client"
import { useStore } from '@/app/store/Store';
import React, { useEffect, useState } from 'react'

const Nft = () => {
  const eth =  useStore(state => state.ethAddr)
  const chain =  useStore(state => state.chain)
  const [nftsData, setNftsData] = useState<any>("");
  useEffect(() => {
    async function getNftData() {
      try {
        if (!eth || !chain) return;

        const options = {
          method: "GET",
          headers: {
            accept: "application/json",
            "x-api-key": process.env.NEXT_PUBLIC_CHAINBASE as string,
          },
        };

        const res = await fetch(
          `https://api.chainbase.online/v1/account/nfts?chain_id=${
            chain ? chain : null
          }&address=${eth ? eth : null}&limit=100`,
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
  }, [chain, eth]);

  return (
    <div className={`max-h-screen overflow-scroll `}>

    <div className={`grid grid-cols-4 auto-rows-max w-full h-max`}>{nftsData && nftsData?.map((nft : any , idx : number)=><div key={idx}>
    <img src={nft.image_uri } alt="nft" onLoad={(e)=>{
      e.currentTarget.naturalWidth == 0 ? e.currentTarget.style.display = "hidden" : null
    }} className={`  w-[10rem] h-[20rem]`}  /> 
  </div>)}</div>
    </div>
  )
}

export default Nft