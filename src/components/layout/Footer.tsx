import Link from "next/link";
import Image from "next/image";
import { Phone, Mail, MapPin, MessageSquare, ArrowUpRight, Instagram, Facebook } from "lucide-react";
import { siteConfig } from "@/data/site";
import { footerLinks } from "@/data/navigation";

export function Footer() {
  return (
    <footer className="bg-[#092E3A] text-[#F7F5EF] pt-16 pb-12 border-t border-[#17BFC8]/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-white/10">
          {/* Brand Info */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center space-x-3">
              <div className="relative h-11 w-11 rounded-full overflow-hidden bg-[#17BFC8]/10 p-0.5 border border-[#17BFC8]/40 flex items-center justify-center shadow-md">
                <Image
                  src={siteConfig.logo}
                  alt={`${siteConfig.name} Official Logo`}
                  width={44}
                  height={44}
                  className="object-contain w-full h-full"
                />
              </div>
              <span className="font-display text-2xl font-bold tracking-wide text-white">
                {siteConfig.name}
              </span>
            </div>

            <p className="text-[#17BFC8] font-display text-lg italic">
              "{siteConfig.tagline}"
            </p>

            <p className="text-sm text-white/70 max-w-sm leading-relaxed">
              A thoughtfully planned residential community on the M-9 Karachi–Hyderabad corridor, created around greener spaces, everyday convenience, and meaningful family life.
            </p>

            {/* Social Media Links */}
            <div className="pt-2 flex items-center space-x-3">
              <a
                href={siteConfig.social.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-white hover:bg-[#17BFC8] hover:text-[#092E3A] transition-all group"
                aria-label="Instagram Page"
                title="Khurasan Garden Instagram Page"
              >
                <Instagram className="w-5 h-5 transition-transform group-hover:scale-110" />
              </a>

              <a
                href={siteConfig.social.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-white hover:bg-[#17BFC8] hover:text-[#092E3A] transition-all group"
                aria-label="Facebook Page"
                title="Khurasan Garden Facebook Page"
              >
                <Facebook className="w-5 h-5 transition-transform group-hover:scale-110" />
              </a>

              <a
                href={siteConfig.social.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-[#17BFC8] hover:bg-[#17BFC8] hover:text-[#092E3A] transition-all group"
                aria-label="WhatsApp Desk"
                title="WhatsApp Official Desk"
              >
                <MessageSquare className="w-5 h-5 transition-transform group-hover:scale-110" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-display text-lg font-semibold text-[#17BFC8] mb-4">
              Explore Community
            </h4>
            <ul className="space-y-2.5 text-sm">
              {footerLinks.quickLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-white/80 hover:text-[#17BFC8] transition-colors inline-flex items-center space-x-1 group"
                  >
                    <span>{link.label}</span>
                    <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity text-[#17BFC8]" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Details */}
          <div className="lg:col-span-2 space-y-4">
            <h4 className="font-display text-lg font-semibold text-[#17BFC8] mb-4">
              Official Sales & Inquiries
            </h4>

            <ul className="space-y-3 text-sm text-white/80">
              <li className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-[#17BFC8] shrink-0 mt-0.5" />
                <span>{siteConfig.location.broadAddress}</span>
              </li>

              <li className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-[#17BFC8] shrink-0" />
                <a
                  href={`tel:${siteConfig.contact.primaryPhone}`}
                  className="hover:text-[#17BFC8] transition-colors font-medium text-white"
                >
                  {siteConfig.contact.phoneDisplay}
                </a>
              </li>

              <li className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-[#17BFC8] shrink-0" />
                <a
                  href={`mailto:${siteConfig.contact.email}`}
                  className="hover:text-[#17BFC8] transition-colors"
                >
                  {siteConfig.contact.email}
                </a>
              </li>
            </ul>

            <div className="pt-2">
              <span className="inline-block text-xs uppercase tracking-wider text-[#DCCDB6] bg-white/5 px-3 py-1.5 rounded-md border border-white/10">
                Associated with {siteConfig.developer}
              </span>
            </div>
          </div>
        </div>

        {/* Disclaimer & Copyright */}
        <div className="pt-8 space-y-4 text-xs text-white/60">
          <p className="leading-relaxed bg-white/5 p-4 rounded-xl border border-white/10 text-white/70">
            <strong className="text-[#17BFC8]">Legal Disclaimer:</strong>{" "}
            {siteConfig.legalDisclaimer}
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-2">
            <p>
              © {new Date().getFullYear()} {siteConfig.name}. All rights reserved.
            </p>
            <p className="text-white/40">
              Designed with care for families along the M-9 corridor.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
