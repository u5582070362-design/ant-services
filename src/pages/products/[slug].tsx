import { useRouter } from "next/router";
import Image from "next/image";
import { products } from "c:/Users/tamar/Downloads/gorilla-modz-clone/src/components/Products";

export default function ProductPage() {
  const router = useRouter();
  const { slug } = router.query;

  if (!slug) return <p className="p-6 text-white">Loading...</p>;

  const product = products.find(p => p.slug === slug);
  if (!product) return <p className="p-6 text-white">Product not found</p>;

  return (
    <div className="p-6 max-w-2xl mx-auto">
      <h1 className="text-3xl font-bold mb-4 text-white">{product.name}</h1>
      <div className="w-full h-64 mb-4 relative">
        <Image src={product.image} alt={product.name} fill className="object-contain" />
      </div>
      <p className="text-gray-400 line-through">{product.oldPrice}</p>
      <p className="text-2xl font-bold text-green-400">{product.price}</p>
    </div>
  );
}
