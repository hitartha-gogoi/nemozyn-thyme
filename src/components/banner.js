"use client"; // Required in Next.js 15 for interactivity
import Link from "next/link"
import { ReactTyped } from "react-typed";
import Image from "next/image"

function Banner(){
  return (
    
    <div className="relative flex flex-col items-center justify-center overflow-hidden bg-white h-screen sm:h-[44rem] w-full bg-gradient-to-r from-black to-transparent pt-20">
      {/* Background div */}
      <div class="absolute inset-0 bg-blue-800 opacity-60"></div>
      <div className="flex flex-row items-center justify-center flex-wrap h-screen  w-full bg-center bg-blue-800/50 cursor-pointer" >

       {/* Content Over div */}
       <div className=" z-10 flex flex-col items-center justify-center  text-white text-left sm:text-center">
       <h1 className="text-4xl sm:mt-0 mt-20 sm:text-5xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-400 text-center w-80 sm:w-[50rem] uppercase">Bahadurgarh Bar Association</h1>
        {/*<span className="text-xl sm:text-4xl sm:my-8 my-0 mt-4 font-medium text-gray-100 text-left sm:text-center w-80 h-40 sm:h-20 sm:w-[50rem] banner-text">
           <ReactTyped typeSpeed={10} backSpeed={10} loop startDelay={1000} backDelay={5000} className="text-white" strings={[`Peerless performance, efficiency and developer experience. Next.js is trusted by some of the biggest names of the web.` ]} />
         </span>*/}
       
      </div>

      <Image src={"/bahadurgarh-image-complex.jpeg"} height={300} width={300} className="rounded-xl sm:h-96 sm:w-96 h-52 w-52 z-[9996] object-cover" objectFit={"contain"} />

       
      </div>
    </div>
    
  );
};

export default Banner;
