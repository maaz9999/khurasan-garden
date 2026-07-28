"use client";

import { motion } from "framer-motion";
import { MessageSquare, Check, Sparkles, AlertCircle } from "lucide-react";
import { plotCategoriesData } from "@/data/plots";
import { siteConfig } from "@/data/site";

export function PlotPreview() {
  return (
    <section className="py-24 bg-[#F7F5EF] relative overflow-hidden border-t border-[#DCCDB6]/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <motion.span
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-block px-3.5 py-1 rounded-full bg-[#07525D]/10 text-[#07525D] text-xs font-semibold uppercase tracking-wider"
          >
            Residential & Commercial Sectors
          </motion.span>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="font-display fluid-h2 font-bold text-[#092E3A]"
          >
            Tailored Plot Offerings
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-[#172326]/80 text-base font-light leading-relaxed"
          >
            Explore diverse size options designed to accommodate growing families and long-term commercial investments.
          </motion.p>
        </div>

        {/* Verification Notice Banner */}
        <div className="p-4 rounded-xl bg-[#07525D]/5 border border-[#07525D]/20 max-w-4xl mx-auto flex items-start space-x-3 text-xs sm:text-sm text-[#092E3A]">
          <AlertCircle className="w-5 h-5 text-[#07525D] shrink-0 mt-0.5" />
          <p className="leading-relaxed">
            <strong>Official Schedule Notice:</strong> Contact our official sales team for the latest verified block availability, current pricing schedules, and site visit schedules.
          </p>
        </div>

        {/* Plot Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {plotCategoriesData.map((category, idx) => (
            <motion.div
              key={category.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.15 }}
              className={`rounded-2xl p-8 bg-white border transition-all shadow-md hover:shadow-xl flex flex-col justify-between relative ${
                category.popular
                  ? "border-[#17BFC8] ring-2 ring-[#17BFC8]/30"
                  : "border-[#DCCDB6]/70"
              }`}
            >
              {category.popular && (
                <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 px-3 py-1 rounded-full bg-[#17BFC8] text-[#092E3A] text-[10px] font-bold uppercase tracking-wider shadow-sm">
                  Most Preferred Category
                </div>
              )}

              <div className="space-y-6">
                {/* Category Header */}
                <div className="space-y-2 pb-4 border-b border-[#DCCDB6]/40">
                  <span className="text-xs uppercase tracking-wider text-[#07525D] font-bold">
                    {category.category} Sector
                  </span>
                  <h3 className="font-display font-bold text-2xl text-[#092E3A]">
                    {category.title}
                  </h3>
                  <p className="text-xs text-[#172326]/75 font-light">
                    {category.installmentPeriod}
                  </p>
                </div>

                {/* Plot Sizes Pill List */}
                <div className="space-y-2">
                  <span className="text-xs font-semibold text-[#092E3A] uppercase tracking-wider">
                    Available Dimensions:
                  </span>
                  <div className="flex flex-wrap gap-2 pt-1">
                    {category.sizes.map((size) => (
                      <span
                        key={size}
                        className="px-3 py-1 rounded-md bg-[#F7F5EF] border border-[#DCCDB6] text-xs font-semibold text-[#07525D]"
                      >
                        {size}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Features List */}
                <div className="space-y-2.5 pt-2">
                  <span className="text-xs font-semibold text-[#092E3A] uppercase tracking-wider">
                    Key Features:
                  </span>
                  <ul className="space-y-2 text-xs text-[#172326]/85">
                    {category.features.map((feat) => (
                      <li key={feat} className="flex items-start space-x-2">
                        <Check className="w-4 h-4 text-[#17BFC8] shrink-0 mt-0.5" />
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Action Button */}
              <div className="pt-8 mt-6 border-t border-[#DCCDB6]/40 space-y-3">
                <p className="text-[11px] text-[#07525D] italic text-center">
                  "{category.bookingNotice}"
                </p>

                <a
                  href={`https://wa.me/${siteConfig.contact.whatsappNumber}?text=Assalamu%20Alaikum,%20I%20am%20interested%20in%20${encodeURIComponent(
                    category.title
                  )}%20at%20Khurasan%20Garden.`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-3.5 px-4 rounded-xl bg-[#07525D] text-white hover:bg-[#17BFC8] hover:text-[#092E3A] font-semibold text-xs uppercase tracking-wider flex items-center justify-center space-x-2 transition-all shadow-md"
                >
                  <MessageSquare className="w-4 h-4" />
                  <span>Request Current Payment Plan</span>
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
