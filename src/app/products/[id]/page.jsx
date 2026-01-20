"use client";

import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import ProductDetails from "../../../components/products/ProductDetails";
import Loader from "@/components/ui/Loader";

export default function ProductDetailsPage() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!id) return;

    fetch(`https://dummyjson.com/products/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setProduct(data);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, [id]);

  if (loading) {
    return <Loader />
  }

  if (!product || product.message) {
    return <p className="text-center mt-20">Product not found</p>;
  }

  return (
    <div className="p-10 min-h-screen">
      <ProductDetails product={product} />
    </div>
  );
}
