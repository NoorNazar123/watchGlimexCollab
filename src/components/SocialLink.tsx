import React from 'react'
import { Facebook, Instagram, MessageCircle } from "react-feather";

const socialLink = () => {
  return (
    <div className="flex flex-col items-center md:items-center">
          
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
                  href="https://wa.me/+923283579545"
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
  )
}

export default socialLink 
