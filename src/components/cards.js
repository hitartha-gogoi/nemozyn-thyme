'use client'
import { useState } from "react"
import Card from "./card"

const cardData = [  
  {
    title: "seoul serenity",
    description: "100% Organic Cotton",
    imageUrl: "/pink-shirt.jpg",
  },
  {
    title: "daegu dawn",
    description: "100% Organic Linen",
    imageUrl: "/light-brown.jpg",
  },
  {
    title: "Seoul serenity",
    description: "100% Organic Cotton",
    imageUrl: "/black-shirt.jpg",
  },
  {
    title: "incheon inspire",
    description: "100% Organic French Terry",
    imageUrl: "/dark-brown-shirt.jpg",
  },

]

export default function Cards(){
    return(
        <>
        <div className="w-full h-[34rem] overflow-x-auto scrollbar-white">
            <div className="inline-flex w-max h-full flex-nowrap space-x-2 px-4 pt-4">
              {cardData.map((card, index) => (
                <Card key={index} title={card.title} description={card.description} imageUrl={card.imageUrl} />
              ))}
            </div>
        </div>
        </>
    )
}