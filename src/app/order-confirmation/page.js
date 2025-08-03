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

function OrderConfirmationPage() {

    const router = useRouter();

  return (
    <div className='relative flex flex-col items-center justify-center w-full bg-white overflow-x-hidden pt-20'>
      <Navbar />

      <h1 style={{ fontSize: "15px "}} className="text-center uppercase overused-grotesk-semibold font-semibold text-black mt-32">order confirmation</h1>
      <h1 style={{ fontSize: "13px "}} className="text-center overused-grotesk-semibold font-semibold text-black mt-6 uppercase">thank you</h1>
      <p style={{ fontSize: "13px "}} className="text-center overused-grotesk-semibold font-semibold text-black uppercase">your order has been placed</p>
      <p style={{ fontSize: "13px "}} className="text-center overused-grotesk-semibold font-semibold text-black uppercase mt-4">order id: #3366</p>

      {/* PRODUCT LIST CONTAINER */}
           <div className="flex flex-col items-center justify-between text-center w-full pt-2 pb-4 px-4 sm:px-28">
     
             {/* LIST ITEM OF PRODUCT */}
             <div className="flex flex-row items-center justify-between pt-10  border-t border-gray-300 w-full mt-10 ">
     
                 {/* LEFT SECTION OF PRODUCT */}
                 <div className="flex flex-row items-center justify-center space-x-2 sm:space-x-10">
                     <Image src={`/tshirt-1.jpg`} alt="product image" className="h-40 w-28" height={600} width={600} objectFit="cover" />
                     <div className="flex flex-col items-start h-40 justify-between">
                         <div className="flex flex-col items-start ">
                             <h1 className="text-black self-start font-medium text-xs sm:text-xs uppercase overused-grotesk-semibold">seoul serenity</h1>
                             <p className="text-black text-xs overused-grotesk-medium">Size: M</p>
                         </div>
                         <p className="text-xs text-black font-medium overused-grotesk-medium">Quantity: 2</p>
                     </div>
                 </div>
     
                 {/* MIDDLE PRICING SECTION OF PRODUCT */}
                 <div className="flex flex-col items-start justify-start h-40">
                     <p className="hidden sm:block text-black font-semibold text-xs overused-grotesk-semibold">$2299</p>
                 </div>
     
                 {/* RIGHT SECTION OF PRODUCT */}
                 <div className="flex flex-col items-start justify-between h-40">
                 </div>
     
             </div>
     
             {/* LIST ITEM OF PRODUCT */}
             <div className="flex flex-row items-center justify-between py-10  border-y border-gray-300 w-full mt-10">
     
                 {/* LEFT SECTION OF PRODUCT */}
                 <div className="flex flex-row items-center justify-center space-x-2 sm:space-x-10">
                     <Image src={`/tshirt-1.jpg`} alt="product image" className="h-40 w-28" height={600} width={600} objectFit="cover" />
                     <div className="flex flex-col items-start h-40 justify-between">
                         <div className="flex flex-col items-start ">
                             <h1 className="text-black font-medium text-xs sm:text-xs uppercase overused-grotesk-semibold">seoul serenity</h1>
                             <p className="text-black text-xs overused-grotesk-medium">Size: M</p>
                         </div>
                         <div className="flex flex-col items-start ">
                            <p className="text-xs text-black font-medium  mt-2 overused-grotesk-medium ">Quantity: 1</p>
                         </div>
                         
                     </div>
                 </div>
     
                 {/* MIDDLE PRICING SECTION OF PRODUCT */}
                 <div className="flex flex-col items-start justify-start h-40">
                     <p className="hidden sm:block text-black font-semibold text-xs overused-grotesk-semibold">$2299</p>
                 </div>
     
                 {/* RIGHT SECTION OF PRODUCT */}
                 <div className="flex flex-col items-start justify-between h-40">
                 </div>
                  
             </div>

           </div>

           <h1 style={{ fontSize: "13px "}} className="text-center uppercase font-semibold text-black mt-6">shipping to</h1>

      <h1 style={{ fontSize: "13px "}} className="text-center uppercase font-medium text-black mt-10 overused-grotesk-semibold">first name, last name</h1>
        <h1 style={{ fontSize: "13px "}} className="text-center font-medium text-black uppercase overused-grotesk-semibold">60b first street, city name</h1>
        <p style={{ fontSize: "13px "}} className="text-center font-medium text-black uppercase overused-grotesk-semibold">state, country</p>

        <h1 style={{ fontSize: "13px "}} className="text-center font-medium text-black mt-6 uppercase overused-grotesk-semibold">email</h1>
        <p style={{ fontSize: "13px "}} className="text-center font-medium text-black uppercase mb-60 overused-grotesk-semibold">phone number</p>


    
    </div>
  )
}

export default OrderConfirmationPage;
