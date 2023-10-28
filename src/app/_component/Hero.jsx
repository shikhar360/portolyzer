import React from "react";
import Image from 'next/image'
import Link from "next/link";

export default function Hero() {
  return (
        <section className="py-40 px-4 mx-auto h-full text-center lg:py-16 lg:px-12 mt-20 w-screen overflow-x-hidden magicpattern ">
        <h1 className=" mt-10 mb-12 text-5xl font-extrabold tracking-tight leading-none text-gray-800 md:text-5xl lg:text-6xl ">Your Crypto Portfolio at a glance</h1>
        <p className="mb-8 text-lg font-normal text-gray-700 lg:text-xl sm:px-16 xl:px-48">Get your portfolio analytics in just one click<br/>...find your top performing assets, trending cryptos, NFT details at one stop shop. </p>
        <div>
<div className="btn-container">
  <button className="learn-more">
    <span className="circle" aria-hidden="true">
      <span className="icon arrow"></span>
    </span>
    <span className="button-text">Get Started</span>
  </button>
</div>

        </div>
        <div className="px-4 mx-auto mt-20 text-center md:max-w-screen-md lg:max-w-screen-lg lg:px-36">
             <Image src={"https://flowbite.s3.amazonaws.com/blocks/marketing-ui/hero/dashboard-mockup-dark.svg"} alt="dashboard Image" width={2500} height={2500}/>
        </div> 
    </section>
  );
}