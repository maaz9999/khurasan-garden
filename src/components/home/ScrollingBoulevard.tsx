"use client";

import { useRef } from "react";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { Sparkles, Navigation } from "lucide-react";

export function ScrollingBoulevard() {
  const containerRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  // Scale image gently to simulate forward movement along the road
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.18]);
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "5%"]);

  // Reveal messages at specific scroll checkpoints
  const opacityMsg1 = useTransform(scrollYProgress, [0.05, 0.25, 0.35], [0, 1, 0]);
  const yMsg1 = useTransform(scrollYProgress, [0.05, 0.25, 0.35], [30, 0, -30]);

  const opacityMsg2 = useTransform(scrollYProgress, [0.38, 0.58, 0.68], [0, 1, 0]);
  const yMsg2 = useTransform(scrollYProgress, [0.38, 0.58, 0.68], [30, 0, -30]);

  const opacityMsg3 = useTransform(scrollYProgress, [0.72, 0.9, 0.98], [0, 1, 1]);
  const yMsg3 = useTransform(scrollYProgress, [0.72, 0.9, 0.98], [30, 0, 0]);

  return (
    <div ref={containerRef} className="relative h-[280vh] bg-[#092E3A]">
      {/* Sticky Fullscreen Canvas */}
      <div className="sticky top-0 h-screen w-full overflow-hidden flex items-center justify-center">
        {/* Animated Background Boulevard Image */}
        <motion.div style={{ scale, y }} className="absolute inset-0 w-full h-full">
          <Image
            src="/images/community-boulevard.png"
            alt="Khurasan Community Wide Boulevard"
            fill
            quality={90}
            className="object-cover object-center brightness-[0.75] contrast-[1.05]"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#092E3A] via-[#092E3A]/30 to-[#092E3A]/40" />
        </motion.div>

        {/* Artist's Impression Tag */}
        <div className="absolute top-28 left-6 z-20">
          <span className="inline-flex items-center space-x-1.5 px-3 py-1 rounded-full text-xs font-medium bg-[#092E3A]/80 text-[#17BFC8] border border-[#17BFC8]/30 backdrop-blur-md">
            <Sparkles className="w-3 h-3 text-[#17BFC8]" />
            <span>Artist's Impression</span>
          </span>
        </div>

        {/* Scrolling Tunnel Guidance Pill */}
        <div className="absolute top-28 right-6 z-20 hidden sm:flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-white/10 text-white/90 text-xs backdrop-blur-md border border-white/20">
          <Navigation className="w-3.5 h-3.5 text-[#17BFC8] animate-pulse" />
          <span>Scroll to travel along boulevard</span>
        </div>

        {/* Message 1 */}
        <motion.div
          style={{ opacity: opacityMsg1, y: yMsg1 }}
          className="absolute z-20 max-w-2xl px-6 text-center text-white space-y-3"
        >
          <span className="text-xs uppercase tracking-widest text-[#17BFC8] font-bold">
            Chapter 01 · Planning
          </span>
          <h2 className="font-display fluid-h2 font-bold drop-shadow-md">
            Space to Breathe.
          </h2>
          <p className="text-sm sm:text-base text-white/80 font-light max-w-lg mx-auto">
            Wide carpeted internal avenues designed for smooth movement, pedestrian safety, and open views.
          </p>
        </motion.div>

        {/* Message 2 */}
        <motion.div
          style={{ opacity: opacityMsg2, y: yMsg2 }}
          className="absolute z-20 max-w-2xl px-6 text-center text-white space-y-3"
        >
          <span className="text-xs uppercase tracking-widest text-[#17BFC8] font-bold">
            Chapter 02 · Convenience
          </span>
          <h2 className="font-display fluid-h2 font-bold drop-shadow-md">
            Everything Closer to Home.
          </h2>
          <p className="text-sm sm:text-base text-white/80 font-light max-w-lg mx-auto">
            Parks, commercial markets, mosque, and healthcare precincts integrated into the masterplan layout.
          </p>
        </motion.div>

        {/* Message 3 */}
        <motion.div
          style={{ opacity: opacityMsg3, y: yMsg3 }}
          className="absolute z-20 max-w-2xl px-6 text-center text-white space-y-3"
        >
          <span className="text-xs uppercase tracking-widest text-[#17BFC8] font-bold">
            Chapter 03 · Belonging
          </span>
          <h2 className="font-display fluid-h2 font-bold drop-shadow-md">
            A Community Built Around Life.
          </h2>
          <p className="text-sm sm:text-base text-white/80 font-light max-w-lg mx-auto">
            Escape Karachi city congestion while remaining connected to major urban hubs via the M-9 corridor.
          </p>
        </motion.div>

        {/* Progress Bar Indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 w-48 h-1 bg-white/20 rounded-full overflow-hidden">
          <motion.div
            style={{ scaleX: scrollYProgress }}
            className="h-full bg-[#17BFC8] origin-left"
          />
        </div>
      </div>
    </div>
  );
}
