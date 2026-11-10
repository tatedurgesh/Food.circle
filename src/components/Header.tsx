import React, { useState, useEffect } from 'react';
import { Logo } from './Logo';
import { BUSINESS_INFO } from '../data/businessData';
import { Menu, X, Phone, MessageSquare } from 'lucide-react';
import { generateWhatsAppUrl } from '../utils/enquiry';

interface HeaderProps {
  onRequestConsultation: () => void;
}

export const Header: React.FC<HeaderProps> = ({ onRequestConsultation }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Home', href: '#home' },
    { label: 'About', href: '#about' },
    { label: 'Services', href: '#services' },
    { label: 'Certifications', href: '#certifications' },
    { label: 'Industries', href: '#industries' },
    { label: 'Our Approach', href: '#approach' },
    { label: 'FAQ', href: '#faq' },
    { label: 'Contact', href: '#contact' },
  ];

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setIsMobileMenuOpen(false);
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header
      className={`sticky top-0 z-40 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#FAF8F1]/95 backdrop-blur-md border-b border-[#073D2B]/10 shadow-xs py-3'
          : 'bg-[#FAF8F1] border-b border-transparent py-4'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between gap-6">
          {/* Brand Wordmark */}
          <a
            href="#home"
            onClick={(e) => handleNavClick(e, '#home')}
            className="whitespace-nowrap shrink-0 focus-visible:outline-2 focus-visible:outline-[#073D2B] rounded-md transition-opacity hover:opacity-90"
            aria-label="Food Circle - Home"
          >
            <Logo showTagline={false} />
          </a>

          {/* Desktop Navigation Links */}
          <nav
            aria-label="Primary Navigation"
            className="hidden xl:flex items-center gap-6 text-sm font-sans font-medium text-[#202923]"
          >
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className="whitespace-nowrap shrink-0 hover:text-[#073D2B] transition-colors relative py-1 group text-[13px] tracking-tight"
              >
                <span>{link.label}</span>
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#FF8900] transition-all duration-200 group-hover:w-full" />
              </a>
            ))}
          </nav>

          {/* Semi-compact Navigation for medium-large screens (md-lg) */}
          <nav
            aria-label="Primary Navigation Compact"
            className="hidden md:flex xl:hidden items-center gap-4 text-xs font-sans font-medium text-[#202923]"
          >
            {[
              { label: 'About', href: '#about' },
              { label: 'Services', href: '#services' },
              { label: 'Certifications', href: '#certifications' },
              { label: 'Industries', href: '#industries' },
              { label: 'Approach', href: '#approach' },
              { label: 'FAQ', href: '#faq' },
            ].map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className="whitespace-nowrap hover:text-[#073D2B] transition-colors py-1"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Right Actions: Direct Call & Primary CTA */}
          <div className="hidden lg:flex items-center gap-3 shrink-0">
            <a
              href={BUSINESS_INFO.contact.phoneLink}
              className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#10563A] hover:text-[#073D2B] transition-colors whitespace-nowrap px-2.5 py-1.5 rounded-lg hover:bg-[#073D2B]/5"
              title="Call Food Circle"
            >
              <Phone className="w-3.5 h-3.5 text-[#FF8900]" />
              <span className="tracking-wide">{BUSINESS_INFO.contact.phoneDisplay}</span>
            </a>

            <button
              type="button"
              onClick={onRequestConsultation}
              className="px-4 py-2.5 text-xs font-semibold text-white bg-[#073D2B] hover:bg-[#10563A] active:scale-[0.98] rounded-xl shadow-xs hover:shadow transition-all whitespace-nowrap focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#FF8900] cursor-pointer"
            >
              Request a Consultation
            </button>
          </div>

          {/* Mobile Menu Toggle & Quick Phone Button */}
          <div className="flex md:hidden items-center gap-2">
            <a
              href={BUSINESS_INFO.contact.phoneLink}
              className="p-2 text-[#073D2B] bg-[#073D2B]/5 hover:bg-[#073D2B]/10 rounded-lg transition-colors flex items-center gap-1 text-xs font-semibold min-h-[44px]"
              aria-label="Call Food Circle"
            >
              <Phone className="w-4 h-4 text-[#FF8900]" />
              <span className="text-[11px] font-bold tracking-tight">{BUSINESS_INFO.contact.phoneDisplay}</span>
            </a>

            <button
              type="button"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2 text-[#073D2B] hover:bg-[#073D2B]/10 rounded-lg transition-colors focus-visible:outline-2 focus-visible:outline-[#073D2B] cursor-pointer min-h-[44px] min-w-[44px] flex items-center justify-center"
              aria-expanded={isMobileMenuOpen}
              aria-label={isMobileMenuOpen ? 'Close Navigation Menu' : 'Open Navigation Menu'}
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Drawer */}
      {isMobileMenuOpen && (
        <div className="md:hidden border-b border-[#073D2B]/10 bg-[#FAF8F1] px-5 pt-3 pb-6 space-y-4 shadow-lg animate-in fade-in slide-in-from-top-2 duration-150">
          <nav aria-label="Mobile Navigation" className="flex flex-col space-y-1">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className="px-3.5 py-2.5 min-h-[44px] flex items-center text-sm font-medium text-[#202923] hover:text-[#073D2B] hover:bg-[#073D2B]/5 rounded-lg transition-colors"
              >
                {link.label}
              </a>
            ))}
          </nav>

          <div className="pt-3 border-t border-[#073D2B]/10 space-y-2.5">
            <a
              href={BUSINESS_INFO.contact.phoneLink}
              className="flex items-center gap-2.5 px-3 py-2.5 min-h-[44px] text-xs font-semibold text-[#10563A] hover:bg-[#073D2B]/5 rounded-lg"
            >
              <Phone className="w-4 h-4 text-[#FF8900]" />
              <span>Call: {BUSINESS_INFO.contact.phoneDisplay}</span>
            </a>

            <a
              href={generateWhatsAppUrl()}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2.5 px-3 py-2.5 min-h-[44px] text-xs font-semibold text-[#10563A] hover:bg-[#073D2B]/5 rounded-lg"
            >
              <MessageSquare className="w-4 h-4 text-[#FF8900]" />
              <span>WhatsApp Consultation</span>
            </a>

            <button
              type="button"
              onClick={() => {
                setIsMobileMenuOpen(false);
                onRequestConsultation();
              }}
              className="w-full text-center px-4 py-3 min-h-[44px] text-xs font-bold text-white bg-[#073D2B] hover:bg-[#10563A] active:scale-[0.98] rounded-xl transition-all cursor-pointer shadow-xs"
            >
              Request a Consultation
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
