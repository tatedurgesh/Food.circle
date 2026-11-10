import React from 'react';
import { INDUSTRIES, IndustryItem } from '../data/businessData';
import {
  Building2,
  UtensilsCrossed,
  ChefHat,
  Flame,
  ShoppingBag,
  Milk,
  Croissant,
  PackageCheck,
  Sparkles,
  CupSoda,
  Factory,
  Warehouse,
  ShieldCheck,
  ArrowRight,
} from 'lucide-react';

interface IndustriesProps {
  onSelectIndustryForEnquiry: (industryName: string) => void;
}

export const Industries: React.FC<IndustriesProps> = ({ onSelectIndustryForEnquiry }) => {
  const renderIcon = (iconName: string) => {
    const props = { className: 'w-5 h-5 text-[#FF8900]' };
    switch (iconName) {
      case 'Building2':
        return <Building2 {...props} />;
      case 'UtensilsCrossed':
        return <UtensilsCrossed {...props} />;
      case 'ChefHat':
        return <ChefHat {...props} />;
      case 'Flame':
        return <Flame {...props} />;
      case 'ShoppingBag':
        return <ShoppingBag {...props} />;
      case 'Milk':
        return <Milk {...props} />;
      case 'Croissant':
        return <Croissant {...props} />;
      case 'PackageCheck':
        return <PackageCheck {...props} />;
      case 'Sparkles':
        return <Sparkles {...props} />;
      case 'CupSoda':
        return <CupSoda {...props} />;
      case 'Factory':
        return <Factory {...props} />;
      case 'Warehouse':
        return <Warehouse {...props} />;
      default:
        return <Factory {...props} />;
    }
  };

  return (
    <section id="industries" className="py-20 md:py-28 bg-[#FAF8F1] border-t border-[#073D2B]/10 scroll-mt-20" aria-label="Industries Served">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#EAF2E7] border border-[#073D2B]/15 text-[#073D2B] text-xs font-semibold tracking-wider uppercase mb-4">
              <span className="w-1.5 h-1.5 rounded-full bg-[#FF8900]" />
              Sectors We Advise
            </div>
            <h2 className="font-arvo text-3xl sm:text-4xl md:text-5xl font-bold text-[#073D2B] tracking-tight leading-tight">
              Supporting Businesses Across the Food Industry.
            </h2>
            <p className="mt-4 text-base sm:text-lg text-[#202923]/80 leading-relaxed font-sans max-w-2xl">
              From raw procurement and primary manufacturing to commercial food service, hospitality, and distribution networks across Maharashtra.
            </p>
          </div>

          <div className="hidden lg:block text-right">
            <span className="font-arvo text-5xl font-bold text-[#073D2B]/15 block">12</span>
            <span className="text-xs uppercase tracking-wider font-semibold text-[#10563A]">Specialized Sectors</span>
          </div>
        </div>

        {/* 12 Industry Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {INDUSTRIES.map((industry: IndustryItem, index: number) => (
            <div
              key={industry.id}
              className="group relative bg-white rounded-2xl p-6 border border-[#073D2B]/12 hover:border-[#073D2B]/35 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between"
            >
              {/* Subtle top indicator */}
              <div className="absolute top-0 left-6 right-6 h-0.5 bg-gradient-to-r from-transparent via-[#FF8900]/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />

              <div>
                <div className="flex items-center justify-between mb-5">
                  <div className="w-12 h-12 rounded-xl bg-[#073D2B] border border-[#10563A] flex items-center justify-center shadow-xs group-hover:scale-105 group-hover:bg-[#10563A] transition-all">
                    {renderIcon(industry.icon)}
                  </div>
                  <span className="text-xs font-mono font-medium text-[#202923]/40">
                    #{String(index + 1).padStart(2, '0')}
                  </span>
                </div>

                <h3 className="font-arvo text-lg font-bold text-[#073D2B] mb-2.5 group-hover:text-[#10563A] transition-colors">
                  {industry.name}
                </h3>

                <p className="text-xs text-[#202923]/75 leading-relaxed font-sans mb-5">
                  {industry.description}
                </p>
              </div>

              <div className="pt-4 border-t border-[#073D2B]/10 space-y-3">
                <div className="flex items-start gap-2 text-[11px] text-[#10563A] bg-[#EAF2E7]/60 p-2.5 rounded-lg border border-[#073D2B]/10">
                  <ShieldCheck className="w-3.5 h-3.5 text-[#FF8900] shrink-0 mt-0.5" />
                  <span className="font-medium leading-snug">{industry.complianceFocus}</span>
                </div>

                <button
                  type="button"
                  onClick={() => onSelectIndustryForEnquiry(industry.name)}
                  className="w-full inline-flex items-center justify-between text-xs font-semibold text-[#073D2B] hover:text-[#FF8900] py-1 cursor-pointer transition-colors group/btn"
                >
                  <span>Consult for {industry.name}</span>
                  <ArrowRight className="w-3.5 h-3.5 transform group-hover/btn:translate-x-1 transition-transform" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
