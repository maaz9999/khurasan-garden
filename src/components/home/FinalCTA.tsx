"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { Calendar, MessageSquare, Sparkles, MapPin } from "lucide-react";
import { siteConfig } from "@/data/site";

export function FinalCTA() {
  return (
    <section className="relative py-28 bg-[#092E3A] text-white overflow-hidden">
      {/* Background Image with Layered Mask */}
      <div className="absolute inset-0 w-full h-full">
        <Image
          src="/images/future-home-cta.png"
          alt="Future Family Home View at Sunset"
          fill
          quality={90}
          className="object-cover object-center brightness-[0.65] contrast-[1.05]"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#092E3A] via-[#092E3A]/70 to-[#092E3A]/80" />
      </div>

      {/* Artist Impression Badge */}
      <div className="absolute top-8 right-8 z-10">
        <span className="inline-flex items-center space-x-1.5 px-3 py-1 rounded-full text-xs font-medium bg-[#092E3A]/80 text-[#17BFC8] border border-[#17BFC8]/30 backdrop-blur-md">
          <Sparkles className="w-3 h-3 text-[#17BFC8]" />
          <span>Artist's Impression</span>
        </span>
      </div>

      {/* Content Container */}
      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center space-x-2 px-4 py-1.5 rounded-full bg-[#17BFC8]/15 border border-[#17BFC8]/30 text-[#17BFC8] text-xs uppercase tracking-widest font-semibold backdrop-blur-md"
        >
          <MapPin className="w-3.5 h-3.5" />
          <span>M-9 Motorway Corridor · Karachi</span>
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="font-display fluid-hero font-bold tracking-tight text-white drop-shadow-md"
        >
          Your Future Has an Address.
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.4 }}
          className="text-lg sm:text-xl text-[#F7F5EF]/90 font-light max-w-2xl mx-auto leading-relaxed"
        >
          Visit Khurasan Garden and experience the possibility for yourself. Book a private site tour with our team today.
        </motion.p>

        {/* Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.6 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4"
        >
          <Link
            href="/contact"
            className="w-full sm:w-auto inline-flex items-center justify-center space-x-2.5 px-8 py-4 rounded-full bg-[#17BFC8] text-[#092E3A] font-bold text-sm uppercase tracking-wider hover:bg-[#F7F5EF] transition-all transform hover:-translate-y-1 shadow-xl"
          >
            <Calendar className="w-4 h-4" />
            <span>Book a Site Visit</span>
          </Link>

          <a
            href={siteConfig.social.whatsapp}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto inline-flex items-center justify-center space-x-2.5 px-8 py-4 rounded-full bg-white/15 text-white hover:bg-[#839B77] border border-white/30 backdrop-blur-md text-sm font-bold uppercase tracking-wider transition-all"
          >
            <MessageSquare className="w-4 h-4 text-[#17BFC8]" />
            <span>Chat on WhatsApp</span>
          </a>
        </motion.div>

        <div className="pt-6 text-xs text-white/60">
          <p>Or call our sales desk directly at <strong className="text-[#17BFC8]">{siteConfig.contact.phoneDisplay}</strong></p>
        </div>
      </div>
    </section>
  );
}
