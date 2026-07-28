"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Sparkles, Moon } from "lucide-react";

export function CommunityEvening() {
  return (
    <section className="relative min-h-[90vh] flex items-center justify-center bg-[#092E3A] overflow-hidden py-24">
      {/* Background Evening Image */}
      <div className="absolute inset-0 w-full h-full">
        <Image
          src="/images/community-evening.png"
          alt="Blue hour evening atmosphere at Khurasan Garden"
          fill
          quality={90}
          className="object-cover object-center brightness-[0.7] contrast-[1.1]"
          sizes="100vw"
        />
        {/* Soft Ambient Window Glow Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#092E3A] via-[#092E3A]/40 to-[#092E3A]/70" />
        <div className="absolute inset-0 bg-radial-teal opacity-25 pointer-events-none mix-blend-screen" />
      </div>

      {/* Artist's Impression Tag */}
      <div className="absolute top-8 left-8 z-10">
        <span className="inline-flex items-center space-x-1.5 px-3 py-1 rounded-full text-xs font-medium bg-[#092E3A]/80 text-[#17BFC8] border border-[#17BFC8]/30 backdrop-blur-md">
          <Sparkles className="w-3 h-3 text-[#17BFC8]" />
          <span>Artist's Impression</span>
        </span>
      </div>

      {/* Text Container */}
      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white space-y-8">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center space-x-2 px-4 py-1.5 rounded-full bg-white/10 text-[#17BFC8] border border-white/20 backdrop-blur-md text-xs uppercase tracking-widest"
        >
          <Moon className="w-3.5 h-3.5 text-[#17BFC8]" />
          <span>Evening Atmosphere · M-9 Motorway</span>
        </motion.div>

        {/* Sequential Heading Stager */}
        <div className="space-y-2">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 0.6, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="font-display text-2xl sm:text-3xl text-white/60 font-light"
          >
            Not Just a Plot.
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 0.8, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="font-display text-3xl sm:text-4xl text-white/85 font-medium"
          >
            Not Just a House.
          </motion.p>

          <motion.h2
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="font-display fluid-h2 font-bold text-[#17BFC8] drop-shadow-lg"
          >
            Your Own Address.
          </motion.h2>
        </div>

        {/* Bottom Conclusion */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="text-base sm:text-xl text-[#F7F5EF]/90 font-light max-w-2xl mx-auto leading-relaxed border-t border-white/15 pt-6"
        >
          A place where everyday moments become lifelong memories. Experience peace, green surrounds, and warmth when the evening lights turn on.
        </motion.p>
      </div>
    </section>
  );
}
