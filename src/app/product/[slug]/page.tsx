"use client";
import React, { use, useState } from "react";
import { useRouter } from "next/navigation";
import OrderModal from "./ordermodal";
import { products } from "@/data/productdata";

const ProductPage: React.FC = (props: any) => {
  const params: any = use(props.params);
  const id = params.slug;
  const product = products.filter((pro) => pro.id == id)[0];

  const [activeImage, setActiveImage] = useState(product.images[0]);
  const [isZoomed, setIsZoomed] = useState(false);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [, , imgTitle, variant] = activeImage.split("/");
  const watchvariant = `${variant.split(".")[0]}`;
  const actualPrice = Math.floor(
    parseFloat(product.price.replace("$", "")) * 1.15
  )
  const discountedPrice = product.price.replace("$", "");

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * 100;
    const y = ((e.clientY - rect.top) / rect.height) * 100;
    setPosition({ x, y });
  };
  console.log(activeImage, "activeImage");
  return (
    <div className="relative bg-[#0c1425] text-gray-900 min-h-screen">
      {/* Decorative Background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-20 -left-20 w-96 h-96 bg-blue-700 rounded-full opacity-20 blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-pink-600 rounded-full opacity-20 blur-3xl"></div>
      </div>

      <div className="container mx-auto px-6 py-16 relative z-10 flex flex-col md:flex-row items-center md:items-start justify-between">
        {/* Left: Image Crawler */}
        <div className="md:w-1/2 flex flex-col items-center w-[90%] ">
          <div
            className={`w-full h-96  shadow-2xl border-black rounded-lg  overflow-hidden flex justify-center items-center relative ${isZoomed ? "cursor-crosshair" : ""
              }`}
            onMouseMove={isZoomed ? handleMouseMove : undefined}
            onMouseEnter={() => setIsZoomed(true)}
            onMouseLeave={() => setIsZoomed(false)}
          >
            <img
              src={activeImage}
              alt={product.title}
              className={`absolute z-10 max-h-full max-w-full w-full h-full object-contain transition-transform duration-300 ${isZoomed ? "scale-150" : "scale-100"
                }`}
              style={
                isZoomed
                  ? {
                    transformOrigin: `${position.x}% ${position.y}%`,
                  }
                  : undefined
              }
            />
          </div>
          <div className="flex mt-4 space-x-4 overflow-auto">
            {product.images.map((image: any, index: number) => (
              <img
                key={index}
                src={image}
                alt={`Variant ${index + 1}`}
                className={`w-20 h-20 object-cover rounded-lg cursor-pointer border-2 ${activeImage === image ? "border-blue-600" : "border-gray-300"
                  }`}
                onClick={() => setActiveImage(image)}
              />
            ))}
          </div>
        </div>

        {/* Right: Product Details */}
        <div className="md:w-1/2 md:pl-10 mt-10 md:mt-0">
          <h1 className="text-4xl font-bold mb-4 text-white">
            {product.title}
          </h1>
          <p className="text-white text-lg mb-4">{product.description}</p>
          <div className="flex items-center gap-2 mb-6">
            <span className="text-2xl text-red-500 line-through">
              {actualPrice}Rs
            </span>

            <span className="text-gray-400 text-3xl">|</span>
            <span className="text-2xl font-semibold text-white">
              {discountedPrice}
            </span>
          </div>
          <p className="text-white text-lg mb-4">
            The watch variant is{" "}
            <span className="text-[#de9c09] font-semibold">{watchvariant}</span>
          </p>
          <div className="text-lg text-white mb-6">
            Free delivery all over pakistan
          </div>
          <button
            className="bg-gradient-to-r from-[#caad05] to-[#8b6f02] 
             hover:from-[#e4c10a] hover:to-[#5a4801] text-white py-3 px-6 rounded-lg text-lg transition duration-300"
            onClick={() => setIsModalOpen(true)}
          >
            Order Now
          </button>
        </div>
      </div>
      <OrderModal
        variant={watchvariant}
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)} // Close modal
        productId={product.id}
      />
    </div>
  );
};

export default ProductPage;

