"use client";

import Image from "next/image";
import { Button } from "@/components/ui/button";

// Product list
export const products = [
  {
    name: "Club 44 Solo Public",
    price: "100 USD",
    oldPrice: "125 USD",
    image: "https://i.ibb.co/0RdszGyZ/club44.png",
    description: "Premium ch3at with smooth performance and clean UI for ultimate gaming experience.",
  },
];

export default function Products() {
  return (
    <section id="products" className="py-16 bg-[#0c0c0c]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl md:text-5xl font-bold text-white text-center mb-12">
          Products
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product, i) => (
            <div
              key={i}
              className="bg-[#111] rounded-3xl border border-white/5 p-6 shadow-lg hover:shadow-green-500/30 transition-shadow cursor-pointer"
            >
              <div className="relative w-full h-64 mb-4">
                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  className="object-contain rounded-2xl"
                />
              </div>
              <h3 className="text-2xl font-bold text-white mb-2">{product.name}</h3>
              <p className="text-gray-400 line-through">{product.oldPrice}</p>
              <p className="text-xl font-bold text-green-500 mb-4">{product.price}</p>
              <p className="text-gray-300 mb-6">{product.description}</p>
              <Button className="w-full bg-green-500 hover:bg-green-600 text-black font-semibold px-6 py-3 rounded-2xl transition-all shadow-md hover:shadow-green-500/40">
                Purchase Now in our discord! https://discord.gg/Cy7WEHzaeK
              </Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
