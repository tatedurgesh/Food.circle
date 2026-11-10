import React, { useState } from 'react';
import { FAQS } from '../data/businessData';
import { ChevronDown, HelpCircle, MessageSquare } from 'lucide-react';
import { generateWhatsAppUrl } from '../utils/enquiry';

export const FAQ: React.FC = () => {
  const [openId, setOpenId] = useState<string | null>(FAQS[0]?.id || null);

  const toggleAccordion = (id: string) => {
    setOpenId((prev) => (prev === id ? null : id));
  };

  return (
    <section id="faq" className="py-20 md:py-28 bg-[#FAF8F1] border-t border-[#073D2B]/10 scroll-mt-20" aria-label="Frequently Asked Questions">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#EAF2E7] border border-[#073D2B]/15 text-[#073D2B] text-xs font-semibold tracking-wider uppercase mb-4">
            <span className="w-1.5 h-1.5 rounded-full bg-[#FF8900]" />
            Common Inquiries
          </div>
          <h2 className="font-arvo text-3xl sm:text-4xl md:text-5xl font-bold text-[#073D2B] tracking-tight leading-tight">
            Frequently Asked Questions
          </h2>
          <p className="mt-4 text-base sm:text-lg text-[#202923]/80 leading-relaxed font-sans">
            Clear, practical answers about food safety consultancy, regulatory obligations, and audit preparation.
          </p>
        </div>

        {/* Accordion List */}
        <div className="space-y-4">
          {FAQS.map((faq) => {
            const isOpen = openId === faq.id;

            return (
              <div
                key={faq.id}
                className="bg-white rounded-2xl border border-[#073D2B]/12 overflow-hidden transition-all duration-200 shadow-xs hover:border-[#073D2B]/30"
              >
                <button
                  type="button"
                  onClick={() => toggleAccordion(faq.id)}
                  aria-expanded={isOpen}
                  className="w-full flex items-center justify-between p-5 sm:p-6 text-left cursor-pointer transition-colors focus-visible:outline-2 focus-visible:outline-[#073D2B]"
                >
                  <span className="font-arvo text-base sm:text-lg font-bold text-[#073D2B] pr-4">
                    {faq.question}
                  </span>
                  <div
                    className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 transition-transform duration-200 ${
                      isOpen
                        ? 'bg-[#073D2B] text-[#FF8900] rotate-180'
                        : 'bg-[#FAF8F1] text-[#073D2B]'
                    }`}
                  >
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-5 sm:px-6 pb-6 pt-1 text-sm text-[#202923]/85 leading-relaxed font-sans border-t border-[#073D2B]/5 animate-in fade-in duration-150">
                    {faq.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Bottom Help Trigger */}
        <div className="mt-12 p-6 rounded-2xl bg-white border border-[#073D2B]/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#202923]/80">
          <div className="flex items-center gap-3">
            <HelpCircle className="w-5 h-5 text-[#FF8900] shrink-0" />
            <span>Have a specific operational question or upcoming audit notice?</span>
          </div>
          <a
            href={generateWhatsAppUrl({ customMessage: "Hello Food Circle, I have a query regarding our facility's food safety and compliance requirements." })}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-4 py-2 text-xs font-bold text-white bg-[#073D2B] hover:bg-[#10563A] rounded-xl transition-colors shrink-0"
          >
            <MessageSquare className="w-3.5 h-3.5 text-[#FF8900]" />
            <span>Ask via WhatsApp</span>
          </a>
        </div>

      </div>
    </section>
  );
};
