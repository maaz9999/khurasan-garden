import { Metadata } from "next";
import { MapPin, Navigation, Car, ExternalLink, Compass, Calendar } from "lucide-react";
import Link from "next/link";
import { siteConfig } from "@/data/site";
import { GoogleMap } from "@/components/ui/GoogleMap";

export const metadata: Metadata = {
  title: "M-9 Location & Accessibility",
  description: "Explore the location of Khurasan Garden along the M-9 Karachi–Hyderabad Motorway corridor in Gadap Town, Karachi.",
};

export default function LocationPage() {
  return (
    <div className="pt-28 pb-24 bg-[#F7F5EF] space-y-16">
      {/* Header */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
        <span className="inline-block px-3.5 py-1 rounded-full bg-[#07525D]/10 text-[#07525D] text-xs font-semibold uppercase tracking-wider">
          Strategic Suburban Placement
        </span>
        <h1 className="font-display fluid-hero font-bold text-[#092E3A] max-w-4xl mx-auto">
          Connected to Opportunity. Away from the Noise.
        </h1>
        <p className="text-base sm:text-lg text-[#172326]/80 max-w-2xl mx-auto font-light leading-relaxed">
          Positioned on the primary M-9 Motorway corridor, Khurasan Garden offers direct highway access to central Karachi while preserving quiet green surroundings for your family.
        </p>

        <div className="p-4 rounded-xl bg-white border border-[#DCCDB6] max-w-2xl mx-auto inline-flex items-center space-x-3 text-left shadow-sm">
          <MapPin className="w-6 h-6 text-[#17BFC8] shrink-0" />
          <div>
            <p className="text-xs uppercase tracking-wider text-[#07525D] font-bold">
              Broad Address:
            </p>
            <p className="text-sm font-bold text-[#092E3A]">
              {siteConfig.location.broadAddress}
            </p>
          </div>
        </div>
      </section>

      {/* Map & Corridor Overview */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Embedded Google Map Box */}
          <div className="lg:col-span-8 space-y-4">
            <GoogleMap height="460px" />

            <div className="flex flex-wrap gap-4 pt-2">
              <a
                href={siteConfig.location.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3 rounded-full bg-[#07525D] text-white font-bold text-xs uppercase tracking-wider hover:bg-[#17BFC8] hover:text-[#092E3A] transition-colors inline-flex items-center space-x-2 shadow-md"
              >
                <span>Open Satellite View on Google Maps</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>

              <Link
                href="/contact"
                className="px-6 py-3 rounded-full bg-white border border-[#07525D] text-[#07525D] text-xs font-semibold uppercase tracking-wider hover:bg-[#07525D] hover:text-white transition-colors inline-flex items-center space-x-2 shadow-sm"
              >
                <Calendar className="w-3.5 h-3.5 text-[#17BFC8]" />
                <span>Schedule a Guided Site Visit</span>
              </Link>
            </div>
          </div>

          {/* Cards Column */}
          <div className="lg:col-span-4 space-y-4">
            <div className="p-6 rounded-2xl bg-white border border-[#DCCDB6]/70 shadow-sm space-y-2">
              <div className="flex items-center space-x-3 text-[#07525D]">
                <Car className="w-5 h-5 text-[#17BFC8]" />
                <h3 className="font-display font-bold text-lg text-[#092E3A]">M-9 Highway Access</h3>
              </div>
              <p className="text-xs text-[#172326]/75 font-light leading-relaxed">
                Direct carpeted road connections to the Karachi–Hyderabad Motorway arterial route.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-white border border-[#DCCDB6]/70 shadow-sm space-y-2">
              <div className="flex items-center space-x-3 text-[#07525D]">
                <Compass className="w-5 h-5 text-[#17BFC8]" />
                <h3 className="font-display font-bold text-lg text-[#092E3A]">Gadap Town Corridor</h3>
              </div>
              <p className="text-xs text-[#172326]/75 font-light leading-relaxed">
                Surrounded by rapid suburban masterplan developments and educational institutes.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-white border border-[#DCCDB6]/70 shadow-sm space-y-2">
              <div className="flex items-center space-x-3 text-[#07525D]">
                <Navigation className="w-5 h-5 text-[#17BFC8]" />
                <h3 className="font-display font-bold text-lg text-[#092E3A]">Escape City Noise</h3>
              </div>
              <p className="text-xs text-[#172326]/75 font-light leading-relaxed">
                Clean air and reduced traffic congestion for a healthier family environment.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
