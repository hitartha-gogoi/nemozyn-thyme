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


function AccountPage() {

    const router = useRouter();

  return (
    <div className='relative flex flex-col items-center justify-center w-full bg-white overflow-x-hidden pt-20 pb-40'>
      <Navbar />

      <h1 style={{ fontSize: "12px "}} className="text-center uppercase font-semibold text-black mt-32">account</h1>

      <h1 style={{ fontSize: "12px "}} className="text-center uppercase font-semibold text-black mt-6">sarasu roy</h1>
      <h1 style={{ fontSize: "12px "}} className="text-center uppercase font-semibold text-black ">sarasuroy@gmail.com</h1>


     {/* CART SECTION */}
      <div className="flex flex-col justify-start items-start border-y border-gray-500 w-full sm:w-4/5 mt-10 p-4">
       <div className="flex flex-row justify-between w-full">
         <h1 style={{ fontSize: "12px "}} className="text-center uppercase font-semibold text-gray-600">in your cart</h1>
         <input type="radio" disabled />
       </div>

       <div className="flex flex-row items-start space-x-2 my-4 overflow-x-auto">
         <Image height={300} src="/tshirt-1.jpg" width={300} className="h-28 w-20" alt="image" />
         <Image height={300} src="/tshirt-2.jpg" width={300} className="h-28 w-20" alt="image" />
       </div>
      </div>
      

      {/* ORDER HISTORY */}
      <div className="flex flex-col justify-start items-start border-b border-gray-500 w-full sm:w-4/5  p-4">
       <div className="flex flex-row justify-between w-full">
         <h1 style={{ fontSize: "12px "}} className="text-center uppercase font-semibold text-gray-600">order history</h1>
         <input type="radio" disabled />
       </div>

       {/* ORDER CONTAINER */}
       <div className="flex flex-col items-start space-y-2 my-4 w-full">

        {/* ORDER ITEM */}
        <div className="flex flex-row justify-between items-center space-x-8 w-full py-2">
         <span className="font-normal text-black text-center text-xs">Order #3366</span>
         <span className="font-normal text-black text-center text-xs">Delivered on 14/07/25</span>
         <span className="font-normal text-black text-center text-xs uppercase">6669 inr</span>
         <button className="px-4 font-medium py-4 text-center flex justify-center items-center w-32 text-black h-8 border-2 border-black self-center text-xs hover:scale-105 duration-200 ease-in-out transition-all  hover:text-white hover:bg-black ">View Details</button>
        </div>

        <div className="flex flex-row justify-between items-center space-x-8 w-full py-2">
         <span className="font-normal text-black text-center text-xs">Order #3366</span>
         <span className="font-normal text-black text-center text-xs">Delivered on 14/07/25</span>
         <span className="font-normal text-black text-center text-xs uppercase">6669 inr</span>
         <button className="px-4 font-medium py-4 text-center flex justify-center items-center w-32 text-black h-8 border-2 border-black self-center text-xs hover:scale-105 duration-200 ease-in-out transition-all  hover:text-white hover:bg-black ">View Details</button>
        </div>
         
       </div>

       <button className="px-4 font-medium py-4 text-center flex justify-center items-center w-32 text-black h-8 border-2 border-black self-center text-xs hover:scale-105 duration-200 ease-in-out transition-all  hover:text-white hover:bg-black mt-6">View Details</button>
      </div>

      {/* MANAGE PROFILE */}
      <div className="flex flex-col justify-start items-start border-b border-gray-500 w-full sm:w-4/5  p-4">
       <div className="flex flex-row justify-between w-full">
         <h1 style={{ fontSize: "12px "}} className="text-center uppercase font-semibold text-gray-600">manage profile</h1>
         <input type="radio" disabled />
       </div>

       <div className="flex flex-col justify-start items-start my-4">
        <p className="text-xs font-medium text-gray-800">Profile Settings</p>
        <p className="text-xs font-medium text-gray-800">Contact Details</p>
        <p className="text-xs font-medium text-gray-800">Saved Addresses</p>
       </div>
      </div>

      {/* MANAGE PROFILE */}
      <div className="flex flex-col justify-start items-start border-b border-gray-500 w-full sm:w-4/5  p-4">
       <div className="flex flex-row justify-between w-full">
         <h1 style={{ fontSize: "12px "}} className="text-center uppercase font-semibold text-gray-600">thyme affiliates</h1>
         <FaChevronRight size={24} className="text-gray-500" />
       </div>

      </div>


    
    </div>
  )
}

export default AccountPage;
