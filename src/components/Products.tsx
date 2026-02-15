"use client";

import Image from "next/image";
import Link from "next/link";

// Product type
type Product = {
  name: string;
  slug: string;
  price: string;
  oldPrice?: string;
  image: string;
};

// Only one product
const products: Product[] = [
  {
    name: "Club 44",
    slug: "club-44",
    price: "100 USD",
    oldPrice: "125 USD",
    image: "https://i.ibb.co/0RdszGyZ/club44.png", // direct image link from ibb.co
  },
];

export default function Products() {
  return (
    <section id="products" className="relative py-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl md:text-5xl font-bold text-white text-center mb-12">
          Products
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-1 gap-6">
          {products.map((product) => (
            <Link
              key={product.slug}
              href={`/products/${product.slug}`}
              className="group flex flex-col p-6 rounded-xl bg-[#111] border border-white/5 hover:border-green-500/30 transition-all cursor-pointer"
            >
              <div className="w-full h-64 rounded-lg overflow-hidden mb-4 relative">
                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  className="object-contain"
                />
              </div>

              <h3 className="text-2xl font-semibold text-white mb-2">{product.name}</h3>

              <p className="text-gray-400 line-through">{product.oldPrice}</p>
              <p className="text-xl font-bold text-green-400">{product.price}</p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
