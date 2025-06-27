"use client"
import Image from "next/image";
import Navbar from "@/components/navbar";
import Banner from "@/components/banner"
import Footer from "@/components/footer"
import { FaBalanceScale, FaGavel, FaHandshake } from 'react-icons/fa'
import { useState } from "react";
import { useEffect } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function Home() {

  return (
    <div className="relative flex flex-col items-center justify-center w-full bg-white">

      <Navbar textColor={'black'} />

      <Banner  />
   
        {/* Scrolling Row */}
        <div className="relative bg-gradient-to-b from-blue-900 to-black w-full py-20 overflow-hidden h-screen sm:h-[40rem]">
      
          <div className="scroll-container h-screen sm:h-[40rem]">
        <div className="scroll-content  h-screen sm:h-[40rem]">
          {/* Cards (Manually Inserted) */}
          <div className="scroll-item h-[26rem] sm:h-[30rem] bg-[url('https://babahadurgarh.com/bahadurgarh-image-1.jpeg')]"></div>
          <div className="scroll-item h-[26rem] sm:h-[30rem] bg-[url('https://babahadurgarh.com/bahadurgarh-image-2.jpeg')]"></div>
          <div className="scroll-item h-[26rem] sm:h-[30rem] bg-[url('https://babahadurgarh.com/bahadurgarh-image-3.jpeg')]"></div>
          <div className="scroll-item h-[26rem] sm:h-[30rem] bg-[url('https://babahadurgarh.com/bahadurgarh-image-complex.jpeg')]"></div>
        </div>

        {/* Duplicate Content to Ensure Seamless Loop */}
        <div className="scroll-content">
        <div className="scroll-item h-[26rem] sm:h-[30rem] bg-[url('https://babahadurgarh.com/bahadurgarh-image-1.jpeg')]"></div>
          <div className="scroll-item h-[26rem] sm:h-[30rem] bg-[url('https://babahadurgarh.com/bahadurgarh-image-2.jpeg')]"></div>
          <div className="scroll-item h-[26rem] sm:h-[30rem] bg-[url('https://babahadurgarh.com/bahadurgarh-image-3.jpeg')]"></div>
          <div className="scroll-item h-[26rem] sm:h-[30rem] bg-[url('https://babahadurgarh.com/bahadurgarh-image-complex.jpeg')]"></div>
        </div>
          </div>
        </div>

      <Footer />
      
    </div>
  );
}
