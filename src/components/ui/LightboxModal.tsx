"use client";

import { useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { X, ChevronLeft, ChevronRight, Sparkles } from "lucide-react";
import { GalleryItem } from "@/data/gallery";

interface LightboxModalProps {
  item: GalleryItem | null;
  onClose: () => void;
  onPrev: () => void;
  onNext: () => void;
}

export function LightboxModal({ item, onClose, onPrev, onNext }: LightboxModalProps) {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!item) return;
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowLeft") onPrev();
      if (e.key === "ArrowRight") onNext();
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [item, onClose, onPrev, onNext]);

  if (!item) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-8 bg-[#092E3A]/95 backdrop-blur-xl">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-6 right-6 z-50 p-3 rounded-full bg-white/10 text-white hover:bg-white/20 transition-colors"
          aria-label="Close Lightbox"
        >
          <X className="w-6 h-6" />
        </button>

        {/* Previous Button */}
        <button
          onClick={onPrev}
          className="absolute left-4 sm:left-8 z-50 p-3 rounded-full bg-white/10 text-white hover:bg-[#17BFC8] hover:text-[#092E3A] transition-colors"
          aria-label="Previous Image"
        >
          <ChevronLeft className="w-6 h-6" />
        </button>

        {/* Next Button */}
        <button
          onClick={onNext}
          className="absolute right-4 sm:right-8 z-50 p-3 rounded-full bg-white/10 text-white hover:bg-[#17BFC8] hover:text-[#092E3A] transition-colors"
          aria-label="Next Image"
        >
          <ChevronRight className="w-6 h-6" />
        </button>

        {/* Image Content Container */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.9 }}
          transition={{ duration: 0.3 }}
          className="relative max-w-5xl w-full max-h-[85vh] flex flex-col items-center justify-center space-y-4"
        >
          <div className="relative w-full h-[65vh] rounded-2xl overflow-hidden border border-white/20 shadow-2xl">
            <Image
              src={item.image}
              alt={item.title}
              fill
              className="object-contain"
              sizes="90vw"
            />
          </div>

          {/* Metadata Footer */}
          <div className="text-center space-y-2 max-w-2xl px-4">
            <div className="flex items-center justify-center space-x-2">
              <span className="text-xs uppercase tracking-wider text-[#17BFC8] font-bold">
                {item.category}
              </span>
              {item.isArtistImpression && (
                <span className="inline-flex items-center space-x-1 px-2.5 py-0.5 rounded-full text-[10px] bg-[#17BFC8]/20 text-[#17BFC8] border border-[#17BFC8]/40">
                  <Sparkles className="w-2.5 h-2.5" />
                  <span>Artist's Impression</span>
                </span>
              )}
            </div>

            <h3 className="font-display font-bold text-2xl text-white">
              {item.title}
            </h3>

            <p className="text-xs sm:text-sm text-white/75 font-light">
              {item.caption}
            </p>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
