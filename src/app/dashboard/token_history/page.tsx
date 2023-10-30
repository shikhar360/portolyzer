/* eslint-disable @next/next/no-img-element */
"use client"
import { useStore } from '@/app/store/Store';
import React, { useEffect, useState } from 'react'
import { ToastContainer, toast , Flip } from "react-toastify";
import DateComponent from '../../_component/DateUnix';

const THistory = () => {
  const eth =  useStore(state => state.ethAddr)
  const chain =  useStore(state => state.chain)
  const fromUnix =  useStore(state => state.fromUnix)
  const toUnix =  useStore(state => state.toUnix)
  const [priceHistory, setPriceHistory] = useState<any>("");
  const [cpage, setCPage] = useState<number >(1);


  function getTokenContract() {
    if(!chain)return
    if (chain === "1") return "0x0000000000000000000000000000000000000000";
    if (chain === "137") return "0x0000000000000000000000000000000000001010";
    if (chain === "56") return "0x0000000000000000000000000000000000000000";
    if (chain === "43114") return "0x0000000000000000000000000000000000000000";
    if (chain === "42161") return "0x0000000000000000000000000000000000000000";
    if (chain === "10") return "0x0000000000000000000000000000000000000000";
    if (chain === "8453") return "0x0000000000000000000000000000000000000000";
    if (chain === "324") return "-";
  }
  useEffect(() => {

   const contractAddr = getTokenContract()
    async function getNftData() {
      try {
        if(!fromUnix || !toUnix ||!chain){
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
        // fetch('https://api.chainbase.online/v1/token/price/history?chain_id=137&contract_address=0x0000000000000000000000000000000000001010&from_timestamp=1698537600&end_timestamp=1698624000', options)

        const res = await fetch(
          `https://api.chainbase.online/v1/token/price/history?chain_id=${chain}&contract_address=${contractAddr}&from_timestamp=${fromUnix}&end_timestamp=${toUnix}`,
          options
        );
        const { data } = await res.json();
        if(data){

          setPriceHistory(data)
        }
        console.log(data);
      } catch (err) {
        console.log(err);
        return ""
      }
    }
    getNftData();
  }, [chain, fromUnix, toUnix]);

  return (
    <div className={`pt-24`}>
      <DateComponent/>

    </div>
  )
}

export default THistory