import React from 'react';
import { CERTIFICATIONS, CertificationItem } from '../data/businessData';
import { Award, ShieldCheck, CheckCircle2 } from 'lucide-react';

export const Certifications: React.FC = () => {
  return (
    <section id="certifications" className="py-20 md:py-28 bg-white border-t border-[#073D2B]/10 scroll-mt-20" aria-label="Certifications">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#EAF2E7] border border-[#073D2B]/15 text-[#073D2B] text-xs font-semibold tracking-wider uppercase mb-4">
            <span className="w-1.5 h-1.5 rounded-full bg-[#FF8900]" />
            Auditor Qualifications
          </div>
          <h2 className="font-arvo text-3xl sm:text-4xl md:text-5xl font-bold text-[#073D2B] tracking-tight leading-tight">
            Certifications
          </h2>
          <p className="mt-4 text-base sm:text-lg text-[#202923]/80 leading-relaxed font-sans">
            Professional credentials supporting food safety, quality management, and regulatory compliance.
          </p>
        </div>

        {/* 9 Certifications Grid: 3 cols desktop, 2 cols tablet, 1 col mobile */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {CERTIFICATIONS.map((item: CertificationItem) => (
            <div
              key={item.id}
              className="group bg-[#FAF8F1] rounded-2xl p-6 sm:p-7 border border-[#073D2B]/12 hover:border-[#073D2B]/35 hover:shadow-lg transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                {/* Card Top: Refined Icon & Numerical Position */}
                <div className="flex items-center justify-between mb-5">
                  <div className="w-11 h-11 rounded-xl bg-[#073D2B] flex items-center justify-center shadow-xs group-hover:scale-105 transition-transform">
                    <Award className="w-5 h-5 text-[#FF8900]" />
                  </div>
                  <span className="font-mono text-xs font-semibold text-[#202923]/40">
                    #{item.number}
                  </span>
                </div>

                {/* Qualification Title */}
                <h3 className="font-arvo text-lg font-bold text-[#073D2B] mb-2 leading-snug">
                  {item.title}
                </h3>
              </div>

              {/* Issuer attribution footer (No years, no fake seals) */}
              <div className="pt-4 mt-4 border-t border-[#073D2B]/10 flex items-center justify-between text-xs">
                <span className="text-[#202923]/60 font-sans">Issuing Body:</span>
                <span className="inline-flex items-center gap-1.5 font-bold text-[#10563A] bg-white px-2.5 py-1 rounded-md border border-[#073D2B]/10">
                  <ShieldCheck className="w-3.5 h-3.5 text-[#FF8900]" />
                  <span>{item.issuer}</span>
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Professional Transparency Reassurance */}
        <div className="mt-12 p-5 rounded-xl bg-[#FAF8F1] border border-[#073D2B]/10 text-xs text-[#202923]/75 flex items-center gap-3">
          <CheckCircle2 className="w-4 h-4 text-[#FF8900] shrink-0" />
          <p className="leading-relaxed">
            All credentials reflect completed auditor qualifications and regulatory schemes from recognized certification bodies and statutory authorities.
          </p>
        </div>

      </div>
    </section>
  );
};
