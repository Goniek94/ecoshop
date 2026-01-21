"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Header() {
  const [cartCount, setCartCount] = useState(0);
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [productsDropdownOpen, setProductsDropdownOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu when clicking outside
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [mobileMenuOpen]);

  const productCategories = [
    { name: "Oleje", href: "/produkty/oleje", icon: "🫒" },
    { name: "Nasiona", href: "/produkty/nasiona", icon: "🌾" },
    { name: "Superfoods", href: "/produkty/superfoods", icon: "🥗" },
    { name: "Orzechy", href: "/produkty/orzechy", icon: "🥜" },
    { name: "Wszystkie produkty", href: "/produkty", icon: "🛒" },
  ];

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? "bg-gray-900/98 backdrop-blur-lg shadow-2xl border-b border-white/10"
            : "bg-gray-900/80 backdrop-blur-sm"
        }`}
      >
        <div className="container mx-auto px-4 md:px-8">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <Link
              href="/"
              className="flex items-center gap-3 group"
              onClick={() => setMobileMenuOpen(false)}
            >
              <div className="w-10 h-10 bg-gradient-to-br from-green-400 to-green-600 rounded-xl flex items-center justify-center transform group-hover:scale-110 transition-transform shadow-lg">
                <span className="text-2xl">🌿</span>
              </div>
              <div className="flex flex-col">
                <span className="text-xl md:text-2xl font-black tracking-tight text-white group-hover:text-green-400 transition-colors">
                  SuroweZdrowie
                </span>
                <span className="text-[10px] text-green-400 tracking-widest uppercase font-light">
                  Organic Shop
                </span>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center gap-1">
              <Link
                href="/"
                className="px-5 py-2 text-white hover:text-green-400 hover:bg-white/5 rounded-lg transition-all font-medium"
              >
                Strona główna
              </Link>

              {/* Products Dropdown */}
              <div
                className="relative"
                onMouseEnter={() => setProductsDropdownOpen(true)}
                onMouseLeave={() => setProductsDropdownOpen(false)}
              >
                <button className="px-5 py-2 text-white hover:text-green-400 hover:bg-white/5 rounded-lg transition-all font-medium flex items-center gap-2">
                  Produkty
                  <svg
                    className={`w-4 h-4 transition-transform ${
                      productsDropdownOpen ? "rotate-180" : ""
                    }`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </button>

                {/* Dropdown Menu */}
                <AnimatePresence>
                  {productsDropdownOpen && (
                    <motion.div
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      transition={{ duration: 0.2 }}
                      className="absolute top-full left-0 mt-2 w-64 bg-gray-800/98 backdrop-blur-xl rounded-2xl shadow-2xl border border-white/10 overflow-hidden"
                    >
                      <div className="p-2">
                        {productCategories.map((category, index) => (
                          <Link
                            key={index}
                            href={category.href}
                            className="flex items-center gap-3 px-4 py-3 text-white hover:text-green-400 hover:bg-white/5 rounded-xl transition-all group"
                          >
                            <span className="text-2xl group-hover:scale-110 transition-transform">
                              {category.icon}
                            </span>
                            <span className="font-medium">{category.name}</span>
                          </Link>
                        ))}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              <Link
                href="/o-nas"
                className="px-5 py-2 text-white hover:text-green-400 hover:bg-white/5 rounded-lg transition-all font-medium"
              >
                O nas
              </Link>
              <Link
                href="/blog"
                className="px-5 py-2 text-white hover:text-green-400 hover:bg-white/5 rounded-lg transition-all font-medium"
              >
                Blog
              </Link>
              <Link
                href="/kontakt"
                className="px-5 py-2 text-white hover:text-green-400 hover:bg-white/5 rounded-lg transition-all font-medium"
              >
                Kontakt
              </Link>
            </nav>

            {/* Right Side Actions */}
            <div className="flex items-center gap-3">
              {/* Search Button */}
              <button className="hidden md:flex items-center justify-center w-10 h-10 text-white hover:text-green-400 hover:bg-white/5 rounded-lg transition-all">
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                  />
                </svg>
              </button>

              {/* User Account */}
              <button className="hidden md:flex items-center justify-center w-10 h-10 text-white hover:text-green-400 hover:bg-white/5 rounded-lg transition-all">
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                  />
                </svg>
              </button>

              {/* Cart */}
              <Link
                href="/koszyk"
                className="relative flex items-center justify-center w-10 h-10 text-white hover:text-green-400 hover:bg-white/5 rounded-lg transition-all group"
              >
                <svg
                  className="w-5 h-5"
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
                  <span className="absolute -top-1 -right-1 bg-gradient-to-r from-green-500 to-green-600 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center font-bold shadow-lg animate-pulse">
                    {cartCount}
                  </span>
                )}
              </Link>

              {/* Mobile Menu Button */}
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="lg:hidden flex items-center justify-center w-10 h-10 text-white hover:text-green-400 hover:bg-white/5 rounded-lg transition-all"
                aria-label="Toggle menu"
              >
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  {mobileMenuOpen ? (
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M6 18L18 6M6 6l12 12"
                    />
                  ) : (
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  )}
                </svg>
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setMobileMenuOpen(false)}
              className="fixed inset-0 bg-black/60 backdrop-blur-sm z-40 lg:hidden"
            />

            {/* Menu Panel */}
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="fixed top-0 right-0 bottom-0 w-full max-w-sm bg-gray-900 z-50 lg:hidden overflow-y-auto shadow-2xl"
            >
              <div className="p-6">
                {/* Close Button */}
                <div className="flex justify-between items-center mb-8">
                  <h2 className="text-2xl font-bold text-white">Menu</h2>
                  <button
                    onClick={() => setMobileMenuOpen(false)}
                    className="w-10 h-10 flex items-center justify-center text-white hover:text-green-400 hover:bg-white/5 rounded-lg transition-all"
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
                        d="M6 18L18 6M6 6l12 12"
                      />
                    </svg>
                  </button>
                </div>

                {/* Mobile Navigation Links */}
                <nav className="space-y-2">
                  <Link
                    href="/"
                    onClick={() => setMobileMenuOpen(false)}
                    className="block px-4 py-3 text-white hover:text-green-400 hover:bg-white/5 rounded-xl transition-all font-medium"
                  >
                    🏠 Strona główna
                  </Link>

                  {/* Products Section */}
                  <div className="space-y-1">
                    <div className="px-4 py-2 text-sm text-gray-400 font-semibold uppercase tracking-wider">
                      Produkty
                    </div>
                    {productCategories.map((category, index) => (
                      <Link
                        key={index}
                        href={category.href}
                        onClick={() => setMobileMenuOpen(false)}
                        className="flex items-center gap-3 px-4 py-3 text-white hover:text-green-400 hover:bg-white/5 rounded-xl transition-all"
                      >
                        <span className="text-xl">{category.icon}</span>
                        <span className="font-medium">{category.name}</span>
                      </Link>
                    ))}
                  </div>

                  <Link
                    href="/o-nas"
                    onClick={() => setMobileMenuOpen(false)}
                    className="block px-4 py-3 text-white hover:text-green-400 hover:bg-white/5 rounded-xl transition-all font-medium"
                  >
                    ℹ️ O nas
                  </Link>
                  <Link
                    href="/blog"
                    onClick={() => setMobileMenuOpen(false)}
                    className="block px-4 py-3 text-white hover:text-green-400 hover:bg-white/5 rounded-xl transition-all font-medium"
                  >
                    📝 Blog
                  </Link>
                  <Link
                    href="/kontakt"
                    onClick={() => setMobileMenuOpen(false)}
                    className="block px-4 py-3 text-white hover:text-green-400 hover:bg-white/5 rounded-xl transition-all font-medium"
                  >
                    📧 Kontakt
                  </Link>
                </nav>

                {/* Mobile Actions */}
                <div className="mt-8 pt-8 border-t border-white/10 space-y-3">
                  <button className="w-full flex items-center gap-3 px-4 py-3 text-white hover:text-green-400 hover:bg-white/5 rounded-xl transition-all font-medium">
                    <svg
                      className="w-5 h-5"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                      />
                    </svg>
                    Szukaj produktów
                  </button>
                  <button className="w-full flex items-center gap-3 px-4 py-3 text-white hover:text-green-400 hover:bg-white/5 rounded-xl transition-all font-medium">
                    <svg
                      className="w-5 h-5"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                      />
                    </svg>
                    Moje konto
                  </button>
                </div>

                {/* CTA Button */}
                <div className="mt-6">
                  <Link
                    href="/produkty"
                    onClick={() => setMobileMenuOpen(false)}
                    className="block w-full px-6 py-4 bg-gradient-to-r from-green-500 to-green-600 text-white font-bold rounded-xl hover:from-green-400 hover:to-green-500 transition-all text-center shadow-lg"
                  >
                    Zobacz wszystkie produkty →
                  </Link>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
