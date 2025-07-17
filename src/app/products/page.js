"use client"
import Image from "next/image";
import Navbar from "@/components/navbar";
import Banner from "@/components/banner"
import Footer from "@/components/footer"
import Cards from "@/components/cards";
import { FaBalanceScale, FaGavel, FaHandshake } from 'react-icons/fa'
import { useState } from "react";
import { useEffect } from "react";
import { motion, AnimatePresence } from 'framer-motion';
import { Leaf } from "react-icons/lu"; 
import { useRouter } from "next/navigation";
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';

function AllProductsPage() {

    const router = useRouter();
    const payNow = async(e) => {
        e.preventDefault();
        router.push('/order-confirmation');
    }


  return (
    <div className='relative flex flex-col items-center justify-center w-full bg-white overflow-x-hidden pt-20'>
      <Navbar />

      <h1 style={{ fontSize: "13px "}} className="text-center uppercase font-semibold text-black mt-32">shop organic</h1>

      <p className="font-medium w-80 text-center sm:w-[26rem] flex space-x-2 items-start mt-8"><span  className="text-xs text-black">I would like to receive updates about Thyme's new activities, exclusive products, tailored services and to have a personalised client experience based on my interests.</span></p>
      
      <div className="flex flex-row justify-start sm:justify-center space-x-14 no-scrollbar items-center w-full px-4 mt-10 overflow-x-auto py-20" >
        <motion.div className="flex flex-col justify-center items-center w-52 flex-shrink-0">
            <Image src={"/SUB09789.jpg"} alt="image" width={300} height={300} className="h-80 w-52" />
            <h1 style={{ fontSize: "12px "}} className="text-center uppercase font-semibold text-black mt-6">seoul serenity</h1>
            <h1 style={{ fontSize: "12px "}} className="text-center uppercase font-semibold text-black ">[oat dust]</h1>
            <h1 style={{ fontSize: "12px "}} className="text-center uppercase font-semibold text-black ">2299 inr</h1>
        </motion.div>
        <motion.div className="flex flex-col justify-center items-center w-52 flex-shrink-0">
            <Image src={"/SUB00330.jpg"} alt="image" width={300} height={300} className="h-80 w-52" />
            <h1 style={{ fontSize: "12px "}} className="text-center uppercase font-semibold text-black mt-6">seoul serenity</h1>
            <h1 style={{ fontSize: "12px "}} className="text-center uppercase font-semibold text-black ">[oat dust]</h1>
            <h1 style={{ fontSize: "12px "}} className="text-center uppercase font-semibold text-black ">2299 inr</h1>
        </motion.div>
        <motion.div className="flex flex-col justify-center items-center w-52 flex-shrink-0">
            <Image src={"/SUB00268.jpg"} alt="image" width={300} height={300} className="h-80 w-52" />
            <h1 style={{ fontSize: "12px "}} className="text-center uppercase font-semibold text-black mt-6">seoul serenity</h1>
            <h1 style={{ fontSize: "12px "}} className="text-center uppercase font-semibold text-black ">[oat dust]</h1>
            <h1 style={{ fontSize: "12px "}} className="text-center uppercase font-semibold text-black ">2299 inr</h1>
        </motion.div>
      </div>

      <div className="flex flex-row justify-start sm:justify-center space-x-14 no-scrollbar items-center w-full px-4 mt-10 overflow-x-auto py-20" >
        <motion.div className="flex flex-col justify-center items-center w-52 flex-shrink-0">
            <Image src={"/SUB00330.jpg"} alt="image" width={300} height={300} className="h-80 w-52" />
            <h1 style={{ fontSize: "12px "}} className="text-center uppercase font-semibold text-black mt-6">seoul serenity</h1>
            <h1 style={{ fontSize: "12px "}} className="text-center uppercase font-semibold text-black ">[oat dust]</h1>
            <h1 style={{ fontSize: "12px "}} className="text-center uppercase font-semibold text-black ">2299 inr</h1>
        </motion.div>
        <motion.div className="flex flex-col justify-center items-center w-52 flex-shrink-0">
            <Image src={"/SUB09789.jpg"} alt="image" width={300} height={300} className="h-80 w-52" />
            <h1 style={{ fontSize: "12px "}} className="text-center uppercase font-semibold text-black mt-6">seoul serenity</h1>
            <h1 style={{ fontSize: "12px "}} className="text-center uppercase font-semibold text-black ">[oat dust]</h1>
            <h1 style={{ fontSize: "12px "}} className="text-center uppercase font-semibold text-black ">2299 inr</h1>
        </motion.div>
        <motion.div className="flex flex-col justify-center items-center w-52 flex-shrink-0">
            <Image src={"/SUB09789.jpg"} alt="image" width={300} height={300} className="h-80 w-52" />
            <h1 style={{ fontSize: "12px "}} className="text-center uppercase font-semibold text-black mt-6">seoul serenity</h1>
            <h1 style={{ fontSize: "12px "}} className="text-center uppercase font-semibold text-black ">[oat dust]</h1>
            <h1 style={{ fontSize: "12px "}} className="text-center uppercase font-semibold text-black ">2299 inr</h1>
        </motion.div>
      </div>

      <div className=" flex flex-row justify-center items-center w-full flex-wrap mt-10 py-20">
     <motion.div className="flex justify-center items-center relative w-88 sm:w-1/2 h-80 sm:h-[54rem] flex-shrink-0">
      <Image
        src="/SUB09789.JPG"
        width={300}
        height={300}
        className="w-full h-full object-contain sm:object-cover"
        alt="product"
      />

      <motion.div
        className="absolute top-2 right-2"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
      >

        <button className="px-10 py-4 text-center flex justify-center items-center  w-40 h-10 border border-black self-center text-sm hover:scale-105 duration-200 ease-in-out transition-all  hover:text-white text-black hover:bg-black ">Bestseller</button>
      </motion.div>
    </motion.div>


        <Image className="w-88 sm:w-1/2 h-80 sm:h-[54rem] object-contain sm:object-cover" src={"/SUB00268.jpg"} width={600} height={600} objectFit="contain" />
      </div>

      <p className="font-medium w-full text-center mt-8 text-xs text-black px-4">Certified organic essentials designed to be endure. Genderless and minimal.</p>
      <p className="font-medium w-full text-center text-xs text-black px-4">Produced locally from the finest organic materials</p>

      <div className="flex flex-row justify-start sm:justify-center space-x-14 no-scrollbar items-center w-full px-4 mt-10 overflow-x-auto py-20" >
        <motion.div className="flex flex-col justify-center items-center w-52 flex-shrink-0">
            <Image src={"/SUB00330.jpg"} alt="image" width={300} height={300} className="h-80 w-52" />
            <h1 style={{ fontSize: "12px "}} className="text-center uppercase font-semibold text-black mt-6">seoul serenity</h1>
            <h1 style={{ fontSize: "12px "}} className="text-center uppercase font-semibold text-black ">[oat dust]</h1>
            <h1 style={{ fontSize: "12px "}} className="text-center uppercase font-semibold text-black ">2299 inr</h1>
        </motion.div>
        <motion.div className="flex flex-col justify-center items-center w-52 flex-shrink-0">
            <Image src={"/SUB09789.jpg"} alt="image" width={300} height={300} className="h-80 w-52" />
            <h1 style={{ fontSize: "12px "}} className="text-center uppercase font-semibold text-black mt-6">seoul serenity</h1>
            <h1 style={{ fontSize: "12px "}} className="text-center uppercase font-semibold text-black ">[oat dust]</h1>
            <h1 style={{ fontSize: "12px "}} className="text-center uppercase font-semibold text-black ">2299 inr</h1>
        </motion.div>
        <motion.div className="flex flex-col justify-center items-center w-52 flex-shrink-0">
            <Image src={"/SUB09789.jpg"} alt="image" width={300} height={300} className="h-80 w-52" />
            <h1 style={{ fontSize: "12px "}} className="text-center uppercase font-semibold text-black mt-6">seoul serenity</h1>
            <h1 style={{ fontSize: "12px "}} className="text-center uppercase font-semibold text-black ">[oat dust]</h1>
            <h1 style={{ fontSize: "12px "}} className="text-center uppercase font-semibold text-black ">2299 inr</h1>
        </motion.div>
      </div>

    </div>
  )
}

export default AllProductsPage;
