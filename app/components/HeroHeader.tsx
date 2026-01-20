"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const products = [
  {
    id: 1,
    name: "Olej Kokosowy",
    subtitle: "Virgin • Organiczny",
    description:
      "Najwyższej jakości olej kokosowy tłoczony na zimno z ekologicznych plantacji. Idealny do gotowania i pielęgnacji.",
    properties: [
      "Tłoczony na zimno",
      "Certyfikat BIO",
      "Bez rafinacji",
      "Pojemność 500ml",
    ],
    price: "29.99 zł",
    bgColor: "from-yellow-900 via-yellow-700 to-amber-900",
    emoji: "🥥",
  },
  {
    id: 2,
    name: "Oliwa z Oliwek",
    subtitle: "Extra Virgin • Grecka",
    description:
      "Wyjątkowa oliwa z pierwszego tłoczenia z greckich gajów oliwnych. Bogata w antyoksydanty i witaminy.",
    properties: [
      "Extra Virgin",
      "Pierwszego tłoczenia",
      "Z Grecji",
      "Pojemność 750ml",
    ],
    price: "39.99 zł",
    bgColor: "from-green-900 via-green-700 to-emerald-900",
    emoji: "🫒",
  },
  {
    id: 3,
    name: "Mix Orzechów Premium",
    subtitle: "Naturalne • Nieprażone",
    description:
      "Starannie wyselekcjonowane orzechy i bakalie. Naturalne źródło białka, zdrowych tłuszczów i energii.",
    properties: [
      "Bez dodatków",
      "Nieprażone",
      "Bogate w omega-3",
      "Pojemność 300g",
    ],
    price: "24.99 zł",
    bgColor: "from-orange-900 via-orange-700 to-red-900",
    emoji: "🌰",
  },
  {
    id: 4,
    name: "Nasiona Chia",
    subtitle: "Superfood • Bio",
    description:
      "Organiczne nasiona chia pełne błonnika i omega-3. Doskonałe do smoothie, owsianki i wypieków.",
    properties: [
      "Certyfikat BIO",
      "Bogate w błonnik",
      "Źródło omega-3",
      "Pojemność 250g",
    ],
    price: "19.99 zł",
    bgColor: "from-purple-900 via-purple-700 to-indigo-900",
    emoji: "🌾",
  },
];

export default function HeroHeader() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(1);
  const [isPaused, setIsPaused] = useState(false);

  // Auto-play co 5 sekund
  useEffect(() => {
    if (isPaused) return;

    const timer = setInterval(() => {
      nextSlide();
    }, 5000);

    return () => clearInterval(timer);
  }, [currentIndex, isPaused]);

  const nextSlide = () => {
    setDirection(1);
    setCurrentIndex((prev) => (prev + 1) % products.length);
  };

  const prevSlide = () => {
    setDirection(-1);
    setCurrentIndex((prev) => (prev - 1 + products.length) % products.length);
  };

  const currentProduct = products[currentIndex];

  // Animacja "przewracania kartki"
  const pageVariants = {
    enter: (direction: number) => ({
      rotateY: direction > 0 ? 90 : -90,
      opacity: 0,
      scale: 0.9,
    }),
    center: {
      rotateY: 0,
      opacity: 1,
      scale: 1,
    },
    exit: (direction: number) => ({
      rotateY: direction > 0 ? -90 : 90,
      opacity: 0,
      scale: 0.9,
    }),
  };

  return (
    <div className="relative bg-gradient-to-br from-gray-900 via-gray-800 to-black min-h-screen flex items-center justify-center p-4 md:p-8">
      {/* Tło ze wzorem */}
      <div className="absolute inset-0 opacity-10">
        <div className="w-full h-full bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmZmZmYiIGZpbGwtb3BhY2l0eT0iMC4xIj48cGF0aCBkPSJNMzYgMzR2LTRoLTJ2NGgtNHYyaDR2NGgydi00aDR2LTJoLTR6bTAtMzBWMGgtMnY0aC00djJoNHY0aDJWNmg0VjRoLTR6TTYgMzR2LTRINHY0SDB2Mmg0djRoMnYtNGg0di0ySDZ6TTYgNFYwSDR2NEgwdjJoNHY0aDJWNmg0VjRINnoiLz48L2c+PC9nPjwvc3ZnPg==')] bg-repeat"></div>
      </div>

      {/* Ekran z produktem */}
      <div
        className="relative w-full max-w-6xl aspect-[16/10] rounded-3xl overflow-hidden border-2 border-white/20 shadow-2xl"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
      >
        <AnimatePresence initial={false} custom={direction} mode="wait">
          <motion.div
            key={currentProduct.id}
            custom={direction}
            variants={pageVariants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{
              rotateY: { type: "spring", stiffness: 80, damping: 20 },
              opacity: { duration: 0.4 },
              scale: { duration: 0.4 },
            }}
            className="absolute inset-0 w-full h-full"
            style={{ transformStyle: "preserve-3d" }}
          >
            {/* Tło produktu */}
            <div
              className={`absolute inset-0 bg-gradient-to-br ${currentProduct.bgColor}`}
            >
              <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/30 to-black/70" />
              <div className="w-full h-full flex items-center justify-center">
                <div className="text-[20rem] opacity-10">
                  {currentProduct.emoji}
                </div>
              </div>
            </div>

            {/* Zawartość */}
            <div className="relative z-10 h-full flex flex-col justify-between p-8 md:p-12 text-white">
              {/* Górna sekcja */}
              <div className="space-y-4">
                <motion.p
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 }}
                  className="text-xs md:text-sm tracking-[0.3em] uppercase text-green-300 font-light"
                >
                  {currentProduct.subtitle}
                </motion.p>
                <motion.h1
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 }}
                  className="text-4xl md:text-6xl lg:text-7xl font-serif font-light leading-tight"
                >
                  {currentProduct.name}
                </motion.h1>
                <motion.p
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.5 }}
                  className="text-base md:text-lg text-gray-200 font-light max-w-2xl leading-relaxed"
                >
                  {currentProduct.description}
                </motion.p>
              </div>

              {/* Środkowa sekcja - właściwości */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
                className="grid grid-cols-2 gap-3 md:gap-4"
              >
                {currentProduct.properties.map((prop, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.7 + index * 0.1 }}
                    className="flex items-center gap-2 text-xs md:text-sm bg-white/10 backdrop-blur-md px-3 md:px-4 py-2 md:py-3 rounded-xl border border-white/10"
                  >
                    <span className="text-green-400 text-lg">✓</span>
                    <span className="font-light">{prop}</span>
                  </motion.div>
                ))}
              </motion.div>

              {/* Dolna sekcja - CTA */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8 }}
                className="flex flex-col md:flex-row items-center justify-between gap-4"
              >
                <div className="flex items-center gap-6">
                  <div className="text-3xl md:text-4xl font-bold">
                    {currentProduct.price}
                  </div>
                  <button className="px-8 md:px-12 py-3 md:py-4 bg-white text-gray-900 font-bold rounded-xl hover:bg-green-400 hover:scale-105 transition-all text-base md:text-lg shadow-2xl">
                    Kup teraz →
                  </button>
                </div>
                <div className="text-sm text-white/50 font-light">
                  {currentIndex + 1} / {products.length}
                </div>
              </motion.div>
            </div>
          </motion.div>
        </AnimatePresence>

        {/* Strzałki nawigacji */}
        <button
          onClick={prevSlide}
          className="absolute left-4 md:left-6 top-1/2 transform -translate-y-1/2 z-20 w-12 h-12 md:w-14 md:h-14 bg-white/10 hover:bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center text-white text-xl md:text-2xl transition-all hover:scale-110 border border-white/20"
        >
          ←
        </button>
        <button
          onClick={nextSlide}
          className="absolute right-4 md:right-6 top-1/2 transform -translate-y-1/2 z-20 w-12 h-12 md:w-14 md:h-14 bg-white/10 hover:bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center text-white text-xl md:text-2xl transition-all hover:scale-110 border border-white/20"
        >
          →
        </button>

        {/* Wskaźniki (dots) */}
        <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 z-20 flex gap-2">
          {products.map((_, index) => (
            <button
              key={index}
              onClick={() => {
                setDirection(index > currentIndex ? 1 : -1);
                setCurrentIndex(index);
              }}
              className={`h-2 rounded-full transition-all ${
                index === currentIndex
                  ? "bg-white w-12"
                  : "bg-white/30 hover:bg-white/50 w-2"
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
