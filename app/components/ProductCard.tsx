"use client";

import Image from "next/image";

interface ProductCardProps {
  name: string;
  type: string;
  price: string;
  image: string;
  emoji?: string;
}

export default function ProductCard({
  name,
  type,
  price,
  image,
  emoji = "🌾",
}: ProductCardProps) {
  return (
    <div className="group cursor-pointer bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow">
      {/* Product Image Container */}
      <div className="relative aspect-square overflow-hidden bg-gradient-to-br from-gray-50 to-gray-100">
        <div className="absolute inset-0 flex items-center justify-center p-8">
          <div className="text-8xl">{emoji}</div>
        </div>
      </div>

      {/* Product Info */}
      <div className="p-4 space-y-2">
        <h3 className="text-lg font-bold uppercase tracking-wide">{name}</h3>
        <p className="text-sm text-gray-600">{type}</p>
        <div className="flex items-center justify-between pt-2">
          <p className="text-xl font-bold text-green-600">{price}</p>
          <button className="px-4 py-2 bg-[#9ACD32] hover:bg-[#8BC020] text-black font-medium rounded transition-colors text-sm">
            Ajouter
          </button>
        </div>
      </div>
    </div>
  );
}
