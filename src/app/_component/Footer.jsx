import React from "react";
import Image from "next/image";

export default function Footer() {
    return(
<footer className="relative">
<div className="absolute inset-0 -z-10 bg-tertiary-color"></div>

  <div class="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 lg:px-8 relative z-10">
    <div class="sm:flex sm:items-center sm:justify-between ">
      <div class="flex justify-center items-center sm:justify-start">
      <Image src="/images/analytics.png" alt="logo" width={35} height={35}/>
      <h1 className="text-xl text-white font-semibold ml-3">Portolyzer</h1>
      </div>

      <p class="mt-4 text-center text-sm text-white lg:mt-0 lg:text-right">
        Copyright &copy; 2022. All rights reserved.
      </p>
    </div>
  </div>
</footer>
    )
}

