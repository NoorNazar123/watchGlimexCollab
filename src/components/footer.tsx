import React from "react";
import SocialLink from "./SocialLink";
import Link from 'next/link';


const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-10">
      <div className="container mx-auto px-4 py-16 grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Logo and Description */}

        <div className="flex flex-col items-center  md:items-start md:text-left">
          <Link href="/">
            <img
              src="/images/watchglamixlogo.png"
              alt="Logo"
              className="w-40 mb-4 mx-auto md:mx-0"
            />
          </Link>
          <p className="text-sm text-center md:text-start px-4 md:p-1">
            Discover timeless elegance with our premium watches. Shop WatchGlamix today!
          </p>
        </div>


        {/* Social Media Links */}
        <div className="flex flex-col items-center md:items-center">
          <h4 className="text-lg font-semibold mb-4">Follow Us</h4>
          <SocialLink />
        </div>

        {/* Contact Information */}
        <div className="text-center md:text-left">
          <h4 className="text-lg font-semibold mb-4">Contact Us</h4>
          {/* Clickable Email */}
          <p className="text-sm">
            Email:
            <a
              href="mailto:watchglamix@gmail.com"
              className="text-blue-500 hover:underline"
            >
              watchglamix@gmail.com
            </a>
          </p>
          {/* Clickable Phone */}
          <p className="text-sm">
            Phone:{" "}
            <a
              href="tel:+923283579545"
              className="text-blue-500 hover:underline"
            >
              03283579545
            </a>
          </p>
          <p className="text-sm">We are available 24/7 for your convenience!</p>
        </div>

      </div>

      {/* Copyright Section */}
      <div className="mt-8 text-center border-t border-gray-800 pt-4">
        <p className="text-sm">
          &copy; {new Date().getFullYear()} YourStore. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
