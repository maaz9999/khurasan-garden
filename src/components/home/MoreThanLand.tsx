"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { ArrowRight, Sparkles, Shield, Heart, Home } from "lucide-react";

export function MoreThanLand() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "center center"],
  });

  const rotateY = useTransform(scrollYProgress, [0, 1], [-18, 0]);
  const rotateX = useTransform(scrollYProgress, [0, 1], [12, 0]);
  const scale = useTransform(scrollYProgress, [0, 1], [0.92, 1]);
  const opacity = useTransform(scrollYProgress, [0, 1], [0.6, 1]);

  return (
    <section
      id="more-than-land"
      ref={sectionRef}
      className="py-24 bg-[#F7F5EF] relative overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Image Column with 3D Perspective Rotation */}
          <div className="lg:col-span-7" style={{ perspective: 1000 }}>
            <motion.div
              style={{
                rotateY,
                rotateX,
                scale,
                opacity,
                transformStyle: "preserve-3d",
              }}
              className="relative rounded-2xl overflow-hidden shadow-2xl border border-[#DCCDB6] group"
            >
              <div className="aspect-[3/2] relative w-full">
                <Image
                  src="/images/khurasan-entrance.png"
                  alt="Khurasan Garden Signature Entrance"
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                  sizes="(max-width: 1024px) 100vw, 55vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#092E3A]/60 via-transparent to-transparent" />
              </div>

              {/* Artist Impression Badge */}
              <div className="absolute top-4 left-4 z-10">
                <span className="inline-flex items-center space-x-1.5 px-3 py-1 rounded-full text-xs font-medium bg-[#092E3A]/80 text-[#17BFC8] border border-[#17BFC8]/30 backdrop-blur-md">
                  <Sparkles className="w-3 h-3" />
                  <span>Artist's Impression</span>
                </span>
              </div>

              {/* Floating Architectural Badge */}
              <div className="absolute bottom-6 left-6 right-6 z-10 flex items-center justify-between p-4 rounded-xl bg-[#F7F5EF]/90 backdrop-blur-md border border-[#DCCDB6]/60 shadow-lg">
                <div className="space-y-0.5">
                  <p className="font-display font-bold text-[#092E3A] text-lg">
                    Signature Gated Boulevard
                  </p>
                  <p className="text-xs text-[#07525D]">
                    Controlled entrance architecture & 24/7 security perimeter
                  </p>
                </div>
                <div className="w-10 h-10 rounded-full bg-[#07525D] text-white flex items-center justify-center shrink-0">
                  <Shield className="w-5 h-5 text-[#17BFC8]" />
                </div>
              </div>
            </motion.div>
          </div>

          {/* Text Content Column */}
          <div className="lg:col-span-5 space-y-8">
            <motion.div
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="space-y-4"
            >
              <span className="inline-block px-3 py-1 rounded-full bg-[#07525D]/10 text-[#07525D] text-xs font-semibold uppercase tracking-wider">
                Positioning & Philosophy
              </span>

              <h2 className="font-display fluid-h2 font-bold text-[#092E3A]">
                More Than Land. <br />
                <span className="italic text-[#07525D] font-normal">A Place to Belong.</span>
              </h2>
            </motion.div>

            <motion.blockquote
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="p-4 rounded-r-xl border-l-4 border-[#17BFC8] bg-[#07525D]/5 text-[#092E3A] font-display text-xl italic"
            >
              “We are not selling houses. We are creating spaces for lifelong memories.”
            </motion.blockquote>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.3 }}
              className="text-[#172326]/85 text-base leading-relaxed font-light"
            >
              Khurasan Garden is designed for families seeking a calmer, safer, and greener environment along Karachi's expanding M-9 Motorway corridor. It brings daily amenities closer to home, offering smooth wide avenues, secure play areas, and a permanent address your children will be proud to call home.
            </motion.p>

            {/* Feature Highlights */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.4 }}
              className="grid grid-cols-2 gap-4 pt-2"
            >
              <div className="flex items-center space-x-3 p-3 rounded-lg bg-white border border-[#DCCDB6]/50 shadow-sm">
                <Heart className="w-5 h-5 text-[#17BFC8]" />
                <span className="text-xs font-semibold text-[#092E3A]">Family-Centered</span>
              </div>
              <div className="flex items-center space-x-3 p-3 rounded-lg bg-white border border-[#DCCDB6]/50 shadow-sm">
                <Home className="w-5 h-5 text-[#07525D]" />
                <span className="text-xs font-semibold text-[#092E3A]">Permanent Address</span>
              </div>
            </motion.div>

            {/* CTA */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.5 }}
              className="pt-2"
            >
              <Link
                href="/about"
                className="inline-flex items-center space-x-2 px-6 py-3.5 rounded-full bg-[#07525D] text-white font-semibold text-sm hover:bg-[#17BFC8] hover:text-[#092E3A] transition-all shadow-md group"
              >
                <span>Discover Our Vision</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
