"use client";

export default function HeroSection() {
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

          {/* Right side - Product showcase */}
          <div className="relative h-full flex items-center justify-center">
            <div className="grid grid-cols-2 gap-4">
              {/* Product cards */}
              <div className="bg-white rounded-2xl p-6 shadow-2xl transform hover:scale-105 transition-transform">
                <div className="text-6xl mb-3 text-center">🌾</div>
                <h3 className="font-bold text-center text-gray-800">Nasiona</h3>
                <p className="text-sm text-gray-600 text-center mt-2">
                  Chia, len, dynia
                </p>
              </div>
              <div className="bg-white rounded-2xl p-6 shadow-2xl transform hover:scale-105 transition-transform mt-8">
                <div className="text-6xl mb-3 text-center">🫒</div>
                <h3 className="font-bold text-center text-gray-800">Oleje</h3>
                <p className="text-sm text-gray-600 text-center mt-2">
                  Oliwa, kokos, len
                </p>
              </div>
              <div className="bg-white rounded-2xl p-6 shadow-2xl transform hover:scale-105 transition-transform -mt-8">
                <div className="text-6xl mb-3 text-center">🥗</div>
                <h3 className="font-bold text-center text-gray-800">
                  Superfoods
                </h3>
                <p className="text-sm text-gray-600 text-center mt-2">
                  Spirulina, acai
                </p>
              </div>
              <div className="bg-white rounded-2xl p-6 shadow-2xl transform hover:scale-105 transition-transform">
                <div className="text-6xl mb-3 text-center">🥜</div>
                <h3 className="font-bold text-center text-gray-800">Orzechy</h3>
                <p className="text-sm text-gray-600 text-center mt-2">
                  Migdały, nerkowce
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
