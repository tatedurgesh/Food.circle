import React from 'react';
import { WHY_CHOOSE_ITEMS, BUSINESS_INFO } from '../data/businessData';
import { Award, ShieldCheck, HeartHandshake, Target, ArrowRight, CheckCircle2 } from 'lucide-react';

interface WhyUsProps {
  onRequestConsultation?: () => void;
}

export const WhyUs: React.FC<WhyUsProps> = ({ onRequestConsultation }) => {
  const getIcon = (index: number) => {
    switch (index) {
      case 0:
        return <Award className="w-6 h-6 text-[#FF8900]" />;
      case 1:
        return <ShieldCheck className="w-6 h-6 text-[#FF8900]" />;
      case 2:
        return <HeartHandshake className="w-6 h-6 text-[#FF8900]" />;
      case 3:
        return <Target className="w-6 h-6 text-[#FF8900]" />;
      default:
        return <ShieldCheck className="w-6 h-6 text-[#FF8900]" />;
    }
  };

  const handleAction = () => {
    if (onRequestConsultation) {
      onRequestConsultation();
    } else {
      const el = document.getElementById('contact');
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="why-us" className="py-20 md:py-28 bg-[#073D2B] text-white relative overflow-hidden scroll-mt-20" aria-label="Why Choose Food Circle">
      {/* Decorative architectural background rings */}
      <div className="absolute inset-0 opacity-10 pointer-events-none" aria-hidden="true">
        <svg viewBox="0 0 1200 800" className="w-full h-full object-cover">
          <circle cx="200" cy="400" r="300" stroke="#FFFFFF" strokeWidth="1.5" fill="none" strokeDasharray="4 8" />
          <circle cx="1000" cy="200" r="450" stroke="#FF8900" strokeWidth="1.5" fill="none" />
          <circle cx="1000" cy="200" r="280" stroke="#FFFFFF" strokeWidth="1" fill="none" strokeDasharray="6 6" />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 border border-white/20 text-[#FF8900] text-xs font-semibold tracking-wider uppercase mb-4">
            <span className="w-1.5 h-1.5 rounded-full bg-[#FF8900]" />
            Why Food Circle
          </div>
          <h2 className="font-arvo text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-white leading-tight">
            Built Around Quality. Driven by Compliance.
          </h2>
          <p className="mt-4 text-base sm:text-lg text-[#FAF8F1]/85 leading-relaxed font-sans">
            We partner with food businesses to replace guesswork and audit anxiety with structured, verified, and sustainable food safety systems.
          </p>
        </div>

        {/* 4 Principles Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {WHY_CHOOSE_ITEMS.map((item, index) => (
            <div
              key={item.title}
              className="group bg-white/5 hover:bg-white/[0.08] backdrop-blur-xs rounded-2xl p-6 sm:p-7 border border-white/12 hover:border-[#FF8900]/50 transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-6">
                  <div className="w-13 h-13 rounded-xl bg-[#10563A] border border-[#FF8900]/30 flex items-center justify-center shadow-inner group-hover:scale-105 transition-transform">
                    {getIcon(index)}
                  </div>
                  <span className="font-arvo text-2xl font-bold text-white/20 group-hover:text-[#FF8900]/40 transition-colors">
                    0{index + 1}
                  </span>
                </div>

                <div className="text-[11px] font-bold text-[#FF8900] uppercase tracking-wider mb-2 font-sans">
                  {item.tagline}
                </div>

                <h3 className="font-arvo text-xl font-bold text-white mb-3 leading-snug">
                  {item.title}
                </h3>

                <p className="text-sm text-[#FAF8F1]/80 leading-relaxed font-sans">
                  {item.description}
                </p>
              </div>

              <div className="pt-5 mt-6 border-t border-white/10 flex items-center justify-between text-xs text-[#FAF8F1]/60">
                <span className="inline-flex items-center gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#FF8900]" />
                  <span>Guaranteed Discipline</span>
                </span>
                <span className="font-mono text-[#FF8900]">#P0{index + 1}</span>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Banner with Direct Call to Action */}
        <div className="mt-14 p-8 rounded-2xl bg-gradient-to-r from-[#10563A] to-[#073D2B] border border-white/15 flex flex-col md:flex-row items-center justify-between gap-6 shadow-xl">
          <div className="space-y-1 text-center md:text-left">
            <h4 className="font-arvo text-xl sm:text-2xl font-bold text-white">
              Ready to elevate your compliance readiness?
            </h4>
            <p className="text-sm text-[#FAF8F1]/80 font-sans">
              Connect with Food Circle for professional audits and implementation guidance tailored to your operation.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center gap-4 shrink-0">
            <button
              type="button"
              onClick={handleAction}
              className="inline-flex items-center gap-2 px-6 py-3.5 text-sm font-bold text-[#073D2B] bg-[#FF8900] hover:bg-[#ff991a] text-white rounded-xl shadow-lg transition-all transform hover:-translate-y-0.5 cursor-pointer font-sans"
            >
              <span>Discuss Your Requirements</span>
              <ArrowRight className="w-4 h-4 text-white" />
            </button>
            <a
              href={`tel:${BUSINESS_INFO.contact.phone}`}
              className="text-xs font-semibold text-white/80 hover:text-white underline tracking-wide"
            >
              Or call: {BUSINESS_INFO.contact.phoneDisplay}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
