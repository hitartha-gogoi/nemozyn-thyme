'use client'
import { useState } from "react"

export default function Card({ title, description, imageUrl }){
    return(
        <>
        <div style={{ backgroundImage: `url(${imageUrl})` }} className={`w-80 h-[400px] border border-gray-600  bg-white bg-cover bg-center cursor-pointer transition-transform duration-300 transform hover:-translate-y-1 `}>
          <div className="flex flex-col items-start h-full text-white pt-2 pl-2">
            <p className="text-sm banner-text text-gray-600 uppercase">{title}</p>
            <p className="text-sm  text-gray-600">{description}</p>
            <p className="text-black font-semibold">₹4200.00</p>
          </div>
        </div>

        </>
    )
}