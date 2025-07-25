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
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';

function ProductPage() {
  return (
    <div className='relative flex flex-col items-center justify-center w-full bg-white overflow-x-hidden pt-20'>
      <Navbar />

      <div className="flex flex-row items-center justify-center flex-wrap text-center w-full pt-2 pb-4">
        
        <div className="flex flex-col items-center justify-center">
            <Image alt="product Image" src={`/tshirt-1.jpg`} height={600} width={600} className="h-4/5 sm:h-[36rem] w-80 sm:w-96 mt-20" objectFit="contain" />
            <div className="flex flex-row items-center space-x-2 justify-center w-full mt-4">
                <Image src={`/tshirt-1.jpg`} alt="product image" className="h-24 w-16" height={600} width={600} objectFit="cover" />
                <Image src={`/tshirt-2.jpg`} alt="product image 2" className="h-24 w-16" height={600} width={600} objectFit="cover" />
                <Image src={`/tshirt-3.jpg`} alt="product image 3" className="h-24 w-16" height={600} width={600} objectFit="cover" />
                <Image src={`/tshirt-4.jpg`} alt="product image 4" className="h-24 w-16" height={600} width={600} objectFit="cover" />
                <Image src={`/tshirt-5.jpg`} alt="product image 5" className="h-24 w-16" height={600} width={600} objectFit="cover" />

            </div>
        </div>

        <div className="flex flex-col items-center justify-center text-center w-full sm:w-1/2 px-2 sm:px-20 mt-12  sm:mt-32">
            <h1 className="text-black font-medium text-xs sm:text-xs uppercase overused-grotesk-semibold">seoul serenity</h1>
            

            <p className="text-black overused-grotesk-semibold text-xs mt-12">Organic Cotton</p>
            <p className="text-gray-900 text-xs sm:text-xs overused-grotesk-medium mt-2">Drop Shoulder, dropped half tshirt in  100% GOTS, OEKO-TEX and Fair Trade certified jersey cotton. Open spread collar with pocket. Inside out stich detailing and fitted with Brazillian ebony  woods button</p>

            <p style={{ fontSize: "8px "}} className="text-right text-sm font-medium w-full text-black underline  mt-6">Size Guide</p>
            <button style={{ fontSize: "12px "}} className="px-10 overused-grotesk-medium text-gray-900 py-4 text-center flex justify-center items-center w-full h-10 border border-black self-center text-sm hover:text-white hover:bg-black">Select Size</button>
            
            <button style={{ fontSize: "12px "}} className="mt-2 overused-grotesk-medium px-10 text-gray-900 py-4 text-center flex justify-center items-center w-60 h-10 border border-black self-center hover:text-white hover:bg-black">Add to Cart</button>

            <p style={{ fontSize: "12px "}} className="text-black overused-grotesk-semibold text-lg mt-12">[Limited Release : 60 pieces | 18 in stock]</p>

            <div className="flex justify-between items-center w-full py-2 border-y border-black text-black ">
                <span style={{ fontSize: "8px "}} className="font-medium text-xs uppercase overused-grotesk-semibold">Product details</span>
                <input type="radio" className=" appearance-none border-black border w-2 h-2 rounded-full" value={"details"} />
            </div>

            <div className="flex justify-between items-center w-full py-2 border-b border-black text-black ">
                <span style={{ fontSize: "8px "}} className="font-medium text-xs uppercase overused-grotesk-semibold">fabric care</span>
                <input type="radio" className=" appearance-none border-black border w-2 h-2 rounded-full" value={"fabric"} />
            </div>

            <div className="flex justify-between items-center w-full py-2 border-b border-black text-black ">
                <span style={{ fontSize: "8px "}} className="font-medium  uppercase overused-grotesk-semibold">cost and transparency</span>
                <input type="radio" className=" appearance-none border-black border w-2 h-2 rounded-full" value={"cost"} />
            </div>

            <div className="flex justify-between items-center w-full py-2 border-b border-black text-black ">
                <span style={{ fontSize: "8px "}} className="font-medium uppercase overused-grotesk-semibold">Shipping & Returns</span>
                <input type="radio" className=" appearance-none border-black border w-2 h-2 rounded-full" value={"shipping"} />
            </div>

        </div>
      </div>

      <h1 style={{ fontSize: "15px "}} className="text-center uppercase overused-grotesk-semibold text-black mt-40">recommended pairing</h1>
      <div className="flex flex-row items-center space-x-2 justify-center w-full flex-wrap mt-2">
        <div className="w-8 h-8 rounded-full bg-gray-100"></div>
        <div className="w-8 h-8 rounded-full bg-gray-200"></div>
        <div className="w-8 h-8 rounded-full bg-gray-300"></div>
        <div className="w-8 h-8 rounded-full bg-gray-400"></div>
        <div className="w-8 h-8 rounded-full bg-gray-500"></div>
        <div className="w-8 h-8 rounded-full bg-gray-600"></div>
        <div className="w-8 h-8 rounded-full bg-gray-700"></div>
        <div className="w-8 h-8 rounded-full bg-gray-800"></div>
      </div>

      <div className="flex flex-col items-center justify-center text-center w-full py-4 mt-40 text-black">
        <h1 style={{ fontSize: "15px "}} className="text-center uppercase overused-grotesk-semibold ">recommended products to pair with</h1>
        <Cards />
      </div>

      {/* <div className="flex flex-row justify-evenly items-center flex-wrap border-y-2 border-gray-950 w-full py-4 mt-10 text-black">

        <div className="flex flex-col items-center justify-center text-center w-80 py-10">
           <FaGavel size={30} />
            <h1 className="font-bold text-2xl mt-4">0%</h1>
            <h1 className="text-lg font-medium uppercase">pesticides or toxins</h1>
            <p style={{ fontSize: "12px" }} className="text-gray-950 overused-grotesk-medium text-sm mt-4">Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt voluptatibus quam unde.</p>
        </div>

        <div className="flex flex-col items-center justify-center text-center w-80 py-10">
           <FaGavel size={30} />
            <h1 className="font-bold text-2xl mt-4">51%</h1>
            <h1 className="text-lg font-medium uppercase overused-grotesk-semibold">less co2 emissions</h1>
            <p style={{ fontSize: "12px" }} className="text-gray-950 overused-grotesk-medium text-sm mt-4">Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt voluptatibus quam unde. Est dicta voluptatum aut facilis sequi culpa perferendis quidem? </p>
        </div>

        <div className="flex flex-col items-center justify-center text-center w-80 py-10">
           <FaGavel size={30} />
            <h1 className="font-bold text-2xl mt-4 overused-grotesk-semibold">91%</h1>
            <h1 className="text-lg font-medium uppercase">less water used</h1>
            <p style={{ fontSize: "12px" }} className="text-gray-950 text-sm mt-4 overused-grotesk-medium">Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt voluptatibus quam unde. </p>
        </div>

        <div className="flex flex-col items-center justify-center text-center w-80 py-10">
           <FaGavel size={30} />
            <h1 className="font-bold text-2xl mt-4">100%</h1>
            <h1 className="text-lg font-medium uppercase">Circular</h1>
            <p style={{ fontSize: "12px" }} className="text-gray-950 text-sm mt-4">Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt voluptatibus quam unde. Est dicta voluptatum aut facilis sequi. </p>
        </div>

      </div>

      */}


      <div className="flex flex-col items-center justify-center text-center w-full py-4 mt-20 text-black">
        <h1 style={{ fontSize: "15px "}} className="text-center uppercase font-medium ">new arrivals</h1>
        <p style={{ fontSize: "12px "}} className="text-gray-600 text-xs sm:text-sm font-normal text-center flex justify-evenly w-96 mb-4"><FaChevronLeft className="text-black" size={24} /> shop from the latest drops, handpicked weekly <FaChevronRight className="text-black" size={24} /></p>
        <Cards />
      </div>

      <Footer />
    </div>
  )
}

export default ProductPage
