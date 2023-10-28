"use client";
import Image from 'next/image'
import React, { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";

export default function Navbar() {
  const [isScrolling, setIsScrolling] = useState(false);

  const handleScroll = () => {
    if (window.scrollY >= window.innerHeight) {
      setIsScrolling(true);
    } else {
      setIsScrolling(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <AnimatePresence>
        {isScrolling ? (
          <NavbarScroll isScrolling={isScrolling} />
        ) : (
          <NavbarFixed />
        )}
      </AnimatePresence>
    </>
  );
}

function NavbarFixed() {
  return (
    <nav className="fixed z-20 flex justify-between w-full px-8 py-4  ts-bg2 rounded-b-xl ">
      <div className="flex items-center gap-2 text-black">
        <Image src="/images/analytics.png" alt="logo" width={35} height={35}/>
        <h1 className="text-xl text-black font-semibold">Portolyzer</h1>
      </div>
      <ul className="flex items-center text-black">
        <li className="px-2 text-lg hover:text-tertiary-color transition ease-in-out delay-80">
          <Link href={"/"}>Home</Link>
        </li>
        <li className="px-2 text-lg hover:text-tertiary-color transition ease-in-out delay-80">
          <Link href={"/dashboard"}>Portfolio</Link>
        </li>
        <li className="px-2 text-lg hover:text-tertiary-color transition ease-in-out delay-80">
          <Link href={"/"}>Trends</Link>
        </li>
        <li className="px-2 text-lg hover:text-tertiary-color transition ease-in-out delay-80">
          <Link href={"/"}>About</Link>
        </li>
      </ul>
      <div className="px-4 py-3 ml-2 text-white bg-tertiary-color rounded-3xl text-md hover:bg-buttonhover-color items-center">
        <Link href={"/"}>Login</Link>
      </div>
    </nav>
  );
}

function NavbarScroll({ isScrolling }) {
  return (
    <motion.nav
      key={1}
      initial="initial"
      animate={isScrolling ? "animate" : "initial"}
      exit="exit"
      variants={NavAnimations}
      className="fixed z-20 flex justify-between px-4 py-2 rounded-full ts-bg left-1/2 top-5"
    >
      <ul className="flex items-center">
        <li className="px-2 text-black text-md">
          <Link href={"/"}>Home</Link>
        </li>
        <li className="px-2 text-black text-md">
          <Link href={"/dashboard"}>Portfolio</Link>
        </li>
        <li className="px-2 text-black text-md">
          <Link href={"/"}>Trends</Link>
        </li>
        <li className="px-2 text-black text-md">
          <Link href={"/"}>About</Link>
        </li>
        <li className="px-4 py-2 ml-2 text-white bg-tertiary-color rounded-full text-md ">
          <Link href={"/"}>Login</Link>
        </li>
      </ul>
    </motion.nav>
  );
}

const NavAnimations = {
  initial: {
    y: -50,
    x: "-50%",
    opacity: 0,
  },
  animate: {
    y: 0,
    x: "-50%",
    opacity: 1,
    transition: {
      type: "spring",
      damping: 10,
      stiffness: 100,
    },
  },
  exit: {
    y: -50,
    opacity: 0,
  },
};