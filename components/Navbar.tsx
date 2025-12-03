"use client";

import Link from "next/link";
import { useState, useEffect } from "react";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { href: "/", label: "Inicio" },
    { href: "/menu", label: "Menú" },
    { href: "/reviews", label: "Reseñas" },
    { href: "/about", label: "Nosotros" },
    { href: "/visit", label: "Visítanos" },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-white/95 backdrop-blur-md shadow-md" : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2 group">
            <div className="text-2xl sm:text-3xl font-serif font-bold text-coffee group-hover:text-green transition-colors">
              Cafe{" "}
              <span className="text-green group-hover:text-coffee">Bloom</span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-charcoal hover:text-green transition-colors font-medium"
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/menu"
              className="bg-green text-white px-6 py-2.5 rounded-lg hover:bg-coffee transition-all duration-300 font-medium shadow-md hover:shadow-lg"
            >
              Ver Menú
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden p-2 rounded-lg hover:bg-latte transition-colors"
            aria-label="Toggle menu"
          >
            <svg
              className="w-6 h-6 text-coffee"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {isMobileMenuOpen ? (
                <path d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-white border-t border-latte">
          <div className="px-4 py-4 space-y-3">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className="block px-4 py-2 text-charcoal hover:bg-latte hover:text-green rounded-lg transition-colors font-medium"
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/menu"
              onClick={() => setIsMobileMenuOpen(false)}
              className="block bg-green text-white px-4 py-2.5 rounded-lg hover:bg-coffee transition-all duration-300 font-medium text-center shadow-md"
            >
              Ver Menú
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
