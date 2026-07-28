"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, HelpCircle } from "lucide-react";
import { siteConfig } from "@/data/site";

interface FAQItem {
  question: string;
  answer: string;
}

const faqs: FAQItem[] = [
  {
    question: "Where exactly is Khurasan Garden located?",
    answer: `Khurasan Garden is located along the strategic M-9 Karachi–Hyderabad Motorway corridor in Gadap Town, Karachi (around Exit 7). It offers direct highway access to central Karachi while providing a peaceful, green suburban atmosphere.`,
  },
  {
    question: "What plot dimensions are available?",
    answer: "Residential categories include 80, 120, 200, and 400 Sq. Yards. Commercial categories include 100 and 200 Sq. Yards along main boulevard frontages. Park-facing and corner options are also available.",
  },
  {
    question: "How do I book a private site visit?",
    answer: `You can schedule a guided site visit by clicking the "Book Site Visit" button, calling our official sales desk directly at ${siteConfig.contact.phoneDisplay}, or connecting with our team on WhatsApp.`,
  },
  {
    question: "What amenities are planned inside the boundary wall?",
    answer: "The masterplan includes a neighborhood mosque, landscaped parks, children's play areas, fitness centre, community hall, school precinct, medical clinic, wide carpeted roads, and 24/7 gated security.",
  },
  {
    question: "How can I obtain the latest payment plan and availability?",
    answer: `Because block availability and payment schedules update regularly, please contact our official sales desk at ${siteConfig.contact.phoneDisplay} or via WhatsApp for the official verified schedule.`,
  },
];

export function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggle = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <section className="py-12 max-w-4xl mx-auto space-y-6">
      <div className="text-center space-y-2">
        <div className="inline-flex items-center space-x-2 px-3.5 py-1 rounded-full bg-[#07525D]/10 text-[#07525D] text-xs font-semibold uppercase tracking-wider">
          <HelpCircle className="w-4 h-4 text-[#17BFC8]" />
          <span>Client & Buyer FAQs</span>
        </div>
        <h3 className="font-display font-bold text-3xl text-[#092E3A]">
          Frequently Asked Questions
        </h3>
        <p className="text-xs text-[#172326]/70">
          Find instant answers to common questions about location, amenities, and site visits.
        </p>
      </div>

      <div className="space-y-3">
        {faqs.map((faq, idx) => {
          const isOpen = openIndex === idx;
          return (
            <div
              key={faq.question}
              className="rounded-2xl bg-white border border-[#DCCDB6]/70 overflow-hidden shadow-sm transition-all"
            >
              <button
                onClick={() => toggle(idx)}
                className="w-full p-5 text-left flex items-center justify-between space-x-4 font-display font-bold text-lg text-[#092E3A] hover:text-[#07525D] transition-colors"
              >
                <span>{faq.question}</span>
                <ChevronDown
                  className={`w-5 h-5 text-[#17BFC8] shrink-0 transition-transform duration-300 ${
                    isOpen ? "rotate-180" : ""
                  }`}
                />
              </button>

              <AnimatePresence>
                {isOpen && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.25 }}
                    className="overflow-hidden"
                  >
                    <div className="px-5 pb-5 pt-1 text-xs sm:text-sm text-[#172326]/80 font-light leading-relaxed border-t border-[#DCCDB6]/40">
                      {faq.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          );
        })}
      </div>
    </section>
  );
}
