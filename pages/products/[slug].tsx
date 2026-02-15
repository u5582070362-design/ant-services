"use client";

import { products } from "@/components/Products";
import Image from "next/image";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { useRouter } from "next/router";

export default function ProductPage() {
  const router = useRouter();
  const { slug } = router.query;

  if (!slug) return <p className="p-6 text-white">Loading...</p>;

  const product = products.find((p) => p.slug === slug);
  if (!product) return <p className="p-6 text-white">Product not found</p>;

  return (
    <main className="min-h-screen bg-[#0c0c0c] text-white font-rubik">
      <Header />

      {/* Product Section */}
      <section className="max-w-6xl mx-auto px-6 py-20">
        <div className="grid md:grid-cols-2 gap-16 items-start">

          {/* Product Image */}
          <div className="relative w-full h-[450px] bg-[#111] rounded-3xl border border-white/5 p-6 shadow-xl hover:shadow-green-500/30 transition-shadow">
            <Image
              src={product.image}
              alt={product.name}
              fill
              className="object-contain rounded-2xl"
            />
          </div>

          {/* Product Info */}
          <div className="flex flex-col gap-6">
            <div className="flex items-center gap-3">
              <span className="px-3 py-1 bg-green-500/20 text-green-400 rounded-full text-sm font-semibold">
                Best Seller
              </span>
            </div>

            <h1 className="text-5xl font-bold">{product.name}</h1>

            <div className="flex items-center gap-4">
              <p className="text-gray-400 line-through text-lg">{product.oldPrice}</p>
              <p className="text-3xl font-bold text-green-500">{product.price}</p>
            </div>

            <p className="text-gray-400 leading-relaxed">
              Premium Gorilla Mod with smooth performance, clean UI, and
              regular updates. Perfect for enhancing your gaming experience
              without compromising style.
            </p>

            <button className="w-max bg-green-500 hover:bg-green-600 text-black font-semibold px-8 py-4 rounded-2xl transition-colors shadow-md hover:shadow-green-500/40">
              Purchase Now
            </button>
          </div>
        </div>
      </section>

      {/* Reviews Section */}
      <section className="max-w-6xl mx-auto px-6 py-16">
        <h2 className="text-4xl font-bold text-white mb-8 text-center">Customer Feedback</h2>

        <div className="grid md:grid-cols-3 gap-6">
          <div className="bg-[#111] p-6 rounded-2xl border border-white/5 shadow hover:shadow-green-500/20 transition-shadow">
            <p className="text-gray-400 mb-4">
              "Club 44 mod is insane! Works perfectly and the UI looks amazing."
            </p>
            <span className="text-green-400 font-semibold">- Gamer123</span>
          </div>

          <div className="bg-[#111] p-6 rounded-2xl border border-white/5 shadow hover:shadow-green-500/20 transition-shadow">
            <p className="text-gray-400 mb-4">
              "Smooth performance and easy to use. Definitely worth it."
            </p>
            <span className="text-green-400 font-semibold">- ProPlayer</span>
          </div>

          <div className="bg-[#111] p-6 rounded-2xl border border-white/5 shadow hover:shadow-green-500/20 transition-shadow">
            <p className="text-gray-400 mb-4">
              "Best purchase for FiveM mods I’ve made. Highly recommended!"
            </p>
            <span className="text-green-400 font-semibold">- ModFanatic</span>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
