'use client'
import { useState } from "react"

export default function Card({ title, description, imageUrl }){
    return(
        <>
        <div style={{ backgroundImage: `url(${imageUrl})`, border: "0px solid black" }} className={`w-80 h-[400px]  bg-white bg-cover bg-center cursor-pointer `}>
          <div className="flex flex-col items-start h-full text-white pt-2 pl-2">
            <p style={{ fontSize: "12px ", fontWeight: "600"}} className=" text-black uppercase leading-tight overused-grotesk-medium ">{title}</p>
            <p style={{ fontSize: "12px "}} className="  text-black  overused-grotesk-medium leading-tight">{description}</p>
            <p style={{ fontSize: "12px "}} className="text-black font-semibold">₹4200.00</p>
          </div>
        </div>

        </>
    )
}