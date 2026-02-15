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


          </div>

          {/*  */}
          <div className="">
            <div className="" />
            <Image
              src=""
              alt=""
              width={0}
              height={0}
              className=""
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
}
