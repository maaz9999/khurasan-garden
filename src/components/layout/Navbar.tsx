"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { MessageSquare, Menu, X, Calendar } from "lucide-react";
import { siteConfig } from "@/data/site";
import { navItems } from "@/data/navigation";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();
  const isHome = pathname === "/";

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 30) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [pathname]);

  // Determine header background styling based on scroll & route
  const getHeaderBgClass = () => {
    if (!isHome) {
      return "bg-[#092E3A] shadow-lg border-b border-[#17BFC8]/20 py-3";
    }
    if (scrolled) {
      return "bg-[#092E3A]/95 backdrop-blur-md shadow-lg border-b border-[#17BFC8]/20 py-3";
    }
    return "bg-gradient-to-b from-[#092E3A]/85 via-[#092E3A]/40 to-transparent py-4";
  };

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${getHeaderBgClass()}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo Brand Link */}
          <Link href="/" className="group flex items-center space-x-3 shrink-0">
            <div className="relative h-11 w-11 sm:h-12 sm:w-12 rounded-full overflow-hidden bg-[#17BFC8]/10 p-0.5 border border-[#17BFC8]/40 group-hover:border-[#17BFC8] transition-colors shadow-md flex items-center justify-center">
              <Image
                src={siteConfig.logo}
                alt={`${siteConfig.name} Official Logo`}
                width={48}
                height={48}
                className="object-contain w-full h-full transform group-hover:scale-105 transition-transform"
                priority
              />
            </div>
            <div className="flex flex-col">
              <span className="font-display text-xl font-bold tracking-tight text-white group-hover:text-[#17BFC8] transition-colors">
                {siteConfig.name}
              </span>
              <span className="text-[10px] uppercase tracking-widest text-[#17BFC8]">
                M-9 Motorway · Karachi
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-1">
            {navItems.map((item) => {
              const isActive = pathname === item.href;
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`px-4 py-2 rounded-full text-xs uppercase tracking-wider font-semibold transition-all ${
                    isActive
                      ? "bg-[#17BFC8] text-[#092E3A] shadow-md scale-105"
                      : "text-white/85 hover:text-white hover:bg-white/10"
                  }`}
                >
                  {item.label}
                </Link>
              );
            })}
          </nav>

          {/* Desktop Actions */}
          <div className="hidden lg:flex items-center space-x-3">
            <a
              href={siteConfig.social.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 rounded-full bg-white/10 text-[#17BFC8] hover:bg-[#17BFC8] hover:text-[#092E3A] transition-all"
              title="Chat on WhatsApp"
            >
              <MessageSquare className="w-4 h-4" />
            </a>

            <Link
              href="/contact"
              className="inline-flex items-center space-x-2 px-5 py-2.5 rounded-full text-xs uppercase tracking-wider font-bold shadow-md bg-[#17BFC8] text-[#092E3A] hover:bg-white transition-all transform hover:-translate-y-0.5"
            >
              <Calendar className="w-3.5 h-3.5" />
              <span>Book Site Visit</span>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex items-center space-x-2 lg:hidden">
            <a
              href={siteConfig.social.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-full bg-[#17BFC8] text-[#092E3A]"
            >
              <MessageSquare className="w-4 h-4" />
            </a>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg text-white hover:bg-white/10 transition-colors"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6 text-[#17BFC8]" /> : <Menu className="w-6 h-6 text-white" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25 }}
            className="lg:hidden bg-[#092E3A] border-b border-[#17BFC8]/30 shadow-2xl overflow-hidden"
          >
            <div className="px-5 pt-4 pb-6 space-y-2">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`block px-4 py-2.5 rounded-xl text-sm uppercase tracking-wider font-semibold transition-colors ${
                    pathname === item.href
                      ? "bg-[#17BFC8] text-[#092E3A]"
                      : "text-white/85 hover:bg-white/10 hover:text-white"
                  }`}
                >
                  {item.label}
                </Link>
              ))}

              <div className="pt-4 border-t border-white/10 flex flex-col space-y-3">
                <Link
                  href="/contact"
                  className="w-full text-center py-3 rounded-xl bg-[#17BFC8] text-[#092E3A] font-bold text-xs uppercase tracking-wider shadow-sm"
                >
                  Book a Site Visit
                </Link>

                <a
                  href={`tel:${siteConfig.contact.primaryPhone}`}
                  className="w-full text-center py-2.5 rounded-xl border border-white/20 text-white font-semibold text-xs uppercase tracking-wider"
                >
                  Call {siteConfig.contact.phoneDisplay}
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
