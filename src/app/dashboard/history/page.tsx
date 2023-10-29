"use client"
import { useStore } from '@/app/store/Store'
import React, { useEffect } from 'react'
import { ToastContainer, toast , Flip } from "react-toastify";
const History = () => {
  const ethAddr = useStore(state => state.ethAddr)
  const chain = useStore(state => state.chain)

  useEffect(()=>{
    if(!ethAddr && !chain){
     toast.error("Please add your Wallet Address and Chain")
    }
  },[chain, ethAddr])
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