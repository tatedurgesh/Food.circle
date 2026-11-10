import React from 'react';
import { Logo } from './Logo';
import { BUSINESS_INFO, SERVICES } from '../data/businessData';
import { Phone, Mail, MapPin, ShieldCheck, ArrowUp, ExternalLink } from 'lucide-react';

interface FooterProps {
  onOpenPrivacy: () => void;
  onOpenTerms: () => void;
  onSelectService: (serviceTitle: string) => void;
}

export const Footer: React.FC<FooterProps> = ({
  onOpenPrivacy,
  onOpenTerms,
  onSelectService,
}) => {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#073D2B] text-white pt-20 pb-12 border-t border-[#10563A] relative overflow-hidden" aria-label="Site Footer">
      {/* Subtle organic background curve */}
      <div className="absolute right-0 bottom-0 w-96 h-96 opacity-5 pointer-events-none" aria-hidden="true">
        <svg viewBox="0 0 200 200" className="w-full h-full fill-current text-white">
          <circle cx="100" cy="100" r="80" stroke="#FFFFFF" strokeWidth="2" fill="none" />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-16 border-b border-white/10">
          {/* Brand Col */}
          <div className="lg:col-span-4 space-y-5">
            <Logo variant="white" showTagline={true} />
            <p className="text-xs sm:text-sm text-[#FAF8F1]/75 leading-relaxed font-sans max-w-sm">
              Food safety and regulatory compliance consultancy based in Mumbai, Maharashtra. Providing technical audit readiness, FSSAI licensing guidance, and HACCP documentation for food manufacturing, hospitality, and retail enterprises.
            </p>
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-white/5 border border-white/10 text-xs text-[#FF8900] font-medium">
              <ShieldCheck className="w-4 h-4 shrink-0" />
              <span>Food Technologist · FSSC 22000 Lead Auditor</span>
            </div>
          </div>

          {/* Quick Nav Links */}
          <div className="lg:col-span-2 space-y-4">
            <h4 className="font-arvo text-sm font-bold text-[#FF8900] uppercase tracking-wider">
              Navigation
            </h4>
            <ul className="space-y-2.5 text-xs sm:text-sm text-[#FAF8F1]/80 font-sans">
              <li>
                <a href="#home" className="hover:text-white transition-colors">Home</a>
              </li>
              <li>
                <a href="#about" className="hover:text-white transition-colors">About Food Circle</a>
              </li>
              <li>
                <a href="#services" className="hover:text-white transition-colors">Core Services</a>
              </li>
              <li>
                <a href="#certifications" className="hover:text-white transition-colors">Certifications</a>
              </li>
              <li>
                <a href="#industries" className="hover:text-white transition-colors">Industries Advised</a>
              </li>
              <li>
                <a href="#approach" className="hover:text-white transition-colors">Our Approach</a>
              </li>
              <li>
                <a href="#why-us" className="hover:text-white transition-colors">Why Choose Us</a>
              </li>
              <li>
                <a href="#faq" className="hover:text-white transition-colors">FAQ</a>
              </li>
              <li>
                <a href="#contact" className="hover:text-white transition-colors">Consultation Enquiry</a>
              </li>
            </ul>
          </div>

          {/* Key Services Links */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="font-arvo text-sm font-bold text-[#FF8900] uppercase tracking-wider">
              Selected Services
            </h4>
            <ul className="space-y-2 text-xs sm:text-sm text-[#FAF8F1]/80 font-sans">
              {SERVICES.slice(0, 6).map((service) => (
                <li key={service.id}>
                  <button
                    type="button"
                    onClick={() => onSelectService(service.title)}
                    className="hover:text-white text-left transition-colors cursor-pointer block leading-snug"
                  >
                    {service.title}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact & Location Info */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="font-arvo text-sm font-bold text-[#FF8900] uppercase tracking-wider">
              Direct Contact
            </h4>
            <div className="space-y-3 text-xs sm:text-sm text-[#FAF8F1]/80 font-sans">
              <div className="flex items-start gap-3">
                <Phone className="w-4 h-4 text-[#FF8900] shrink-0 mt-0.5" />
                <a href={BUSINESS_INFO.contact.phoneLink} className="hover:text-white font-medium">
                  {BUSINESS_INFO.contact.phoneDisplay}
                </a>
              </div>
              <div className="flex items-start gap-3">
                <Mail className="w-4 h-4 text-[#FF8900] shrink-0 mt-0.5" />
                <a href={BUSINESS_INFO.contact.emailLink} className="hover:text-white break-all font-medium">
                  {BUSINESS_INFO.contact.email}
                </a>
              </div>
              <div className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-[#FF8900] shrink-0 mt-0.5" />
                <span>Mumbai, Maharashtra, India</span>
              </div>
              <p className="text-[11px] text-[#FAF8F1]/60 pt-2 leading-relaxed border-t border-white/10">
                Operating via structured on-site assessments across Mumbai and Maharashtra. No walk-in public office.
              </p>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#FAF8F1]/60 font-sans">
          <div>
            &copy; {currentYear} Food Circle. All rights reserved. Safety • Quality • Trust.
          </div>

          <div className="flex items-center gap-6">
            <button
              type="button"
              onClick={onOpenPrivacy}
              className="hover:text-white transition-colors cursor-pointer"
            >
              Privacy Policy
            </button>
            <span aria-hidden="true" className="text-white/20">|</span>
            <button
              type="button"
              onClick={onOpenTerms}
              className="hover:text-white transition-colors cursor-pointer"
            >
              Terms of Use
            </button>
            <span aria-hidden="true" className="text-white/20">|</span>
            <button
              type="button"
              onClick={scrollToTop}
              className="inline-flex items-center gap-1.5 text-[#FF8900] hover:text-white transition-colors cursor-pointer font-medium"
              aria-label="Scroll back to top"
            >
              <span>Back to Top</span>
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
