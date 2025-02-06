"use client";
import React from "react";
import { Button } from "./ui/button";

import Navbar from "./navbar";
import Image from "next/image";

const HeroSection = () => {
  return (
    <div>
      <div className="relative h-screen">
        <Image
          src="/images/hero.jpg"
          alt="Hero background"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="absolute inset-y-0 left-0 w-1/4 bg-gradient-to-r from-black/50 via-black/10 to-transparent md:backdrop-blur-sm"></div>
        <div className="absolute inset-y-0 right-0 w-1/4 bg-gradient-to-l from-black/50 via-black/10 to-transparent md:backdrop-blur-sm"></div>
        <div className="absolute bottom-0 left-0 right-0 h-1/4 bg-gradient-to-t from-black/50 via-black/10 to-transparent md:backdrop-blur-sm"></div>
        <Navbar />
        <div className="relative z-10 flex flex-col items-center justify-center h-full text-center text-white px-4">
          <h1 className="text-sm font-light">LET&apos;S DANCE and PARTY</h1>
          <h2 className="mt-2 text-3xl md:text-5xl font-bold">
            GOOD VIBES, HERE AT BASSH
          </h2>
          <div className="mt-6 flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-4">
            <Button className="bg-pink-500 hover:bg-pink-600 w-full md:w-auto">
              Buy Tickets
            </Button>
            <Button className="border border-white hover:bg-white hover:text-black w-full md:w-auto">
              Watch Video
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
