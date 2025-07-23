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

function OrderPage() {

    const router = useRouter();
    const onCheckout = async(e) => {
        e.preventDefault();
    }


  return (
    <div className='relative flex flex-col items-center justify-center w-full bg-white overflow-x-hidden pt-20'>
      <Navbar />

      <h1 style={{ fontSize: "15px "}} className="text-center uppercase font-semibold text-black mt-40">order details</h1>

      <h1 style={{ fontSize: "14px "}} className="text-center uppercase font-semibold text-black mt-8">order #3336</h1>
      <h1 style={{ fontSize: "12px "}} className="text-center uppercase font-semibold text-black leading-tight">21.10.26</h1>

      <h1 style={{ fontSize: "14px "}} className="text-center uppercase font-semibold text-black mt-6">Delivery address</h1>

        <div className="flex flex-col mt-6">
        <h1 style={{ fontSize: "12px "}} className="text-center uppercase font-medium text-black">first name, last name</h1>
        <h1 style={{ fontSize: "12px "}} className="text-center font-medium text-black uppercase"> street address, state</h1>
        <p style={{ fontSize: "12px "}} className="text-center font-medium text-black uppercase">zipcode</p>

        <p style={{ fontSize: "12px "}} className="text-center font-medium text-black uppercase my-4">contact no.</p>
        </div>


        <h1 style={{ fontSize: "14px "}} className="text-center uppercase font-semibold text-black mt-14">order status</h1>

        <div className="flex flex-col items-start justify-center mt-10 w-44 text-base">
            <div className="flex flex-row justify-start items-center space-x-4">
                <input className="text-black bg-black" type="radio" value={"received"} />
                <span className="text-gray-600 font-medium overused-grotesk-semibold uppercase">received [21.10.26]</span>
            </div>
            <div className="flex flex-row justify-start items-center space-x-4">
                <input type="radio" value={"received"} />
                <span className="text-gray-600 font-medium overused-grotesk-semibold uppercase">processed</span>
            </div>
            <div className="flex flex-row justify-start items-center space-x-4">
                <input type="radio" value={"received"} />
                <span className="text-gray-600 font-medium overused-grotesk-semibold uppercase">dispatched</span>
            </div>
            <div className="flex flex-row justify-start items-center space-x-4">
                <input type="radio" value={"received"} />
                <span className="text-gray-600 font-medium overused-grotesk-semibold uppercase">delivered</span>
            </div>

        </div>


        <h1 style={{ fontSize: "15px "}} className="text-center uppercase font-semibold text-black mt-16">order summary</h1>

        {/* PRODUCT LIST CONTAINER */}
                   <div className="flex flex-col items-center justify-between text-center w-full pt-2 pb-4 px-4 sm:px-28">
             
                     {/* LIST ITEM OF PRODUCT */}
                     <div className="flex flex-row items-center justify-between pt-10  border-t border-gray-300 w-full mt-10 ">
             
                         {/* LEFT SECTION OF PRODUCT */}
                         <div className="flex flex-row items-center justify-center space-x-2 sm:space-x-10">
                             <Image src={`/tshirt-1.jpg`} alt="product image" className="h-40 w-28" height={600} width={600} objectFit="cover" />
                             <div className="flex flex-col items-start h-40 justify-between">
                                 <div className="flex flex-col items-start ">
                                     <h1 className="text-black self-start font-medium text-xs sm:text-xs uppercase">seoul serenity</h1>
                                     <p className="text-black text-xs">Size: M</p>
                                 </div>
                                 <p className="text-xs text-black font-medium">Quantity: 2</p>
                             </div>
                         </div>
             
                         {/* MIDDLE PRICING SECTION OF PRODUCT */}
                         <div className="flex flex-col items-start justify-start h-40">
                             <p className="hidden sm:block text-black font-semibold text-xs">$2299</p>
                         </div>
             
                         {/* RIGHT SECTION OF PRODUCT */}
                         <div className="flex flex-col items-start justify-start h-40">
                            <button className="px-6 py-4 text-center flex justify-center items-center w-24 sm:w-28 h-8 border-2 border-black self-center text-black text-xs font-medium hover:scale-105 duration-200 ease-in-out transition-all hover:shadow-md shadow-sm hover:text-white hover:bg-black mt-2 ">Cancel</button>
                            <button className="px-6 py-4 text-center flex justify-center items-center w-24 sm:w-28 h-8 border-2 border-black self-center text-black text-xs font-medium hover:scale-105 duration-200 ease-in-out transition-all hover:shadow-md shadow-sm hover:text-white hover:bg-black mt-2 ">Return</button>
                         </div>
             
                     </div>
             
                     {/* LIST ITEM OF PRODUCT */}
                     <div className="flex flex-row items-center justify-between py-10  border-y border-gray-300 w-full mt-10">
             
                         {/* LEFT SECTION OF PRODUCT */}
                         <div className="flex flex-row items-center justify-center space-x-2 sm:space-x-10">
                             <Image src={`/tshirt-1.jpg`} alt="product image" className="h-40 w-28" height={600} width={600} objectFit="cover" />
                             <div className="flex flex-col items-start h-40 justify-between">
                                 <div className="flex flex-col items-start ">
                                     <h1 className="text-black font-medium text-xs sm:text-xs uppercase">seoul serenity</h1>
                                     <p className="text-black text-xs">Size: M</p>
                                 </div>
                                 <div className="flex flex-col items-start ">
                                    <p className="text-xs text-black font-medium  mt-2">Quantity: 1</p>
                                 </div>
                                 
                             </div>
                         </div>
             
                         {/* MIDDLE PRICING SECTION OF PRODUCT */}
                         <div className="flex flex-col items-start justify-start h-40">
                             <p className="hidden sm:block text-black font-semibold text-xs">$2299</p>
                         </div>
             
                         {/* RIGHT SECTION OF PRODUCT */}
                         <div className="flex flex-col items-start justify-start h-40">
                            <button className="px-6 py-4 text-center flex justify-center items-center w-24 sm:w-28 h-8 border-2 border-black self-center text-black text-xs font-medium hover:scale-105 duration-200 ease-in-out transition-all hover:shadow-md shadow-sm hover:text-white hover:bg-black mt-2 ">Cancel</button>
                            <button className="px-6 py-4 text-center flex justify-center items-center w-24 sm:w-28 h-8 border-2 border-black self-center text-black text-xs font-medium hover:scale-105 duration-200 ease-in-out transition-all hover:shadow-md shadow-sm hover:text-white hover:bg-black mt-2 ">Return</button>
                         </div>
                          
                     </div>
        
                   </div>


                   <h1 style={{ fontSize: "13px "}} className="text-center font-semibold text-black mt-12">Total: $3299 [Inclusive of all taxes]</h1>
                   <p style={{ fontSize: "13px "}} className="text-center font-semibold text-black ">Free Shipping</p>
 

                   <div className="flex flex-col items-start justify-start pb-2 mt-4">
                    <button className="px-6 py-4 text-center flex justify-center items-center w-40 h-8 border-2 border-black self-center text-black text-xs font-medium hover:scale-105 duration-200 ease-in-out transition-all hover:shadow-md shadow-sm hover:text-white hover:bg-black mt-2 ">Cancel Order</button>
                    <button className="px-6 py-4 text-center flex justify-center items-center w-40 h-8 border-2 border-black self-center text-black text-xs font-medium hover:scale-105 duration-200 ease-in-out transition-all hover:shadow-md shadow-sm hover:text-white hover:bg-black mt-2 ">Invoice</button>
                   </div>

                   <h1 style={{ fontSize: "12px "}} className="text-center font-medium text-black">All data is kept secured. Payment data is encrypted.</h1>


      <Footer />
    </div>
  )
}

export default OrderPage;
