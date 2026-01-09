"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";

const navItems = [
  { name: "Accueil", href: "#home" },
  { name: "Compétences", href: "#skills" },
  { name: "Projets", href: "#projects" },
  { name: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300 ease-in-out flex justify-center pt-4",
        scrolled ? "pt-4" : "pt-6"
      )}
    >
      <div
        className={cn(
          "container mx-auto px-4 md:px-6 flex justify-between items-center transition-all duration-300",
          scrolled
            ? "bg-white/95 dark:bg-zinc-900/95 backdrop-blur-sm rounded-full py-3 max-w-5xl shadow-lg border border-gray-200 dark:border-gray-800"
            : "bg-transparent py-4 max-w-6xl"
        )}
      >
        <div className="flex items-center gap-4">
          <Link href="/" className="text-xl font-bold tracking-tighter flex items-center gap-2">
            <span className="w-8 h-8 bg-emerald-600 rounded-lg flex items-center justify-center text-white font-bold">IT</span>
            <span>Ilyass<span className="text-emerald-600">.TAHZIMA</span></span>
          </Link>
          <span className="hidden lg:block text-sm font-medium text-gray-500 dark:text-gray-400 border-l pl-4 border-gray-300 dark:border-gray-700">
            Développeur Full Stack Java/Angular
          </span>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-1">
          {navItems.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="px-4 py-2 text-sm font-medium hover:text-emerald-600 hover:bg-emerald-50 dark:hover:bg-emerald-900/20 rounded-full transition-colors"
            >
              {item.name}
            </Link>
          ))}
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden p-2"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-full left-0 right-0 bg-white dark:bg-zinc-900 shadow-lg border-b border-gray-200 dark:border-gray-800 md:hidden"
          >
            <div className="flex flex-col p-4 space-y-4">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="text-lg font-medium hover:text-blue-600 transition-colors"
                  onClick={() => setIsOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
