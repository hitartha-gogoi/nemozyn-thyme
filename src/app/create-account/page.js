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
import OtpModal from "@/components/otp-modal";
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';

function CreateAccountPage() {

    const router = useRouter();
    const [ isOpen, setIsOpen ] = useState(false);

    const createAccount = async(e) => {
        e.preventDefault();
        setIsOpen(true);
    }

  return (
    <div className='relative flex flex-col items-center justify-center w-full bg-white overflow-x-hidden pt-20'>
      <Navbar />

      <h1 style={{ fontSize: "15px "}} className="text-center uppercase font-semibold text-black mt-32">create acount</h1>

      <form onSubmit={createAccount} className="flex flex-col items-center justify-center flex-wrap text-center w-full pt-2 pb-4 mt-12">
        <div className="flex flex-row items-center justify-center w-80 sm:w-[28rem]">
          <input type="text" placeholder="First Name" className="px-6 border-2 scale-95 text-black focus:border-black border-black p-2 w-40 sm:w-[13rem] mb-2" />
          <input type="text" placeholder="Last Name" className="px-6 border-2 scale-95 text-black focus:border-black border-black p-2 w-40 sm:w-[14.3rem] mb-2" />
        </div>
        <input type="email" placeholder="Email" className="px-6 border-2 scale-95 text-black focus:border-black border-black p-2 w-80 sm:w-[28rem] mb-2" />
        <input type="tel" placeholder="Phone" className="px-6 border-2 scale-95 text-black focus:border-black border-black p-2 w-80 sm:w-[28rem] mb-2" />

        <h1 style={{ fontSize: "14px "}} className="text-left  font-semibold text-black mt-10 w-80 sm:w-[26.5rem]">Birthday</h1>
        <div className="flex flex-row items-center justify-center w-80 sm:w-[28rem] mt-2">
          <input type="tel" placeholder="Day" className="px-6 border-2 scale-95 text-black focus:border-black border-black p-2 w-28 sm:w-[9rem] mb-2" />
          <input type="tel" placeholder="Month" className="px-6 border-2 scale-95 text-black focus:border-black border-black p-2 w-28 sm:w-[9rem] mb-2" />
          <input type="tel" placeholder="Year" className="px-6 border-2 scale-95 text-black focus:border-black border-black p-2 w-28 sm:w-[9rem] mb-2" />
        </div>

        <h1 style={{ fontSize: "14px "}} className="text-left  font-semibold text-black mt-10 w-80 sm:w-[26.5rem]">Gender</h1>
        <p className="font-semibold w-80 text-left sm:w-[26rem] flex space-x-2 mt-2"><input type="checkbox" className="" />   <span className="text-sm text-black">Non-Binary</span></p>
        <p className="font-semibold w-80 text-left sm:w-[26rem] flex space-x-2 mt-2"><input type="checkbox" className="" />   <span className="text-sm text-black">Woman</span></p>
        <p className="font-semibold w-80 text-left sm:w-[26rem] flex space-x-2 mt-2"><input type="checkbox" className="" />   <span className="text-sm text-black">Man</span></p>
        <p className="font-semibold w-80 text-left sm:w-[26rem] flex space-x-2 mt-2"><input type="checkbox" className="" />   <span className="text-sm text-black">Prefer not to say</span></p>
        <p className="font-semibold w-80 text-left sm:w-[26rem] flex items-center space-x-2 mt-2"><input type="checkbox" className="" />   <span className="text-sm text-black">Self describe</span><input className="w-48 sm:w-72 border border-black h-8" /></p>

        <p style={{ fontSize: "12px" }} className=" text-sm font-medium text-black text-left sm:text-center mt-8 px-4 w-80 sm:w-[30rem]">We ask for your gender only to help personlize your experience, Your identity is yours to define, and we're here to support that. You can update or remove this information anytime in your profile settings</p>
        
        
        <p className="font-medium w-80 text-left sm:w-[26rem] flex space-x-2 items-start mt-10"><input type="checkbox" className="" />   <span  className="text-xs text-black">I have read and understood the privacy and agree to the Terms of Use</span></p>
        <p className="font-medium w-80 text-left sm:w-[26rem] flex space-x-2 items-start mt-2"><input type="checkbox" className="" />   <span  className="text-xs text-black">I would like to receive updates about Thyme's new activities, exclusive products, tailored services and to have a personalised client experience based on my interests.</span></p>
        <button type='submit' className="px-10 py-4 text-center flex justify-center items-center w-60 h-10 border-2 border-black self-center text-sm hover:scale-105 duration-200 ease-in-out transition-all  hover:text-white hover:bg-black mt-6 text-black">Register</button>
        <OtpModal open={isOpen} onClose={()=> setIsOpen(false)} />

        <p className=" text-sm font-medium uppercase text-black text-left sm:text-center mt-8 px-4 w-80 sm:w-[30rem] mb-40">The personal data collected above is processed by thyme to manage your order, optimize customer relations, for statistical and survey purposes and, subject to your consent above, to inform you of news and new products as well as provide updates to your order status</p>
        
        
    </form>
    
    </div>
  )
}

export default CreateAccountPage;
