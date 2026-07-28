"use client";

import { useState } from "react";
import { Phone, Mail, MapPin, MessageSquare, Send, CheckCircle2, ExternalLink } from "lucide-react";
import { siteConfig } from "@/data/site";
import { GoogleMap } from "@/components/ui/GoogleMap";
import { FAQSection } from "@/components/ui/FAQSection";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    fullName: "",
    phone: "",
    email: "",
    interestType: "Site Visit Booking",
    plotCategory: "Residential - 120 Sq Yds",
    preferredDate: "",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.fullName || !formData.phone) {
      setError("Please provide your full name and contact phone number.");
      return;
    }
    setError("");
    setSubmitted(true);
  };

  return (
    <div className="pt-28 pb-24 bg-[#F7F5EF] space-y-16">
      {/* Header */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
        <span className="inline-block px-3.5 py-1 rounded-full bg-[#07525D]/10 text-[#07525D] text-xs font-semibold uppercase tracking-wider">
          Official Sales Desk & Inquiries
        </span>
        <h1 className="font-display fluid-hero font-bold text-[#092E3A] max-w-3xl mx-auto">
          Your Future Has an Address.
        </h1>
        <p className="text-base sm:text-lg text-[#172326]/80 max-w-2xl mx-auto font-light leading-relaxed">
          Book a private site tour with our sales representatives or inquire about current block availability along the M-9 Motorway corridor.
        </p>
      </section>

      {/* Main Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Direct Contact Cards */}
          <div className="lg:col-span-5 space-y-6">
            <div className="p-8 rounded-3xl bg-[#092E3A] text-white space-y-6 shadow-xl border border-[#17BFC8]/20">
              <h2 className="font-display font-bold text-2xl text-[#17BFC8]">
                Direct Contacts
              </h2>

              <ul className="space-y-4 text-sm text-white/80">
                <li className="flex items-start space-x-3">
                  <MapPin className="w-5 h-5 text-[#17BFC8] shrink-0 mt-0.5" />
                  <div>
                    <span className="block text-xs uppercase tracking-wider text-[#DCCDB6] font-semibold">
                      Location
                    </span>
                    <span className="text-white font-medium">
                      {siteConfig.location.broadAddress}
                    </span>
                  </div>
                </li>

                <li className="flex items-start space-x-3">
                  <Phone className="w-5 h-5 text-[#17BFC8] shrink-0 mt-0.5" />
                  <div>
                    <span className="block text-xs uppercase tracking-wider text-[#DCCDB6] font-semibold">
                      Primary Booking Desk
                    </span>
                    <a
                      href={`tel:${siteConfig.contact.primaryPhone}`}
                      className="text-white hover:text-[#17BFC8] font-bold text-base transition-colors"
                    >
                      {siteConfig.contact.phoneDisplay}
                    </a>
                  </div>
                </li>

                <li className="flex items-start space-x-3">
                  <Mail className="w-5 h-5 text-[#17BFC8] shrink-0 mt-0.5" />
                  <div>
                    <span className="block text-xs uppercase tracking-wider text-[#DCCDB6] font-semibold">
                      Official Email
                    </span>
                    <a
                      href={`mailto:${siteConfig.contact.email}`}
                      className="text-white hover:text-[#17BFC8] transition-colors"
                    >
                      {siteConfig.contact.email}
                    </a>
                  </div>
                </li>
              </ul>

              {/* Action Buttons */}
              <div className="pt-4 space-y-3">
                <a
                  href={`tel:${siteConfig.contact.primaryPhone}`}
                  className="w-full py-3.5 px-4 rounded-full bg-[#17BFC8] text-[#092E3A] font-bold text-xs uppercase tracking-wider flex items-center justify-center space-x-2 transition-all hover:bg-white shadow-md"
                >
                  <Phone className="w-4 h-4" />
                  <span>Call {siteConfig.contact.phoneDisplay}</span>
                </a>

                <a
                  href={siteConfig.social.whatsapp}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-3.5 px-4 rounded-full bg-[#839B77] text-white font-bold text-xs uppercase tracking-wider flex items-center justify-center space-x-2 transition-all hover:bg-[#07525D] shadow-md"
                >
                  <MessageSquare className="w-4 h-4" />
                  <span>Connect on WhatsApp</span>
                </a>

                <a
                  href={siteConfig.location.googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-3 px-4 rounded-full bg-white/10 text-white font-semibold text-xs uppercase tracking-wider flex items-center justify-center space-x-2 transition-all hover:bg-white/20 border border-white/20"
                >
                  <ExternalLink className="w-3.5 h-3.5" />
                  <span>Get Directions</span>
                </a>
              </div>
            </div>
          </div>

          {/* Form */}
          <div className="lg:col-span-7 bg-white p-8 sm:p-10 rounded-3xl border border-[#DCCDB6]/70 shadow-xl space-y-6">
            <div className="space-y-1">
              <h2 className="font-display font-bold text-2xl text-[#092E3A]">
                Inquiry & Site Visit Booking
              </h2>
              <p className="text-xs text-[#172326]/70 font-light">
                Fill out your information below and our official sales representative will contact you.
              </p>
            </div>

            {submitted ? (
              <div className="p-8 rounded-2xl bg-[#07525D]/10 border border-[#07525D]/30 text-center space-y-4">
                <div className="w-12 h-12 rounded-full bg-[#07525D] text-[#17BFC8] flex items-center justify-center mx-auto">
                  <CheckCircle2 className="w-6 h-6" />
                </div>
                <h3 className="font-display font-bold text-2xl text-[#092E3A]">
                  Inquiry Received
                </h3>
                <p className="text-xs text-[#172326]/80 leading-relaxed font-light">
                  Thank you, <strong>{formData.fullName}</strong>. Our official representative will get back to you shortly at <strong>{formData.phone}</strong>.
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="text-xs font-semibold text-[#07525D] underline"
                >
                  Submit Another Inquiry
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                {error && (
                  <div className="p-3 rounded-lg bg-rose-100 border border-rose-300 text-rose-800 text-xs font-semibold">
                    {error}
                  </div>
                )}

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1">
                    <label className="block text-xs font-bold uppercase tracking-wider text-[#092E3A]">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.fullName}
                      onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                      placeholder="e.g. Tariq Mehmood"
                      className="w-full px-4 py-3 rounded-xl border border-[#DCCDB6] text-sm focus:outline-none focus:border-[#17BFC8]"
                    />
                  </div>

                  <div className="space-y-1">
                    <label className="block text-xs font-bold uppercase tracking-wider text-[#092E3A]">
                      Phone / WhatsApp Number *
                    </label>
                    <input
                      type="tel"
                      required
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      placeholder="e.g. 0300 1234567"
                      className="w-full px-4 py-3 rounded-xl border border-[#DCCDB6] text-sm focus:outline-none focus:border-[#17BFC8]"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1">
                    <label className="block text-xs font-bold uppercase tracking-wider text-[#092E3A]">
                      Email Address
                    </label>
                    <input
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="name@domain.com"
                      className="w-full px-4 py-3 rounded-xl border border-[#DCCDB6] text-sm focus:outline-none focus:border-[#17BFC8]"
                    />
                  </div>

                  <div className="space-y-1">
                    <label className="block text-xs font-bold uppercase tracking-wider text-[#092E3A]">
                      Interest Type
                    </label>
                    <select
                      value={formData.interestType}
                      onChange={(e) => setFormData({ ...formData, interestType: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl border border-[#DCCDB6] text-sm focus:outline-none focus:border-[#17BFC8] bg-white"
                    >
                      <option>Book a Site Visit</option>
                      <option>Residential Plot Inquiry</option>
                      <option>Commercial Plot Inquiry</option>
                      <option>Payment Plan Request</option>
                    </select>
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1">
                    <label className="block text-xs font-bold uppercase tracking-wider text-[#092E3A]">
                      Plot Category
                    </label>
                    <select
                      value={formData.plotCategory}
                      onChange={(e) => setFormData({ ...formData, plotCategory: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl border border-[#DCCDB6] text-sm focus:outline-none focus:border-[#17BFC8] bg-white"
                    >
                      <option>Residential - 80 Sq Yds</option>
                      <option>Residential - 120 Sq Yds</option>
                      <option>Residential - 200 Sq Yds</option>
                      <option>Commercial - 100 Sq Yds</option>
                      <option>Corner / Executive Plot</option>
                    </select>
                  </div>

                  <div className="space-y-1">
                    <label className="block text-xs font-bold uppercase tracking-wider text-[#092E3A]">
                      Preferred Site Visit Date
                    </label>
                    <input
                      type="date"
                      value={formData.preferredDate}
                      onChange={(e) => setFormData({ ...formData, preferredDate: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl border border-[#DCCDB6] text-sm focus:outline-none focus:border-[#17BFC8]"
                    />
                  </div>
                </div>

                <div className="space-y-1">
                  <label className="block text-xs font-bold uppercase tracking-wider text-[#092E3A]">
                    Additional Message
                  </label>
                  <textarea
                    rows={4}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Tell us any specific requirements or questions..."
                    className="w-full px-4 py-3 rounded-xl border border-[#DCCDB6] text-sm focus:outline-none focus:border-[#17BFC8]"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-4 px-6 rounded-full bg-[#07525D] text-white hover:bg-[#17BFC8] hover:text-[#092E3A] font-bold text-xs uppercase tracking-wider flex items-center justify-center space-x-2 transition-all shadow-md"
                >
                  <Send className="w-4 h-4" />
                  <span>Submit Inquiry</span>
                </button>
              </form>
            )}
          </div>
        </div>

        {/* Embedded Google Map on Contact Page */}
        <div className="space-y-4 pt-6">
          <div className="space-y-1 text-center max-w-xl mx-auto">
            <h3 className="font-display font-bold text-2xl text-[#092E3A]">
              Project Location Map
            </h3>
            <p className="text-xs text-[#172326]/70">
              M-9 Karachi–Hyderabad Motorway, Gadap Town, Karachi.
            </p>
          </div>
          <GoogleMap height="400px" />
        </div>

        {/* Client & Buyer FAQ Accordion */}
        <FAQSection />
      </section>
    </div>
  );
}
