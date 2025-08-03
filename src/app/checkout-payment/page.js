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

function CheckoutPaymentPage() {

    const router = useRouter();
    const payNow = async(e) => {
        e.preventDefault();
        router.push('/order-confirmation');
    }


  return (
    <div className='relative flex flex-col items-center justify-center w-full bg-white overflow-x-hidden pt-20'>
      <Navbar />

      <h1 style={{ fontSize: "13px "}} className="overused-grotesk-semibold text-center uppercase font-semibold text-black mt-32">shipping confirmation</h1>

      <h1 style={{ fontSize: "13px "}} className="overused-grotesk-semibold text-center uppercase font-medium text-black mt-20">first name, last name</h1>
        <h1 style={{ fontSize: "13px "}} className="overused-grotesk-semibold text-center font-medium text-black uppercase">60b first street, city name</h1>
        <p style={{ fontSize: "13px "}} className="overused-grotesk-semibold text-center font-medium text-black uppercase">state, country</p>

        <h1 style={{ fontSize: "13px "}} className="overused-grotesk-semibold text-center font-medium text-black mt-6 uppercase">email</h1>
        <p style={{ fontSize: "13px "}} className="overused-grotesk-semibold text-center font-medium text-black uppercase">phone number</p>



       <h1 style={{ fontSize: "13px "}} className="overused-grotesk-semibold text-center uppercase font-medium text-black mt-24">order total</h1>
        <h1 style={{ fontSize: "13px "}} className="overused-grotesk-semibold text-center font-medium text-black">Total: $3299 [Inclusive of all taxes]</h1>
        <p style={{ fontSize: "13px "}} className="overused-grotesk-semibold text-center font-medium text-black">Free Shipping</p>
        <button onClick={payNow} className="px-4 py-4 overused-grotesk-medium  text-center flex justify-center items-center w-40 h-8 border-2 border-black self-center text-black text-base font-medium hover:scale-105 duration-200 ease-in-out transition-all hover:shadow-md shadow-sm hover:text-white hover:bg-black mt-6 mb-60">Pay Now </button>

    </div>
  )
}

export default CheckoutPaymentPage;
