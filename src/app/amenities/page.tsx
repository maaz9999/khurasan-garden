"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { Sparkles, Landmark, Trees, Dumbbell, ShieldCheck, ShoppingBag, HeartPulse, GraduationCap, Users, Route, Baby, ArrowRight } from "lucide-react";
import { amenitiesData, AmenityCategory } from "@/data/amenities";

export const dynamic = "force-static";

const iconMap: Record<string, any> = {
  Landmark,
  Trees,
  Dumbbell,
  ShieldCheck,
  ShoppingBag,
  HeartPulse,
  GraduationCap,
  Users,
  Route,
  Baby,
};

const filterCategories = [
  "All",
  "Community",
  "Wellness",
  "Faith",
  "Education",
  "Security",
  "Recreation",
  "Commercial",
];

const getStatusBadgeClass = (status: string) => {
  switch (status) {
    case "Operational":
      return "bg-[#839B77] text-white border-[#839B77]";
    case "Under Development":
      return "bg-[#07525D] text-[#17BFC8] border-[#17BFC8]/40";
    case "Planned":
    default:
      return "bg-[#092E3A] text-[#DCCDB6] border-[#DCCDB6]/40";
  }
};

export default function AmenitiesPage() {
  const [selectedCategory, setSelectedCategory] = useState<string>("All");

  const filteredAmenities =
    selectedCategory === "All"
      ? amenitiesData
      : amenitiesData.filter((item) => item.category === selectedCategory);

  return (
    <div className="pt-28 pb-24 bg-[#F7F5EF] space-y-16">
      {/* Header */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
        <span className="inline-block px-3.5 py-1 rounded-full bg-[#07525D]/10 text-[#07525D] text-xs font-semibold uppercase tracking-wider">
          Masterplan Infrastructure
        </span>
        <h1 className="font-display fluid-hero font-bold text-[#092E3A] max-w-3xl mx-auto">
          Everyday Life, Thoughtfully Considered.
        </h1>
        <p className="text-base sm:text-lg text-[#172326]/80 max-w-2xl mx-auto font-light leading-relaxed">
          From neighborhood mosques to wide tree-lined boulevards and local commercial hubs, explore the complete range of planned and developing amenities.
        </p>

        {/* Filter Pills */}
        <div className="flex flex-wrap items-center justify-center gap-2 pt-4">
          {filterCategories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-4 py-2 rounded-full text-xs font-semibold tracking-wider transition-all border ${
                selectedCategory === cat
                  ? "bg-[#07525D] text-white border-[#07525D] shadow-md"
                  : "bg-white text-[#172326]/80 border-[#DCCDB6] hover:bg-[#DCCDB6]/30"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </section>

      {/* Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredAmenities.map((amenity, idx) => {
            const IconComponent = iconMap[amenity.iconName] || Landmark;
            return (
              <motion.div
                key={amenity.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: idx * 0.05 }}
                className="rounded-2xl overflow-hidden bg-white border border-[#DCCDB6]/70 shadow-md hover:shadow-xl transition-all flex flex-col justify-between"
              >
                <div>
                  {/* Image */}
                  <div className="relative aspect-[4/3] w-full bg-[#092E3A] overflow-hidden">
                    <Image
                      src={amenity.image}
                      alt={amenity.title}
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />

                    <div className="absolute top-3 left-3 right-3 flex items-center justify-between z-10">
                      {amenity.isArtistImpression && (
                        <span className="inline-flex items-center space-x-1 px-2.5 py-1 rounded-full text-[10px] bg-[#092E3A]/90 text-[#17BFC8] border border-[#17BFC8]/30 backdrop-blur-md font-medium">
                          <Sparkles className="w-2.5 h-2.5" />
                          <span>Artist's Impression</span>
                        </span>
                      )}

                      <span
                        className={`px-2.5 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider border backdrop-blur-md ${getStatusBadgeClass(
                          amenity.status
                        )}`}
                      >
                        {amenity.status}
                      </span>
                    </div>
                  </div>

                  {/* Body */}
                  <div className="p-6 space-y-3">
                    <div className="flex items-center space-x-2 text-[#07525D]">
                      <IconComponent className="w-4 h-4 text-[#17BFC8]" />
                      <span className="text-xs uppercase tracking-wider font-bold">
                        {amenity.category}
                      </span>
                    </div>

                    <h3 className="font-display font-bold text-2xl text-[#092E3A]">
                      {amenity.title}
                    </h3>

                    <p className="text-xs sm:text-sm text-[#172326]/80 font-light leading-relaxed">
                      {amenity.fullDescription}
                    </p>
                  </div>
                </div>

                {/* Footer status */}
                <div className="px-6 py-3.5 bg-[#F7F5EF] border-t border-[#DCCDB6]/40 flex items-center justify-between text-xs text-[#07525D] font-semibold">
                  <span>Current Phase: {amenity.status}</span>
                  <Link
                    href="/contact"
                    className="text-[#07525D] hover:text-[#17BFC8] inline-flex items-center space-x-1"
                  >
                    <span>Inquire</span>
                    <ArrowRight className="w-3 h-3" />
                  </Link>
                </div>
              </motion.div>
            );
          })}
        </div>
      </section>
    </div>
  );
}
