/* eslint-disable @next/next/no-img-element */
"use client"
import { useStore } from '@/app/store/Store';
import React, { useEffect, useState } from 'react'
import ImageFallback from '@/app/_component/ImageFallback';
import { ToastContainer, toast , Flip } from "react-toastify";
const Nft = () => {
  const eth =  useStore(state => state.ethAddr)
  const chain =  useStore(state => state.chain)
  const [nftsData, setNftsData] = useState<any>("");
  const [cpage, setCPage] = useState<number >(1);
  useEffect(() => {
    async function getNftData() {
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
   //0xd8dA6BF26964aF9D7eEd9e03E53415D37aA96045
        const res = await fetch(
          `https://api.chainbase.online/v1/account/nfts?chain_id=${
            chain
          }&address=${eth}&limit=40&page=${cpage}`,
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
  }, [chain, eth , cpage]);

  return (
    <div className={`min-h-screen overflow-hidden `}>

    <div className={`grid gap-y-4 grid-cols-4 auto-rows-max w-full h-max`}>
      {nftsData && nftsData?.map((nft : any , idx : number)=><div key={idx} className={`mx-auto w-[80%] min-h-[18rem]  flex-1 flex flex-col items-start justify-start`}>
    <ImageFallback src={nft.image_uri.replace("ipfs://", "https://ipfs.io/ipfs/") }  className={`  w-full `}  /> 
    <div className={`text-xs flex items-center w-full justify-between mt-4 mb-3 px-2`} >
      <p  className={`py-1 px-2 rounded-full bg-black/5   `}>{nft.erc_type}</p>
      <p className={`text-black/60 `}>{nft.symbol}</p>
      </div>
      <p className={`text-start px-2 w-full `}>{nft.name.toUpperCase()}</p>

  </div>)}
  </div>


  { nftsData && <div className={`flex items-center justify-center gap-4  mx-auto mt-7 mb-[30%] `}>
      <img className={`w-7 cursor-pointer `} onClick={()=>setCPage(prev =>  prev > 1 ? prev- 1 : prev )} alt="img" src="https://img.icons8.com/external-dashed-line-kawalan-studio/100/external-minus-shape-dashed-line-kawalan-studio.png" />
      <div className={`text-xl font-mono`} >{cpage}</div>
      <img className={`w-7 cursor-pointer  `} onClick={()=>setCPage(prev =>  prev + 1 )}  alt="img" src="https://img.icons8.com/pulsar-line/48/000000/plus-math.png"/>
      
      </div>}
    
    </div>
  )
}

export default Nft