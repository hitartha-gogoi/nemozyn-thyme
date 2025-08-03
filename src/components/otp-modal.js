'use client';
import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from 'framer-motion';

export default function OtpModal({ open, onClose }) {
  const [timer, setTimer] = useState(30); // countdown in seconds
  const [resendVisible, setResendVisible] = useState(false);

  

  useEffect(() => {
    let interval;
    if (timer > 0) {
      setResendVisible(false);
      interval = setInterval(() => {
        setTimer((prev) => prev - 1);
      }, 1000);
    } else {
      setResendVisible(true);
      clearInterval(interval);
    }

    return () => clearInterval(interval);
  }, [timer]);

  const handleResend = () => {
    // add resend logic here (API call etc.)
    setTimer(30); // restart timer
  };

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          className="fixed inset-0 bg-black text-black bg-opacity-60 flex justify-center items-center z-[9999]"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose} // this handles background click
        >
          <motion.div
            className="relative bg-white p-8 w-[90%] max-w-md rounded-md shadow-lg text-center"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.8, opacity: 0 }}
            transition={{ duration: 0.3 }}
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              onClick={onClose}
              className="absolute top-4 right-4 text-xl font-bold"
            >
              ✕
            </button>

            <h2 className="text-lg font-semibold uppercase tracking-wider  overused-grotesk-semibold">VERIFY OTP</h2>
            <p className="text-sm mt-2 mb-6  overused-grotesk-medium">
              We’ve sent a 6-digit code to your phone/email. Please enter it below to continue.
            </p>

            {/* OTP Input */}
            <input
              type="text"
              maxLength={6}
              className="w-full border border-black px-4 py-2 text-center tracking-widest text-xl font-mono"
            />

            {/* Continue Button */}
            <button onClick={onClose} className="mt-6  overused-grotesk-semibold border border-black px-6 py-2 uppercase text-xs font-bold hover:bg-black hover:text-white transition">
              Continue
            </button>

            {/* Resend Section */}
            <div className="mt-6 text-sm text-gray-500  overused-grotesk-medium">
              <p>Didn't receive the code?</p>
              <motion.div className="text-sm text-gray-600 mt-4">
      {resendVisible ? (
        <motion.button
          whileTap={{ scale: 0.95 }}
          onClick={handleResend}
          className="text-blue-600 font-semibold hover:underline  overused-grotesk-semibold"
        >
          Resend Code
        </motion.button>
      ) : (
        <span className=" overused-grotesk-semibold">Resend in {timer}s</span>
      )}
    </motion.div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
