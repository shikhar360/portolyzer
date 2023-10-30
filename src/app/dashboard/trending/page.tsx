/* eslint-disable @next/next/no-img-element */
"use client"
import ImageFallback from '@/app/_component/ImageFallback';
import { useStore } from '@/app/store/Store';
import React, { useEffect, useState } from 'react'

import { ToastContainer, toast , Flip } from "react-toastify";
 
const Trending = () => {
  const eth =  useStore(state => state.ethAddr)
  const chain =  useStore(state => state.chain)
  const [trendingData , setTrendingData] = useState<any>('')
  const [cpage, setCPage] = useState<number >(1);
  useEffect(()=>{
    if( !chain){
     toast.error("Please add your Wallet Address and Chain")
     return
    }

      async function getTrendingNfts() {
        try {
          if (!chain) return;
  
          const options = {
            method: "GET",
            headers: {
              accept: "application/json",
              "x-api-key": process.env.NEXT_PUBLIC_CHAINBASE as string,
            },
          };
  
          //fetch('https://api.chainbase.online/v1/nft/collection/trending?chain_id=147&range=7d&exchange_name=all&sort=volume_desc&page=1&limit=20', options)


          const res = await fetch(
            `https://api.chainbase.online/v1/nft/collection/trending?chain_id=${
              chain 
            }&range=7d&exchange_name=all&sort=volume_desc&page=${cpage}&limit=30`,
            options
          );
          const { data } = await res.json();
          if(data){
  
            setTrendingData(data)
          }
          if(!data){
            toast.error("Cant find data here !")
          }
          console.log(data);
        } catch (err) {
          console.log(err);
          return ""
        }
      }
      getTrendingNfts();

    
  },[chain, cpage, eth])
  return (
    <div>
      {trendingData && trendingData?.map((trend : any , idx : number)=><div key={idx} className={`mx-auto w-[80%] min-h-[18rem] border border-black/10 my-5 py-3 rounded-xl flex-1 flex flex-col items-start justify-start px-2`}>
    <ImageFallback src={trend.collection?.banner_image_url.replace("ipfs://", "https://ipfs.io/ipfs/") }  className={`  w-full `}  /> 
      <p className={`text-center px-2 w-full text-sm text-black/60 mt-3`}>{trend.contract_address}</p>
    <div className={`text-xs flex items-center w-full justify-between mt-1  `} >
      <p className={`text-start px-2 w-full text-sm font-mono   `}> BY : {trend.collection?.name} ({trend.collection?.symbol})</p>
      <p className={`text-black/60 `}>{trend.exchange_name}</p>
      </div>
      <p  className={`py-1 px-2  text-sm font-semibold  `}> Floor Price Changes : {trend.floor_price} &rarr; {trend?.floor_price_change}</p>
      <p className={`text-start px-2 w-full text-xs text-black/40 `}>Volume : {trend.volume}</p>

  </div>)}

  { trendingData && <div className={`flex items-center justify-center gap-4  mx-auto mt-7 mb-[30%] `}>
      <img className={`w-7 cursor-pointer `} onClick={()=>setCPage(prev =>  prev > 1 ? prev- 1 : prev )} alt="img" src="https://img.icons8.com/external-dashed-line-kawalan-studio/100/external-minus-shape-dashed-line-kawalan-studio.png" />
      <div className={`text-xl font-mono`} >{cpage}</div>
      <img className={`w-7 cursor-pointer  `} onClick={()=>setCPage(prev =>  prev + 1 )}  alt="img" src="https://img.icons8.com/pulsar-line/48/000000/plus-math.png"/>
      
      </div>}
      <ToastContainer
    position="bottom-right"
    autoClose={3000}
    hideProgressBar={true}
    transition={Flip}
    />
    </div>
  )
}
// 0xd8dA6BF26964aF9D7eEd9e03E53415D37aA96045
export default Trending