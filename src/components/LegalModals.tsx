import React from 'react';
import { X, Shield, FileText } from 'lucide-react';
import { BUSINESS_INFO } from '../data/businessData';

interface LegalModalProps {
  isOpen: boolean;
  type: 'privacy' | 'terms' | null;
  onClose: () => void;
}

export const LegalModal: React.FC<LegalModalProps> = ({
  isOpen,
  type,
  onClose,
}) => {
  if (!isOpen || !type) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-headline"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/65 backdrop-blur-xs animate-in fade-in duration-200"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-2xl bg-white rounded-2xl shadow-2xl border border-[#073D2B]/15 overflow-hidden flex flex-col max-h-[85vh]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Header */}
        <div className="flex items-center justify-between px-6 py-5 border-b border-[#073D2B]/10 bg-[#FAF8F1]">
          <div className="flex items-center gap-2.5">
            {type === 'privacy' ? (
              <Shield className="w-5 h-5 text-[#FF8900]" />
            ) : (
              <FileText className="w-5 h-5 text-[#FF8900]" />
            )}
            <h3 id="modal-headline" className="font-arvo text-xl font-bold text-[#073D2B]">
              {type === 'privacy' ? 'Privacy Policy' : 'Terms of Use'}
            </h3>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="p-1.5 text-gray-500 hover:text-[#073D2B] rounded-lg hover:bg-[#073D2B]/5 transition-colors cursor-pointer"
            aria-label="Close dialog"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Content */}
        <div className="px-6 py-6 overflow-y-auto text-sm text-[#202923]/80 space-y-4 leading-relaxed font-sans">
          {type === 'privacy' ? (
            <>
              <p className="text-xs font-semibold text-[#10563A] uppercase tracking-wider">
                Effective Date: January 2026
              </p>
              <p>
                At <strong>Food Circle</strong> (Food Safety Consultancy, based in Mumbai, Maharashtra, India), we are dedicated to protecting your privacy and handling your contact information with complete confidentiality.
              </p>

              <h4 className="font-arvo font-bold text-[#073D2B] text-base pt-2">
                1. Information We Collect
              </h4>
              <p>
                When you submit an enquiry through our website or reach out via WhatsApp/email, we collect only the necessary details required to understand your food business and address your enquiry:
              </p>
              <ul className="list-disc pl-5 space-y-1">
                <li>Your name and business/organization name</li>
                <li>Contact phone number and email address</li>
                <li>Industry sector and specific food safety service requirements</li>
                <li>Operational notes or context provided in your enquiry message</li>
              </ul>

              <h4 className="font-arvo font-bold text-[#073D2B] text-base pt-2">
                2. How We Use Your Information
              </h4>
              <p>
                The information provided is utilized strictly to:
              </p>
              <ul className="list-disc pl-5 space-y-1">
                <li>Respond directly to your consultation or service request</li>
                <li>Prepare preliminary audit or compliance proposals tailored to your facility</li>
                <li>Coordinate on-site visits or virtual advisory sessions</li>
              </ul>
              <p>
                We do not sell, rent, commercialize, or share your contact details with external third-party marketing companies.
              </p>

              <h4 className="font-arvo font-bold text-[#073D2B] text-base pt-2">
                3. Service Location &amp; Office Policy
              </h4>
              <p>
                Food Circle operates on a consultancy and on-site service model. Audits, training, and evaluations are conducted at client manufacturing units, restaurants, kitchens, and facilities across Mumbai and Maharashtra, or via remote communication. We do not operate a walk-in public office.
              </p>

              <h4 className="font-arvo font-bold text-[#073D2B] text-base pt-2">
                4. Contact Information
              </h4>
              <p>
                For questions regarding this policy, contact us at:{' '}
                <a href={BUSINESS_INFO.contact.emailLink} className="text-[#10563A] font-semibold underline">
                  {BUSINESS_INFO.contact.email}
                </a>{' '}
                or call{' '}
                <a href={BUSINESS_INFO.contact.phoneLink} className="text-[#10563A] font-semibold underline">
                  {BUSINESS_INFO.contact.phoneDisplay}
                </a>.
              </p>
            </>
          ) : (
            <>
              <p className="text-xs font-semibold text-[#10563A] uppercase tracking-wider">
                Effective Date: January 2026
              </p>
              <p>
                Welcome to the official website of <strong>Food Circle</strong>. By browsing this website or engaging our consultancy services, you agree to the following terms:
              </p>

              <h4 className="font-arvo font-bold text-[#073D2B] text-base pt-2">
                1. Professional Scope &amp; No Government Affiliation
              </h4>
              <p>
                Food Circle is an independent food safety and regulatory compliance consultancy with Food Technologist and FSSC 22000 Lead Auditor qualifications. Food Circle is an independent advisory practice and is not an agency of or affiliated with the Food Safety and Standards Authority of India (FSSAI) or any government department.
              </p>

              <h4 className="font-arvo font-bold text-[#073D2B] text-base pt-2">
                2. Advisory Nature of Services
              </h4>
              <p>
                All guidance, documentation templates, training, and audit preparation recommendations are formulated according to statutory food safety regulations and recognized hygiene standards. However, statutory licenses, certifications, and official audit outcomes remain at the sole discretion of the respective licensing authorities, accredited certification bodies, and inspecting officers. Food Circle provides thorough technical preparation and does not offer fictitious guarantees of unconditional approval.
              </p>

              <h4 className="font-arvo font-bold text-[#073D2B] text-base pt-2">
                3. Client Responsibilities
              </h4>
              <p>
                Clients are responsible for providing truthful operational records, raw material specifications, and maintaining recommended hygiene routines on the ground in their facilities.
              </p>

              <h4 className="font-arvo font-bold text-[#073D2B] text-base pt-2">
                4. Intellectual Property
              </h4>
              <p>
                All website text, branding, and proprietary audit checklists are property of Food Circle and may not be reproduced without written consent.
              </p>
            </>
          )}
        </div>

        {/* Modal Footer */}
        <div className="px-6 py-4 border-t border-[#073D2B]/10 bg-[#FAF8F1] flex justify-end">
          <button
            type="button"
            onClick={onClose}
            className="px-5 py-2 text-xs font-semibold text-white bg-[#073D2B] hover:bg-[#10563A] rounded-xl transition-colors cursor-pointer font-sans"
          >
            Understood &amp; Close
          </button>
        </div>
      </div>
    </div>
  );
};
