"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Sparkles, CheckCircle2 } from "lucide-react";

const depthWords = [
  { word: "Belonging", subtitle: "A warm community atmosphere where neighbors know each other." },
  { word: "Security", subtitle: "Gated entry points, perimeter boundaries, and 24/7 surveillance." },
  { word: "Growth", subtitle: "Green parks and healthy open air for children to grow up safely." },
  { word: "Community", subtitle: "Dedicated spaces for social gatherings, faith, and wellness." },
  { word: "Memories", subtitle: "Creating a permanent family foundation across generations." },
];

export function MemoriesSection() {
  return (
    <section className="py-24 bg-[#F7F5EF] relative overflow-hidden border-t border-[#DCCDB6]/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Sticky Image Column */}
          <div className="lg:col-span-6 lg:sticky lg:top-28">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative rounded-2xl overflow-hidden shadow-2xl border border-[#DCCDB6] aspect-[4/5] group"
            >
              <Image
                src="/images/family-lifelong-memories.png"
                alt="Pakistani family spending peaceful evening outdoors in Khurasan Garden"
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#092E3A]/70 via-transparent to-transparent" />

              {/* Artist Impression Tag */}
              <div className="absolute top-4 left-4 z-10">
                <span className="inline-flex items-center space-x-1.5 px-3 py-1 rounded-full text-xs font-medium bg-[#092E3A]/80 text-[#17BFC8] border border-[#17BFC8]/30 backdrop-blur-md">
                  <Sparkles className="w-3 h-3 text-[#17BFC8]" />
                  <span>Artist's Impression</span>
                </span>
              </div>

              {/* Bottom Quote Overlay */}
              <div className="absolute bottom-6 left-6 right-6 z-10 text-white space-y-1 bg-[#092E3A]/85 backdrop-blur-md p-5 rounded-xl border border-white/10">
                <p className="font-display font-bold text-xl text-[#17BFC8]">
                  Multigenerational Family Lifestyle
                </p>
                <p className="text-xs text-white/80 font-light leading-relaxed">
                  Quiet outdoor lawns, flowering bougainvillea, and contemporary home architecture designed for enduring family comfort.
                </p>
              </div>
            </motion.div>
          </div>

          {/* Editorial Content Column */}
          <div className="lg:col-span-6 space-y-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="space-y-4"
            >
              <span className="inline-block px-3.5 py-1 rounded-full bg-[#839B77]/20 text-[#07525D] text-xs font-semibold uppercase tracking-wider">
                Lifestyle & Legacy
              </span>

              <h2 className="font-display fluid-h2 font-bold text-[#092E3A]">
                Creating Spaces for <br />
                <span className="text-[#07525D] italic">Lifelong Memories.</span>
              </h2>

              <p className="text-[#172326]/80 text-base leading-relaxed font-light">
                A home is much more than brick and mortar. It is the backdrop to family evening teas, children playing on lawn grass, peaceful strolls along clean boulevards, and the quiet comfort of a secure neighborhood.
              </p>
            </motion.div>

            {/* Depth Floating Words Cards */}
            <div className="space-y-4">
              {depthWords.map((item, idx) => (
                <motion.div
                  key={item.word}
                  initial={{ opacity: 0, x: 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                  className="p-5 rounded-xl bg-white border border-[#DCCDB6]/60 shadow-sm hover:shadow-md hover:border-[#17BFC8] transition-all group flex items-start space-x-4"
                >
                  <div className="p-2 rounded-full bg-[#17BFC8]/15 text-[#07525D] shrink-0 mt-0.5 group-hover:bg-[#17BFC8] group-hover:text-[#092E3A] transition-colors">
                    <CheckCircle2 className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="font-display font-bold text-xl text-[#092E3A] group-hover:text-[#07525D] transition-colors">
                      {item.word}
                    </h3>
                    <p className="text-xs sm:text-sm text-[#172326]/70 mt-1 font-light leading-relaxed">
                      {item.subtitle}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
