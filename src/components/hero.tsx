"use client";
import React, { useState, useEffect } from "react";
import { titles } from "@/data/sliderdata";

const Hero: React.FC = () => {
  const [currentTitleIndex, setCurrentTitleIndex] = useState(0);

  // Automatically change titles every 3 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTitleIndex((prevIndex) => (prevIndex + 1) % titles.length);
    }, 3000); // Change title every 3 seconds

    // Clear interval on component unmount
    return () => clearInterval(interval);
  }, [titles.length]);

  return (
    <section className="relative bg-[#0c1425] text-white">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-center md:justify-between py-10 md:py-44 px-6 relative z-20">
        {/* Left Side: Title Slider */}
        <div className="md:w-1/2 text-center md:text-left">
          <h1 className="text-4xl font-black lg:text-6xl mb-4 leading-[35px] transition duration-600">
            {titles[currentTitleIndex].title}
          </h1>
          <p className="text-gray-300 text-[18px] md:text-lg my-6 py-4">
            {titles[currentTitleIndex].desc}
          </p>

          <a
            href="#products"
            className="px-[35px] py-[15px] text-white font-medium rounded-lg transition duration-300 shadow-lg 
             bg-gradient-to-r from-[#caad05] to-[#8b6f02] 
             hover:from-[#e4c10a] hover:to-[#5a4801]"
          >
            Shop Now
          </a>
        </div>

        {/* Right Side: Watch Image */}
        <div className="mt-10 md:mt-0 h-[350px] md:w-1/2 flex justify-center">
          <img
            src={`/images/${titles[currentTitleIndex].img}`} // Replace with your actual image URL
            alt="Luxury Watch"
            className="max-w-full object-contain h-auto transform scale-95 md:scale-105 hover:scale-110 md:mt-0 mt-[20px] transition duration-500"
          />
        </div>
      </div>

      {/* Decorative Background Shape */}
      <div className="absolute inset-0 overflow-hidden z-10">
        <div className="absolute -top-20 -left-20 w-96 h-96 bg-blue-700 rounded-full opacity-20 blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-pink-600 rounded-full opacity-20 blur-3xl"></div>
      </div>
    </section>
  );
};

export default Hero;
