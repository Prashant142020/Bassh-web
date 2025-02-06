"use client";
import React from "react";
import { motion } from "framer-motion";
import Navbar from "./navbar";
import Image from "next/image";

const HeroSection = () => {
  return (
    <div className="relative h-screen">
      <Image
        src="/images/hero.jpg" // Ensure this path is correct
        alt="Hero background"
        layout="fill"
        className="object-cover"
        priority
      />
      <div className="absolute inset-0 bg-black opacity-50"></div>
      <motion.div
        className="relative z-10 flex flex-col items-center justify-center h-full text-center text-white px-4"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h1 className="text-sm font-light">LET&apos;S DANCE &amp; PARTY</h1>
        <h2 className="mt-2 text-5xl font-bold">GOOD VIBES, HERE AT CLUB X</h2>
        <div className="mt-6 flex space-x-4">
          <motion.button
            className="bg-pink-500 hover:bg-pink-600 px-4 py-2 rounded"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            Buy Tickets
          </motion.button>
          <motion.button
            className="border border-white hover:bg-white hover:text-black px-4 py-2 rounded"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            Watch Video
          </motion.button>
        </div>
      </motion.div>
      <Navbar />
    </div>
  );
};

export default HeroSection;
