import { products } from "@/components/Products";
import Image from "next/image";
import { notFound } from "next/navigation";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function ProductPage({ params }: { params: { slug: string } }) {
  const product = products.find((p) => p.slug === params.slug);

  if (!product) {
    return notFound();
  }

  return (
    <main className="min-h-screen bg-[#0c0c0c] text-white">
      <Header />

      <section className="max-w-6xl mx-auto px-6 py-20">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          
          {/* Product Image */}
          <div className="relative w-full h-[400px] bg-[#111] rounded-2xl border border-white/5 p-8">
            <Image
              src={product.image}
              alt={product.name}
              fill
              className="object-contain"
            />
          </div>

          {/* Product Info */}
          <div>
            <h1 className="text-5xl font-bold mb-6">
              {product.name}
            </h1>

            <p className="text-gray-400 line-through text-lg">
              {product.oldPrice}
            </p>

            <p className="text-3xl font-bold text-green-500 mb-8">
              {product.price}
            </p>

            <p className="text-gray-400 mb-8 leading-relaxed">
              Premium Gorilla Tag mod menu with smooth performance,
              clean UI, and regular updates.
            </p>

            <button className="bg-green-500 hover:bg-green-600 text-black font-semibold px-8 py-4 rounded-xl transition-colors">
              Purchase Now
            </button>
          </div>

        </div>
      </section>

      <Footer />
    </main>
  );
}
