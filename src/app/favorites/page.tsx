'use client';

import ProductCard from "@/components/ProductCard";
import { useFavoritesStore } from "@/store/favorites";
import { useEffect, useState } from "react";

interface Product {
  _id: string;
  name: string;
  description: string;
  price: number;
  image: string;
}

export default function Page() {
  const ids = useFavoritesStore((s) => s.ids);
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (ids.length > 0) {
      fetch("/api/products")
        .then((r) => r.json())
        .then((all: Product[]) => {
          const favoriteProducts = all.filter((p) => ids.includes(p._id));
          setProducts(favoriteProducts);
          setLoading(false);
        })
        .catch((error) => {
          console.error("Failed to fetch products:", error);
          setProducts([]);
          setLoading(false);
        });
    } else {
      setProducts([]);
      setLoading(false);
    }
  }, [ids]);

  if (loading) {
    return (
      <div className="max-w-7xl mx-auto px-4 py-12">
        <h2 className="text-2xl font-semibold text-gold mb-8">Favorites</h2>
        <div className="mt-8 text-center py-12">
          <p className="text-gray-600">Loading your favorites...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-4 py-12">
      <h2 className="text-2xl font-semibold text-gold mb-8">Favorites</h2>
      {products.length === 0 ? (
        <div className="mt-8 text-center py-12">
          <p className="text-gray-600">
            You haven{`'`}t added any products to your favorites yet.
          </p>
        </div>
      ) : (
        <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.map((p) => (
            <ProductCard key={p._id} {...p} />
          ))}
        </div>
      )}
    </div>
  );
}