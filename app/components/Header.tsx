"use client";

import Link from "next/link";
import { useState, useEffect } from "react";

export default function Header() {
  const [cartCount, setCartCount] = useState(0);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-gray-900/95 backdrop-blur-md shadow-lg"
          : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-8 py-5">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link
            href="/"
            className="text-2xl font-bold tracking-tight text-white hover:text-green-400 transition-colors"
          >
            SuroweZdrowie
          </Link>

          {/* Navigation */}
          <nav className="flex items-center gap-12">
            <Link
              href="/"
              className="text-white hover:text-green-400 transition-colors font-medium"
            >
              Strona główna
            </Link>
            <Link
              href="/produkty"
              className="text-white hover:text-green-400 transition-colors font-medium"
            >
              Produkty
            </Link>
            <Link
              href="/o-nas"
              className="text-white hover:text-green-400 transition-colors font-medium"
            >
              O nas
            </Link>
            <Link
              href="/kontakt"
              className="text-white hover:text-green-400 transition-colors font-medium"
            >
              Kontakt
            </Link>
          </nav>

          {/* Cart and Theme Toggle */}
          <div className="flex items-center gap-6">
            <Link
              href="/koszyk"
              className="relative text-white hover:text-green-400 transition-colors"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                />
              </svg>
              {cartCount > 0 && (
                <span className="absolute -top-2 -right-2 bg-green-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center font-bold">
                  {cartCount}
                </span>
              )}
            </Link>

            {/* Theme toggle button */}
            <button className="w-6 h-6 rounded-full bg-white/20 hover:bg-green-400 transition-colors"></button>
          </div>
        </div>
      </div>
    </header>
  );
}
