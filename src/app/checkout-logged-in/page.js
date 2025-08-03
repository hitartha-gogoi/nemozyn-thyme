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

function CheckoutLoggedInPage() {

    const router = useRouter();
    const onCheckout = async(e) => {
        e.preventDefault();
        router.push('/checkout-payment');
    }


  return (
    <div className='relative flex flex-col items-center justify-center w-full bg-white overflow-x-hidden pt-20'>
      <Navbar />

      <h1 style={{ fontSize: "15px "}} className="text-center uppercase font-semibold text-black mt-32 overused-grotesk-semibold">checkout</h1>

      <h1 style={{ fontSize: "13px "}} className="text-center uppercase font-semibold text-black mt-12 overused-grotesk-semibold">Deliver to:</h1>

      <h1 style={{ fontSize: "13px "}} className="text-center uppercase font-medium text-black mt-6 overused-grotesk-semibold">first name, last name</h1>
        <h1 style={{ fontSize: "13px "}} className="text-center font-medium text-black uppercase overused-grotesk-semibold">60b first street, city name</h1>
        <p style={{ fontSize: "13px "}} className="text-center font-medium text-black uppercase overused-grotesk-semibold">state, country</p>

        <h1 style={{ fontSize: "13px "}} className="text-center font-medium text-black mt-4 uppercase overused-grotesk-semibold">email</h1>
        <p style={{ fontSize: "13px "}} className="text-center font-medium text-black uppercase overused-grotesk-semibold">phone number</p>

        <button className="px-4 py-4 text-center flex justify-center items-center w-60 h-8 border border-black self-center text-black text-base font-medium mt-6 mb-12 overused-grotesk-medium ">Change Address </button>

        <h1 style={{ fontSize: "15px "}} className="text-center uppercase font-semibold text-black mt-8 overused-grotesk-semibold">order summary</h1>

        <h1 style={{ fontSize: "15px "}} className="text-center font-semibold text-black mt-8 overused-grotesk-semibold">Total: $3299 [Inclusive of all taxes]</h1>
        <p style={{ fontSize: "15px "}} className="text-center font-semibold text-black overused-grotesk-semibold">Free Shipping</p>

        <p style={{ fontSize: "15px "}} className="text-center font-semibold text-black mt-8 overused-grotesk-semibold">
            <input type="checkbox" className="mx-4 scale-125" />
            <span className="mx-4">Express Shipping</span>
            <span className="mx-4">+$99</span>
        </p>

        <div className="flex flex-col items-center justify-center w-full mt-8">
            <p style={{ fontSize: "15px "}} className="text-center font-semibold text-black overused-grotesk-semibold">Total: $3299</p>
            <input className="w-80 sm:w-2/5 h-10 border-2 mt-4 border-gray-500 bg-gray-100 text-black text-center" placeholder="Add Promo" type="text" />
            <button type="submit" className="px-10 py-4 text-center flex justify-center items-center w-60 h-10 border border-black self-center text-black text-base font-medium mt-6 overused-grotesk-medium ">Pay Now </button>
            <p style={{ fontSize: "15px "}} className="text-center font-medium text-black mt-6 overused-grotesk-semibold">Enjoy complimentary shipping and 7 day free returns</p>
        </div>


      <Footer />
    </div>
  )
}

export default CheckoutLoggedInPage;
