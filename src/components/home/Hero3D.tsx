"use client";

import { useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, useScroll, useTransform, useSpring, useMotionValue } from "framer-motion";
import { Calendar, Compass, ChevronDown, Sparkles } from "lucide-react";

export function Hero3D() {
  const containerRef = useRef<HTMLDivElement>(null);

  // Scroll Parallax
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  const yBg = useTransform(scrollYProgress, [0, 1], ["0%", "25%"]);
  const scaleBg = useTransform(scrollYProgress, [0, 1], [1, 1.15]);
  const textY = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const textOpacity = useTransform(scrollYProgress, [0, 0.7], [1, 0]);

  // Pointer Parallax for Desktop
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springConfig = { damping: 25, stiffness: 100 };
  const rotateX = useSpring(useTransform(mouseY, [-0.5, 0.5], [4, -4]), springConfig);
  const rotateY = useSpring(useTransform(mouseX, [-0.5, 0.5], [-4, 4]), springConfig);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseXPos = (e.clientX - rect.left) / width - 0.5;
    const mouseYPos = (e.clientY - rect.top) / height - 0.5;
    mouseX.set(mouseXPos);
    mouseY.set(mouseYPos);
  };

  const handleMouseLeave = () => {
    mouseX.set(0);
    mouseY.set(0);
  };

  return (
    <section
      ref={containerRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#092E3A] pt-20"
      style={{ perspective: 1200 }}
    >
      {/* 3D Motion Container */}
      <motion.div
        style={{
          rotateX,
          rotateY,
          transformStyle: "preserve-3d",
        }}
        className="absolute inset-0 w-full h-full"
      >
        {/* Layer 1: Background Image & Scale */}
        <motion.div
          style={{ y: yBg, scale: scaleBg }}
          className="absolute inset-0 w-full h-full"
        >
          <Image
            src="/images/hero-khurasan-community.png"
            alt="Khurasan Garden Master Community View"
            fill
            priority
            quality={90}
            className="object-cover object-center brightness-[0.82] contrast-[1.05]"
            sizes="100vw"
          />
        </motion.div>

        {/* Layer 2: Soft Teal Light Pass Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#092E3A] via-[#092E3A]/40 to-transparent pointer-events-none" />
        <div className="absolute inset-0 bg-radial-teal opacity-30 pointer-events-none mix-blend-overlay" />

        {/* Artist's Impression Badge */}
        <div className="absolute top-28 right-6 z-20">
          <span className="inline-flex items-center space-x-1.5 px-3 py-1 rounded-full text-[11px] font-medium uppercase tracking-wider bg-[#092E3A]/80 text-[#17BFC8] border border-[#17BFC8]/30 backdrop-blur-md shadow-lg">
            <Sparkles className="w-3 h-3 text-[#17BFC8]" />
            <span>Artist's Impression</span>
          </span>
        </div>
      </motion.div>

      {/* Layer 3: Hero Content Layer */}
      <motion.div
        style={{ y: textY, opacity: textOpacity }}
        className="relative z-20 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white space-y-6 py-12"
      >
        {/* Eyebrow */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="inline-flex items-center space-x-2 px-4 py-1.5 rounded-full bg-[#17BFC8]/15 border border-[#17BFC8]/40 text-[#17BFC8] text-xs sm:text-sm uppercase tracking-widest font-semibold backdrop-blur-md"
        >
          <span className="w-2 h-2 rounded-full bg-[#17BFC8] animate-pulse" />
          <span>Khurasan Garden · M-9 Karachi</span>
        </motion.div>

        {/* Hero Title */}
        <motion.h1
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.4 }}
          className="font-display fluid-hero font-bold tracking-tight text-white drop-shadow-md max-w-4xl mx-auto"
        >
          A Better Address for Every Generation.
        </motion.h1>

        {/* Supporting Copy */}
        <motion.p
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.6 }}
          className="text-base sm:text-lg md:text-xl text-[#F7F5EF]/90 max-w-2xl mx-auto font-light leading-relaxed drop-shadow-sm"
        >
          Discover a thoughtfully planned community created around greener spaces, everyday convenience and meaningful family life along the M-9 corridor.
        </motion.p>

        {/* Action Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.8 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4"
        >
          <Link
            href="/contact"
            className="w-full sm:w-auto inline-flex items-center justify-center space-x-2.5 px-8 py-4 rounded-full bg-[#17BFC8] text-[#092E3A] font-bold text-sm uppercase tracking-wider hover:bg-[#F7F5EF] hover:shadow-xl transition-all transform hover:-translate-y-1 shadow-lg"
          >
            <Calendar className="w-4 h-4" />
            <span>Book a Site Visit</span>
          </Link>

          <a
            href="#more-than-land"
            className="w-full sm:w-auto inline-flex items-center justify-center space-x-2 px-7 py-4 rounded-full bg-white/15 text-white hover:bg-white/25 border border-white/30 backdrop-blur-md text-sm font-semibold uppercase tracking-wider transition-all"
          >
            <Compass className="w-4 h-4 text-[#17BFC8]" />
            <span>Explore the Community</span>
          </a>
        </motion.div>
      </motion.div>

      {/* Layer 4: Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center text-white/70 hover:text-[#17BFC8] transition-colors cursor-pointer"
      >
        <a href="#trust-strip" className="flex flex-col items-center space-y-1">
          <span className="text-[10px] uppercase tracking-widest">Scroll to discover</span>
          <motion.div
            animate={{ y: [0, 6, 0] }}
            transition={{ repeat: Infinity, duration: 1.8 }}
          >
            <ChevronDown className="w-5 h-5 text-[#17BFC8]" />
          </motion.div>
        </a>
      </motion.div>
    </section>
  );
}
