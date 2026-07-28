"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, CheckCircle2, Clock, AlertTriangle } from "lucide-react";
import { developmentUpdatesData } from "@/data/development";

export function DevelopmentPreview() {
  const recentUpdates = developmentUpdatesData.slice(0, 3);

  return (
    <section className="py-24 bg-[#F7F5EF] relative overflow-hidden border-t border-[#DCCDB6]/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-3"
          >
            <span className="inline-block px-3.5 py-1 rounded-full bg-[#07525D]/10 text-[#07525D] text-xs font-semibold uppercase tracking-wider">
              Transparency & On-Site Evidence
            </span>
            <h2 className="font-display fluid-h2 font-bold text-[#092E3A]">
              See the Progress <br />
              <span className="text-[#07525D] italic font-normal">for Yourself.</span>
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <Link
              href="/development"
              className="inline-flex items-center space-x-2 px-6 py-3 rounded-full bg-[#07525D] text-white font-semibold text-xs uppercase tracking-wider hover:bg-[#17BFC8] hover:text-[#092E3A] transition-all shadow-md group"
            >
              <span>View All Development Updates</span>
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </motion.div>
        </div>

        {/* Development Timeline Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {recentUpdates.map((item, idx) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.15 }}
              className="rounded-2xl overflow-hidden bg-white border border-[#DCCDB6]/70 shadow-md hover:shadow-xl transition-all flex flex-col justify-between"
            >
              <div className="space-y-4">
                {/* Image Placeholder with Label */}
                <div className="relative aspect-[16/10] w-full bg-[#092E3A] overflow-hidden">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />

                  {/* Date & Category Tag */}
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

                {/* Card Content */}
                <div className="p-6 space-y-3">
                  <h3 className="font-display font-bold text-xl text-[#092E3A]">
                    {item.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-[#172326]/75 font-light leading-relaxed">
                    {item.description}
                  </p>

                  {/* Progress Indicator */}
                  <div className="pt-2 space-y-1.5">
                    <div className="flex items-center justify-between text-xs font-semibold text-[#07525D]">
                      <span>Completion Progress</span>
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

              {/* Status Footer */}
              <div className="px-6 py-4 bg-[#F7F5EF]/60 border-t border-[#DCCDB6]/40 flex items-center justify-between text-xs">
                <span className="font-medium text-[#172326]/80 flex items-center space-x-1">
                  {item.status === "Completed" ? (
                    <CheckCircle2 className="w-4 h-4 text-[#839B77]" />
                  ) : (
                    <Clock className="w-4 h-4 text-[#07525D]" />
                  )}
                  <span>Status: {item.status}</span>
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
