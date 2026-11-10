import React from 'react';
import { ABOUT_PRINCIPLES } from '../data/businessData';
import { Compass, ShieldCheck, TrendingUp, CheckCircle, FileText, CheckCircle2 } from 'lucide-react';

export const About: React.FC = () => {
  const getPrincipleIcon = (index: number) => {
    switch (index) {
      case 0:
        return <Compass className="w-5 h-5 text-[#FF8900]" />;
      case 1:
        return <ShieldCheck className="w-5 h-5 text-[#FF8900]" />;
      case 2:
        return <TrendingUp className="w-5 h-5 text-[#FF8900]" />;
      default:
        return <ShieldCheck className="w-5 h-5 text-[#FF8900]" />;
    }
  };

  return (
    <section id="about" className="py-20 md:py-28 bg-white border-t border-[#073D2B]/10 scroll-mt-20" aria-label="About Food Circle">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Editorial Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#EAF2E7] border border-[#073D2B]/15 text-[#073D2B] text-xs font-semibold tracking-wider uppercase mb-4">
            <span className="w-1.5 h-1.5 rounded-full bg-[#FF8900]" />
            About Food Circle
          </div>
          <h2 className="font-arvo text-3xl sm:text-4xl md:text-5xl font-bold text-[#073D2B] tracking-tight leading-tight">
            Making Food Safety Practical.
          </h2>
          <p className="mt-4 text-base sm:text-lg text-[#202923]/80 leading-relaxed font-sans">
            Food Circle is a specialized food safety and compliance consultancy based in Mumbai. We support food enterprises with structured documentation, statutory regulatory adherence, hygiene assessments, internal compliance audits, and custom Food Safety Management Systems.
          </p>
        </div>

        {/* Two-Column Editorial Grid: Narrative & Methodology Focus */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start mb-16">
          
          {/* Narrative Content */}
          <div className="lg:col-span-7 space-y-6 text-sm sm:text-base text-[#202923]/85 leading-relaxed font-sans">
            <p>
              In fast-paced food production lines, commercial kitchens, and distribution centres, compliance is often seen as complex, overwhelming paperwork. Food Circle transforms that dynamic by providing <strong>practical support, clear documentation, risk awareness, and sustainable compliance practices</strong> that teams can execute reliably every single shift.
            </p>
            <p>
              Whether preparing for a statutory FSSAI inspection, resolving non-conformances, or scaling up towards third-party FSMS benchmarks like HACCP or ISO 22000, we bridge the gap between regulatory theory and day-to-day operations.
            </p>

            <div className="pt-2 grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs font-medium text-[#073D2B]">
              <div className="flex items-center gap-2 p-3 rounded-xl bg-[#FAF8F1] border border-[#073D2B]/10">
                <CheckCircle2 className="w-4 h-4 text-[#FF8900] shrink-0" />
                <span>On-Site Facility &amp; Kitchen Evaluations</span>
              </div>
              <div className="flex items-center gap-2 p-3 rounded-xl bg-[#FAF8F1] border border-[#073D2B]/10">
                <CheckCircle2 className="w-4 h-4 text-[#FF8900] shrink-0" />
                <span>Clear, Audit-Ready Documentation</span>
              </div>
              <div className="flex items-center gap-2 p-3 rounded-xl bg-[#FAF8F1] border border-[#073D2B]/10">
                <CheckCircle2 className="w-4 h-4 text-[#FF8900] shrink-0" />
                <span>Schedule 4 Hygiene Benchmarking</span>
              </div>
              <div className="flex items-center gap-2 p-3 rounded-xl bg-[#FAF8F1] border border-[#073D2B]/10">
                <CheckCircle2 className="w-4 h-4 text-[#FF8900] shrink-0" />
                <span>Corrective Action &amp; CAPA Advisory</span>
              </div>
            </div>
          </div>

          {/* Right Highlight Block: Brand Identity Box */}
          <div className="lg:col-span-5">
            <div className="p-8 rounded-2xl bg-[#073D2B] text-white shadow-xl space-y-6 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 rounded-bl-full pointer-events-none" />
              
              <div className="space-y-2">
                <span className="text-[11px] font-bold text-[#FF8900] uppercase tracking-wider block">
                  Safety • Quality • Trust
                </span>
                <h3 className="font-arvo text-2xl font-bold text-white">
                  Food Circle Philosophy
                </h3>
              </div>

              <p className="text-sm text-[#FAF8F1]/85 leading-relaxed font-sans">
                &ldquo;True food safety is not created on the day of an audit. It is built through well-designed routines, consistent temperature monitoring, diligent hygiene habits, and an organizational culture that refuses to compromise on consumer health.&rdquo;
              </p>

              <div className="pt-4 border-t border-white/10 flex items-center justify-between text-xs text-[#FAF8F1]/70">
                <span>Food Safety &amp; Compliance Consultancy</span>
                <span className="text-[#FF8900] font-semibold">Mumbai, MH</span>
              </div>
            </div>
          </div>

        </div>

        {/* Three Key Principles Grid */}
        <div className="border-t border-[#073D2B]/10 pt-14">
          <div className="text-xs font-bold text-[#10563A] uppercase tracking-wider mb-6">
            Core Principles Guiding Our Advisory
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {ABOUT_PRINCIPLES.map((principle, index) => (
              <div
                key={principle.title}
                className="group relative bg-[#FAF8F1] rounded-2xl p-7 border border-[#073D2B]/12 hover:border-[#073D2B]/35 hover:shadow-md transition-all duration-300"
              >
                <div className="flex items-center justify-between mb-5">
                  <div className="w-12 h-12 rounded-xl bg-[#073D2B] flex items-center justify-center shadow-xs group-hover:scale-105 transition-transform">
                    {getPrincipleIcon(index)}
                  </div>
                  <span className="font-arvo font-bold text-2xl text-[#073D2B]/20">
                    0{index + 1}
                  </span>
                </div>

                <h3 className="font-arvo text-xl font-bold text-[#073D2B] mb-3">
                  {principle.title}
                </h3>

                <p className="text-sm text-[#202923]/80 leading-relaxed font-sans">
                  {principle.description}
                </p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};
