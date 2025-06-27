"use client"; // Required in Next.js 15 for interactivity
import Link from "next/link"
import Image from "next/image";
import { IoCodeSlashSharp } from "react-icons/io5";
import { AiTwotoneCheckCircle, AiFillInstagram, AiFillTwitterSquare,  AiFillLinkedin, AiFillGithub } from "react-icons/ai"

function Footer(){
  return (
    <div className="flex flex-col justify-center items-center bg-white w-full py-28 overflow-x-hidden">

      <div className="flex flex-col sm:flex-row  w-80 sm:w-3/5 font-semibold justify-evenly items-start sm:space-y-0 space-y-2 sm:items-center text-center py-4 text-black">
      <span>About THYME</span>
      <span>Frequently Asked Questions</span>
      <span>Materials</span>
      <span>Shipping and Exchange</span>
      <span>Journal</span>
      </div>

      <div className="relative flex flex-col items-center justify-center w-full pb-40">
      <div className="flex flex-row items-center justify-center z-[60] overflow-x-auto">
        <Image src={'/black-shirt.jpg'} className="h-80 w-80 object-cover" height={600} width={600} />
        <Image src={'/black-shirt.jpg'} className="h-80 w-80 object-cover" height={600} width={600} />
        <Image src={'/black-shirt.jpg'} className="h-80 w-80 object-cover" height={600} width={600} />
        <Image src={'/black-shirt.jpg'} className="h-80 w-80 object-cover" height={600} width={600} />
        <Image src={'/black-shirt.jpg'} className="h-80 w-80 object-cover" height={600} width={600} />
      </div>
      <h1 className="absolute top-60 text-9xl font-extrabold text-center text-gray-300 uppercase my-6">thyme</h1>
      </div>

      <p className="banner-text text-sm font-normal text-black text-center">This site is protected by the Recaptcha and Google privacy policy and Terms of Service apply.</p>

      <p className="text-black text-sm font-normal text-center banner-text">© 2023 Nemozyn. All Rights Reserved.</p>

      <p className="text-black text-sm font-normal mt-10 text-center banner-text">Privacy Policy Data Request Preferences Accessibility Cookie Preferences</p>

    </div>
    
  );
};

export default Footer;
