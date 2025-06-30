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
   
        <div className="flex flex-col items-center justify-center text-center w-full py-4">
          <p className="text-black font-normal ">
            <ReactTyped typeSpeed={10} backSpeed={10} startDelay={1000} loop  backDelay={5000}  strings={[`Designed in Seoul, South Korea, made for India` ]}/>
          </p>
          <p className="text-black font-normal banner-text">Modern minimalist silhouettes --- crafted for those who value simplicity, elegance, and concious living</p>
          <button className="bg-white text-black py-2 px-8 hover:scale-105 hover:shadow-md shadow-sm duration-200 ease-in-out transition-all hover:bg-black hover:text-white border-black border-2 font-medium banner-text mt-4">Shop</button>

        </div>

        <div className=" flex flex-row justify-center items-center w-full flex-wrap">
          <Image className="w-44 sm:w-1/2 h-44 sm:h-96" src={"/love-letter.png"} width={600} height={600} objectFit="cover" />
          <Image className="w-44 sm:w-1/2 h-44 sm:h-96" src={"/landing-2.webp"} width={600} height={600} objectFit="cover" />
          <Image className="w-44 sm:w-1/2 h-44 sm:h-96" src={"/flower.jpg"} width={600} height={600} objectFit="cover" />
          <Image className="w-44 sm:w-1/2 h-44 sm:h-96" src={"/landing-1.jpeg"} width={600} height={600} objectFit="cover" />

        </div>

        <div className="flex flex-col items-center justify-center text-center w-full py-4 mt-20 text-black">
          <h1 className="text-center uppercase font-medium text-xl">new arrivals</h1>
          <p className="text-gray-600 text-sm font-normal text-center flex justify-between w-96"><FaChevronLeft size={24} /> shop from the latest drops, handpicked weekly <FaChevronRight size={24} /></p>
          <Cards />
        </div>

        <div className="flex flex-row items-center justify-between flex-wrap text-center w-full py-4 mt-20 text-black">
          <div className="h-96 w-full sm:w-1/2 flex flex-col justify-between items-start p-4 bg-[#284123] text-white">
            <h1 className=" uppercase font-medium text-xl">our values</h1>
            <div className="text-left text-sm font-normal">
              <p className="text-xs">Maria L.</p>
              <p className="text-xs">July 2025</p>
              <p className="text-2xl">Best organic product ever!</p>
              <p className="text-base">Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt voluptatibus quam unde. Est dicta voluptatum aut facilis sequi culpa perferendis quidem? Dignissimos qui repellendus illum at sapiente. Numquam, sit dolorem.</p>

            </div>
            <button className="bg-[#284123] text-white py-2 px-4 border border-white hover:bg-green-900 transition duration-200">write a review</button>
          </div>


          <div className="h-96 w-full sm:w-1/2 flex flex-col justify-center items-start p-10 bg-gray-100 text-black">
           
            <div className="text-left text-sm font-normal">
              <p className="text-4xl w-16">Radcially <span className="underline pb-4">Clean™</span></p>
              <p className="text-xs w-20 mb-6">from source to skin</p>
              <p className="text-base">Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt voluptatibus quam unde. Est dicta voluptatum aut facilis sequi culpa perferendis quidem? Dignissimos qui repellendus illum at sapiente. Numquam, sit dolorem.</p>

            </div>
            </div>
        </div>


        <div className="flex flex-col items-center justify-center text-center w-full py-4 mt-20 text-black">
          <h1 className="text-center uppercase font-medium text-xl">bestsellers</h1>
          <p className="text-gray-600 text-sm font-normal text-center flex justify-between w-96"><FaChevronLeft size={24} /> shop from this week's bestsellers, curated for you <FaChevronRight size={24} /></p>
          <Cards />
        </div>

        <div className="flex flex-col items-center justify-center text-center w-full py-4 mt-20 text-black">
          <p className="text-black font-normal w-80 text-center">Subscribe to our mailing list for exclusive offers and enjoy <span className="font-bold">10%</span> off your first order</p>
          <input className="w-80 sm:w-2/5 h-10 border-2 mt-4 border-gray-500 bg-gray-100 text-black text-center" placeholder="email" type="email" />
          <button className="px-10 py-4 text-center flex justify-center items-center w-60 h-10 border-2 border-black self-center text-sm hover:scale-105 duration-200 ease-in-out transition-all hover:shadow-md shadow-sm hover:text-white hover:bg-black mt-6">Sign Up</button>
        </div>



      <Footer />
      
    </div>
  );
}
