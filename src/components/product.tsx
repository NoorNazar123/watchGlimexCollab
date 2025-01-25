"use client"; // Add this line at the top

import React, { useState } from "react";
import Link from "next/link";
import { products } from "@/data/productdata";
import Button from "./Button";

const ProductSection: React.FC = () => {
  // Set up state for selected category
  const [category, setCategory] = useState<string>("all");

  // Filter products based on the selected category
  const filteredProducts =
    category === "all"
      ? products
      : products.filter((product) => product.gender === category);

  return (
    <section id="products" className="relative bg-[#0c1425] text-[#fff] py-16">
      <div className="container mx-auto relative z-20">
        <h2 className="text-center text-3xl md:text-5xl font-900 mb-10">
          Our Products
        </h2>

        {/* Buttons to filter products */}
        <div className="text-center mb-6 flex w-[90%] mx-auto justify-center  gap-2 md:gap-4 px-4 md:px-2 ">
          <Button
            onClick={() => setCategory("all")}
            className="hidden md:block"
          >
            All
          </Button>
          <Button onClick={() => setCategory("men")}>Men</Button>
          <Button onClick={() => setCategory("women")}>Women</Button>
          <Button onClick={() => setCategory("couple")}>Couple</Button>
        </div>

        {/* Product Cards Grid */}
        <div className="grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 px-6 cursor-pointer">
          {filteredProducts?.map((product) => (
            <Link href={`/product/${product.id}`} key={product.id}>
              <div className="relative bg-[#202935] text-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transform hover:-translate-y-1 transition duration-300 pb-[8px] z-30">
                {/* Decorative Background */}
                <div className="absolute inset-0">
                  <div className="absolute -top-10 -left-10 w-56 h-56 bg-blue-700 opacity-30 blur-2xl rounded-full"></div>
                </div>

                {/* Product Image */}
                <img
                  src={`/images/${product.image}`}
                  alt={product.title}
                  className="relative z-10 w-full h-48 object-cover rounded-t-lg"
                />

                {/* Product Details */}
                <div className="relative z-10 p-4">
                  <h3 className="text-xl font-bold mb-2">{product.title}</h3>
                  <p className="text-gray-300 mb-4 line-clamp-3 min-h-[75px]">
                    {product.description}
                  </p>
                  <div className="text-lg font-semibold text-blue-400 mb-4">
                    <span className="text-red-500 line-through">
                      {Number(product.price.replace("Rs", "")) * 1.2}Rs
                    </span>{" "}
                    | <span className="text-white">{product.price}</span>
                  </div>
                  <Button children="See more" onClick={() => { }} />
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>

      {/* Decorative Background Shapes */}
      <div className="absolute inset-0 overflow-hidden z-10">
        <div className="absolute -top-20 -left-20 w-96 h-96 bg-blue-700 rounded-full opacity-20 blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-pink-600 rounded-full opacity-20 blur-3xl"></div>
      </div>
    </section>
  );
};

export default ProductSection;

// import React from "react";
// import Link from "next/link";
// import { products } from "@/data/productdata";
// import Button from "./Button";

// const ProductSection: React.FC = () => {

//   const filterProduct = products.filter((product => product.gender === "men"));
//   console.log('Filter:', filterProduct);

//   return (
//     <section id="products" className="relative bg-[#0c1425] text-[#fff] py-16">
//       <div className="container mx-auto relative z-20">
//         <h2 className="text-center text-3xl font-bold mb-10">Our Products</h2>

//         {/* Product Cards Grid */}
//         <div className="grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 px-6 cursor-pointer">
//           {products.map((product) => (
//             <Link href={`/product/${product.id}`} key={product.id}>
//               <div className="relative bg-[#202935] text-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transform hover:-translate-y-1 transition duration-300 pb-[8px] z-30">
//                 {/* Decorative Background */}
//                 <div className="absolute inset-0">
//                   <div className="absolute -top-10 -left-10 w-56 h-56 bg-blue-700 opacity-30 blur-2xl rounded-full"></div>
//                 </div>

//                 {/* Product Image */}
//                 <img
//                   src={`/images/${product.image}`}
//                   alt={product.title}
//                   className="relative z-10 w-full h-48 object-cover rounded-t-lg"
//                 />

//                 {/* Product Details */}
//                 <div className="relative z-10 p-4">
//                   <h3 className="text-xl font-bold mb-2">{product.title}</h3>
//                   <p className="text-gray-300 mb-4 line-clamp-3 min-h-[75px]">
//                     {product.description}
//                   </p>
//                   <div className="text-lg font-semibold text-blue-400 mb-4">
//                     <span className="text-red-500 line-through">
//                       {Number(product.price.replace("Rs", "")) * 1.2}Rs
//                     </span>{" "}
//                     | <span className="text-white">{product.price}</span>
//                   </div>
//                   <Button children="See more" />

//                 </div>
//               </div>
//             </Link>
//           ))}
//         </div>
//       </div>

//       {/* Decorative Background Shapes */}
//       <div className="absolute inset-0 overflow-hidden z-10">
//         <div className="absolute -top-20 -left-20 w-96 h-96 bg-blue-700 rounded-full opacity-20 blur-3xl"></div>
//         <div className="absolute bottom-0 right-0 w-96 h-96 bg-pink-600 rounded-full opacity-20 blur-3xl"></div>
//       </div>
//     </section>
//   );
// };

// export default ProductSection;
