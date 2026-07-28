"use client";

import { motion } from "framer-motion";
import { MapPin, Navigation, Compass, ExternalLink, ShieldCheck, Car } from "lucide-react";
import { siteConfig } from "@/data/site";
import { GoogleMap } from "@/components/ui/GoogleMap";

const locationHighlights = [
  {
    icon: Car,
    title: "M-9 Highway Corridor",
    description: "Direct vehicular connectivity via the Karachi–Hyderabad Motorway arterial route.",
  },
  {
    icon: Compass,
    title: "Growing Residential Hub",
    description: "Situated in Gadap Town near expanding modern suburban communities.",
  },
  {
    icon: ShieldCheck,
    title: "Accessible Site Visits",
    description: "Easily accessible from main toll plazas for weekend family site tours.",
  },
  {
    icon: Navigation,
    title: "Peaceful Surroundings",
    description: "Elevated away from dense inner-city traffic congestion and noise.",
  },
];

export function LocationSection() {
  return (
    <section className="py-20 bg-[#092E3A] text-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        {/* Section Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-3 max-w-2xl"
          >
            <span className="inline-block px-3.5 py-1 rounded-full bg-[#17BFC8]/15 text-[#17BFC8] text-xs font-semibold uppercase tracking-wider border border-[#17BFC8]/30">
              Location & Accessibility
            </span>
            <h2 className="font-display fluid-h2 font-bold text-white">
              Connected to Opportunity. <br />
              <span className="text-[#17BFC8] italic font-normal">Away from the Noise.</span>
            </h2>
            <p className="text-white/80 text-sm sm:text-base font-light leading-relaxed">
              Situated along the strategic M-9 Motorway corridor in Gadap Town, providing smooth highway connectivity while keeping your family address peaceful and green.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-3 shrink-0"
          >
            <div className="p-4 rounded-xl bg-white/5 border border-white/10 flex items-center space-x-3">
              <MapPin className="w-5 h-5 text-[#17BFC8] shrink-0" />
              <div>
                <p className="text-[11px] uppercase tracking-wider text-[#DCCDB6] font-semibold">
                  Broad Address
                </p>
                <p className="text-xs sm:text-sm font-semibold text-white">
                  {siteConfig.location.broadAddress}
                </p>
              </div>
            </div>

            <a
              href={siteConfig.location.googleMapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full inline-flex items-center justify-center space-x-2 py-3 px-6 rounded-full bg-[#17BFC8] text-[#092E3A] font-bold text-xs uppercase tracking-wider hover:bg-[#F7F5EF] transition-all shadow-md"
            >
              <span>Get Directions on Google Maps</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </motion.div>
        </div>

        {/* Map Container & Highlights Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          {/* Embedded Google Map Box */}
          <motion.div
            initial={{ opacity: 0, scale: 0.97 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-7 h-full min-h-[380px]"
          >
            <GoogleMap height="400px" className="h-full border-white/20" />
          </motion.div>

          {/* Highlights Cards */}
          <div className="lg:col-span-5 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-4">
            {locationHighlights.map((item, idx) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                  className="p-5 rounded-xl bg-white/5 border border-white/10 hover:border-[#17BFC8]/50 transition-all space-y-2"
                >
                  <div className="flex items-center space-x-3">
                    <div className="p-2.5 rounded-lg bg-[#17BFC8]/20 text-[#17BFC8]">
                      <Icon className="w-5 h-5" />
                    </div>
                    <h3 className="font-display font-semibold text-lg text-white">
                      {item.title}
                    </h3>
                  </div>
                  <p className="text-xs text-white/70 font-light leading-relaxed pl-11">
                    {item.description}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
