"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

// Typ dla produktu
type Product = {
  id: number;
  name: string;
  subtitle: string;
  image: string;
  description: string;
  properties: string[];
};

// Produkty
const products: Product[] = [
  {
    id: 1,
    name: "OLEJE KOKOSOWE",
    subtitle: "Naturalne • Tłoczone na zimno",
    image: "/img/olejkokosowy.png",
    description:
      "Odkryj moc naturalnych olejów kokosowych z ekologicznych plantacji. Idealne do gotowania, pieczenia i pielęgnacji skóry.",
    properties: [
      "100% naturalne i organiczne",
      "Tłoczone na zimno - zachowuje wszystkie wartości odżywcze",
      "Certyfikat BIO - gwarancja jakości",
      "Bez rafinacji i dodatków chemicznych",
      "Wspiera zdrowie serca i układ odpornościowy",
      "Idealne do pielęgnacji skóry i włosów",
    ],
  },
  {
    id: 2,
    name: "NASIONA CHIA",
    subtitle: "Superfood • Organiczne",
    image: "/img/nasionachia.png",
    description:
      "Małe nasiona o wielkich właściwościach! Nasiona chia to doskonałe źródło błonnika, omega-3 i białka roślinnego.",
    properties: [
      "Bogate w kwasy omega-3 - zdrowie serca",
      "Wysokie w błonnik - wspiera trawienie",
      "Źródło białka roślinnego - budowa mięśni",
      "Stabilizuje poziom cukru we krwi",
      "Wspiera utratę wagi - długotrwałe uczucie sytości",
      "Pełne antyoksydantów i minerałów",
    ],
  },
  {
    id: 3,
    name: "SPIRULINA",
    subtitle: "Superfood • Organiczna",
    image: "/img/spirulina.png",
    description:
      "Naturalna spirulina to potęga składników odżywczych. Zawiera białko, witaminy B, żelazo i antyoksydanty.",
    properties: [
      "60% białka roślinnego - najwyższa zawartość",
      "Detoksykuje organizm - oczyszcza z toksyn",
      "Zwiększa energię i witalność",
      "Wzmacnia układ immunologiczny",
      "Pełna witamin B, żelaza i magnezu",
      "Silny antyoksydant - spowalnia starzenie",
    ],
  },
];

export default function HeroHeader() {
  const [currentProductIndex, setCurrentProductIndex] = useState(0);
  const [showDescription, setShowDescription] = useState(false);
  const [isPaused, setIsPaused] = useState(false);

  const currentProduct = products[currentProductIndex];

  // Timer do przełączania hero -> opis
  useEffect(() => {
    if (isPaused) return;

    const timer = setTimeout(() => {
      setShowDescription(true);
    }, 4000); // Po 4 sekundach pokaż opis

    return () => clearTimeout(timer);
  }, [currentProductIndex, isPaused, showDescription]);

  // Timer do przejścia do następnego produktu
  useEffect(() => {
    if (isPaused || !showDescription) return;

    const timer = setTimeout(() => {
      nextProduct();
    }, 6000); // Po 6 sekundach przejdź do następnego produktu

    return () => clearTimeout(timer);
  }, [currentProductIndex, isPaused, showDescription]);

  const nextProduct = () => {
    setShowDescription(false);
    setCurrentProductIndex((prev) => (prev + 1) % products.length);
  };

  const prevProduct = () => {
    setShowDescription(false);
    setCurrentProductIndex(
      (prev) => (prev - 1 + products.length) % products.length,
    );
  };

  const goToProduct = (index: number) => {
    setShowDescription(false);
    setCurrentProductIndex(index);
  };

  return (
    <div className="relative bg-gradient-to-br from-gray-900 via-gray-800 to-black min-h-screen flex flex-col items-center justify-center p-4 md:p-8 lg:p-12 gap-8 pt-64 md:pt-80 lg:pt-96">
      {/* Tło - zdjęcie truskawek */}
      <div className="absolute inset-0">
        <Image
          src="/img/strawberries-5210753_1920.jpg"
          alt="Background"
          fill
          className="object-cover"
          priority
        />
        {/* Ciemna nakładka dla lepszej czytelności */}
        <div className="absolute inset-0 bg-gradient-to-br from-black/85 via-black/80 to-black/85" />
        <div className="absolute inset-0 bg-black/40" />
      </div>

      {/* TV Frame Container */}
      <div className="relative w-full max-w-7xl z-10">
        {/* Outer TV Casing */}
        <div className="relative bg-gradient-to-br from-gray-800 via-gray-900 to-black rounded-[3rem] p-8 md:p-10 lg:p-12 shadow-[0_50px_100px_rgba(0,0,0,0.9)] border-[6px] border-gray-700">
          {/* Screen Bezel */}
          <div className="relative bg-gradient-to-br from-black via-gray-950 to-black rounded-[2.5rem] p-5 md:p-7 lg:p-8 shadow-[inset_0_10px_50px_rgba(0,0,0,0.9)]">
            {/* Ekran z produktem */}
            <div
              className="relative w-full aspect-[16/9] rounded-[2rem] overflow-hidden border-[3px] border-gray-800 shadow-[0_20px_60px_rgba(0,0,0,0.8)]"
              onMouseEnter={() => setIsPaused(true)}
              onMouseLeave={() => setIsPaused(false)}
            >
              <AnimatePresence initial={false} mode="wait">
                <motion.div
                  key={currentProduct.id}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.5 }}
                  className="absolute inset-0 w-full h-full overflow-hidden"
                >
                  {/* Container z animacją scroll - 200% wysokości */}
                  <motion.div
                    animate={{ y: showDescription ? "-50%" : "0%" }}
                    transition={{
                      duration: 1.2,
                      ease: [0.43, 0.13, 0.23, 0.96],
                    }}
                    className="relative w-full h-[200%]"
                  >
                    {/* HERO VIEW - górna połowa */}
                    <div className="relative w-full h-1/2">
                      {/* Tło - zdjęcie produktu */}
                      <div className="absolute inset-0">
                        <Image
                          src={currentProduct.image}
                          alt={currentProduct.name}
                          fill
                          className="object-cover"
                          priority
                        />
                        <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/40 to-black/70" />
                        <div className="absolute inset-0 bg-gradient-to-r from-black/30 via-transparent to-black/30" />
                      </div>

                      {/* Zawartość hero */}
                      <div className="relative z-10 h-full flex flex-col justify-between p-10 md:p-16 lg:p-20 text-white">
                        <div className="flex-1 flex flex-col justify-center items-center text-center space-y-8">
                          <motion.p
                            initial={{ opacity: 0, y: -30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.3, duration: 0.8 }}
                            className="text-sm md:text-lg tracking-[0.5em] uppercase text-green-400 font-light drop-shadow-lg"
                          >
                            {currentProduct.subtitle}
                          </motion.p>
                          <motion.h1
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{
                              delay: 0.5,
                              duration: 0.8,
                              type: "spring",
                              stiffness: 100,
                            }}
                            className="text-5xl md:text-7xl lg:text-8xl xl:text-9xl font-black leading-none uppercase tracking-tighter drop-shadow-2xl"
                            style={{
                              textShadow:
                                "0 10px 30px rgba(0,0,0,0.5), 0 0 60px rgba(74,222,128,0.3)",
                            }}
                          >
                            {currentProduct.name}
                          </motion.h1>
                        </div>

                        {/* Animowana strzałka w dół */}
                        <motion.div
                          initial={{ opacity: 0, y: 40 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: 0.8, duration: 0.6 }}
                          className="flex flex-col items-center gap-3"
                        >
                          <motion.button
                            onClick={() => setShowDescription(true)}
                            animate={{ y: [0, 12, 0] }}
                            transition={{
                              repeat: Infinity,
                              duration: 2,
                              ease: "easeInOut",
                            }}
                            className="w-16 h-16 md:w-20 md:h-20 bg-white/10 hover:bg-green-500/30 backdrop-blur-xl rounded-full flex items-center justify-center text-white border-2 border-white/20 hover:border-green-400/50 shadow-[0_10px_40px_rgba(0,0,0,0.3)] hover:shadow-[0_15px_50px_rgba(34,197,94,0.4)] transition-all duration-300"
                          >
                            <svg
                              className="w-8 h-8 md:w-10 md:h-10"
                              fill="none"
                              stroke="currentColor"
                              viewBox="0 0 24 24"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2.5}
                                d="M19 14l-7 7m0 0l-7-7m7 7V3"
                              />
                            </svg>
                          </motion.button>
                          <motion.p
                            animate={{ opacity: [0.5, 1, 0.5] }}
                            transition={{
                              repeat: Infinity,
                              duration: 2,
                              ease: "easeInOut",
                            }}
                            className="text-sm md:text-base text-white/70 font-light tracking-wider uppercase"
                          >
                            Zobacz więcej
                          </motion.p>
                        </motion.div>
                      </div>
                    </div>

                    {/* DESCRIPTION VIEW - dolna połowa */}
                    <div className="relative w-full h-1/2 bg-gradient-to-br from-gray-900 via-gray-800 to-black">
                      <div className="absolute inset-0 opacity-5 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmZmZmYiIGZpbGwtb3BhY2l0eT0iMSI+PHBhdGggZD0iTTM2IDM0di00aC0ydjRoLTR2Mmg0djRoMnYtNGg0di0yaC00em0wLTMwVjBoLTJ2NGgtNHYyaDR2NGgyVjZoNFY0aC00ek02IDM0di00SDR2NEgwdjJoNHY0aDJ2LTRoNHYtMkg2ek02IDRWMEG0djRIMHYyaDR2NGgyVjZoNFY0SDZ6Ii8+PC9nPjwvZz48L3N2Zz4=')]" />

                      {/* Zawartość opisu */}
                      <div className="relative z-10 h-full flex flex-col justify-center p-8 md:p-12 lg:p-16 text-white">
                        <div className="max-w-5xl mx-auto w-full space-y-6">
                          {/* Nagłówek */}
                          <div className="text-center space-y-3">
                            <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold uppercase tracking-tight drop-shadow-lg">
                              {currentProduct.name}
                            </h2>
                            <p className="text-xs md:text-sm tracking-[0.4em] uppercase text-green-400 font-light">
                              Właściwości i korzyści
                            </p>
                          </div>

                          {/* Opis */}
                          <p className="text-lg md:text-xl lg:text-2xl text-gray-200 text-center leading-relaxed font-light max-w-3xl mx-auto">
                            {currentProduct.description}
                          </p>

                          {/* Właściwości */}
                          <div className="grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-4">
                            {currentProduct.properties.map((prop, index) => (
                              <div
                                key={index}
                                className="flex items-center gap-3 bg-white/5 backdrop-blur-lg px-4 py-3 rounded-xl border border-white/10 hover:bg-white/10 hover:border-green-400/30 transition-all duration-300"
                              >
                                <span className="text-green-400 text-2xl md:text-3xl">
                                  ✓
                                </span>
                                <span className="text-sm md:text-base lg:text-lg text-gray-100 font-light leading-relaxed">
                                  {prop}
                                </span>
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                </motion.div>
              </AnimatePresence>

              {/* Strzałki nawigacji */}
              <button
                onClick={prevProduct}
                className="absolute left-6 md:left-8 top-1/2 transform -translate-y-1/2 z-20 w-14 h-14 md:w-16 md:h-16 bg-white/10 hover:bg-green-500/30 backdrop-blur-xl rounded-full flex items-center justify-center text-white text-2xl md:text-3xl transition-all duration-300 hover:scale-110 border-2 border-white/20 hover:border-green-400/50 shadow-[0_10px_30px_rgba(0,0,0,0.3)]"
              >
                ←
              </button>
              <button
                onClick={nextProduct}
                className="absolute right-6 md:right-8 top-1/2 transform -translate-y-1/2 z-20 w-14 h-14 md:w-16 md:h-16 bg-white/10 hover:bg-green-500/30 backdrop-blur-xl rounded-full flex items-center justify-center text-white text-2xl md:text-3xl transition-all duration-300 hover:scale-110 border-2 border-white/20 hover:border-green-400/50 shadow-[0_10px_30px_rgba(0,0,0,0.3)]"
              >
                →
              </button>

              {/* Wskaźniki (dots) */}
              <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20 flex gap-3">
                {products.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => goToProduct(index)}
                    className={`h-2.5 rounded-full transition-all duration-300 ${
                      index === currentProductIndex
                        ? "bg-green-400 w-16 shadow-[0_0_20px_rgba(74,222,128,0.6)]"
                        : "bg-white/30 hover:bg-white/50 w-2.5"
                    }`}
                  />
                ))}
              </div>

              {/* Wskaźnik postępu */}
              <div className="absolute top-8 left-1/2 transform -translate-x-1/2 z-20 flex gap-3">
                <div
                  className={`h-2 w-12 rounded-full transition-all duration-500 ${
                    !showDescription
                      ? "bg-green-400 shadow-[0_0_15px_rgba(74,222,128,0.6)]"
                      : "bg-white/20"
                  }`}
                />
                <div
                  className={`h-2 w-12 rounded-full transition-all duration-500 ${
                    showDescription
                      ? "bg-green-400 shadow-[0_0_15px_rgba(74,222,128,0.6)]"
                      : "bg-white/20"
                  }`}
                />
              </div>
            </div>
          </div>

          {/* TV Controls */}
          <div className="absolute -right-5 top-1/2 -translate-y-1/2 flex flex-col gap-4">
            <div className="w-4 h-16 bg-gradient-to-r from-gray-700 to-gray-800 rounded-r-xl shadow-[5px_0_15px_rgba(0,0,0,0.5)] border-r-2 border-gray-900"></div>
            <div className="w-4 h-10 bg-gradient-to-r from-gray-700 to-gray-800 rounded-r-xl shadow-[5px_0_15px_rgba(0,0,0,0.5)] border-r-2 border-gray-900"></div>
          </div>

          {/* Power LED */}
          <div className="absolute bottom-8 right-10 flex items-center gap-3">
            <div className="relative">
              <div className="w-4 h-4 bg-green-500 rounded-full animate-pulse shadow-[0_0_20px_rgba(34,197,94,0.8)]"></div>
              <div className="absolute inset-0 w-4 h-4 bg-green-400 rounded-full animate-ping opacity-75"></div>
            </div>
            <span className="text-gray-400 text-sm font-bold tracking-widest uppercase">
              HEALTH TV
            </span>
          </div>

          {/* Brand label */}
          <div className="absolute top-8 left-10 text-gray-500 text-base font-bold tracking-[0.3em] uppercase drop-shadow-lg">
            ORGANIC VISION
          </div>
        </div>

        {/* TV Stand */}
        <div className="flex flex-col items-center mt-3">
          <div className="w-56 h-5 bg-gradient-to-b from-gray-800 via-gray-900 to-black rounded-b-2xl shadow-[0_10px_30px_rgba(0,0,0,0.5)]"></div>
          <div className="w-72 h-4 bg-gradient-to-b from-gray-900 to-black rounded-full mt-2 shadow-[0_5px_20px_rgba(0,0,0,0.5)]"></div>
        </div>
      </div>

      {/* Przycisk "WIĘCEJ" POD TELEWIZOREM */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5, duration: 0.8 }}
        className="relative z-10"
      >
        <Link
          href="/produkty"
          className="group relative px-20 md:px-32 py-6 md:py-8 bg-gradient-to-r from-green-500 via-green-600 to-green-500 text-white font-black rounded-3xl hover:from-green-400 hover:via-green-500 hover:to-green-400 transition-all duration-300 text-2xl md:text-4xl shadow-[0_30px_80px_rgba(34,197,94,0.5)] hover:shadow-[0_35px_90px_rgba(34,197,94,0.7)] hover:scale-105 uppercase tracking-wider border-4 border-green-400/30 inline-flex items-center gap-4"
        >
          <span className="relative z-10 flex items-center gap-4">
            WIĘCEJ
            <motion.span
              animate={{ x: [0, 10, 0] }}
              transition={{
                repeat: Infinity,
                duration: 1.5,
                ease: "easeInOut",
              }}
              className="text-3xl md:text-5xl"
            >
              →
            </motion.span>
          </span>
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity rounded-3xl" />
        </Link>
      </motion.div>
    </div>
  );
}
