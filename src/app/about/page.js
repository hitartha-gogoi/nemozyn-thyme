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

function AboutPage() {

    const router = useRouter();

  return (
    <div className='relative flex flex-col items-center justify-center w-full bg-white overflow-x-hidden pt-20'>
      <Navbar />

      <h1 style={{ fontSize: "15px "}} className="overused-grotesk-semibold text-center uppercase font-semibold text-black mt-32">About Thyme</h1>

      <p style={{ fontSize: "12px" }} className="overused-grotesk-semibold text-sm font-medium text-black text-left px-4 w-4/5 sm:w-96 mt-8">At Thyme we are always looking for like-minded content creators who share our passion for making sustainable fashion more accesible to everyone.     Lorem, ipsum dolor sit amet consectetur adipisicing elit. Distinctio perferendis, fugit molestiae consequuntur qui, error harum repellat natus suscipit aliquid mollitia temporibus deleniti optio praesentium reprehenderit eveniet culpa cupiditate similique.</p>
      <p style={{ fontSize: "12px" }} className="overused-grotesk-semibold text-sm font-medium text-black text-left px-4 w-4/5 sm:w-96 mt-6">At Thyme we are always looking for like-minded content creators who share our passion for making sustainable fashion more accesible to everyone.     Lorem, ipsum dolor sit amet consectetur adipisicing elit. Distinctio perferendis, fugit molestiae consequuntur qui</p>
      <Image alt="image" height={600} objectFit="contain" width={600} className="h-96 w-3/5 mt-24" src="/journal-image.jpg"  />
      
      <h1 style={{ fontSize: "15px "}} className="text-center uppercase font-semibold text-black mt-32">our approach to sustainability</h1>
      <p style={{ fontSize: "12px" }} className="overused-grotesk-semibold text-sm font-medium text-black text-left px-4 w-4/5 sm:w-96 mt-8">At Thyme we are always looking for like-minded content creators who share our passion for making sustainable fashion more accesible to everyone.     Lorem, ipsum dolor sit amet consectetur adipisicing elit. Distinctio perferendis, fugit molestiae consequuntur qui, error harum repellat natus suscipit aliquid mollitia temporibus deleniti optio praesentium reprehenderit eveniet culpa cupiditate similique.</p>
      <p style={{ fontSize: "12px" }} className="overused-grotesk-semibold text-sm font-medium text-black text-left px-4 w-4/5 sm:w-96 mt-6">At Thyme we are always looking for like-minded content creators who share our passion for making sustainable fashion more accesible to everyone.     Lorem, ipsum dolor sit amet consectetur adipisicing elit. Distinctio perferendis, fugit molestiae consequuntur qui</p>
      

      <div className="overused-grotesk-semibold flex flex-row justify-center items-center w-3/5 flex-wrap mt-20">
        <Image className="w-88 sm:w-1/2 h-60 sm:h-[30rem]" src={"/about-image-1.jpeg"} width={600} height={600} objectFit="cover" />
        <Image className="w-88 sm:w-1/2 h-60 sm:h-[30rem]" src={"/about-footer-image.jpeg"} width={600} height={600} objectFit="cover" />
      </div>

      <div className="overused-grotesk-semibold flex flex-row items-start justify-start flex-wrap w-4/5 sm:w-3/5 py-4 mt-10 text-black">
          <div className="h-96 w-96 sm:w-1/2 flex flex-col justify-between items-start p-4 my-4">
            <div className="text-left text-sm font-normal">
              <h1 style={{ fontSize: "15px "}} className="text-left uppercase font-semibold text-black mt-32">Transparency at Thyme</h1>
              <p className="text-xs text-black mt-10">Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt voluptatibus quam unde. Est dicta voluptatum aut facilis sequi culpa perferendis quidem? Dignissimos qui repellendus illum at sapiente. Numquam, sit dolorem.</p>
              <p className="text-xs text-black mt-4">Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt voluptatibus quam unde. Est dicta voluptatum aut facilis sequi culpa perferendis quidem? Dignissimos qui repellendus illum at sapiente. Numquam, sit dolorem.</p>
            </div>

          </div>


          <div className="overused-grotesk-semibold h-96 w-96 sm:w-1/2 flex flex-col justify-center items-start p-4 text-black my-4">
            <div className="text-left text-sm font-normal">
              <h1 style={{ fontSize: "15px "}} className="text-left uppercase font-semibold text-black mt-32">Design philosophy</h1>
              <p className="text-xs text-black mt-10">Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt voluptatibus quam unde. Est dicta voluptatum aut facilis sequi culpa perferendis quidem? Dignissimos qui repellendus illum at sapiente. Numquam, sit dolorem.</p>
              <p className="text-xs text-black mt-4">Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt voluptatibus quam unde. Est dicta voluptatum aut facilis sequi culpa perferendis quidem? Dignissimos qui repellendus illum at sapiente. Numquam, sit dolorem.</p>
            </div>
          </div>

        </div>


      <Image alt="image" height={600} objectFit="contain" width={600} className="h-96 w-3/5 mt-24" src="/journal-image.jpg"  />
      <h1 style={{ fontSize: "15px "}} className="text-center uppercase font-semibold text-black mt-32">materials</h1>
      <p style={{ fontSize: "12px" }} className="overused-grotesk-semibold text-sm font-medium text-black text-left px-4 w-4/5 sm:w-96 mt-8">At Thyme we are always looking for like-minded content creators who share our passion for making sustainable fashion more accesible to everyone.     Lorem, ipsum dolor sit amet consectetur adipisicing elit. Distinctio perferendis, fugit molestiae consequuntur qui, error harum repellat natus suscipit aliquid mollitia temporibus deleniti optio praesentium reprehenderit eveniet culpa cupiditate similique.</p>
      <p style={{ fontSize: "12px" }} className="overused-grotesk-semibold text-sm font-medium text-black text-left px-4 w-4/5 sm:w-96 mt-6">At Thyme we are always looking for like-minded content creators who share our passion for making sustainable fashion more accesible to everyone.     Lorem, ipsum dolor sit amet consectetur adipisicing elit. Distinctio perferendis, fugit molestiae consequuntur qui</p>


      <Image alt="image" height={600} objectFit="contain" width={600} className="h-96 w-3/5 mt-24" src="/journal-image.jpg"  />
      <h1 style={{ fontSize: "15px "}} className="text-center uppercase font-semibold text-black mt-32 overused-grotesk-semibold">accountibility</h1>
      <p style={{ fontSize: "12px" }} className="overused-grotesk-semibold text-sm font-medium text-black text-left px-4 w-4/5 sm:w-96 mt-8">At Thyme we are always looking for like-minded content creators who share our passion for making sustainable fashion more accesible to everyone.     Lorem, ipsum dolor sit amet consectetur adipisicing elit. Distinctio perferendis, fugit molestiae consequuntur qui, error harum repellat natus suscipit aliquid mollitia temporibus deleniti optio praesentium reprehenderit eveniet culpa cupiditate similique.</p>
      <p style={{ fontSize: "12px" }} className="overused-grotesk-semibold text-sm font-medium text-black text-left px-4 w-4/5 sm:w-96 mt-6">At Thyme we are always looking for like-minded content creators who share our passion for making sustainable fashion more accesible to everyone.     Lorem, ipsum dolor sit amet consectetur adipisicing elit. Distinctio perferendis, fugit molestiae consequuntur qui</p>

      <h1 style={{ fontSize: "15px "}} className="text-center uppercase font-semibold text-black mt-32 overused-grotesk-semibold">the team behind thyme</h1>
      <p style={{ fontSize: "12px" }} className="overused-grotesk-semibold text-sm font-medium text-black text-center px-4 w-4/5 sm:w-96 mt-8">Meet the team that makes Thyme happen, everyday.</p>

      <div className="overused-grotesk-semibold flex flex-row justify-center sm:justify-between items-center w-full">
        <Image className="h-80 w-60 m-4" height={600} width={600} objectFit="contain" src="/about-image-2.jpeg" alt="image" />
        <div className="bg-black h-72 w-4/5 hidden sm:block"></div>

      </div>
    </div>
  )
}

export default AboutPage;
