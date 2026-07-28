import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Sparkles, Shield, Heart, Trees, Compass, ArrowRight, CheckCircle2 } from "lucide-react";
import { siteConfig } from "@/data/site";

export const metadata: Metadata = {
  title: "About Our Vision & Planning Philosophy",
  description: "Learn about Khurasan Garden, a family-centric residential development on the M-9 Motorway corridor by Maskan Associates.",
};

export default function AboutPage() {
  return (
    <div className="pt-28 pb-20 bg-[#F7F5EF] space-y-20">
      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6 text-center">
        <span className="inline-block px-3.5 py-1 rounded-full bg-[#07525D]/10 text-[#07525D] text-xs font-semibold uppercase tracking-wider">
          Our Brand Story & Vision
        </span>
        <h1 className="font-display fluid-hero font-bold text-[#092E3A] max-w-4xl mx-auto">
          Where Your Future Takes Root.
        </h1>
        <p className="text-base sm:text-lg text-[#172326]/80 max-w-2xl mx-auto font-light leading-relaxed">
          Khurasan Garden was conceived around a single foundational belief: families deserve a peaceful, safe, and green environment without sacrificing access to daily urban conveniences.
        </p>
      </section>

      {/* Main Vision Banner */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative rounded-3xl overflow-hidden shadow-2xl bg-[#092E3A] text-white p-8 sm:p-14 grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          <div className="lg:col-span-7 space-y-6 z-10">
            <span className="text-xs uppercase tracking-widest text-[#17BFC8] font-bold">
              Core Positioning
            </span>
            <blockquote className="font-display text-2xl sm:text-4xl font-bold leading-tight text-white">
              “We are not selling houses. We are creating spaces for lifelong memories.”
            </blockquote>
            <p className="text-sm sm:text-base text-white/80 font-light leading-relaxed">
              Situated along the M-9 Karachi–Hyderabad Motorway corridor, Khurasan Garden is a project associated with Maskan Associates, created for families looking to establish a permanent address away from inner-city congestion.
            </p>
            <div className="pt-2 flex flex-wrap gap-4">
              <div className="flex items-center space-x-2 text-xs font-semibold text-[#17BFC8]">
                <CheckCircle2 className="w-4 h-4" />
                <span>Family-Focused Community</span>
              </div>
              <div className="flex items-center space-x-2 text-xs font-semibold text-[#17BFC8]">
                <CheckCircle2 className="w-4 h-4" />
                <span>20%+ Landscaped Green Belt</span>
              </div>
              <div className="flex items-center space-x-2 text-xs font-semibold text-[#17BFC8]">
                <CheckCircle2 className="w-4 h-4" />
                <span>M-9 Arterial Connectivity</span>
              </div>
            </div>
          </div>

          <div className="lg:col-span-5 relative aspect-[4/3] rounded-2xl overflow-hidden border border-white/20">
            <Image
              src="/images/family-lifelong-memories.png"
              alt="Family life at Khurasan Garden"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 40vw"
            />
            <div className="absolute top-3 left-3">
              <span className="inline-flex items-center space-x-1 px-2.5 py-1 rounded-full text-[10px] bg-[#092E3A]/90 text-[#17BFC8] border border-[#17BFC8]/30">
                <Sparkles className="w-2.5 h-2.5" />
                <span>Artist's Impression</span>
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* 4 Pillars Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        <div className="text-center max-w-2xl mx-auto space-y-3">
          <h2 className="font-display fluid-h2 font-bold text-[#092E3A]">
            Planning Philosophy
          </h2>
          <p className="text-sm text-[#172326]/75 font-light">
            Every street, park, and facility is arranged to protect resident privacy, foster community interactions, and maximize safety.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="p-6 rounded-2xl bg-white border border-[#DCCDB6]/60 shadow-sm space-y-3">
            <div className="w-12 h-12 rounded-xl bg-[#07525D]/10 text-[#07525D] flex items-center justify-center">
              <Compass className="w-6 h-6" />
            </div>
            <h3 className="font-display font-bold text-xl text-[#092E3A]">Master Planning</h3>
            <p className="text-xs text-[#172326]/75 leading-relaxed font-light">
              Organized residential sectors separated from commercial traffic to maintain quiet internal avenues.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-white border border-[#DCCDB6]/60 shadow-sm space-y-3">
            <div className="w-12 h-12 rounded-xl bg-[#07525D]/10 text-[#07525D] flex items-center justify-center">
              <Shield className="w-6 h-6" />
            </div>
            <h3 className="font-display font-bold text-xl text-[#092E3A]">Safe Environment</h3>
            <p className="text-xs text-[#172326]/75 leading-relaxed font-light">
              Secure perimeter boundary wall, gated access checkpoints, and 24/7 security personnel for peace of mind.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-white border border-[#DCCDB6]/60 shadow-sm space-y-3">
            <div className="w-12 h-12 rounded-xl bg-[#07525D]/10 text-[#07525D] flex items-center justify-center">
              <Trees className="w-6 h-6" />
            </div>
            <h3 className="font-display font-bold text-xl text-[#092E3A]">Green Living</h3>
            <p className="text-xs text-[#172326]/75 leading-relaxed font-light">
              Dedicated parks, tree nurseries, and shaded walkways that encourage outdoor sports and healthy living.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-white border border-[#DCCDB6]/60 shadow-sm space-y-3">
            <div className="w-12 h-12 rounded-xl bg-[#07525D]/10 text-[#07525D] flex items-center justify-center">
              <Heart className="w-6 h-6" />
            </div>
            <h3 className="font-display font-bold text-xl text-[#092E3A]">Family Legacy</h3>
            <p className="text-xs text-[#172326]/75 leading-relaxed font-light">
              Building more than land—a real community address for your children and future generations.
            </p>
          </div>
        </div>
      </section>

      {/* CTA Box */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="p-10 rounded-3xl bg-[#07525D] text-white flex flex-col md:flex-row items-center justify-between gap-6 shadow-xl">
          <div className="space-y-2 text-center md:text-left">
            <h3 className="font-display font-bold text-2xl">Ready to Explore Khurasan Garden?</h3>
            <p className="text-sm text-white/80 font-light">
              Schedule a site tour or speak with our sales representatives today.
            </p>
          </div>
          <Link
            href="/contact"
            className="px-8 py-3.5 rounded-full bg-[#17BFC8] text-[#092E3A] font-bold text-xs uppercase tracking-wider hover:bg-white transition-colors shrink-0 shadow-md flex items-center space-x-2"
          >
            <span>Book a Site Visit</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>
    </div>
  );
}
