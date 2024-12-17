import React from "react";
import { Facebook, Instagram, MessageCircle } from "react-feather"; // Importing icons from react-feather

const Header: React.FC = () => {
  return (
    <header className="bg-[#0c1425] text-white shadow-md">
      <div className="container mx-auto flex items-center justify-between py-4 px-6">
        {/* Logo */}
        <div className="text-2xl font-bold">
          <a href="/" className="hover:text-gray-300 transition duration-300 w-40 md:w-60 h-16 flex">
            <img
              src={`/images/watchglamixlogo.png`} // Replace with your actual image URL
              alt="Luxury Watch"
              className="max-w-full object-contain h-auto transform scale-105 hover:scale-110 transition duration-500"
            />
          </a>
        </div>

        {/* Social Links */}
        <div className="flex space-x-4">
          {/* Facebook Button */}
          <a
            href="https://www.facebook.com/profile.php?id=61566516613862"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-gray-700 hover:bg-blue-500 text-white p-2 rounded-full transition duration-300"
            aria-label="Facebook"
          >
            <Facebook className="w-5 h-5" />
          </a>

          {/* WhatsApp Button */}
          <a
            href="https://wa.me/+923283579545" // Replace with your actual WhatsApp URL or phone number
            target="_blank"
            rel="noopener noreferrer"
            className="bg-gray-700 hover:bg-green-500 text-white p-2 rounded-full transition duration-300"
            aria-label="WhatsApp"
          >
            <MessageCircle className="w-5 h-5" />
          </a>

          {/* Instagram Button */}
          <a
            href="https://www.facebook.com/profile.php?id=61566516613862"      
            target="_blank"
            rel="noopener noreferrer"
            className="bg-gray-700 hover:bg-pink-500 text-white p-2 rounded-full transition duration-300"
            aria-label="Instagram"
          >
            <Instagram className="w-5 h-5" />
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;
