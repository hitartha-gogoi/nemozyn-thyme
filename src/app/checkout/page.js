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

function CheckoutPage() {

    const router = useRouter();
    const onCheckout = async(e) => {
        e.preventDefault();
        router.push('/checkout-payment');
    }


  return (
    <div className='relative flex flex-col items-center justify-center w-full bg-white overflow-x-hidden pt-20'>
      <Navbar />

      <h1 style={{ fontSize: "12px "}} className="text-center uppercase font-semibold text-black mt-32 overused-grotesk-semibold">checkout</h1>


      <h1 style={{ fontSize: "12px "}} className="text-center uppercase font-semibold text-black mt-20 overused-grotesk-semibold">contact</h1>
      <form onSubmit={onCheckout} className="flex flex-col items-center justify-center flex-wrap text-center w-full mt-2">
        <input style={{ fontSize: "12px" }} type="text" placeholder="Name" className="px-6 border scale-95 text-black  border-black p-2 w-80 sm:w-[28rem] mb-2" />
        <input style={{ fontSize: "12px" }} type="email" placeholder="Email" className="px-6 border scale-95 text-black  border-black p-2 w-80 sm:w-[28rem] mb-2" />

        <h1 style={{ fontSize: "12px "}} className="text-center uppercase font-semibold text-black mt-12 overused-grotesk-semibold">delivery</h1>
        <input style={{ fontSize: "12px" }} type="text" placeholder="Country/Region" className="px-6 border scale-95 text-black  border-black p-2 mt-2 w-80 sm:w-[28rem] mb-2" />
        {/* create input style={{ fontSize: "12px" }} for first name and last name in one line with the same styling but adjusting the width in one line */}
        <div className="flex flex-row items-center justify-center w-80 sm:w-[28rem]">
          <input style={{ fontSize: "12px" }} type="text" placeholder="First Name" className="px-6 border text-black  border-black p-2 w-[150px]  sm:w-[13rem] mb-2 mr-[2px] sm:mr-0 sm:scale-95" />
          <input style={{ fontSize: "12px" }} type="text" placeholder="Last Name" className="px-6 border text-black  border-black p-2 w-[150px] sm:w-[14.3rem] mb-2 ml-[2px] sm:ml-0 sm:scale-95" />
        </div>
        <input style={{ fontSize: "12px" }} type="text" placeholder="Address" className="px-6 border scale-95 text-black  border-black p-2 w-80 sm:w-[28rem] mb-2" />
        <input style={{ fontSize: "12px" }} type="text" placeholder="Apartment,Suite, etc. (Optional)" className="px-6 border scale-95 text-black  border-black p-2 w-80 sm:w-[28rem] mb-2" />
        <div className="flex flex-row items-center justify-center w-80 sm:w-[28rem]">
          <input style={{ fontSize: "12px" }} type="text" placeholder="Zipcode" className="px-6 border text-black  border-black p-2 w-[150px] sm:w-[13rem] mb-2 mr-[2px] sm:mr-0 sm:scale-95" />
          <input style={{ fontSize: "12px" }} type="text" placeholder="City" className="px-6 border text-black  border-black p-2 w-[150px]  sm:w-[14.3rem] mb-2 ml-[2px] sm:ml-0 sm:scale-95" />
        </div>
        <input style={{ fontSize: "12px" }} type="text" placeholder="State" className="px-6 border scale-95 text-black  border-black p-2 w-80 sm:w-[28rem] mb-2" />

        <button className="px-10 py-4 text-center flex justify-center items-center w-40 h-10 border border-black self-center text-black  font-medium hover:scale-105 duration-200 ease-in-out transition-all hover:shadow-md shadow-sm hover:text-white hover:bg-black mt-2 overused-grotesk-medium text-xs">Save</button>

        <h1 style={{ fontSize: "12px "}} className="text-center uppercase font-semibold text-black mt-24 overused-grotesk-semibold">order summary</h1>

        <h1 style={{ fontSize: "12px "}} className="text-center font-semibold text-black mt-12 overused-grotesk-semibold">Total: $3299 [Inclusive of all taxes]</h1>
        <p style={{ fontSize: "12px "}} className="text-center font-semibold text-black overused-grotesk-semibold">Free Shipping</p>

        <p style={{ fontSize: "12px "}} className="text-center font-semibold text-black mt-12 ">
            <input style={{ fontSize: "12px" }} type="checkbox" className="mx-4 scale-125" />
            <span className="mx-4 overused-grotesk-semibold">Express Shipping</span>
            <span className="mx-4 overused-grotesk-semibold">+$99</span>
        </p>

        <div className="flex flex-col items-center justify-center w-full mt-12">
            <p style={{ fontSize: "12px "}} className="text-center font-semibold text-black overused-grotesk-semibold">Total: $3299</p>
            <input style={{ fontSize: "12px" }} className="w-80 sm:w-2/5 h-10 border mt-4 border-gray-500 bg-gray-100 text-black text-center text-xs" placeholder="Add Promo" type="text" />
            <button style={{ fontSize: "12px" }} type="submit" className="px-10 py-4 text-center flex justify-center items-center w-60 h-10 border border-black self-center text-black text-base font-medium hover:scale-105 duration-200 ease-in-out transition-all hover:shadow-md shadow-sm hover:text-white hover:bg-black mt-6 overused-grotesk-semibold">Pay Now </button>
            <p style={{ fontSize: "12px "}} className="text-center font-semibold text-black mt-2 overused-grotesk-semibold mb-24">Enjoy complimentary shipping and 7 day free returns</p>
        </div>
      
   
      </form>


      <Footer />
    </div>
  )
}

export default CheckoutPage;
