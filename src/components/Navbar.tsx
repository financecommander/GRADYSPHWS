"use client";

import { useState } from "react";
import Link from "next/link";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/menu", label: "Menu" },
  { href: "/whiskey-beer", label: "Whiskey & Beer" },
  { href: "/events", label: "Events" },
  { href: "/private-dining", label: "Private Dining" },
  { href: "/about", label: "About" },
  { href: "/gallery", label: "Gallery" },
  { href: "/visit", label: "Visit Us" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-pub-dark/95 backdrop-blur-sm border-b border-pub-dark-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 group">
            <span className="font-[family-name:var(--font-playfair)] text-2xl font-bold text-pub-gold group-hover:text-pub-gold-light transition-colors">
              Grady&apos;s
            </span>
            <span className="hidden sm:inline text-pub-muted text-sm tracking-widest uppercase">
              Public House
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-6">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="px-4 py-2 text-sm text-pub-cream/80 hover:text-pub-gold transition-colors"
              >
                {link.label}
              </Link>
            ))}
            <a
              href="https://www.opentable.com"
              target="_blank"
              rel="noopener noreferrer"
              className="ml-4 px-5 py-2.5 bg-pub-red text-pub-cream text-sm font-semibold rounded hover:bg-pub-red-light transition-colors"
            >
              Reserve a Table
            </a>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden p-2 text-pub-cream hover:text-pub-gold transition-colors"
            aria-label="Toggle menu"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {isOpen ? (
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

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="lg:hidden bg-pub-dark border-t border-pub-dark-border">
          <div className="px-4 py-4 space-y-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="block px-3 py-3 text-pub-cream/80 hover:text-pub-gold hover:bg-pub-dark-lighter rounded transition-colors"
              >
                {link.label}
              </Link>
            ))}
            <a
              href="https://www.opentable.com"
              target="_blank"
              rel="noopener noreferrer"
              className="block mt-4 px-5 py-3 bg-pub-red text-pub-cream text-center font-semibold rounded hover:bg-pub-red-light transition-colors"
            >
              Reserve a Table
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}
