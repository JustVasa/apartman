"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";

const navLinks = [
  { label: "APARTMÁNY", href: "#about" },
  { label: "VYBAVENÍ APARTMÁNŮ", href: "#stay" },
  { label: "TIPY & VÝLETY", href: "#spa" },
  { label: "KONTAKT", href: "#dining" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all ${
        scrolled
          ? "backdrop-blur bg-black/40 border-b border-white/10"
          : "bg-transparent"
      }`}
    >
      {/* Hlavní navigace s paddingem od horní hrany */}
      <nav className="relative w-full h-20 flex items-center justify-center px-6 pt-[23.04px]">
        {/* --- LOGO (obrázek uprostřed) --- */}
        <div className="absolute left-1/2 -translate-x-1/2 flex items-center justify-center">
          <Link href="/" aria-label="Domů">
            <Image
              src="/logo-white.svg"
              alt="Logo"
              width={139.48}
              height={25.91}
              className="object-contain"
              priority
            />
          </Link>
        </div>

        {/* --- LEVÉ MENU (desktop only) --- */}
        <ul className="hidden xl:flex absolute left-6 items-center gap-6">
          {navLinks.map((item) => (
            <li key={item.label}>
              <Link href={item.href} className="nav-link text-[12px]">
                {item.label}
              </Link>
            </li>
          ))}
        </ul>

        {/* --- PRAVÁ ČÁST (telefon + rezervace, desktop only) --- */}
        <div className="hidden xl:flex absolute right-6 items-center gap-4">
          <a
            href="tel:+420778788554"
            className="flex items-center gap-2 text-white/90 hover:text-white text-[12px] whitespace-nowrap"
          >
            <PhoneIcon className="w-5 h-5" />
            <span className="tracking-wide">+420 778 788 554</span>
          </a>

          <Link
            href="#book"
            className="inline-flex items-center gap-2 rounded-full px-4 py-2 border border-white/20 bg-white/10 hover:bg-white/15 text-white transition whitespace-nowrap text-[12px]"
          >
            <BellIcon className="w-4 h-4" />
            <span className="tracking-wide">REZERVOVAT</span>
          </Link>
        </div>

        {/* --- BURGER MENU (mobilní zobrazení) --- */}
        <div className="flex xl:hidden absolute left-6 items-center">
          <button
            onClick={() => setOpen((o) => !o)}
            aria-label="Toggle menu"
            className="p-2 text-white"
          >
            <BurgerIcon open={open} />
          </button>
        </div>
      </nav>

      {/* --- MOBILNÍ MENU DRAWER --- */}
      {open && (
        <div className="xl:hidden bg-black/80 backdrop-blur-sm border-t border-white/10">
          <ul className="flex flex-col items-center gap-4 py-6">
            {navLinks.map((item) => (
              <li key={item.label}>
                <Link
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className="block text-white/90 hover:text-white text-lg tracking-wider"
                >
                  {item.label}
                </Link>
              </li>
            ))}
            <li>
              <a
                href="tel:+420778788554"
                className="text-white/80 hover:text-white block text-lg"
                onClick={() => setOpen(false)}
              >
                +420 778 788 554
              </a>
            </li>
            <li>
              <Link
                href="#book"
                onClick={() => setOpen(false)}
                className="inline-flex items-center gap-2 rounded-full px-6 py-2 border border-white/20 bg-white/10 hover:bg-white/15 text-white transition whitespace-nowrap"
              >
                <BellIcon className="w-4 h-4" />
                <span className="text-sm tracking-wide">REZERVOVAT</span>
              </Link>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}

/* --- SVG ikony --- */
function PhoneIcon({ className = "w-5 h-5" }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden>
      <path
        d="M22 16.92v2a2 2 0 0 1-2.18 2 19.8 19.8 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.08 4.18 2 2 0 0 1 4.06 2h2a2 2 0 0 1 2 1.72c.12.9.32 1.78.59 2.63a2 2 0 0 1-.45 2.11L7.1 9.55a16 16 0 0 0 6.35 6.35l1.09-1.1a2 2 0 0 1 2.11-.45c.85.27 1.73.47 2.63.59A2 2 0 0 1 22 16.92Z"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function BellIcon({ className = "w-5 h-5" }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden>
      <path
        d="M14 18a2 2 0 1 1-4 0"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
      />
      <path
        d="M18 8a6 6 0 10-12 0c0 7-3 7-3 7h18s-3 0-3-7z"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function BurgerIcon({ open }: { open: boolean }) {
  return (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" aria-hidden>
      <path
        d={open ? "M6 6L18 18M6 18L18 6" : "M3 6h18M3 12h18M3 18h18"}
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />
    </svg>
  );
}
