"use client"
import Image from "next/image";
import Navbar from "@/components/navbar";
import Banner from "@/components/banner"
import Footer from "@/components/footer"
import Cards from "@/components/cards";
import { FaBalanceScale, FaGavel, FaHandshake } from 'react-icons/fa'
import { useState } from "react";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { Leaf } from "react-icons/lu"; 
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';

function CartPage() {

    const router = useRouter();

  return (
    <div className='relative flex flex-col items-center justify-center w-full bg-white overflow-x-hidden pt-20'>
      <Navbar />
      <h1 style={{ fontSize: "15px "}} className="text-center uppercase font-medium text-black mt-40">products in your cart</h1>

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
                    <p className="text-gray-500 text-xs underline">remove</p>
                </div>
            </div>

            {/* MIDDLE PRICING SECTION OF PRODUCT */}
            <div className="flex flex-col items-start justify-start h-40">
                <p className="hidden sm:block text-black font-semibold text-xs">$2299</p>
            </div>

            {/* RIGHT SECTION OF PRODUCT */}
            <div className="flex flex-col items-start justify-between h-40">
                {/* CREATE A BUTTON OF THREE IN DIV FLEX ROW LIKE + QUANTITY AND - LIKE IN ADD TO CART */}
                <div className="flex flex-row justify-center items-center border-gray-700 border">
                <button style={{ fontSize: "12px "}} className="px-4 text-gray-900 py-2 text-center flex justify-center items-center w-8 h-4 sm:w-16 sm:h-8 self-center text-sm hover:scale-105 duration-200 ease-in-out transition-all hover:shadow-md shadow-sm hover:text-white hover:bg-black">+</button>
                <p className="text-black bg-gray-100 w-8 h-4 sm:w-16 sm:h-8 font-semibold text-xs text-center flex justify-center items-center">1</p>
                <button style={{ fontSize: "12px "}} className="px-4 text-gray-900 py-2 text-center flex justify-center items-center w-8 h-4 sm:w-16 sm:h-8 self-center text-sm hover:scale-105 duration-200 ease-in-out transition-all hover:shadow-md shadow-sm hover:text-white hover:bg-black">-</button>
                </div>
                <p className="text-black font-semibold text-xs">Total: $2299</p>
            </div>

        </div>

        {/* LIST ITEM OF PRODUCT WITH RED TEXT */}
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
                        <p className="text-red-500 text-xs sm:text-sm font-semibold">Free Alteration: Choose Size</p>
                        <select className="text-black bg-gray-100 border-gray-700 border">
                            <option value="M">M</option>
                            <option value="L">L</option>
                            <option value="XL">XL</option>
                            <option value="XXL">XXL</option>
                        </select>
                        <p className="text-gray-500 text-xs underline mt-2">remove</p>

                    </div>
                    
                </div>
            </div>

            {/* MIDDLE PRICING SECTION OF PRODUCT */}
            <div className="flex flex-col items-start justify-start h-40">
                <p className="hidden sm:block text-black font-semibold text-xs">$2299</p>
            </div>

            {/* RIGHT SECTION OF PRODUCT */}
            <div className="flex flex-col items-start justify-between h-40">
                {/* CREATE A BUTTON OF THREE IN DIV FLEX ROW LIKE + QUANTITY AND - LIKE IN ADD TO CART */}
                <div className="flex flex-row justify-center items-center border-gray-700 border">
                <button style={{ fontSize: "12px "}} className="px-4 text-gray-900 py-2 text-center flex justify-center items-center w-8 h-4 sm:w-16 sm:h-8 self-center text-sm hover:scale-105 duration-200 ease-in-out transition-all hover:shadow-md shadow-sm hover:text-white hover:bg-black">+</button>
                <p className="text-black bg-gray-100 w-8 h-4 sm:w-16 sm:h-8 font-semibold text-xs  text-center flex justify-center items-center">1</p>
                <button style={{ fontSize: "12px "}} className="px-4 text-gray-900 py-2 text-center flex justify-center items-center w-8 h-4 sm:w-16 sm:h-8 self-center text-sm hover:scale-105 duration-200 ease-in-out transition-all hover:shadow-md shadow-sm hover:text-white hover:bg-black">-</button>
                </div>
                <p className="text-black font-semibold text-xs">Total: $2299</p>
            </div>

        </div>

      </div>


      <h1 style={{ fontSize: "15px "}} className="text-center uppercase font-semibold text-black mt-8">order summary</h1>

        <h1 style={{ fontSize: "15px "}} className="text-center font-semibold text-black mt-16">Total: $3299 [Inclusive of all taxes]</h1>
        <p style={{ fontSize: "15px "}} className="text-center font-semibold text-black ">Free Shipping</p>

        <div className="flex flex-col items-center justify-center w-full mt-16">
            <p style={{ fontSize: "15px "}} className="text-center font-semibold text-black ">Total: $3299</p>
            <input className="w-80 sm:w-2/5 h-10 border-2 mt-4 border-gray-500 bg-gray-100 text-black text-center" placeholder="Add Promo" type="text" />
            <button onClick={()=> router.push("/checkout")} className="px-10 py-4 text-center flex justify-center items-center w-60 h-10 border-2 border-black self-center text-black text-sm hover:scale-105 duration-200 ease-in-out transition-all hover:shadow-md shadow-sm hover:text-white hover:bg-black mt-6">Checkout </button>
        </div>
      
    

      <Footer />
    </div>
  )
}

export default CartPage;
