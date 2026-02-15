"use client";

import { Search } from "lucide-react";
import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute inset-0 green-glow opacity-50" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          {/* Left Content */}
          <div className="relative z-10">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight">
              Ant Services is the{" "}
              <span className="text-green-500">#1</span>
              <br />
              destination for all your needs!
            </h1>

            {/* Search Bar */}
            <div className="mt-8 relative max-w-md">
              <div className="flex items-center bg-[#1a1a1a] border border-white/10 rounded-lg overflow-hidden">
                <Search className="w-5 h-5 text-gray-500 ml-4" />
                <input
                  type="text"
                  placeholder="Search for products..."
                  className="flex-1 bg-transparent px-4 py-3 text-white placeholder:text-gray-500 outline-none"
                />
              </div>
            </div>

            {/* Shop Now Button */}
            <Button className="mt-6 bg-green-500 hover:bg-green-600 text-black font-semibold px-8 py-6 rounded-lg text-base">
              Shop Now
            </Button>
          </div>

          {/* Right Image */}
          <div className="relative hidden md:block">
            <div className="absolute inset-0 green-glow scale-150" />
            <Image
              src="https://ibb.co/79g676p"
              alt="GTA Characters"
              width={600}
              height={500}
              className="relative z-10 object-contain"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
}
