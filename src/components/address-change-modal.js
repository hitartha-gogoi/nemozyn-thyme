'use client';
import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from 'framer-motion';

export default function AddressChangeModal({ isOpen, onClose }) {

  return (
    <AnimatePresence>
          {isOpen && (
            <motion.div
              className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-[9999] text-black"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              <motion.div
                className="relative bg-white p-8 w-[90%] max-w-md rounded-md shadow-lg text-center"
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.8, opacity: 0 }}
                transition={{ duration: 0.3 }}>

                  {/* Close Button */}
                  <button
                    className="absolute top-4 right-4 text-black text-lg"
                    onClick={onClose}
                  >
                    ✕
                  </button>

                  <h1 style={{ fontSize: "15px "}} className="text-center uppercase font-medium text-black"> change address</h1>

                  {/* ADDRESS */}
                  <div className="flex flex-col justify-center items-center mt-12">
                    <input type="checkbox" className="scale-105" />
                    <h1 style={{ fontSize: "15px "}} className="text-center uppercase font-medium text-black mt-2">Home</h1>
                    <h1 style={{ fontSize: "15px "}} className="text-center uppercase font-medium text-black mt-4">first name, last name</h1>
                    <h1 style={{ fontSize: "15px "}} className="text-center font-medium text-black uppercase"> 60b first street, city name</h1>
                    <p style={{ fontSize: "15px "}} className="text-center font-medium text-black uppercase">state, country</p>

                    <h1 style={{ fontSize: "15px "}} className="text-center uppercase font-medium text-black mt-2">email</h1>
                    <h1 style={{ fontSize: "15px "}} className="text-center uppercase font-medium text-black">phone number</h1>

                  </div>

                  {/* ADDRESS */}
                  <div className="flex flex-col justify-center items-center mt-12">
                    <input type="checkbox" className="scale-105" />
                    <h1 style={{ fontSize: "15px "}} className="text-center uppercase font-medium text-black mt-2">office</h1>
                    <h1 style={{ fontSize: "15px "}} className="text-center uppercase font-medium text-black mt-4">first name, last name</h1>
                    <h1 style={{ fontSize: "15px "}} className="text-center font-medium text-black uppercase">60b first street, city name</h1>
                    <p style={{ fontSize: "15px "}} className="text-center font-medium text-black uppercase">state, country</p>

                    <h1 style={{ fontSize: "15px "}} className="text-center uppercase font-medium text-black mt-2">email</h1>
                    <h1 style={{ fontSize: "15px "}} className="text-center uppercase font-medium text-black">phone number</h1>

                  </div>
    
        
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
  );
}
