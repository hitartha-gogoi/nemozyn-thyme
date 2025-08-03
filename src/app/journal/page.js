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

function JournalPage() {

    const router = useRouter();

  return (
    <div className='relative flex flex-col items-center justify-center w-full bg-white overflow-x-hidden py-20'>
      <Navbar />

      <h1 style={{ fontSize: "15px "}} className="text-center uppercase  overused-grotesk-semibold font-semibold text-black mt-32">Journal</h1>
      
            <div className="flex flex-col justify-center items-center w-full">
              <Image alt="image" height={600} objectFit="cover" width={600} className="h-96 w-4/5 mt-24" src="/landing-image.png"  />
              <h1 style={{ fontSize: "15px "}} className="text-center uppercase  overused-grotesk-semibold font-semibold text-black mt-10">The problems of today: fashion industry</h1>
              <p style={{ fontSize: "11px" }} className="text-center text-black mb-20  overused-grotesk-semibold font-semibold mt-2">July 17, 2025</p>

              <p style={{ fontSize: "12px" }} className="banner-text text-sm font-medium text-black px-4 w-4/5 mb-20 text-center  overused-grotesk-semibold">[Lorem, ipsum dolor sit amet consectetur adipisicing elit. Distinctio perferendis, fugit molestiae consequuntur qui, error enderit eveniet culpa cupiditate similique.]</p>

              <p style={{ fontSize: "12px" }} className="banner-text text-sm font-medium text-black text-left px-4 w-4/5 sm:w-3/5  overused-grotesk-semibold">At Thyme we are always looking for like-minded content creators who share our passion for making sustainable fashion more accesible to everyone.     Lorem, ipsum dolor sit amet consectetur adipisicing elit. Distinctio perferendis, fugit molestiae consequuntur qui, error harum repellat natus suscipit aliquid mollitia temporibus deleniti optio praesentium reprehenderit eveniet culpa cupiditate similique.</p>
              <p style={{ fontSize: "12px" }} className="banner-text text-sm font-medium text-black text-left px-4 w-4/5 sm:w-3/5 mt-6  overused-grotesk-semibold">At Thyme we are always looking for like-minded content creators who share our passion for making sustainable fashion more accesible to everyone.     Lorem, ipsum dolor sit amet consectetur adipisicing elit. Distinctio perferendis, fugit molestiae consequuntur qui, error harum repellat natus suscipit aliquid mollitia temporibus deleniti optio praesentium reprehenderit eveniet culpa cupiditate similique.</p>
              <p style={{ fontSize: "12px" }} className="banner-text text-sm font-medium text-black text-left px-4 w-4/5 sm:w-3/5 mt-6  overused-grotesk-semibold">At Thyme we are always looking for like-minded content creators who share our passion for making sustainable fashion more accesible to everyone.     Lorem, ipsum dolor sit amet consectetur adipisicing elit. Distinctio perferendis, fugit molestiae consequuntur qui, error harum repellat natus suscipit aliquid mollitia temporibus deleniti optio praesentium reprehenderit eveniet culpa cupiditate similique.</p>
              
            </div>
    
    </div>
  )
}

export default JournalPage;
