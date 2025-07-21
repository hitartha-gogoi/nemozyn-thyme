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

function AffiliateDashboardPage() {

    const router = useRouter();

  return (
    <div className='relative flex flex-col items-center justify-center w-full bg-white overflow-x-hidden py-20'>
      <Navbar />

      <h1 style={{ fontSize: "15px "}} className="text-center uppercase font-semibold text-black mt-32">Thyme affiliates</h1>
      <p style={{ fontSize: "12px" }} className="banner-text text-sm font-medium text-black text-left sm:text-center px-4 mt-6">Stay in control of your partnership with Thyme. Track earnings and purchases made.</p>

      <h1 style={{ fontSize: "14px "}} className="text-center uppercase font-semibold text-black mt-12">sarasu roy</h1>
      <h1 style={{ fontSize: "14px "}} className="text-center uppercase font-semibold text-black ">affiliates id: thyme06</h1>
      <h1 style={{ fontSize: "14px "}} className="text-center uppercase font-semibold text-black ">affiliates code: sarasijthyme</h1>

      <div className="flex flex-col sm:flex-row justify-center items-center sm:space-x-4 flex-wrap text-black">
        <button className="px-10 py-4 text-center flex justify-center items-center w-60 h-10 border-2 border-black self-center text-sm hover:scale-105 duration-200 ease-in-out transition-all  hover:text-white hover:bg-black mt-6">Check Fee Structure</button>
        <button className="px-10 py-4 text-center flex justify-center items-center w-60 h-10 border-2 border-black self-center text-sm hover:scale-105 duration-200 ease-in-out transition-all  hover:text-white hover:bg-black mt-6">Affiliate Policies</button>
      </div>

      <h1 style={{ fontSize: "15px "}} className="text-center uppercase font-semibold text-black mt-16">earning summary</h1>

      <div className="flex flex-col sm:flex-row justify-center items-center flex-wrap sm:space-x-12 space-y-6 sm:space-y-0 space-x-0 pt-8">
        <div className="flex flex-col justify-center items-center px-4">
          <h1 style={{ fontSize: "14px "}} className="text-center uppercase font-semibold text-black ">Total earnings</h1>
          <h1 style={{ fontSize: "13px "}} className="text-center font-semibold text-black">[June 2024-July 2025]</h1>
          <h1 style={{ fontSize: "14px "}} className="text-center uppercase font-semibold text-black mt-4">66000</h1>
          <h1 style={{ fontSize: "14px "}} className="text-center uppercase font-semibold text-black">inr</h1> 
        </div>

        <div className="flex flex-col justify-center items-center px-4">
          <h1 style={{ fontSize: "14px "}} className="text-center uppercase font-semibold text-black ">earnings this month</h1>
          <h1 style={{ fontSize: "13px "}} className="text-center font-semibold text-black">[July 2025]</h1>
          <h1 style={{ fontSize: "14px "}} className="text-center uppercase font-semibold text-black mt-4">7000</h1>
          <h1 style={{ fontSize: "14px "}} className="text-center uppercase font-semibold text-black">inr</h1> 
        </div>

        <div className="flex flex-col justify-center items-center px-4">
          <h1 style={{ fontSize: "14px "}} className="text-center uppercase font-semibold text-black ">total orders</h1>
          <h1 style={{ fontSize: "13px "}} className="text-center font-semibold text-black">[June 2024-July 2025]</h1>
          <h1 style={{ fontSize: "14px "}} className="text-center uppercase font-semibold text-black mt-4">200</h1>
          <h1 style={{ fontSize: "14px "}} className="text-center uppercase font-semibold text-black mt-4"></h1>
        </div>

        <div className="flex flex-col justify-center items-center px-4">
          <h1 style={{ fontSize: "14px "}} className="text-center uppercase font-semibold text-black ">orders this month</h1>
          <h1 style={{ fontSize: "13px "}} className="text-center font-semibold text-black">[July 2025]</h1>
          <h1 style={{ fontSize: "14px "}} className="text-center uppercase font-semibold text-black mt-4">70</h1>
          <h1 style={{ fontSize: "14px "}} className="text-center uppercase font-semibold text-black mt-4"></h1>
        </div>
      </div>

      <button className="px-10 text-black py-4 text-center flex justify-center items-center w-80 sm:w-96 h-10 border-2 uppercase font-medium border-black self-center text-sm hover:scale-105 duration-200 ease-in-out transition-all  hover:text-white hover:bg-black mt-20">search</button>

      <div className="flex flex-row justify-start items-start pt-4 mt-8">
        <span style={{ fontSize: "12px" }} className="font-medium px-6 uppercase text-black">all orders</span>
        <span style={{ fontSize: "12px" }} className="font-medium px-6 uppercase text-gray-600 border-x-2 border-gray-600">pending</span>
        <span style={{ fontSize: "12px" }} className="font-medium px-6 uppercase border-r-2 border-gray-600 text-gray-600">cancelled</span>
        <span style={{ fontSize: "12px" }} className="font-medium px-6 uppercase text-gray-600 sm:block hidden">returned</span>

      </div>

      <div className="flex flex-col justify-evenly items-center space-y-2 mt-4 w-full">
        <div className="flex flex-row justify-evenly items-start  text-xs sm:text-sm sm:w-5/6 w-full border-t border-gray-500 py-4">
            <span className="font-medium text-center text-black w-10 px-2"></span>
            <span className="font-semibold  text-center text-black w-32 uppercase">product</span>
            <span className="font-semibold  text-center text-black w-24 mx-2 uppercase sm:block hidden">order id</span>
            <span className="font-semibold  text-center text-black w-20 mx-2 uppercase">quantity</span>
            <span className="font-semibold text-center text-black w-36 uppercase sm:block hidden">order date</span>
            <span className="font-semibold text-center sm:text-center text-black w-52 mx-2 uppercase ">affiliate commission fee</span>
            <span className="font-semibold  text-center text-black w-28 sm:w-40 uppercase sm:block hidden">product category</span>
        </div>

        <div className="flex flex-row justify-evenly items-center  text-xs sm:text-sm border-b border-gray-500 sm:w-5/6 w-full">
            <span className="font-medium text-center text-black w-10">1</span>
            <span className="font-medium text-center text-black w-32 uppercase py-4 break-words ml-2">seoul serenity</span>
            <span className="font-medium text-center text-black w-24  uppercase sm:block hidden">#3366</span>
            <span className="font-medium text-center text-black w-20 mx-2 uppercase">1</span>
            <span className="font-normal text-center text-black w-36 uppercase sm:block hidden">14.07.2025</span>
            <span className="font-medium text-center text-black w-52 mx-2 uppercase ">300 inr</span>
            <span className="font-medium text-center text-black w-40 uppercase sm:block hidden">nemozyn</span>
        </div>
        <div className="flex flex-row justify-evenly items-center  text-xs sm:text-sm border-b border-gray-500 sm:w-5/6 w-full">
            <span className="font-medium text-center text-black w-10">2</span>
            <span className="font-medium text-center text-black w-32 uppercase py-4 break-words ml-2">seoul serenity</span>
            <span className="font-medium text-center text-black w-24  uppercase sm:block hidden">#3366</span>
            <span className="font-medium text-center text-black w-20 mx-2 uppercase">1</span>
            <span className="font-normal text-center text-black w-36 uppercase sm:block hidden">14.07.2025</span>
            <span className="font-medium text-center text-black w-52 mx-2 uppercase ">300 inr</span>
            <span className="font-medium text-center text-black w-40 uppercase sm:block hidden">nemozyn</span>
        </div>
        <div className="flex flex-row justify-evenly items-center  text-xs sm:text-sm border-b border-gray-500 sm:w-5/6 w-full">
            <span className="font-medium text-center text-black w-10">3</span>
            <span className="font-medium text-center text-black w-32 uppercase py-4 break-words ml-2">seoul serenity</span>
            <span className="font-medium text-center text-black w-24  uppercase sm:block hidden">#3366</span>
            <span className="font-medium text-center text-black w-20 mx-2 uppercase">1</span>
            <span className="font-normal text-center text-black w-36 uppercase sm:block hidden">14.07.2025</span>
            <span className="font-medium text-center text-black w-52 mx-2 uppercase ">300 inr</span>
            <span className="font-medium text-center text-black w-40 uppercase sm:block hidden">nemozyn</span>
        </div>


      </div>

    
    
    </div>
  )
}

export default AffiliateDashboardPage;
