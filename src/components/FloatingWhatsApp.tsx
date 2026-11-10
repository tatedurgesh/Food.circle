import React, { useState } from 'react';
import { generateWhatsAppUrl } from '../utils/enquiry';
import { MessageSquare, X } from 'lucide-react';

export const FloatingWhatsApp: React.FC = () => {
  const [showTooltip, setShowTooltip] = useState(false);

  const whatsappUrl = generateWhatsAppUrl();

  return (
    <aside aria-label="Quick WhatsApp Contact" className="fixed bottom-6 right-6 z-50 flex items-center">
      {/* Mini Tooltip */}
      {showTooltip && (
        <div className="hidden sm:flex items-center gap-2 mr-3 px-3.5 py-2 bg-white text-[#063D28] text-xs font-semibold rounded-lg shadow-lg border border-[#063D28]/15 animate-in fade-in slide-in-from-right-2 duration-150">
          <span>Chat with Food Circle</span>
          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              setShowTooltip(false);
            }}
            className="text-gray-400 hover:text-gray-600"
            aria-label="Dismiss chat tooltip"
          >
            <X className="w-3.5 h-3.5" />
          </button>
        </div>
      )}

      {/* Floating Action Button */}
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        onMouseEnter={() => setShowTooltip(true)}
        className="w-14 h-14 rounded-full bg-[#063D28] text-white flex items-center justify-center shadow-lg hover:shadow-xl hover:bg-[#0B4A31] active:scale-95 transition-all duration-200 border-2 border-[#FF8900] group focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#FF8900]"
        aria-label="Chat on WhatsApp with Food Circle (+91 91376 39148)"
      >
        <MessageSquare className="w-6 h-6 text-[#FF8900] group-hover:scale-110 transition-transform" />
      </a>
    </aside>
  );
};
