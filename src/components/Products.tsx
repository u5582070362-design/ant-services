"use client";

import Image from "next/image";

const categories = [
  {
    name: "FiveM",
    image: "https://ext.same-assets.com/765074946/1581820015.png",
    priceRange: "€3.20 - €89.99",
    productCount: "12 Products",
  },
  {
    name: "Call of Duty",
    image: "https://ext.same-assets.com/765074946/882962569.png",
    priceRange: "€3.00 - €49.99",
    productCount: "1 Products",
  },
  {
    name: "Fortnite",
    image: "https://ext.same-assets.com/765074946/1178113772.png",
    priceRange: "€3.99 - €129.99",
    productCount: "1 Products",
  },
  {
    name: "Battlefield 6",
    image: "https://ext.same-assets.com/765074946/2031644540.png",
    priceRange: "€5.99 - €169.99",
    productCount: "1 Products",
  },
  {
    name: "Rainbow Six Siege",
    image: "https://ext.same-assets.com/765074946/1791059460.png",
    priceRange: "€7.99 - €43.99",
    productCount: "2 Products",
  },
  {
    name: "Accounts",
    image: "https://ext.same-assets.com/765074946/4195961455.png",
    priceRange: "€0.10 - €4.99",
    productCount: "5 Products",
  },
  {
    name: "CS2",
    image: "https://ext.same-assets.com/765074946/2034486553.png",
    priceRange: "€2.99 - €9.99",
    productCount: "1 Products",
  },
  {
    name: "Spoofers",
    image: "https://ext.same-assets.com/765074946/905221886.png",
    priceRange: "-",
    productCount: "0 Products",
  },
];

const products = [
  {
    name: "Seryx",
    category: "FiveM",
    status: "In Stock",
    price: "€3.99 - €25.99",
  },
  {
    name: "Ham Executor",
    category: "FiveM",
    status: "In Stock",
    price: "€9.99 - €39.99",
  },
  {
    name: "Vanity Menu",
    category: "FiveM",
    status: "In Stock",
    price: "€9.99 - €29.99",
  },
  {
    name: "Ham Executor + Vanity Bundle",
    category: "FiveM",
    status: "In Stock",
    price: "€19.99 - €59.99",
  },
  {
    name: "Susano Menu",
    category: "FiveM",
    status: "Out of Stock",
    price: "€11.99 - €59.99",
  },
  {
    name: "TZ Project",
    category: "FiveM",
    status: "In Stock",
    price: "€3.99 - €39.99",
  },
];

export default function Products() {
  return (
    <section id="products" className="relative py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Title */}
        <h2 className="text-4xl md:text-5xl font-bold text-white text-center mb-12">
          Products
        </h2>

        {/* Category Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          {categories.map((category) => (
            <div
              key={category.name}
              className="group relative overflow-hidden rounded-xl bg-[#111] border border-white/5 hover:border-green-500/30 transition-all cursor-pointer"
            >
              {/* Image */}
              <div className="relative h-40 overflow-hidden">
                <Image
                  src={category.image}
                  alt={category.name}
                  fill
                  className="object-cover transition-transform group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#111] to-transparent" />
              </div>

              {/* Content */}
              <div className="p-4">
                <h3 className="text-lg font-semibold text-white mb-2">
                  {category.name}
                </h3>
                <div className="flex items-center justify-between text-sm">
                  <span className="text-gray-500">{category.priceRange}</span>
                  <span className="text-green-500">{category.productCount}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Product List */}
        <div className="mt-16">
          <h3 className="text-2xl font-bold text-white mb-6">FiveM</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {products.map((product) => (
              <div
                key={product.name}
                className="group flex items-center gap-4 p-4 rounded-xl bg-[#111] border border-white/5 hover:border-green-500/30 transition-all cursor-pointer"
              >
                {/* Icon */}
                <div className="w-12 h-12 rounded-lg bg-green-500/10 flex items-center justify-center flex-shrink-0">
                  <svg
                    className="w-6 h-6 text-green-500"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                    />
                  </svg>
                </div>

                {/* Content */}
                <div className="flex-1 min-w-0">
                  <h4 className="font-medium text-white truncate">{product.name}</h4>
                  <div className="flex items-center gap-2 mt-1">
                    <span
                      className={`text-xs px-2 py-0.5 rounded-full ${
                        product.status === "In Stock"
                          ? "bg-green-500/20 text-green-400"
                          : "bg-red-500/20 text-red-400"
                      }`}
                    >
                      {product.status}
                    </span>
                  </div>
                </div>

                {/* Price */}
                <div className="text-right">
                  <p className="text-sm text-gray-400">Price</p>
                  <p className="text-sm text-white font-medium">{product.price}</p>
                </div>

                {/* Arrow */}
                <svg
                  className="w-5 h-5 text-gray-500 group-hover:text-green-500 transition-colors"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
