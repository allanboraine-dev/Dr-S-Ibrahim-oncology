"use client";

import Link from "next/link";
import { UserRound } from "lucide-react";
import { motion } from "framer-motion";

export function Navigation() {
  const navLinks = [
    { name: "Home", href: "#" },
    { name: "About", href: "#about" },
    { name: "Services", href: "#services" },
    { name: "Patients", href: "#patients" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <motion.header
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      className="sticky top-0 z-50 w-full border-b border-slate-200/50 bg-white/80 backdrop-blur-md"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-20 items-center justify-between">
          {/* Logo Section */}
          <div className="flex flex-col justify-center">
            <Link href="/" className="group flex flex-col">
              <span className="text-2xl font-bold tracking-tight text-slate-900 group-hover:text-blue-700 transition-colors">
                DR. S. IBRAHIM
              </span>
              <span className="text-xs font-semibold tracking-widest text-blue-600">
                ONCOLOGY CARE
              </span>
            </Link>
          </div>

          {/* Desktop Nav */}
          <nav className="hidden md:flex space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="text-sm font-medium text-slate-600 hover:text-blue-700 transition-colors"
              >
                {link.name}
              </Link>
            ))}
          </nav>

          {/* CTA Button */}
          <div className="flex items-center">
            <Link
              href="/portal"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-slate-900 px-6 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-blue-700 hover:shadow-md transition-all duration-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-slate-900"
            >
              <UserRound className="h-4 w-4" />
              <span className="hidden sm:inline">Patient Portal Login</span>
              <span className="sm:hidden">Login</span>
            </Link>
          </div>
        </div>
      </div>
    </motion.header>
  );
}
