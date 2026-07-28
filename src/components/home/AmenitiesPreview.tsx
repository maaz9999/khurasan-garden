"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { Sparkles, ArrowRight, Landmark, Trees, Dumbbell, ShieldCheck, ShoppingBag, HeartPulse } from "lucide-react";
import { amenitiesData } from "@/data/amenities";

const iconMap: Record<string, any> = {
  Landmark,
  Trees,
  Dumbbell,
  ShieldCheck,
  ShoppingBag,
  HeartPulse,
};

const getStatusBadgeClass = (status: string) => {
  switch (status) {
    case "Operational":
      return "bg-[#839B77] text-white border-[#839B77]";
    case "Under Development":
      return "bg-[#07525D] text-[#17BFC8] border-[#17BFC8]/40";
    case "Planned":
    default:
      return "bg-[#092E3A]/80 text-[#DCCDB6] border-[#DCCDB6]/40";
  }
};

export function AmenitiesPreview() {
  const featuredAmenities = amenitiesData.filter((a) => a.featured).slice(0, 6);

  return (
    <section className="py-24 bg-[#092E3A] text-white relative overflow-hidden">
      {/* Background Subtle Gradient Accents */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#17BFC8]/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#07525D]/20 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-16">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-3"
          >
            <span className="inline-block px-3.5 py-1 rounded-full bg-[#17BFC8]/15 text-[#17BFC8] text-xs font-semibold uppercase tracking-wider border border-[#17BFC8]/30">
              Facilities & Infrastructure
            </span>
            <h2 className="font-display fluid-h2 font-bold text-white">
              Everyday Life, <br />
              <span className="text-[#17BFC8] italic font-normal">Thoughtfully Considered.</span>
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <Link
              href="/amenities"
              className="inline-flex items-center space-x-2 px-6 py-3 rounded-full bg-[#17BFC8] text-[#092E3A] font-semibold text-xs uppercase tracking-wider hover:bg-[#F7F5EF] transition-all shadow-lg group"
            >
              <span>Explore All Amenities</span>
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </motion.div>
        </div>

        {/* 3D Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredAmenities.map((amenity, idx) => {
            const IconComponent = iconMap[amenity.iconName] || Landmark;
            return (
              <motion.div
                key={amenity.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
                whileHover={{ y: -6 }}
                className="rounded-2xl overflow-hidden bg-white/5 border border-white/10 hover:border-[#17BFC8]/50 transition-all shadow-xl group flex flex-col"
              >
                {/* Image Box */}
                <div className="relative aspect-[4/3] w-full overflow-hidden bg-[#07525D]">
                  <Image
                    src={amenity.image}
                    alt={amenity.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#092E3A] via-transparent to-transparent" />

                  {/* Top Status & Impression Badges */}
                  <div className="absolute top-3 left-3 right-3 flex items-center justify-between z-10">
                    <span className="inline-flex items-center space-x-1 px-2.5 py-1 rounded-full text-[10px] font-semibold uppercase tracking-wider bg-[#092E3A]/90 text-[#17BFC8] border border-[#17BFC8]/30 backdrop-blur-md">
                      <Sparkles className="w-2.5 h-2.5" />
                      <span>Artist's Impression</span>
                    </span>

                    <span
                      className={`px-2.5 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider border backdrop-blur-md ${getStatusBadgeClass(
                        amenity.status
                      )}`}
                    >
                      {amenity.status}
                    </span>
                  </div>
                </div>

                {/* Card Content */}
                <div className="p-6 space-y-3 flex-grow flex flex-col justify-between">
                  <div className="space-y-2">
                    <div className="flex items-center space-x-2.5">
                      <div className="p-2 rounded-lg bg-[#17BFC8]/20 text-[#17BFC8]">
                        <IconComponent className="w-4 h-4" />
                      </div>
                      <span className="text-xs uppercase tracking-wider text-[#DCCDB6] font-semibold">
                        {amenity.category}
                      </span>
                    </div>

                    <h3 className="font-display font-bold text-xl text-white group-hover:text-[#17BFC8] transition-colors">
                      {amenity.title}
                    </h3>

                    <p className="text-xs sm:text-sm text-white/75 font-light leading-relaxed">
                      {amenity.shortDescription}
                    </p>
                  </div>

                  <div className="pt-3 border-t border-white/10 flex items-center justify-between text-xs text-[#17BFC8]">
                    <span>Status: {amenity.status}</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
