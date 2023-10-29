"use client"
import { useStore } from '@/app/store/Store';
import React, { useEffect, useState } from 'react'

import { ToastContainer, toast , Flip } from "react-toastify";
 
const Trending = () => {
  const [tx , setTx] = useState<any>('')
  const eth =  useStore(state => state.ethAddr)
  const chain =  useStore(state => state.chain)

  useEffect(()=>{
    if(!eth && !chain){
     toast.error("Please add your Wallet Address and Chain")
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
              chain ? chain : null
            }&range=7d&exchange_name=all&sort=volume_desc&page=1&limit=20`,
            options
          );
          const { data } = await res.json();
          if(data){
  
            setTx(data)
          }
          console.log(data);
        } catch (err) {
          console.log(err);
          return ""
        }
      }
      getTrendingNfts();

    
  },[chain, eth])
  return (
    <div>
      <ToastContainer
    position="bottom-right"
    autoClose={3000}
    hideProgressBar={true}
    transition={Flip}
    />
    </div>
  )
}

export default Trending