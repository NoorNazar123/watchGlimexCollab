"use client";
import React, { useState, useEffect } from "react";
import Button from "./Button";

const Hero: React.FC = () => {
  const titles = [
    {
      title: "Hublot",
      desc: "Discover our exquisite collection of watches, combining style and precision for a truly timeless experience.",
      img: "hublot.png",
    },
    {
      title: "LED Touch ",
      desc: "Experience modern digital convenience with our sleek LED touch watches, perfect for any occasion.",
      img: "ledTouchDigitalWomen.png",
    },
    {
      title: "Xenlex",
      desc: "Discover our collection of watches, combining style and precision for a truly timeless experience.",
      img: "xenlexSlider.png",
    },
    {
      title: "Audemars Piguet",
      desc: "Indulge in unparalleled luxury and precise craftsmanship with our iconic Audemars Piguet collection.",
      img: "audemarsPiguet.png",
    },
    {
      title: "Rolex Oyster ",
      desc: "Embrace sophistication and prestige with our Rolex collection, perfect for formal occasions.",
      img: "rolexSlider.png",
    },
    {
      title: "Patek Philippe",
      desc: "Timeless design meets unrivaled craftsmanship in our Patek Philippe collection, ideal for collectors.",
      img: "patekPhilippe.png",
    },
    {
      title: "Tag Heuer Automatic",
      desc: "Durable and precise, our Tag Heuer Automatic watches are built for sporty adventures and elegance.",
      img: "HeuerAutomatic.png",
    },
    {
      title: "Tag Heuer Carrera",
      desc: "Rugged performance meets sophisticated aesthetics in our Tag Heuer Carrera collection.",
      img: "tagHeuerCarrera.png",
    },
    {
      title: "Tag Heuer Monaco",
      desc: "Exude confidence and heritage with the bold design of our Tag Heuer Monaco collection.",
      img: "tagHeuerMonaco.png",
    },
    {
      title: "TISSOT",
      desc: "Quartz movement, all inner dials working, steel bracelet with great quality and finishing. Quantity available.",
      img: "tissotSlider.png",
    },
    {
      title: "ROLEX",
      desc: "Quartz movement, GMT working, date working, rotatable bezel with great quality and finishing. Price: 3500 Rs.",
      img: "rolexQSlider.png",
    },
  ];

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
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-center md:justify-between py-10 md:py-24 px-6 relative z-20">
        {/* Left Side: Title Slider */}
        <div className="md:w-1/2 text-center md:text-left">
          <h1 className="text-4xl font-black lg:text-6xl font-bold mb-4 leading-[35px] transition duration-600">
            {titles[currentTitleIndex].title}
          </h1>
          <p className="text-gray-300 text-[18px] md:text-lg mb-6">
            {titles[currentTitleIndex].desc}
          </p>
          {/* <a
            href="#products"
            className="hover:bg-[#374151] bg-[#11141a] text-white py-3 px-6 rounded-lg text-lg transition duration-300"
          >
            Shop Now
          </a> */}
          <Button
            children="Shop Now"
            href="#products"
            className="px-[35px] py-[15px]"
          />
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
