"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { FaGoogle, FaApple } from "react-icons/fa";

export default function LoginModal({ isOpen, onClose }) {
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
            className="bg-white w-full max-w-4xl h-[500px] flex rounded shadow-lg overflow-hidden"
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            transition={{ type: "spring", stiffness: 200, damping: 20 }}
          >
            {/* Left side with logo */}
            <div style={{ backgroundImage: "url('/green-bg-logo.png')" }} className="w-1/2 bg-cover bg-center text-white font-bold flex items-center justify-center text-4xl">
            
            </div>

            {/* Right side form */}
            <div className="w-1/2 p-8 flex flex-col justify-center relative">
              {/* Close Button */}
              <button
                className="absolute top-4 right-4 text-black text-lg"
                onClick={onClose}
              >
                ✕
              </button>

              <h2 className="text-center font-semibold mb-6">SIGN IN TO CONTINUE</h2>

              <input
                type="email"
                placeholder="Email"
                className="border border-black px-4 py-2 mb-4 w-full"
              />

              <button className="border border-black px-4 py-2 mb-4 flex items-center justify-center gap-2">
                <FaGoogle /> 
              </button>

              <button className="border border-black px-4 py-2 mb-4 flex items-center justify-center gap-2">
                <FaApple /> 
              </button>

              <button className="border border-black px-4 py-2 w-3/5 mt-2 self-center">
                Continue
              </button>

              <p className="text-center text-xs mt-4 text-black">
                Don’t have an Account?{" "}
                
              </p>
              <p style={{ fontSize: "12px" }} className="underline text-black text-center font-medium  cursor-pointer">
                  Create
                </p>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
