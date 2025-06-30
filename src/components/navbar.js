"use client"; // Required in Next.js 15 for interactivity
import { useState, useRef, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { FaDiscord, FaYoutube, FaGithubSquare } from "react-icons/fa";
import { AiFillInstagram } from "react-icons/ai";
import { FaXTwitter, FaMedium } from "react-icons/fa6";
import { FaBars } from "react-icons/fa";
import { ReactTyped } from "react-typed";

function Navbar({ textColor }) {
  const [moreOpen, setMoreOpen] = useState(false);

  const closeAllPopups = () => {
    setMoreOpen(false);
  };

  useEffect(() => {
    const handleOutsideClick = (e) => {
      if (!e.target.closest(".popup-menu")) {
        closeAllPopups();
      }
    };
    window.addEventListener("click", handleOutsideClick);
    return () => window.removeEventListener("click", handleOutsideClick);
  }, []);

  return (
    <div className="z-[9998] w-full h-40 flex flex-col justify-between absolute top-0 left-0 bg-white">

      {/* GREEN NAVBAR */}
      <div className="flex items-center justify-center h-6 px-4 bg-green-800 w-full">
        <span className="text-center text-white font-light text-xs sm:text-sm">Nemozyn is now Thyme | Explore our new arrivals</span>
      </div>

      {/* THYME */}
      <div className="flex items-center justify-center my-2 w-full h-12 px-4 bg-white">
        <Image src={'/Logo.png'} className="h-12 w-32" width={300} height={300} objectFit="contain" />
      </div>

      {/* GRAY NAVBAR */}
    <div className="flex items-center justify-between w-full h-20 my-2 bg-gray-200">

    {/* SHOP ORGANIC, JOURNAL, SUSTAINABILITY REPORT */}
    <div className="font-normal text-sm flex h-full items-center justify-center text-black">
      <Link href="/"><span className="hidden sm:block hover:shadow-xl mx-4 banner-text">Shop organic</span></Link>
      <Link href="/"><span className="hidden sm:block hover:shadow-xl mx-4 banner-text">Journal</span></Link>
      <Link href="/"><span className="hidden sm:block hover:shadow-xl mx-4 banner-text">Sustainibility report</span></Link>
    </div>

      {/* SUMMER/SPRING TEXT */}
      <div className={`flex flex-row justify-center items-center sm:px-10 px-2 mr-4 sm:mr-28 text-base uppercase text-${textColor}`}>
        <span className="banner-text font-bold text-black text-center uppercase text-sm">summer/spring 25</span>
      </div>

      {/* CART SALE ACCOUNT */}
      <div className="font-normal text-sm flex h-full items-center justify-center text-black">
      <Link href="/"><span className="hidden sm:block hover:shadow-xl mx-4 banner-text">Cart [0]</span></Link>
      <Link href="/"><span className="hidden sm:block hover:shadow-xl mx-4 banner-text text-red-500">Sale</span></Link>
      <span onClick={(e) => { e.stopPropagation(); setMoreOpen(!moreOpen); }} className="hidden sm:block hover:shadow-xl mx-4 banner-text">Account</span>
    </div>

    </div>
      
  
      {/* More Popup */}
      <AnimatePresence>
        {moreOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="popup-menu absolute left-[46%] -translate-x-1/2 top-full bg-white p-3 rounded-lg shadow-lg flex flex-col w-72"
            style={{ marginTop: "8px", paddingTop: "8px" }}
          >
            <span className="flex items-center text-xs text-neutral-900 p-4 h-4 border-b-2 border-gray-200"></span>

              <Link href={"/"} className="group flex items-center gap-4 p-4 border-b-2 border-gray-200 text-black hover:text-white hover:bg-black">
                <span className="font-extrabold uppercase">view profile</span>
              </Link>

              <Link href={"/"} className="group flex items-center gap-4 p-4 border-b-2 border-gray-200 text-black hover:text-white hover:bg-black">
                <span className="font-extrabold uppercase">orders</span>
              </Link>
          
              <Link href={"/"} className="group flex items-center gap-4 p-4 border-b-2 border-gray-200 text-black hover:text-white hover:bg-black">
                <span className="font-extrabold uppercase">account settings</span>
              </Link>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default Navbar;
