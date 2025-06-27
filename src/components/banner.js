"use client"; // Required in Next.js 15 for interactivity
import Link from "next/link"
import { ReactTyped } from "react-typed";
import Image from "next/image"

function Banner(){
  return (
    
    <div className="relative flex flex-col items-center justify-center overflow-hidden bg-white h-screen sm:h-[32rem] w-full pt-20">
      {/* Background div */}

      {/* bring the image to top */}
      <div className="absolute inset-0 z-0 h-screen sm:h-[32rem]">
        <Image
          src="/landing-image.png"
          alt="Background Image"
          layout="fill"
          objectFit="cover"
          className="opacity-90 absolute top-0 left-0"
        />  
        </div>

        
      
    </div>
    
  );
};

export default Banner;
