"use client"
import Image from "next/image";
import Navbar from "@/components/navbar";
import Banner from "@/components/banner"
import Footer from "@/components/footer"
import Cards from "@/components/cards";
import { FaBalanceScale, FaGavel, FaHandshake } from 'react-icons/fa'
import { useState } from "react";
import { useEffect } from "react";
import { Leaf } from "react-icons/lu"; 
import { useRouter } from "next/navigation";
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';

function JournalLandingPage() {

    const router = useRouter();

  return (
    <div className='relative flex flex-col items-center justify-center w-full bg-white overflow-x-hidden py-20'>
      <Navbar />

      <h1 style={{ fontSize: "15px "}} className="text-center  overused-grotesk-semibold uppercase font-semibold text-black mt-32">Journal</h1>

      <div className="flex flex-col justify-center items-center w-full">
        <Image alt="image" height={600} width={600} className="h-96 w-4/5 mt-24" src="/landing-image.png"  />
        <h1 style={{ fontSize: "15px "}} className="text-center  overused-grotesk-semibold uppercase font-semibold text-black my-10">The problems of today: fashion industry</h1>
        <p style={{ fontSize: "12px" }} className="banner-text  overused-grotesk-semibold text-sm font-medium text-black text-left sm:text-center px-4 w-80 sm:w-[30rem]">At Thyme we are always looking for like-minded content creators who share our passion for making sustainable fashion more accesible to everyone.</p>
        <button className="px-4 font-medium py-4 text-center flex justify-center items-center w-32 text-black h-8 border-2 border-black self-center text-xs hover:scale-105 duration-200 ease-in-out transition-all  hover:text-white hover:bg-black uppercase mt-8  overused-grotesk-semibold">Read more</button>
      </div>

      <div className="flex flex-col justify-center items-center w-full">
        <Image alt="image" height={600} width={600} className="h-96 w-4/5 mt-24" src="/landing-image.png"  />
        <h1 style={{ fontSize: "15px "}} className="text-center uppercase font-semibold text-black my-10  overused-grotesk-semibold">The problems of today: fashion industry</h1>
        <p style={{ fontSize: "12px" }} className="banner-text  overused-grotesk-semibold text-sm font-medium text-black text-left sm:text-center px-4 w-80 sm:w-[30rem] ">At Thyme we are always looking for like-minded content creators who share our passion for making sustainable fashion more accesible to everyone.</p>
        <button className="px-4 font-medium py-4 text-center flex justify-center items-center w-32 text-black h-8 border-2 border-black self-center text-xs hover:scale-105 duration-200 ease-in-out transition-all  hover:text-white hover:bg-black uppercase mt-8  overused-grotesk-semibold">Read more</button>
      </div>
    
    </div>
  )
}

export default JournalLandingPage;
