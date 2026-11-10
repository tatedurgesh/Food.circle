import React, { useState } from 'react';
import { SERVICES, ServiceItem } from '../data/businessData';
import {
  FileCheck,
  ClipboardCheck,
  ShieldAlert,
  ShieldCheck,
  Award,
  Search,
  Users,
  FlaskConical,
  Tag,
  Store,
  FolderKanban,
  ThermometerSnowflake,
  CheckCircle,
  TrendingUp,
  MessageSquare,
  ArrowRight,
  Filter,
  Check,
  Sparkles,
} from 'lucide-react';
import { generateWhatsAppUrl } from '../utils/enquiry';

interface ServicesProps {
  onSelectServiceForEnquiry: (serviceTitle: string) => void;
}

export const Services: React.FC<ServicesProps> = ({ onSelectServiceForEnquiry }) => {
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [expandedServiceId, setExpandedServiceId] = useState<string | null>(null);

  const getServiceIcon = (iconName: string) => {
    const props = { className: 'w-5 h-5 text-[#FF8900]' };
    switch (iconName) {
      case 'FileCheck':
        return <FileCheck {...props} />;
      case 'ClipboardCheck':
        return <ClipboardCheck {...props} />;
      case 'ShieldAlert':
        return <ShieldAlert {...props} />;
      case 'ShieldCheck':
        return <ShieldCheck {...props} />;
      case 'Award':
        return <Award {...props} />;
      case 'Search':
        return <Search {...props} />;
      case 'Users':
        return <Users {...props} />;
      case 'FlaskConical':
        return <FlaskConical {...props} />;
      case 'Tag':
        return <Tag {...props} />;
      case 'Store':
        return <Store {...props} />;
      case 'FolderKanban':
        return <FolderKanban {...props} />;
      case 'ThermometerSnowflake':
        return <ThermometerSnowflake {...props} />;
      case 'CheckCircle':
        return <CheckCircle {...props} />;
      case 'TrendingUp':
        return <TrendingUp {...props} />;
      default:
        return <ShieldCheck {...props} />;
    }
  };

  const categories = [
    { id: 'all', label: 'All 14 Services' },
    { id: 'regulatory', label: 'Regulatory & FSSAI' },
    { id: 'audit', label: 'Audits & Inspections' },
    { id: 'management', label: 'HACCP & FSMS' },
    { id: 'operations', label: 'Operations & Setup' },
  ];

  const filteredServices = SERVICES.filter((service) => {
    if (activeCategory === 'all') return true;
    return service.category === activeCategory;
  });

  const toggleDetails = (serviceId: string) => {
    setExpandedServiceId((prev) => (prev === serviceId ? null : serviceId));
  };

  return (
    <section id="services" className="py-20 md:py-28 bg-[#FAF8F1] border-t border-[#073D2B]/10 scroll-mt-20" aria-label="Consultancy Services">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#EAF2E7] border border-[#073D2B]/15 text-[#073D2B] text-xs font-semibold tracking-wider uppercase mb-4">
              <span className="w-1.5 h-1.5 rounded-full bg-[#FF8900]" />
              Structured Advisory
            </div>
            <h2 className="font-arvo text-3xl sm:text-4xl md:text-5xl font-bold text-[#073D2B] tracking-tight leading-tight">
              Food Safety Solutions for Your Business.
            </h2>
            <p className="mt-4 text-base sm:text-lg text-[#202923]/80 leading-relaxed font-sans max-w-2xl">
              Specialized technical guidance covering statutory FSSAI compliance, facility hygiene audits, HACCP system design, and audit preparation for food businesses across Maharashtra.
            </p>
          </div>

          <div className="hidden lg:block text-right">
            <span className="font-arvo text-5xl font-bold text-[#073D2B]/15 block">14</span>
            <span className="text-xs uppercase tracking-wider font-semibold text-[#10563A]">Specialized Services</span>
          </div>
        </div>

        {/* Category Filter Pills */}
        <div className="flex flex-wrap items-center gap-2 mb-10 pb-4 border-b border-[#073D2B]/10">
          <div className="flex items-center gap-1.5 text-xs font-semibold text-[#073D2B] mr-2">
            <Filter className="w-3.5 h-3.5 text-[#FF8900]" />
            <span>Filter Solutions:</span>
          </div>
          {categories.map((cat) => (
            <button
              key={cat.id}
              type="button"
              onClick={() => setActiveCategory(cat.id)}
              className={`px-3.5 py-1.5 text-xs font-medium rounded-full transition-all cursor-pointer ${
                activeCategory === cat.id
                  ? 'bg-[#073D2B] text-white shadow-xs'
                  : 'bg-white text-[#202923]/80 hover:bg-[#EAF2E7] hover:text-[#073D2B] border border-[#073D2B]/10'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* 14 Services Grid: Clean, varied cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredServices.map((service: ServiceItem) => {
            const isExpanded = expandedServiceId === service.id;

            return (
              <div
                key={service.id}
                className={`group bg-white rounded-2xl p-6 sm:p-7 border transition-all duration-300 flex flex-col justify-between ${
                  service.featured
                    ? 'border-[#073D2B]/25 shadow-md hover:shadow-xl'
                    : 'border-[#073D2B]/12 hover:border-[#073D2B]/35 hover:shadow-lg'
                }`}
              >
                <div>
                  {/* Top Bar: Icon + Number + Featured Badge */}
                  <div className="flex items-center justify-between mb-5">
                    <div className="w-12 h-12 rounded-xl bg-[#073D2B] flex items-center justify-center shadow-xs group-hover:scale-105 transition-transform">
                      {getServiceIcon(service.icon)}
                    </div>
                    <div className="flex items-center gap-2">
                      {service.featured && (
                        <span className="inline-flex items-center gap-1 text-[10px] font-bold text-[#073D2B] bg-[#EAF2E7] px-2 py-0.5 rounded-full uppercase tracking-wider">
                          <Sparkles className="w-2.5 h-2.5 text-[#FF8900]" />
                          Core
                        </span>
                      )}
                      <span className="font-mono text-xs font-semibold text-[#202923]/40">
                        #{service.number}
                      </span>
                    </div>
                  </div>

                  {/* Service Title */}
                  <h3 className="font-arvo text-lg sm:text-xl font-bold text-[#073D2B] mb-2.5 leading-snug">
                    {service.title}
                  </h3>

                  {/* Short Description */}
                  <p className="text-xs sm:text-sm text-[#202923]/80 leading-relaxed font-sans mb-4">
                    {service.shortDesc}
                  </p>

                  {/* Expandable Deliverables toggle */}
                  <button
                    type="button"
                    onClick={() => toggleDetails(service.id)}
                    className="text-xs font-semibold text-[#10563A] hover:text-[#073D2B] underline decoration-dotted mb-4 cursor-pointer inline-flex items-center gap-1"
                  >
                    <span>{isExpanded ? 'Hide scope details' : 'View service deliverables'}</span>
                    <span className="text-[10px]">{isExpanded ? '▲' : '▼'}</span>
                  </button>

                  {/* Expanded Scope Details */}
                  {isExpanded && (
                    <div className="mb-5 pt-3 border-t border-[#073D2B]/10 space-y-2 animate-in fade-in duration-200">
                      <p className="text-xs text-[#202923]/70 font-sans leading-relaxed mb-3">
                        {service.detailedDesc}
                      </p>
                      <span className="text-[10px] font-bold text-[#073D2B] uppercase tracking-wider block">
                        Included Deliverables:
                      </span>
                      <ul className="space-y-1.5 text-xs text-[#202923]/85 font-sans">
                        {service.deliverables.map((del, dIdx) => (
                          <li key={dIdx} className="flex items-start gap-2">
                            <Check className="w-3.5 h-3.5 text-[#FF8900] shrink-0 mt-0.5" />
                            <span className="leading-snug">{del}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>

                {/* Card Action Controls: Contact Form CTA & Direct WhatsApp */}
                <div className="pt-4 border-t border-[#073D2B]/10 flex items-center justify-between gap-3 mt-4">
                  <button
                    type="button"
                    onClick={() => onSelectServiceForEnquiry(service.title)}
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-[#073D2B] hover:text-[#FF8900] transition-colors cursor-pointer group/btn"
                  >
                    <span>Enquire About Service</span>
                    <ArrowRight className="w-3.5 h-3.5 transform group-hover/btn:translate-x-1 transition-transform" />
                  </button>

                  <a
                    href={generateWhatsAppUrl({ serviceName: service.title })}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 rounded-lg bg-[#FAF8F1] hover:bg-[#EAF2E7] text-[#10563A] hover:text-[#073D2B] transition-colors border border-[#073D2B]/10"
                    title={`Enquire on WhatsApp about ${service.title}`}
                    aria-label={`Enquire on WhatsApp about ${service.title}`}
                  >
                    <MessageSquare className="w-4 h-4 text-[#FF8900]" />
                  </a>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom Reassurance Note */}
        <div className="mt-14 p-6 rounded-2xl bg-white border border-[#073D2B]/15 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#202923]/80">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-[#EAF2E7] flex items-center justify-center shrink-0">
              <ShieldCheck className="w-4 h-4 text-[#FF8900]" />
            </div>
            <p className="leading-relaxed">
              <strong>Need a customized multi-facility audit or combined compliance package?</strong> We design modular roadmaps tailored to your operation size, license category, and production schedules.
            </p>
          </div>
          <button
            type="button"
            onClick={() => onSelectServiceForEnquiry('Comprehensive Custom Package')}
            className="px-4 py-2 text-xs font-semibold text-white bg-[#073D2B] hover:bg-[#10563A] rounded-lg shrink-0 transition-colors cursor-pointer"
          >
            Request Custom Scope
          </button>
        </div>

      </div>
    </section>
  );
};
