'use client'
import { useState } from "react"

export default function Card({ title, description, imageUrl }){
    return(
        <>
        <div style={{ backgroundImage: `url(${imageUrl})` }} className={`w-80 h-[400px] rounded-lg bg-white bg-cover bg-center cursor-pointer shadow-md transition-transform duration-300 transform hover:-translate-y-1 hover:shadow-2xl`}>
          <div className="flex flex-col items-start h-full text-white pt-6 pl-4">
            <p className="text-sm banner-text text-gray-600 uppercase">{title}</p>
            <p className="text-sm  text-gray-600">{description}</p>
            <p className="text-black font-semibold">₹4200.00</p>
          </div>
        </div>

        </>
    )
}