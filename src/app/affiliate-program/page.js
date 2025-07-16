"use client"
import Image from "next/image";
import Link from "next/link";
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

function AffiliateLandingPage() {

    const router = useRouter();

  return (
    <div className='relative flex flex-col items-center justify-center w-full bg-white overflow-x-hidden pt-20'>
      <Navbar />

      <h1 style={{ fontSize: "15px "}} className="text-center uppercase font-semibold text-black mt-32">thyme affiliates</h1>
      <Image height={600} src="/landing-image.png" objectFit="cover" width={600} alt="image" className="h-96 w-4/5 my-10" />

      <h1 style={{ fontSize: "15px "}} className="text-center uppercase font-semibold text-black mt-14">Let's grow together</h1>

      <p style={{ fontSize: "12px" }} className="banner-text text-sm font-medium text-black text-left sm:text-center mt-8 px-4 w-80 sm:w-[30rem]">At Thyme we are always looking for like-minded content creators who share our passion for making sustainable fashion more accesible to everyone. If you are active on instagram,YouTube, or TikTok and you'd like to partner with Thyme, then this might be for you!</p>

      <p style={{ fontSize: "12px" }} className="banner-text text-sm font-medium text-black text-left sm:text-center mt-6 px-4 w-80 sm:w-[30rem]">Become a part, earn attractive perks promoting your favourite products from our website. Be one of the first to learn about new drops</p>

      <button className="px-10 py-4 text-center flex justify-center items-center w-60 h-10 border-2 border-black self-center text-sm hover:scale-105 duration-200 ease-in-out transition-all text-black hover:text-white hover:bg-black mt-6">Apply Now</button>
      <span style={{ fontSize: "10px "}} className="text-center text-gray-700 text-sm font-medium w-full mt-2 ">Already a Thyme affiliate</span>
      <Link href="/create-account" style={{ fontSize: "10px "}} className="text-center text-sm font-medium w-full text-black underline relative bottom-1">Log in</Link>


      <h1 style={{ fontSize: "15px "}} className="text-center uppercase font-semibold text-black mt-14">How it works</h1>
      <p style={{ fontSize: "12px" }} className="banner-text text-sm font-medium text-black text-left sm:text-center px-4 mt-2">1. Create your account </p>
      <p style={{ fontSize: "12px" }} className="banner-text text-sm font-medium text-black text-left sm:text-center px-4 mt-2">2. Share your affiliate Code with your fiends, family and followers </p>
      <p style={{ fontSize: "12px" }} className="banner-text text-sm font-medium text-black text-left sm:text-center px-4 mt-2">3. Earn a commission with every purchase made </p>

      <h1 style={{ fontSize: "15px "}} className="text-center uppercase font-semibold text-black mt-32">perks</h1>

      <p style={{ fontSize: "12px" }} className="banner-text text-sm font-medium text-black mt-6 sm:text-center px-4 w-80 sm:w-[30rem]">Perks include a market-leading flat fee rate commission for you, a 5% discount for your first purchase, and unnlimited 5% discounts to anyone who uses your affiliate code to make a purchase from our website</p>

      <Footer />
    
    </div>
  )
}

export default AffiliateLandingPage;
