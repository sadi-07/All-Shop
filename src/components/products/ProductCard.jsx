import Image from "next/image";
import Link from "next/link";

export default function ProductCard({ product }) {
  return (
    <div className="border rounded-lg p-4 shadow hover:shadow-lg transition">
      <Image
        src={product.thumbnail}
        alt={product.title}
        className="h-40 w-full object-cover rounded"
      />

      <h3 className="font-bold mt-3">{product.title}</h3>

      <p className="text-sm text-gray-600 mt-1 line-clamp-2">
        {product.description}
      </p>

      <div className="flex justify-between items-center mt-3">
        <span className="font-semibold">${product.price}</span>
        <span className="text-sm text-yellow-600">
          ⭐ {product.rating}
        </span>
      </div>

      <Link
        href={`/products/${product.id}`}
        className="block text-center mt-4 bg-blue-600 text-white py-2 rounded hover:bg-blue-700"
      >
        View Details
      </Link>
    </div>
  );
}
