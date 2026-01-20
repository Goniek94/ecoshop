"use client";

import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-8 py-12">
        <div className="grid grid-cols-4 gap-12 mb-8">
          {/* Company Info */}
          <div>
            <h3 className="text-2xl font-bold mb-4">
              <div className="flex flex-col leading-tight">
                <span>ABATTOIR</span>
                <span>VÉGÉTAL</span>
              </div>
            </h3>
            <p className="text-gray-400 text-sm leading-relaxed">
              Twój sklep z naturalnymi produktami ekologicznymi. Zdrowie i
              jakość w każdym produkcie.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-bold mb-4">Szybkie linki</h4>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Strona główna
                </Link>
              </li>
              <li>
                <Link
                  href="/produkty"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Produkty
                </Link>
              </li>
              <li>
                <Link
                  href="/o-nas"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  O nas
                </Link>
              </li>
              <li>
                <Link
                  href="/kontakt"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Kontakt
                </Link>
              </li>
            </ul>
          </div>

          {/* Categories */}
          <div>
            <h4 className="text-lg font-bold mb-4">Kategorie</h4>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/nasiona"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Nasiona
                </Link>
              </li>
              <li>
                <Link
                  href="/oleje"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Oleje
                </Link>
              </li>
              <li>
                <Link
                  href="/superfoods"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Superfoods
                </Link>
              </li>
              <li>
                <Link
                  href="/orzechy"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Orzechy
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-lg font-bold mb-4">Kontakt</h4>
            <ul className="space-y-2 text-gray-400 text-sm">
              <li>📧 kontakt@ekosklep.pl</li>
              <li>📞 +48 123 456 789</li>
              <li>📍 ul. Zielona 123</li>
              <li>00-001 Warszawa</li>
            </ul>
            <div className="flex gap-4 mt-6">
              <a
                href="#"
                className="w-10 h-10 bg-gray-800 hover:bg-green-600 rounded-full flex items-center justify-center transition-colors"
              >
                <span className="text-xl">f</span>
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-gray-800 hover:bg-green-600 rounded-full flex items-center justify-center transition-colors"
              >
                <span className="text-xl">𝕏</span>
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-gray-800 hover:bg-green-600 rounded-full flex items-center justify-center transition-colors"
              >
                <span className="text-xl">in</span>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 pt-8 mt-8">
          <div className="flex justify-between items-center">
            <p className="text-gray-400 text-sm">
              © 2026 EkoSklep. Wszelkie prawa zastrzeżone.
            </p>
            <div className="flex gap-6">
              <Link
                href="/polityka-prywatnosci"
                className="text-gray-400 hover:text-white text-sm transition-colors"
              >
                Polityka prywatności
              </Link>
              <Link
                href="/regulamin"
                className="text-gray-400 hover:text-white text-sm transition-colors"
              >
                Regulamin
              </Link>
              <Link
                href="/cookies"
                className="text-gray-400 hover:text-white text-sm transition-colors"
              >
                Cookies
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
