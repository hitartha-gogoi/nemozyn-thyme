"use client"; // Required in Next.js 15 for interactivity
import { useState, useRef, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { FaDiscord, FaYoutube, FaGithubSquare } from "react-icons/fa";
import { AiFillInstagram } from "react-icons/ai";
import { FaXTwitter, FaMedium } from "react-icons/fa6";
import { MdMoreVert } from "react-icons/md";
import { ReactTyped } from "react-typed";

function Navbar({ textColor }) {

  return (
    <div className="z-[9998] w-full h-40 flex flex-col justify-between absolute top-0 left-0 bg-white">

      {/* GREEN NAVBAR */}
      <div className="flex items-center justify-center h-6 px-4 bg-[#284123] w-full ">
        <span style={{ fontSize: "9px" }} className="text-center text-[#DCE2C8] font-light sm:text-sm overused-grotesk-medium">Nemozyn is now Thyme | Explore our new arrivals</span>
      </div>

      {/* THYME */}
      <div className="flex flex-col items-center justify-center w-full h-16 px-4 bg-white">
        <Link href="/"><Image src={'/Logo.png'} className="h-16 w-44" width={300} height={300} objectFit="contain" /></Link>
      </div>

      {/* GRAY NAVBAR */}
    <div className="relative flex items-center justify-between w-full h-20 my-0 bg-[#f4f4f4]">

    {/* SHOP ORGANIC, JOURNAL, SUSTAINABILITY REPORT */}
    <div className="font-normal text-sm flex h-full items-center justify-center text-black">
      <MdMoreVert size={24} className="mobile-only-icon ml-4" />
      <Link href="/shop-organic"><span className="sm:block mx-4 banner-text text-xs sm:text-sm hidden overused-grotesk-semibold">Shop Organic</span></Link>
      <Link href="/journal-landing"><span className="hidden sm:block mx-4 banner-text overused-grotesk-semibold">Philosophy</span></Link>
      <Link href="/affiliate-program"><span className="hidden sm:block  mx-4 banner-text overused-grotesk-semibold">Journal</span></Link>
    </div>

      {/* SUMMER/SPRING TEXT */}
      <div className={`absolute inset-0 flex flex-row justify-center items-center text-base uppercase text-${textColor}`}>
        <span style={{ fontWeight: "500" }} className="overused-grotesk-semibold text-black text-center uppercase text-xs sm:text-sm">summer/spring 25</span>
      </div>

      {/* CART SALE ACCOUNT */}
      <div className="font-normal text-sm flex h-full items-center justify-center text-black">
      <Link href="/cart"><span className="sm:block  mx-4 banner-text overused-grotesk-semibold sm:text-sm">Cart [0]</span></Link>
      <Link href="/"><span className="hidden sm:block mx-4 banner-text text overused-grotesk-semibold text-[#B62013] text-xs sm:text-sm">:Archived:</span></Link>
      <Link href="/account" className="hidden sm:block  mx-4 banner-text overused-grotesk-semibold">Account</Link>
    </div>

    </div>
      
    </div>
  );
}

export default Navbar;
