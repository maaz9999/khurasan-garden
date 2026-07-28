"use client";

import { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Sparkles, Maximize2 } from "lucide-react";
import { galleryItemsData, GalleryItem } from "@/data/gallery";
import { LightboxModal } from "@/components/ui/LightboxModal";

const categories = [
  "All",
  "Architectural Vision",
  "Landscaping",
  "Amenities",
  "Community Life",
] as const;

export function MasonryGallery() {
  const [selectedCategory, setSelectedCategory] = useState<string>("All");
  const [activeItemIndex, setActiveItemIndex] = useState<number | null>(null);

  const filteredItems =
    selectedCategory === "All"
      ? galleryItemsData
      : galleryItemsData.filter((item) => item.category === selectedCategory);

  const activeItem = activeItemIndex !== null ? filteredItems[activeItemIndex] : null;

  const handlePrev = () => {
    if (activeItemIndex === null) return;
    setActiveItemIndex((prev) =>
      prev === 0 ? filteredItems.length - 1 : (prev as number) - 1
    );
  };

  const handleNext = () => {
    if (activeItemIndex === null) return;
    setActiveItemIndex((prev) =>
      prev === filteredItems.length - 1 ? 0 : (prev as number) + 1
    );
  };

  return (
    <section className="py-24 bg-[#092E3A] text-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <motion.span
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-block px-3.5 py-1 rounded-full bg-[#17BFC8]/15 text-[#17BFC8] text-xs font-semibold uppercase tracking-wider border border-[#17BFC8]/30"
          >
            Visual Portfolio
          </motion.span>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="font-display fluid-h2 font-bold text-white"
          >
            Masterplan & Visual Gallery
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-white/80 text-base font-light leading-relaxed"
          >
            Browse architectural impressions and planned landscape vistas created for Khurasan Garden.
          </motion.p>

          {/* Filter Pills */}
          <div className="flex flex-wrap items-center justify-center gap-2 pt-4">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-4 py-2 rounded-full text-xs font-semibold tracking-wider transition-all border ${
                  selectedCategory === cat
                    ? "bg-[#17BFC8] text-[#092E3A] border-[#17BFC8] shadow-md"
                    : "bg-white/5 text-white/80 border-white/10 hover:bg-white/10 hover:text-white"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Masonry Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredItems.map((item, idx) => (
            <motion.div
              key={item.id}
              layout
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4, delay: idx * 0.05 }}
              onClick={() => setActiveItemIndex(idx)}
              className="group relative rounded-2xl overflow-hidden bg-white/5 border border-white/10 cursor-pointer aspect-[4/3] shadow-lg"
            >
              <Image
                src={item.image}
                alt={item.title}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-108"
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#092E3A] via-transparent to-transparent opacity-80 group-hover:opacity-90 transition-opacity" />

              {/* Top Badges */}
              <div className="absolute top-3 left-3 right-3 flex items-center justify-between z-10">
                {item.isArtistImpression && (
                  <span className="inline-flex items-center space-x-1 px-2.5 py-0.5 rounded-full text-[10px] bg-[#092E3A]/90 text-[#17BFC8] border border-[#17BFC8]/30 backdrop-blur-md font-medium">
                    <Sparkles className="w-2.5 h-2.5" />
                    <span>Artist's Impression</span>
                  </span>
                )}

                <div className="p-1.5 rounded-full bg-white/10 text-white opacity-0 group-hover:opacity-100 transition-opacity">
                  <Maximize2 className="w-4 h-4" />
                </div>
              </div>

              {/* Hover Text Info */}
              <div className="absolute bottom-4 left-4 right-4 z-10 space-y-1">
                <span className="text-[10px] uppercase tracking-widest text-[#17BFC8] font-bold">
                  {item.category}
                </span>
                <h3 className="font-display font-bold text-lg text-white group-hover:text-[#17BFC8] transition-colors">
                  {item.title}
                </h3>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Accessible Lightbox Modal */}
      <LightboxModal
        item={activeItem}
        onClose={() => setActiveItemIndex(null)}
        onPrev={handlePrev}
        onNext={handleNext}
      />
    </section>
  );
}
