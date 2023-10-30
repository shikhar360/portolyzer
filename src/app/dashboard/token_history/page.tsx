/* eslint-disable @next/next/no-img-element */
"use client"
import { useStore } from '@/app/store/Store';
import React, { useEffect, useState } from 'react'
import { ToastContainer, toast , Flip } from "react-toastify";
import DateComponent from '../../_component/DateUnix';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const THistory = () => {
  const eth =  useStore(state => state.ethAddr)
  const chain =  useStore(state => state.chain)
  const fromUnix =  useStore(state => state.fromUnix)
  const toUnix =  useStore(state => state.toUnix)
  const [priceHistory, setPriceHistory] = useState<any[]>();
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
  // useEffect(() => {
    
    async function tokenHistory() {
      try {

        if(!fromUnix || !toUnix ||!chain){
          toast.error("Please add your Wallet Address and Chain")
          return
        }
        console.log({fromUnix , toUnix , chain });

        const options = {
          method: "GET",
          headers: {
            accept: "application/json",
            "x-api-key": process.env.NEXT_PUBLIC_CHAINBASE as string,
          },
        };
        // fetch('https://api.chainbase.online/v1/token/price/history?chain_id=137&contract_address=0x0000000000000000000000000000000000001010&from_timestamp=1698537600&end_timestamp=1698624000', options)
        // fetch('https://api.chainbase.online/v1/token/price/history?chain_id=137&contract_address=0x0000000000000000000000000000000000001010&from_timestamp=1698537600&end_timestamp=1698624000', options)


        const res = await fetch(
          // `https://api.chainbase.online/v1/token/price/history?chain_id=137&contract_address=0x0000000000000000000000000000000000001010&from_timestamp=1698537600&end_timestamp=1698624000`,
          `https://api.chainbase.online/v1/token/price/history?chain_id=${chain}&contract_address=${getTokenContract()}&from_timestamp=${fromUnix}&end_timestamp=${toUnix}`,
          options
        );
        const { data } = await res.json();
        if(data){
          let graphdata:any = []

          data.map((val : any) => {
            graphdata.push({
              name : val.symbol,
              uv : val.price,
              pv : val.updated_at
            })
          })
          setPriceHistory(graphdata)
        }
        console.log(data);
      } catch (err) {
        console.log(err);
        return ""
      }
    }
    
  // }, [chain, fromUnix, toUnix]);

  return (
    <div className={`pt-24 flex flex-col items-center justify-center `}>
      <DateComponent/>
      <button onClick={()=>tokenHistory()}> Get History of Native Token</button>
      <ResponsiveContainer width="100%" height="100%">
        <AreaChart
          width={500}
          height={400}
          data={priceHistory}
          margin={{
            top: 10,
            right: 30,
            left: 0,
            bottom: 0,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="pv" />
          <YAxis />
          <Tooltip />
          <Area type="monotone" dataKey="uv" stroke="#8884d8" fill="#8884d8" />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  )
} 

export default THistory