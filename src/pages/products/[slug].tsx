import Image from "next/image";
import { useRouter } from "next/router";
import { products } from "@/components/products";
import { useEffect, useState } from "react";

export default function ProductPage() {
  const router = useRouter();
  const [product, setProduct] = useState<any>(null);

  useEffect(() => {
    if (!router.isReady) return; // wait until router is ready
    const slug = router.query.slug as string;
    const found = products.find(p => p.slug === slug);
    setProduct(found || null);
  }, [router.isReady, router.query.slug]);

  if (!product) return <p className="p-6 text-white">Product not found</p>;

  return (
    <div className="p-6 max-w-2xl mx-auto">
      <h1 className="text-3xl font-bold mb-4 text-white">{product.name}</h1>
      <div className="w-full h-64 mb-4 relative">
        <Image
          src={product.image}
          alt={product.name}
          fill
          className="object-contain"
        />
      </div>
      <p className="text-gray-400 line-through">{product.oldPrice}</p>
      <p className="text-2xl font-bold text-green-400">{product.price}</p>
    </div>
  );
}
