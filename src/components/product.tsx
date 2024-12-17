import React from "react";
import Link from "next/link";
import { products } from "@/data/productdata";

// const products: Product[] = [
//   {
//     id: 1,
//     title: "Hublot",
//     description:
//       "Elegant and precise craftsmanship.and precise craftsmanship and precise craftsmanship.",
//     price: "3500 Rs",
//     gender: "men",
//     image: "", // Replace with your image paths
//   },
//   {
//     id: 2,
//     title: "LED Touch Digital",
//     description: "Perfect for every occasion.",
//     gender: "women",
//     price: "1500 Rs",
//     image: "/ledtouch.jpeg", // Replace with your image paths
//   },
//   {
//     id: 3,
//     title: "Xenlex Gents",
//     description: "Timeless style and durability.",
//     price: "3000 Rs",
//     gender: "men",
//     image: "/xenlex.jpeg", // Replace with your image paths
//   },
//   {
//     id: 4,
//     title: "Audemars Piguet",
//     description: "Elegant and precise craftsmanship.",
//     price: "18000 Rs",
//     gender: "men",
//     image: "/hublot.jpeg", // Replace with your image paths
//   },
//   {
//     id: 5,
//     title: "Rolex Watch",
//     description: "Perfect for every occasion.",
//     price: "1500 Rs",
//     gender: "men",
//     image: "/ledtouch.jpeg", // Replace with your image paths
//   },
//   {
//     id: 6,
//     title: "Patex Philippe",
//     description: "Perfect for every occasion.",
//     price: "18000 Rs",
//     gender: "men",
//     image: "/ledtouch.jpeg", // Replace with your image paths
//   },
//   {
//     id: 7,
//     title: "Tag Heuer Autamatic",
//     description: "Timeless style and durability.",
//     price: "18000 Rs",
//     gender: "men",
//     image: "/xenlex.jpeg", // Replace with your image paths
//   },
//   {
//     id: 8,
//     title: "Tag Heuer Master",
//     description: "Timeless style and durability.",
//     price: "18000 Rs",
//     gender: "men",
//     image: "/xenlex.jpeg", // Replace with your image paths
//   },
//   {
//     id: 9,
//     title: "Tag Heuer Monaca",
//     description: "Timeless style and durability.",
//     price: "18000 Rs",
//     gender: "men",
//     image: "/xenlex.jpeg", // Replace with your image paths
//   },
// ];

const ProductSection: React.FC = () => {
  return (
    <section id="products" className="relative bg-[#0c1425] text-[#fff] py-16">
      <div className="container mx-auto relative z-20">
        <h2 className="text-center text-3xl font-bold mb-10">Our Products</h2>

        {/* Product Cards Grid */}
        <div className="grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 px-6 cursor-pointer">
          {products.map((product) => (
            <Link href={`/product/${product.id}`} key={product.id}>
              <div className="relative bg-[#202935] text-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transform hover:-translate-y-1 transition duration-300 z-30">
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
                  <p className="text-gray-300 mb-4 line-clamp-3">
                    {product.description}
                  </p>
                  <div className="text-lg font-semibold text-blue-400 mb-4">
                   <span className="text-red-500 line-through">{Number(product.price.replace('Rs','')) * 1.2}Rs</span> | <span className="text-white">{product.price}</span>
                  </div>
                  <a
                    href="#"
                    className="bg-blue-600 hover:bg-blue-700 my-3 text-white py-3 px-6 rounded-lg text-lg transition duration-300"
                  >
                    See more
                  </a>
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
