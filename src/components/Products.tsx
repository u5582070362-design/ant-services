"use client";

import Image from "next/image";
import Link from "next/link";

export const products = [
  {
    name: "Club 44",
    slug: "club-44",
    price: "100 USD",
    oldPrice: "125 USD",
    image: "https://i.ibb.co/0RdszGyZ/club44.png",
  },
];

export default function Products() {
  return (
    <section className="p-6 max-w-4xl mx-auto">
      <h2 className="text-4xl font-bold text-white mb-12 text-center">Products</h2>

      {products.map((product) => (
        <Link
          key={product.slug}
          href={`/products/${product.slug}`}
          className="block p-6 mb-6 rounded-xl bg-[#111] border border-white/5 hover:border-green-500/30 cursor-pointer"
        >
          <div className="w-full h-64 relative mb-4">
            <Image src={product.image} alt={product.name} fill className="object-contain" />
          </div>
          <h3 className="text-2xl font-semibold text-white">{product.name}</h3>
          <p className="text-gray-400 line-through">{product.oldPrice}</p>
          <p className="text-xl font-bold text-green-400">{product.price}</p>
        </Link>
      ))}
    </section>
  );
}
