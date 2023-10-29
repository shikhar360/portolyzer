"use client"
import { useStore } from '@/app/store/Store'
import React, { useEffect, useState } from 'react'
import { ToastContainer, toast , Flip } from "react-toastify";
const History = () => {
  const eth = useStore(state => state.ethAddr)
  const chain = useStore(state => state.chain)

  const [tx , setTx] = useState<any>('')

  useEffect(()=>{
    if(!eth || !chain){
     toast.error("Please add your Wallet Address and Chain")
    }

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
          }
          console.log(data);
        } catch (err) {
          console.log(err);
          return ""
        }
      }
      getNftData();

    
  },[chain, eth])

  return (
    <div className={` pt-32`}>
    <div>History</div>
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