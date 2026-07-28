"use client";

import { motion } from "framer-motion";
import { Compass, HeartHandshake, Trees, MapPin } from "lucide-react";

const trustPillars = [
  {
    icon: Compass,
    title: "Thoughtfully Planned",
    description: "Designed for organic neighborhood privacy, wide streets, and smooth access.",
  },
  {
    icon: HeartHandshake,
    title: "Family Focused",
    description: "Safe spaces, play areas, and quiet surroundings for every generation.",
  },
  {
    icon: Trees,
    title: "Green Community",
    description: "Bougainvillea-lined avenues, native date palms, and open landscaped parks.",
  },
  {
    icon: MapPin,
    title: "Connected Location",
    description: "Direct frontage along the expanding M-9 Karachi–Hyderabad corridor.",
  },
];

export function TrustStrip() {
  return (
    <section id="trust-strip" className="bg-[#07525D] text-white py-10 relative z-20 border-t border-[#17BFC8]/30 shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {trustPillars.map((pillar, idx) => {
            const Icon = pillar.icon;
            return (
              <motion.div
                key={pillar.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="flex items-start space-x-4 p-4 rounded-xl bg-white/5 hover:bg-white/10 transition-colors border border-white/10"
              >
                <div className="p-3 rounded-lg bg-[#17BFC8]/20 text-[#17BFC8] shrink-0">
                  <Icon className="w-6 h-6" />
                </div>
                <div className="space-y-1">
                  <h3 className="font-display font-semibold text-lg text-white">
                    {pillar.title}
                  </h3>
                  <p className="text-xs text-white/75 leading-relaxed font-light">
                    {pillar.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
