"use client"
import Image from "next/image";
import Navbar from "@/components/navbar";
import Banner from "@/components/banner"
import Footer from "@/components/footer"
import Cards from "@/components/cards";
import { FaBalanceScale, FaGavel, FaHandshake } from 'react-icons/fa'
import { useState } from "react";
import { useEffect } from "react";
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import Link from "next/link";
import { ReactTyped } from "react-typed";
import { useRouter } from "next/navigation";

export default function Home() {

  return (
    <div className="relative flex flex-col items-center justify-center w-full bg-white overflow-x-hidden">

      <Navbar textColor={'black'} />

      <Banner  />
   
        <div className="flex flex-col items-center justify-center text-center w-full pt-2 pb-4">
          <p style={{ fontSize: "12px" }} className="text-black font-medium mt-10 overused-grotesk-medium">
            Designed in Seoul, South Korea, made for India
          </p>
          <p style={{ fontSize: "12px", marginTop: "0px"  }} className="text-black font-medium overused-grotesk-medium">Modern minimalist silhouettes --- crafted for those who value simplicity, elegance, and <br /> <p style={{ marginTop: "0px" }}>concious living</p></p>
      
          <button className="bg-white text-xs text-black py-2 px-8 hover:scale-105 hover:shadow-md shadow-sm duration-200 ease-in-out transition-all hover:bg-black hover:text-white border-black border-2 font-medium mt-4 mb-8">Shop</button>

        </div>

        <div className=" flex flex-row justify-center items-center w-full flex-wrap mt-2">
          <Image className="w-88 sm:w-1/2 h-80 sm:h-[40rem]" src={"/love-letter.png"} width={600} height={600} objectFit="cover" />
          <Image className="w-88 sm:w-1/2 h-80 sm:h-[40rem]" src={"/landing-2.webp"} width={600} height={600} objectFit="cover" />
          <Image className="w-88 sm:w-1/2 h-80 sm:h-[40rem]" src={"/flower.jpg"} width={600} height={600} objectFit="cover" />
          <Image className="w-88 sm:w-1/2 h-80 sm:h-[40rem]" src={"/landing-1.jpeg"} width={600} height={600} objectFit="cover" />

        </div>

        <div className="flex flex-col items-center justify-center text-center w-full py-4 mt-20 text-black">
          <h1 className="text-center uppercase font-medium text-base sm:text-xl">new arrivals</h1>
          <p className="text-gray-600 text-xs sm:text-sm font-normal text-center flex justify-evenly w-96"><FaChevronLeft size={24} /> shop from the latest drops, handpicked weekly <FaChevronRight size={24} /></p>
          <Cards />
        </div>

        <div className="flex flex-row items-center justify-between flex-wrap text-center w-full py-4 mt-20 text-black">
          <div className="h-96 w-full sm:w-1/2 flex flex-col justify-between items-start p-4 bg-[#284123] text-white">
            <div className="flex flex-row items-center space-x-2 justify-start w-full flex-wrap mt-2">
              <div className="w-8 h-8 rounded-full bg-[#DCE2C8]"></div>
              <div className="w-8 h-8 rounded-full bg-[#DCE2C8]"></div>
              <div className="w-8 h-8 rounded-full bg-[#DCE2C8]"></div>
              <div className="w-8 h-8 rounded-full bg-[#DCE2C8]"></div>
              <div className="w-8 h-8 rounded-full bg-[#DCE2C8]"></div>
            </div>
            <div className="text-left text-sm font-normal">
              <p style={{ fontSize: "8px" }} className="">Maria L.</p>
              <p style={{ fontSize: "10px" }} className=" ">July 2025</p>
              <p className="text-xs">Best organic product ever!</p>
              <p className="text-xs text-[#DCE2C8]">Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt voluptatibus quam unde. Est dicta voluptatum aut facilis sequi culpa perferendis quidem? Dignissimos qui repellendus illum at sapiente. Numquam, sit dolorem.</p>

            </div>
            <button className="bg-[#284123] text-white py-2 text-xs px-4 border border-white">write a review</button>
          </div>


          <div className="h-96 w-full sm:w-1/2 flex flex-col justify-center items-start p-10 bg-[#DCE2C8] text-black">
           
            <div className="text-left text-sm font-normal">
              <p className="text-4xl text-[#284123] w-16">Radcially <span className="underline pb-4">Clean™</span></p>
              <p className="text-xs text-[#284123] w-20 mb-6">from source to skin</p>
              <p className="text-xs text-[#284123]">Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt voluptatibus quam unde. Est dicta voluptatum aut facilis sequi culpa perferendis quidem? Dignissimos qui repellendus illum at sapiente. Numquam, sit dolorem.</p>

            </div>
            </div>
        </div>


        <div className="flex flex-col items-center justify-center text-center w-full py-4 mt-20 text-black">
          <h1 className="text-center uppercase font-medium text-lg sm:text-xl">bestsellers</h1>
          <p className="text-gray-600 text-xs sm:text-sm font-normal text-center flex justify-evenly w-96"><FaChevronLeft size={24} /> shop from this week's bestsellers, curated for you <FaChevronRight size={24} /></p>
          <Cards />
        </div>

        <div className="flex flex-col items-center justify-center text-center w-full py-4 mt-20 text-black">
          <p style={{ fontSize: "12px" }} className="text-black font-normal w-80 text-center">Subscribe to our mailing list for exclusive offers and enjoy <span className="font-bold">10%</span> off your first order</p>
          <input className="w-80 sm:w-2/5 h-10 border-2 mt-4 border-gray-500 bg-gray-100 text-black text-center" placeholder="email" type="email" />
          <button className="px-10 py-4 text-center flex justify-center items-center w-60 h-10 border-2 border-black self-center text-sm hover:scale-105 duration-200 ease-in-out transition-all hover:shadow-md shadow-sm hover:text-white hover:bg-black mt-6">Sign Up</button>
        </div>



      <Footer />
      
    </div>
  );
}
