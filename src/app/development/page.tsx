"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { AlertTriangle, CheckCircle2, Clock, Calendar, ArrowRight } from "lucide-react";
import { developmentUpdatesData, DevelopmentCategory } from "@/data/development";

const filterCategories = [
  "All",
  "Roads",
  "Infrastructure",
  "Landscaping",
  "Amenities",
  "Construction",
];

export default function DevelopmentPage() {
  const [selectedCategory, setSelectedCategory] = useState<string>("All");

  const filteredUpdates =
    selectedCategory === "All"
      ? developmentUpdatesData
      : developmentUpdatesData.filter((item) => item.category === selectedCategory);

  return (
    <div className="pt-28 pb-24 bg-[#F7F5EF] space-y-16">
      {/* Header */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
        <span className="inline-block px-3.5 py-1 rounded-full bg-[#07525D]/10 text-[#07525D] text-xs font-semibold uppercase tracking-wider">
          On-Site Development & Milestones
        </span>
        <h1 className="font-display fluid-hero font-bold text-[#092E3A] max-w-3xl mx-auto">
          See the Progress for Yourself.
        </h1>
        <p className="text-base sm:text-lg text-[#172326]/80 max-w-2xl mx-auto font-light leading-relaxed">
          We believe in complete transparency. Track ongoing earthwork, road leveling, infrastructure installation, and greenery drives on site.
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

      {/* Development Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredUpdates.map((item, idx) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: idx * 0.05 }}
              className="rounded-2xl overflow-hidden bg-white border border-[#DCCDB6]/70 shadow-md hover:shadow-xl transition-all flex flex-col justify-between"
            >
              <div>
                {/* Image Placeholder */}
                <div className="relative aspect-[16/10] w-full bg-[#092E3A] overflow-hidden">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />

                  <div className="absolute top-3 left-3 right-3 flex items-center justify-between z-10">
                    <span className="px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider bg-[#092E3A]/90 text-white">
                      {item.category}
                    </span>

                    <span className="px-2.5 py-1 rounded-full text-[10px] font-semibold bg-[#17BFC8] text-[#092E3A]">
                      {item.date}
                    </span>
                  </div>

                  {item.isPlaceholder && (
                    <div className="absolute bottom-3 left-3 z-10">
                      <span className="inline-flex items-center space-x-1 px-2.5 py-0.5 rounded-md text-[10px] font-medium bg-amber-500/90 text-slate-900 backdrop-blur-sm">
                        <AlertTriangle className="w-2.5 h-2.5" />
                        <span>Development Placeholder</span>
                      </span>
                    </div>
                  )}
                </div>

                {/* Content */}
                <div className="p-6 space-y-3">
                  <h3 className="font-display font-bold text-xl text-[#092E3A]">
                    {item.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-[#172326]/75 font-light leading-relaxed">
                    {item.description}
                  </p>

                  {/* Progress Bar */}
                  <div className="pt-2 space-y-1.5">
                    <div className="flex items-center justify-between text-xs font-semibold text-[#07525D]">
                      <span>Completion Status</span>
                      <span>{item.progressPercentage}%</span>
                    </div>
                    <div className="w-full h-2 rounded-full bg-[#F7F5EF] border border-[#DCCDB6] overflow-hidden">
                      <div
                        className="h-full bg-[#07525D] rounded-full transition-all duration-1000"
                        style={{ width: `${item.progressPercentage}%` }}
                      />
                    </div>
                  </div>
                </div>
              </div>

              {/* Footer */}
              <div className="px-6 py-3.5 bg-[#F7F5EF] border-t border-[#DCCDB6]/40 flex items-center justify-between text-xs text-[#07525D] font-semibold">
                <span className="flex items-center space-x-1">
                  {item.status === "Completed" ? (
                    <CheckCircle2 className="w-4 h-4 text-[#839B77]" />
                  ) : (
                    <Clock className="w-4 h-4 text-[#07525D]" />
                  )}
                  <span>Status: {item.status}</span>
                </span>

                <Link
                  href="/contact"
                  className="text-[#07525D] hover:text-[#17BFC8] inline-flex items-center space-x-1"
                >
                  <span>Book Site Visit</span>
                  <ArrowRight className="w-3 h-3" />
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
}
