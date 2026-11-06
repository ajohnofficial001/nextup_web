"use client"
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-[#3B28CC]/5">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="flex items-center justify-between h-20">
          <Link href="/" className="flex items-center gap-3">
            <Image
              src="/nextup_logo.png"
              alt="NextUp Logo"
              width={40}
              height={40}
              className="object-contain rounded-lg"
              priority
            />
            <span className="font-syne text-2xl font-bold tracking-tight text-black">
              NEXTUP<span className="text-[#3B28CC]">.</span>
            </span>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-10">
            <a href="#services" className="text-sm text-black/60 hover:text-[#3B28CC] transition-colors animated-underline font-syne">
              Features
            </a>
            <a href="#why-us" className="text-sm text-black/60 hover:text-[#3B28CC] transition-colors animated-underline font-syne">
              Why NextUp
            </a>
            <a href="#mission" className="text-sm text-black/60 hover:text-[#3B28CC] transition-colors animated-underline font-syne">
              Mission
            </a>
            <a
              href="#waitlist"
              className="px-6 py-2.5 bg-[#3B28CC] text-white text-sm font-medium rounded-full hover:bg-[#3B28CC]/90 transition-all hover:scale-105 font-syne"
            >
              Join Waitlist
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 text-black"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {isMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden py-6 border-t border-[#3B28CC]/10 bg-white">
            <div className="flex flex-col gap-4 px-4">
              <a href="#services" onClick={() => setIsMenuOpen(false)} className="text-black/60 hover:text-[#3B28CC] transition-colors py-2 font-syne">Features</a>
              <a href="#why-us" onClick={() => setIsMenuOpen(false)} className="text-black/60 hover:text-[#3B28CC] transition-colors py-2 font-syne">Why NextUp</a>
              <a href="#mission" onClick={() => setIsMenuOpen(false)} className="text-black/60 hover:text-[#3B28CC] transition-colors py-2 font-syne">Mission</a>
              <a href="#waitlist" onClick={() => setIsMenuOpen(false)} className="mt-2 px-6 py-3 bg-[#3B28CC] text-white text-center font-medium rounded-full font-syne">
                Join Waitlist
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}