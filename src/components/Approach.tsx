import React from 'react';
import { APPROACH_STEPS } from '../data/businessData';
import { Compass, Search, Lightbulb, CheckCircle2, ArrowRight } from 'lucide-react';

export const Approach: React.FC = () => {
  const getStepIcon = (index: number) => {
    switch (index) {
      case 0:
        return <Compass className="w-5 h-5 text-[#FF8900]" />;
      case 1:
        return <Search className="w-5 h-5 text-[#FF8900]" />;
      case 2:
        return <Lightbulb className="w-5 h-5 text-[#FF8900]" />;
      case 3:
        return <CheckCircle2 className="w-5 h-5 text-[#FF8900]" />;
      default:
        return <CheckCircle2 className="w-5 h-5 text-[#FF8900]" />;
    }
  };

  return (
    <section id="approach" className="py-20 md:py-28 bg-[#FAF8F1] border-t border-[#073D2B]/10 scroll-mt-20" aria-label="Our Approach">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#EAF2E7] border border-[#073D2B]/15 text-[#073D2B] text-xs font-semibold tracking-wider uppercase mb-4">
            <span className="w-1.5 h-1.5 rounded-full bg-[#FF8900]" />
            Methodology
          </div>
          <h2 className="font-arvo text-3xl sm:text-4xl md:text-5xl font-bold text-[#073D2B] tracking-tight leading-tight">
            A Clear Path to Better Food Safety.
          </h2>
          <p className="mt-4 text-base sm:text-lg text-[#202923]/80 leading-relaxed font-sans">
            A methodical, structured workflow that transforms complex regulatory mandates into reliable daily operations.
          </p>
        </div>

        {/* 4 Step Sequential Process */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 relative">
          {APPROACH_STEPS.map((step, idx) => (
            <div
              key={step.step}
              className="relative group bg-white rounded-2xl p-6 sm:p-7 border border-[#073D2B]/12 hover:border-[#073D2B]/35 hover:shadow-xl transition-all duration-300 flex flex-col justify-between"
            >
              {/* Connector line on desktop */}
              {idx < 3 && (
                <div className="hidden lg:block absolute -right-3 top-1/2 -translate-y-1/2 z-10 text-[#073D2B]/20">
                  <ArrowRight className="w-6 h-6" />
                </div>
              )}

              <div>
                <div className="flex items-center justify-between mb-6">
                  <div className="w-12 h-12 rounded-xl bg-[#073D2B] border border-[#10563A] flex items-center justify-center shadow-xs group-hover:scale-105 transition-transform">
                    {getStepIcon(idx)}
                  </div>
                  <span className="font-arvo font-bold text-3xl text-[#FF8900]">
                    {step.step}
                  </span>
                </div>

                <div className="text-[11px] font-bold text-[#10563A] uppercase tracking-wider mb-2">
                  Step 0{idx + 1}
                </div>

                <h3 className="font-arvo text-xl font-bold text-[#073D2B] mb-3 leading-snug">
                  {step.title}
                </h3>

                <p className="text-xs sm:text-sm text-[#202923]/75 leading-relaxed font-sans">
                  {step.description}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-[#073D2B]/10 flex items-center justify-between text-[11px] font-semibold text-[#10563A]">
                <span>Phase Execution</span>
                <span className="text-[#FF8900]">Stage {step.step}/04</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
