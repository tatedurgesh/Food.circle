import React from 'react';
import { BUSINESS_INFO } from '../data/businessData';
import { ShieldCheck, ArrowRight, FileCheck, CheckCircle2, Award, ClipboardCheck } from 'lucide-react';

interface HeroProps {
  onRequestConsultation: () => void;
  onExploreServices: () => void;
}

export const Hero: React.FC<HeroProps> = ({
  onRequestConsultation,
  onExploreServices,
}) => {
  return (
    <section id="home" className="relative pt-6 pb-20 md:pt-12 md:pb-28 bg-[#FAF8F1] overflow-hidden" aria-label="Introduction">
      {/* Subtle organic background lines */}
      <div className="absolute top-0 right-0 -mr-24 -mt-24 w-96 h-96 rounded-full bg-[#EAF2E7]/50 blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 -ml-24 -mb-24 w-96 h-96 rounded-full bg-[#FF8900]/5 blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Editorial Headline & Actions */}
          <div className="lg:col-span-7 space-y-6 sm:space-y-8 text-left">
            {/* Eyebrow */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#EAF2E7] border border-[#073D2B]/15 text-[#073D2B] text-xs font-semibold tracking-wider uppercase">
              <span className="w-1.5 h-1.5 rounded-full bg-[#FF8900]" />
              {BUSINESS_INFO.eyebrow}
            </div>

            {/* Main Headline */}
            <h1 className="font-arvo text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-[#073D2B] leading-[1.12]">
              Food Safety.{' '}
              <span className="text-[#10563A]">Quality.</span>{' '}
              <span className="text-[#FF8900]">Confidence.</span>
            </h1>

            {/* Supporting Copy */}
            <p className="text-base sm:text-lg text-[#202923]/85 leading-relaxed font-sans max-w-2xl">
              {BUSINESS_INFO.supportingHeadline}
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-2">
              <button
                type="button"
                onClick={onRequestConsultation}
                className="inline-flex items-center justify-center gap-2.5 px-7 py-4 text-sm font-semibold text-white bg-[#073D2B] hover:bg-[#10563A] active:scale-[0.99] rounded-xl shadow-md hover:shadow-lg transition-all focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#FF8900] cursor-pointer"
              >
                <span>Request a Consultation</span>
                <ArrowRight className="w-4 h-4 text-[#FF8900]" />
              </button>

              <button
                type="button"
                onClick={onExploreServices}
                className="inline-flex items-center justify-center gap-2 px-7 py-4 text-sm font-semibold text-[#073D2B] bg-white hover:bg-slate-50 border border-[#073D2B]/20 rounded-xl transition-all shadow-xs hover:border-[#073D2B]/40 cursor-pointer"
              >
                <span>Explore Our Services</span>
              </button>
            </div>

            {/* Supporting Line & Credentials */}
            <div className="pt-4 border-t border-[#073D2B]/10 flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs text-[#202923]/70">
              <div className="flex items-center gap-2 font-medium text-[#10563A]">
                <ShieldCheck className="w-4 h-4 text-[#FF8900] shrink-0" />
                <span>{BUSINESS_INFO.supportingLine}</span>
              </div>
              <div className="font-mono text-[11px] text-[#202923]/50">
                Mumbai • Maharashtra • India
              </div>
            </div>
          </div>

          {/* Right Column: Visual Composition representing HACCP, Audits & Quality Systems */}
          <div className="lg:col-span-5">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              
              {/* Main Document / Compliance Dossier Card */}
              <div className="bg-white rounded-2xl p-6 sm:p-8 border border-[#073D2B]/15 shadow-xl relative z-10 space-y-6">
                
                {/* Dossier Header */}
                <div className="flex items-center justify-between border-b border-[#073D2B]/10 pb-4">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-[#073D2B] flex items-center justify-center text-white">
                      <ClipboardCheck className="w-5 h-5 text-[#FF8900]" />
                    </div>
                    <div>
                      <span className="text-[10px] font-bold text-[#FF8900] uppercase tracking-wider block">
                        Compliance Dossier
                      </span>
                      <h2 className="font-arvo text-base font-bold text-[#073D2B]">
                        Food Safety Management
                      </h2>
                    </div>
                  </div>
                  <span className="px-2.5 py-1 rounded-full bg-[#EAF2E7] text-[#073D2B] text-[11px] font-semibold">
                    Audit Ready
                  </span>
                </div>

                {/* Audit Checklist Items */}
                <div className="space-y-3 font-sans">
                  <div className="p-3 rounded-xl bg-[#FAF8F1] border border-[#073D2B]/10 flex items-start gap-3">
                    <div className="w-5 h-5 rounded-full bg-[#10563A] text-white flex items-center justify-center shrink-0 mt-0.5">
                      <CheckCircle2 className="w-3.5 h-3.5 text-white" />
                    </div>
                    <div className="text-xs">
                      <span className="font-bold text-[#073D2B] block">FSSAI Schedule 4 Standards</span>
                      <span className="text-[#202923]/70">Sanitary facilities, pest barriers &amp; water potability protocols verified</span>
                    </div>
                  </div>

                  <div className="p-3 rounded-xl bg-[#FAF8F1] border border-[#073D2B]/10 flex items-start gap-3">
                    <div className="w-5 h-5 rounded-full bg-[#10563A] text-white flex items-center justify-center shrink-0 mt-0.5">
                      <CheckCircle2 className="w-3.5 h-3.5 text-white" />
                    </div>
                    <div className="text-xs">
                      <span className="font-bold text-[#073D2B] block">HACCP &amp; CCP Monitoring</span>
                      <span className="text-[#202923]/70">Critical limits logged with corrective action verification records</span>
                    </div>
                  </div>

                  <div className="p-3 rounded-xl bg-[#FAF8F1] border border-[#073D2B]/10 flex items-start gap-3">
                    <div className="w-5 h-5 rounded-full bg-[#10563A] text-white flex items-center justify-center shrink-0 mt-0.5">
                      <CheckCircle2 className="w-3.5 h-3.5 text-white" />
                    </div>
                    <div className="text-xs">
                      <span className="font-bold text-[#073D2B] block">Traceability &amp; Batch Control</span>
                      <span className="text-[#202923]/70">Raw material intake to finished goods forward/backward tracking</span>
                    </div>
                  </div>
                </div>

                {/* Dossier Footer / Consultant Assurance */}
                <div className="pt-4 border-t border-[#073D2B]/10 flex items-center justify-between text-xs">
                  <div className="flex items-center gap-2">
                    <Award className="w-4 h-4 text-[#FF8900]" />
                    <span className="font-semibold text-[#073D2B]">FSMS &amp; Regulatory Practice</span>
                  </div>
                  <span className="text-[#10563A] font-medium text-[11px]">
                    Structured Verification
                  </span>
                </div>
              </div>

              {/* Offset Decorative Accent Frame */}
              <div className="hidden sm:block absolute -bottom-4 -right-4 w-full h-full rounded-2xl border-2 border-[#FF8900]/30 -z-0 pointer-events-none" />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
