"use client";

import { useState, useEffect } from "react";

// Product slides data with detailed information
const productSlides = [
  {
    id: 1,
    title: "OLEJE KOKOSOWE",
    emoji: "🥥",
    tagline: "Naturalny skarb tropików",
    description:
      "Najwyższej jakości olej kokosowy cold-pressed, zachowujący wszystkie wartości odżywcze i aromat świeżego kokosa.",
    benefits: [
      "Wspiera zdrowie serca",
      "Poprawia trawienie",
      "Wzmacnia odporność",
      "Pielęgnuje skórę i włosy",
    ],
    color: "from-amber-500 to-orange-600",
    bgPattern: "bg-amber-50",
  },
  {
    id: 2,
    title: "NASIONA CHIA",
    emoji: "🌾",
    tagline: "Superfood starożytnych Azteków",
    description:
      "Bogate w omega-3, błonnik i białko. Małe nasiona o ogromnej mocy odżywczej dla Twojego zdrowia.",
    benefits: [
      "Źródło kwasów omega-3",
      "Wysokie w błonnik",
      "Stabilizuje poziom cukru",
      "Wspiera utratę wagi",
    ],
    color: "from-slate-600 to-slate-800",
    bgPattern: "bg-slate-50",
  },
  {
    id: 3,
    title: "OLEJ LNIANY",
    emoji: "🌻",
    tagline: "Złoto dla Twojego zdrowia",
    description:
      "Tłoczony na zimno olej lniany, bogaty w kwasy omega-3 ALA. Idealny do codziennej diety.",
    benefits: [
      "Najwyższa zawartość omega-3",
      "Wspiera układ nerwowy",
      "Obniża cholesterol",
      "Poprawia kondycję skóry",
    ],
    color: "from-yellow-500 to-amber-600",
    bgPattern: "bg-yellow-50",
  },
  {
    id: 4,
    title: "SPIRULINA",
    emoji: "🌀",
    tagline: "Zielona moc natury",
    description:
      "Alga bogata w białko, witaminy i minerały. Naturalne źródło energii i witalności na każdy dzień.",
    benefits: [
      "60% białka roślinnego",
      "Detoksykuje organizm",
      "Zwiększa energię",
      "Wzmacnia układ immunologiczny",
    ],
    color: "from-emerald-500 to-teal-700",
    bgPattern: "bg-emerald-50",
  },
  {
    id: 5,
    title: "ORZECHY BRAZYLIJSKIE",
    emoji: "🥜",
    tagline: "Król orzechów",
    description:
      "Naturalne źródło selenu i zdrowych tłuszczy. Jeden orzech dziennie pokrywa dzienne zapotrzebowanie na selen.",
    benefits: [
      "Najlepsze źródło selenu",
      "Wspiera tarczycę",
      "Poprawia nastrój",
      "Chroni przed stresem oksydacyjnym",
    ],
    color: "from-orange-600 to-red-700",
    bgPattern: "bg-orange-50",
  },
];

export default function HeroSection() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  // Auto-advance slides every 5 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      nextSlide();
    }, 5000);

    return () => clearInterval(timer);
  }, [currentSlide]);

  const nextSlide = () => {
    if (!isAnimating) {
      setIsAnimating(true);
      setCurrentSlide((prev) => (prev + 1) % productSlides.length);
      setTimeout(() => setIsAnimating(false), 500);
    }
  };

  const prevSlide = () => {
    if (!isAnimating) {
      setIsAnimating(true);
      setCurrentSlide(
        (prev) => (prev - 1 + productSlides.length) % productSlides.length,
      );
      setTimeout(() => setIsAnimating(false), 500);
    }
  };

  const goToSlide = (index: number) => {
    if (!isAnimating && index !== currentSlide) {
      setIsAnimating(true);
      setCurrentSlide(index);
      setTimeout(() => setIsAnimating(false), 500);
    }
  };

  const slide = productSlides[currentSlide];

  return (
    <section className="relative h-[500px] bg-gradient-to-r from-green-600 to-green-800 overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-10">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}
        ></div>
      </div>

      <div className="container mx-auto px-8 h-full flex items-center relative z-10">
        <div className="grid grid-cols-2 gap-16 w-full items-center">
          {/* Left side - Text */}
          <div className="text-white space-y-6">
            <h1 className="text-6xl font-bold leading-tight">
              Surowe produkty
              <br />
              <span className="text-yellow-300">dla zdrowia</span>
            </h1>
            <p className="text-xl text-green-100 leading-relaxed">
              Odkryj moc naturalnych nasion, olejów i superfoodów. 100% surowe,
              100% zdrowe, 100% bio.
            </p>
            <div className="flex gap-4 pt-4">
              <button className="px-8 py-4 bg-white text-green-700 font-bold rounded-lg hover:bg-yellow-300 hover:text-gray-900 transition-all shadow-xl text-lg">
                Zobacz produkty
              </button>
              <button className="px-8 py-4 border-2 border-white text-white font-bold rounded-lg hover:bg-white hover:text-green-700 transition-all text-lg">
                Dowiedz się więcej
              </button>
            </div>

            {/* Stats */}
            <div className="flex gap-8 pt-8">
              <div>
                <div className="text-4xl font-bold text-yellow-300">500+</div>
                <div className="text-green-100">Produktów</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-yellow-300">10K+</div>
                <div className="text-green-100">Klientów</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-yellow-300">100%</div>
                <div className="text-green-100">Surowe</div>
              </div>
            </div>
          </div>

          {/* Right side - Product TV/Carousel */}
          <div className="relative h-full flex items-center justify-center">
            {/* TV Frame */}
            <div className="relative w-full max-w-[500px]">
              {/* Outer TV casing */}
              <div className="relative bg-gradient-to-br from-gray-800 via-gray-900 to-black rounded-3xl p-6 shadow-2xl">
                {/* Screen bezel */}
                <div className="relative bg-black rounded-2xl p-3 shadow-inner">
                  {/* Screen */}
                  <div className="relative bg-white rounded-xl overflow-hidden aspect-[4/3] shadow-lg">
                    {/* Slide content */}
                    <div
                      className={`absolute inset-0 transition-all duration-500 ${
                        isAnimating
                          ? "opacity-0 scale-95"
                          : "opacity-100 scale-100"
                      }`}
                    >
                      {/* Gradient background */}
                      <div
                        className={`absolute inset-0 bg-gradient-to-br ${slide.color} opacity-10`}
                      ></div>

                      {/* Content */}
                      <div className="relative h-full flex flex-col p-6">
                        {/* Header with emoji and title */}
                        <div className="text-center mb-4">
                          <div className="text-6xl mb-2 animate-bounce">
                            {slide.emoji}
                          </div>
                          <h2 className="text-2xl font-black text-gray-800 tracking-tight">
                            {slide.title}
                          </h2>
                          <p className="text-sm text-gray-600 italic mt-1">
                            {slide.tagline}
                          </p>
                        </div>

                        {/* Description */}
                        <div className="mb-4">
                          <p className="text-xs text-gray-700 leading-relaxed text-center">
                            {slide.description}
                          </p>
                        </div>

                        {/* Benefits list */}
                        <div className="flex-1">
                          <h3 className="text-xs font-bold text-gray-800 mb-2 text-center">
                            ✨ Właściwości i korzyści:
                          </h3>
                          <div className="grid grid-cols-2 gap-2">
                            {slide.benefits.map((benefit, index) => (
                              <div
                                key={index}
                                className="flex items-start gap-1 bg-white/50 rounded-lg p-2 backdrop-blur-sm"
                              >
                                <span className="text-green-600 text-xs mt-0.5">
                                  ✓
                                </span>
                                <span className="text-[10px] text-gray-700 leading-tight">
                                  {benefit}
                                </span>
                              </div>
                            ))}
                          </div>
                        </div>

                        {/* CTA */}
                        <div className="text-center mt-4">
                          <button
                            className={`px-6 py-2 bg-gradient-to-r ${slide.color} text-white font-bold rounded-full text-sm shadow-lg hover:shadow-xl transform hover:scale-105 transition-all`}
                          >
                            Sprawdź ofertę →
                          </button>
                        </div>
                      </div>
                    </div>

                    {/* Slide indicator dots */}
                    <div className="absolute bottom-2 left-0 right-0 flex justify-center gap-1.5 z-10">
                      {productSlides.map((_, index) => (
                        <button
                          key={index}
                          onClick={() => goToSlide(index)}
                          className={`w-2 h-2 rounded-full transition-all ${
                            index === currentSlide
                              ? "bg-gray-800 w-6"
                              : "bg-gray-400 hover:bg-gray-600"
                          }`}
                          aria-label={`Go to slide ${index + 1}`}
                        />
                      ))}
                    </div>
                  </div>
                </div>

                {/* TV controls */}
                <div className="absolute -right-3 top-1/2 -translate-y-1/2 flex flex-col gap-2">
                  <button
                    onClick={prevSlide}
                    className="w-8 h-8 bg-gray-700 hover:bg-gray-600 rounded-full flex items-center justify-center text-white shadow-lg transition-all hover:scale-110"
                    aria-label="Previous slide"
                  >
                    ↑
                  </button>
                  <button
                    onClick={nextSlide}
                    className="w-8 h-8 bg-gray-700 hover:bg-gray-600 rounded-full flex items-center justify-center text-white shadow-lg transition-all hover:scale-110"
                    aria-label="Next slide"
                  >
                    ↓
                  </button>
                </div>

                {/* Power indicator LED */}
                <div className="absolute bottom-4 right-6">
                  <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse shadow-lg shadow-green-500/50"></div>
                </div>

                {/* Brand label */}
                <div className="absolute bottom-3 left-6 text-gray-600 text-xs font-bold">
                  HEALTH TV
                </div>
              </div>

              {/* TV stand */}
              <div className="mx-auto w-32 h-3 bg-gradient-to-b from-gray-800 to-gray-900 rounded-b-lg"></div>
              <div className="mx-auto w-40 h-2 bg-gradient-to-b from-gray-900 to-black rounded-full"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
