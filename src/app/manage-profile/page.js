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
import AddressChangeModal from "@/components/address-change-modal";

function ManageProfilePage() {

  const [ isAddressModalOpen, setAddressModalOpen ] = useState(false)

    const router = useRouter();
    const onCheckout = async(e) => {
        e.preventDefault();
    }


  return (
    <div className='relative flex flex-col items-center justify-center w-full bg-white overflow-x-hidden pt-20'>
      <Navbar />
      <AddressChangeModal isOpen={isAddressModalOpen} onClose={()=> setAddressModalOpen(false)} />
      

      <h1 style={{ fontSize: "15px "}} className="text-center uppercase font-semibold text-black mt-40">manage profile</h1>


      <h1 style={{ fontSize: "14px "}} className="text-center uppercase font-semibold text-black mt-20">profile settings</h1>

      {/* PERSONAL DETAILS */}
      <h1 style={{ fontSize: "14px "}} className="text-center uppercase font-semibold text-black mt-12">personal details</h1>
      <form onSubmit={onCheckout} className="flex flex-col items-center justify-center flex-wrap text-center w-full pt-2 pb-4">
      {/* create input for first name and last name in one line with the same styling but adjusting the width in one line */}
        <div className="flex flex-row items-center justify-center w-80 sm:w-[28rem]">
          <input type="text" placeholder="First Name" className="px-6 border-2 scale-95 text-black focus:border-black border-black p-2 w-40 sm:w-[13rem] mb-2" />
          <input type="text" placeholder="Last Name" className="px-6 border-2 scale-95 text-black focus:border-black border-black p-2 w-40 sm:w-[14.3rem] mb-2" />
        </div>
        <input type="tel" placeholder="Phone" className="px-6 border-2 scale-95 text-black focus:border-black border-black p-2 w-80 sm:w-[28rem] mb-2" />

        <h1 style={{ fontSize: "14px "}} className="text-left  font-semibold text-black mt-4 w-80 sm:w-[26.5rem]">Birthday</h1>
        <div className="flex flex-row items-center justify-center w-80 sm:w-[28rem] mt-2">
          <input type="tel" placeholder="Day" className="px-6 border-2 scale-95 text-black focus:border-black border-black p-2 w-28 sm:w-[9rem] mb-2" />
          <input type="tel" placeholder="Month" className="px-6 border-2 scale-95 text-black focus:border-black border-black p-2 w-28 sm:w-[9rem] mb-2" />
          <input type="tel" placeholder="Year" className="px-6 border-2 scale-95 text-black focus:border-black border-black p-2 w-28 sm:w-[9rem] mb-2" />
        </div>
        <h1 style={{ fontSize: "16px "}} className="text-center uppercase font-semibold text-black mt-24">save addresses</h1>
        <button className="px-6 py-4 text-center flex justify-center items-center w-32 h-8 border-2 border-black self-center text-black text-xs font-medium hover:scale-105 duration-200 ease-in-out transition-all hover:shadow-md shadow-sm hover:text-white hover:bg-black mt-2 ">Add New</button>


        {/* ADDRESSES */}
        <div className="flex flex-col mt-12">
        <h1 style={{ fontSize: "15px "}} className="text-center uppercase font-medium text-black">address title</h1>
        <h1 style={{ fontSize: "15px "}} className="text-center uppercase font-medium text-black mt-4">first name, last name</h1>
        <h1 style={{ fontSize: "15px "}} className="text-center font-medium text-black uppercase"> street address, state</h1>
        <p style={{ fontSize: "15px "}} className="text-center font-medium text-black uppercase">zipcode</p>

        <p style={{ fontSize: "15px "}} className="text-center font-medium text-black uppercase my-4">contact no.</p>

        <div className="flex flex-row justify-between items-center w-60">
          <button onClick={()=> setAddressModalOpen(true)} className="px-6 py-4 text-center flex justify-center items-center w-28 h-8 border-2 border-black self-center text-black text-xs font-medium hover:scale-105 duration-200 ease-in-out transition-all hover:shadow-md shadow-sm hover:text-white hover:bg-black mt-2 ">Edit</button>
          <button className="px-6 py-4 text-center flex justify-center items-center w-28 h-8 border-2 border-black self-center text-black text-xs font-medium hover:scale-105 duration-200 ease-in-out transition-all hover:shadow-md shadow-sm hover:text-white hover:bg-black mt-2 ">Delete</button>
        </div>
        </div>


        {/* ADDRESSES */}
        <div className="flex flex-col mt-12">
        <h1 style={{ fontSize: "15px "}} className="text-center uppercase font-medium text-black">address title</h1>
        <h1 style={{ fontSize: "15px "}} className="text-center uppercase font-medium text-black mt-4">first name, last name</h1>
        <h1 style={{ fontSize: "15px "}} className="text-center font-medium text-black uppercase"> street address, state</h1>
        <p style={{ fontSize: "15px "}} className="text-center font-medium text-black uppercase">zipcode</p>

        <p style={{ fontSize: "15px "}} className="text-center font-medium text-black uppercase my-4">contact no.</p>

        <div className="flex flex-row justify-between items-center w-60">
          <button onClick={()=> setAddressModalOpen(true)} className="px-6 py-4 text-center flex justify-center items-center w-28 h-8 border-2 border-black self-center text-black text-xs font-medium hover:scale-105 duration-200 ease-in-out transition-all hover:shadow-md shadow-sm hover:text-white hover:bg-black mt-2 ">Edit</button>
          <button className="px-6 py-4 text-center flex justify-center items-center w-28 h-8 border-2 border-black self-center text-black text-xs font-medium hover:scale-105 duration-200 ease-in-out transition-all hover:shadow-md shadow-sm hover:text-white hover:bg-black mt-2 ">Delete</button>
        </div>
        </div>

        {/* SUBMIT BUTTON */}
        <button type="submit" className="px-10 py-4 text-center flex justify-center mt-20 items-center w-60 h-10 border-2 border-black self-center text-black text-base font-medium hover:scale-105 duration-200 ease-in-out transition-all hover:shadow-md shadow-sm hover:text-white hover:bg-black ">Log Out </button>
        
      
   
      </form>


      <Footer />
    </div>
  )
}

export default ManageProfilePage;
