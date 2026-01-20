"use client";

export default function AboutSection() {
  return (
    <section className="py-20 px-8 bg-white">
      <div className="container mx-auto max-w-6xl">
        <div className="grid grid-cols-2 gap-16 items-center">
          {/* Left side - Image */}
          <div className="relative h-[500px] rounded-2xl overflow-hidden shadow-2xl">
            <div className="absolute inset-0 bg-gradient-to-br from-green-400 to-green-600 flex items-center justify-center">
              <div className="text-9xl">🌱</div>
            </div>
          </div>

          {/* Right side - Content */}
          <div className="space-y-6">
            <h2 className="text-5xl font-bold text-gray-900 mb-6">O nas</h2>
            <p className="text-xl text-gray-700 leading-relaxed">
              Jesteśmy pasjonatami zdrowego stylu życia i ekologicznych
              produktów. Nasza misja to dostarczanie najwyższej jakości
              naturalnych produktów wegetariańskich.
            </p>
            <p className="text-lg text-gray-600 leading-relaxed">
              Od ponad 10 lat specjalizujemy się w imporcie i dystrybucji
              organicznych nasion, olejów i superfoodów. Wszystkie nasze
              produkty są certyfikowane i pochodzą od sprawdzonych dostawców.
            </p>
            <div className="grid grid-cols-3 gap-6 pt-8">
              <div className="text-center">
                <div className="text-4xl font-bold text-green-600 mb-2">
                  500+
                </div>
                <p className="text-gray-600">Produktów</p>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-green-600 mb-2">
                  10K+
                </div>
                <p className="text-gray-600">Klientów</p>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-green-600 mb-2">
                  100%
                </div>
                <p className="text-gray-600">Bio</p>
              </div>
            </div>
            <button className="mt-8 px-8 py-4 bg-green-600 hover:bg-green-700 text-white font-bold rounded-lg transition-colors text-lg">
              Dowiedz się więcej
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
