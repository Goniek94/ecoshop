"use client";

import ProductCard from "./ProductCard";

const seedsProducts = [
  {
    id: 1,
    name: "Nasiona Chia",
    type: "Superaliment bio",
    price: "8.50 zł",
    image: "/products/chia.jpg",
    emoji: "🌾",
  },
  {
    id: 2,
    name: "Nasiona Lnu",
    type: "Omega-3 naturalne",
    price: "6.50 zł",
    image: "/products/flax.jpg",
    emoji: "🌱",
  },
  {
    id: 3,
    name: "Nasiona Dyni",
    type: "Bogate w białko",
    price: "7.50 zł",
    image: "/products/pumpkin.jpg",
    emoji: "🎃",
  },
  {
    id: 4,
    name: "Nasiona Słonecznika",
    type: "Witamina E",
    price: "5.90 zł",
    image: "/products/sunflower.jpg",
    emoji: "🌻",
  },
];

const oilsProducts = [
  {
    id: 5,
    name: "Oliwa z Oliwek",
    type: "Extra virgin bio",
    price: "24.90 zł",
    image: "/products/olive-oil.jpg",
    emoji: "🫒",
  },
  {
    id: 6,
    name: "Olej Kokosowy",
    type: "Tłoczony na zimno",
    price: "18.90 zł",
    image: "/products/coconut-oil.jpg",
    emoji: "🥥",
  },
  {
    id: 7,
    name: "Olej z Awokado",
    type: "Tłoczony na zimno",
    price: "28.50 zł",
    image: "/products/avocado-oil.jpg",
    emoji: "🥑",
  },
  {
    id: 8,
    name: "Olej Lniany",
    type: "Omega-3",
    price: "16.90 zł",
    image: "/products/flax-oil.jpg",
    emoji: "🌾",
  },
];

const superfoodsProducts = [
  {
    id: 9,
    name: "Spirulina",
    type: "Proszek organiczny",
    price: "32.90 zł",
    image: "/products/spirulina.jpg",
    emoji: "🌀",
  },
  {
    id: 10,
    name: "Jagody Goji",
    type: "Suszone bio",
    price: "22.50 zł",
    image: "/products/goji.jpg",
    emoji: "🔴",
  },
  {
    id: 11,
    name: "Acai Berry",
    type: "Proszek liofilizowany",
    price: "38.90 zł",
    image: "/products/acai.jpg",
    emoji: "🫐",
  },
  {
    id: 12,
    name: "Chlorella",
    type: "Tabletki bio",
    price: "29.90 zł",
    image: "/products/chlorella.jpg",
    emoji: "💚",
  },
];

export default function ProductGrid() {
  return (
    <div className="bg-[#F5F5F0]">
      {/* Seeds Section */}
      <section className="py-16 px-8">
        <div className="container mx-auto">
          <div className="mb-12 text-center">
            <h2 className="text-4xl font-bold mb-3 text-gray-900">
              🌾 Nasiona
            </h2>
            <p className="text-gray-600 text-lg">
              Naturalne źródło białka i błonnika
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {seedsProducts.map((product) => (
              <ProductCard
                key={product.id}
                name={product.name}
                type={product.type}
                price={product.price}
                image={product.image}
                emoji={product.emoji}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Oils Section */}
      <section className="py-16 px-8 bg-white">
        <div className="container mx-auto">
          <div className="mb-12 text-center">
            <h2 className="text-4xl font-bold mb-3 text-gray-900">🫒 Oleje</h2>
            <p className="text-gray-600 text-lg">
              Wysokiej jakości oleje tłoczone na zimno
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {oilsProducts.map((product) => (
              <ProductCard
                key={product.id}
                name={product.name}
                type={product.type}
                price={product.price}
                image={product.image}
                emoji={product.emoji}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Superfoods Section */}
      <section className="py-16 px-8">
        <div className="container mx-auto">
          <div className="mb-12 text-center">
            <h2 className="text-4xl font-bold mb-3 text-gray-900">
              ⭐ Superfoods
            </h2>
            <p className="text-gray-600 text-lg">
              Wyjątkowe produkty pełne składników odżywczych
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {superfoodsProducts.map((product) => (
              <ProductCard
                key={product.id}
                name={product.name}
                type={product.type}
                price={product.price}
                image={product.image}
                emoji={product.emoji}
              />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
