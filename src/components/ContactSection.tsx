import React, { useState, useEffect } from 'react';
import {
  BUSINESS_INFO,
  INDUSTRIES,
  SERVICES,
} from '../data/businessData';
import {
  EnquiryFormData,
  ValidationErrors,
  validateEnquiryForm,
  generateWhatsAppUrl,
  generateEmailUrl,
} from '../utils/enquiry';
import {
  Phone,
  Mail,
  MapPin,
  Send,
  MessageSquare,
  CheckCircle2,
  RotateCcw,
  ShieldCheck,
  Building,
  User,
  ExternalLink,
} from 'lucide-react';

interface ContactSectionProps {
  selectedService?: string;
  selectedIndustry?: string;
  onClearPrefill?: () => void;
  onOpenPrivacyNotice: () => void;
}

export const ContactSection: React.FC<ContactSectionProps> = ({
  selectedService,
  selectedIndustry,
  onClearPrefill,
  onOpenPrivacyNotice,
}) => {
  const [formData, setFormData] = useState<EnquiryFormData>({
    fullName: '',
    businessName: '',
    phone: '',
    email: '',
    industry: selectedIndustry || '',
    serviceRequired: selectedService || '',
    preferredContact: 'whatsapp',
    message: '',
    privacyConsent: false,
  });

  const [errors, setErrors] = useState<ValidationErrors>({});
  const [touched, setTouched] = useState<Record<string, boolean>>({});
  const [isSubmitted, setIsSubmitted] = useState<boolean>(false);

  // Sync props if changed
  useEffect(() => {
    if (selectedService) {
      setFormData((prev) => ({ ...prev, serviceRequired: selectedService }));
    }
  }, [selectedService]);

  useEffect(() => {
    if (selectedIndustry) {
      setFormData((prev) => ({ ...prev, industry: selectedIndustry }));
    }
  }, [selectedIndustry]);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { name, value, type } = e.target;
    const val = type === 'checkbox' ? (e.target as HTMLInputElement).checked : value;

    setFormData((prev) => ({
      ...prev,
      [name]: val,
    }));

    if (errors[name as keyof ValidationErrors]) {
      setErrors((prev) => ({
        ...prev,
        [name]: undefined,
      }));
    }
  };

  const handleBlur = (field: string) => {
    setTouched((prev) => ({ ...prev, [field]: true }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const validation = validateEnquiryForm(formData);

    if (!validation.isValid) {
      setErrors(validation.errors);
      setTouched({
        fullName: true,
        businessName: true,
        phone: true,
        email: true,
        industry: true,
        serviceRequired: true,
        privacyConsent: true,
      });
      return;
    }

    setErrors({});
    setIsSubmitted(true);
  };

  const resetForm = () => {
    setIsSubmitted(false);
    setFormData({
      fullName: '',
      businessName: '',
      phone: '',
      email: '',
      industry: '',
      serviceRequired: '',
      preferredContact: 'whatsapp',
      message: '',
      privacyConsent: false,
    });
    setTouched({});
    if (onClearPrefill) onClearPrefill();
  };

  return (
    <section id="contact" className="py-20 md:py-28 bg-white border-t border-[#073D2B]/10 scroll-mt-20" aria-label="Contact & Consultation">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#EAF2E7] border border-[#073D2B]/15 text-[#073D2B] text-xs font-semibold tracking-wider uppercase mb-4">
            <span className="w-1.5 h-1.5 rounded-full bg-[#FF8900]" />
            Consultation Enquiry
          </div>
          <h2 className="font-arvo text-3xl sm:text-4xl md:text-5xl font-bold text-[#073D2B] tracking-tight leading-tight">
            Let&apos;s Discuss Your Food Safety Requirements.
          </h2>
          <p className="mt-4 text-base sm:text-lg text-[#202923]/80 leading-relaxed font-sans">
            Connect with Food Circle for dedicated compliance audits, FSSAI regulatory filings, and quality management advisory tailored to your establishment.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left Column: Direct Contact & Location Brief */}
          <div className="lg:col-span-5 space-y-6">
            <div className="bg-[#FAF8F1] rounded-2xl p-7 sm:p-8 border border-[#073D2B]/15 shadow-sm space-y-6">
              <div className="border-b border-[#073D2B]/10 pb-5">
                <span className="text-[11px] font-bold text-[#FF8900] uppercase tracking-wider block mb-1">
                  Food Safety Consultancy
                </span>
                <h3 className="font-arvo text-2xl font-bold text-[#073D2B]">
                  {BUSINESS_INFO.consultancy.name}
                </h3>
                <p className="text-xs font-semibold text-[#10563A] mt-1">
                  {BUSINESS_INFO.consultancy.designation}
                </p>
                <div className="inline-flex items-center gap-1.5 px-2.5 py-1 mt-2.5 rounded-md bg-[#EAF2E7] border border-[#073D2B]/15 text-[11px] font-medium text-[#073D2B]">
                  <ShieldCheck className="w-3.5 h-3.5 text-[#FF8900]" />
                  <span>{BUSINESS_INFO.consultancy.credentials}</span>
                </div>
              </div>

              {/* Communication Cards */}
              <div className="space-y-3.5">
                <a
                  href={BUSINESS_INFO.contact.phoneLink}
                  className="flex items-start gap-3.5 p-3.5 rounded-xl bg-white border border-[#073D2B]/10 hover:border-[#073D2B]/35 hover:shadow-xs transition-all group"
                >
                  <div className="w-10 h-10 rounded-lg bg-[#EAF2E7] flex items-center justify-center shrink-0 group-hover:bg-[#FF8900]/15 transition-colors">
                    <Phone className="w-5 h-5 text-[#FF8900]" />
                  </div>
                  <div>
                    <p className="text-[11px] text-[#202923]/60 uppercase tracking-wider font-semibold">Direct Call</p>
                    <p className="font-arvo text-base font-bold text-[#073D2B]">{BUSINESS_INFO.contact.phoneDisplay}</p>
                    <span className="text-xs text-[#10563A] underline font-medium">Click to dial</span>
                  </div>
                </a>

                <a
                  href={BUSINESS_INFO.contact.emailLink}
                  className="flex items-start gap-3.5 p-3.5 rounded-xl bg-white border border-[#073D2B]/10 hover:border-[#073D2B]/35 hover:shadow-xs transition-all group"
                >
                  <div className="w-10 h-10 rounded-lg bg-[#EAF2E7] flex items-center justify-center shrink-0 group-hover:bg-[#FF8900]/15 transition-colors">
                    <Mail className="w-5 h-5 text-[#FF8900]" />
                  </div>
                  <div className="min-w-0">
                    <p className="text-[11px] text-[#202923]/60 uppercase tracking-wider font-semibold">Official Email</p>
                    <p className="font-sans text-sm font-bold text-[#073D2B] truncate">{BUSINESS_INFO.contact.email}</p>
                    <span className="text-xs text-[#10563A] underline font-medium">Click to compose email</span>
                  </div>
                </a>

                <a
                  href={generateWhatsAppUrl()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-start gap-3.5 p-3.5 rounded-xl bg-[#073D2B] text-white hover:bg-[#10563A] shadow-xs hover:shadow-md transition-all group"
                >
                  <div className="w-10 h-10 rounded-lg bg-white/10 flex items-center justify-center shrink-0">
                    <MessageSquare className="w-5 h-5 text-[#FF8900]" />
                  </div>
                  <div>
                    <p className="text-[11px] text-[#FAF8F1]/70 uppercase tracking-wider font-semibold">Instant Response</p>
                    <p className="font-arvo text-base font-bold text-white">Chat on WhatsApp</p>
                    <span className="text-xs text-[#FF8900] font-medium flex items-center gap-1 mt-0.5">
                      <span>Open chat with consultant</span>
                      <ExternalLink className="w-3 h-3" />
                    </span>
                  </div>
                </a>
              </div>

              {/* Service Model Notice */}
              <div className="p-4 rounded-xl bg-white border border-[#073D2B]/10 space-y-2 text-xs text-[#202923]/80">
                <div className="flex items-center gap-2 font-bold text-[#073D2B]">
                  <MapPin className="w-4 h-4 text-[#FF8900] shrink-0" />
                  <span className="font-arvo">Service Model &amp; Location</span>
                </div>
                <p>
                  <strong>Location:</strong> {BUSINESS_INFO.contact.location}
                </p>
                <p className="leading-relaxed">
                  Food Circle operates via structured on-site visits to client manufacturing plants, commercial kitchens, warehouses, and hospitality facilities across Mumbai and Maharashtra. There is no public walk-in office.
                </p>
              </div>
            </div>
          </div>

          {/* Right Column: Interactive Consultation Form */}
          <div className="lg:col-span-7">
            <div className="bg-[#FAF8F1] rounded-2xl p-7 sm:p-9 border border-[#073D2B]/15 shadow-sm">
              {isSubmitted ? (
                /* Immediate Success State with Direct Dispatch */
                <div className="text-center py-8 space-y-6">
                  <div className="w-16 h-16 rounded-full bg-[#073D2B] text-white flex items-center justify-center mx-auto shadow-md">
                    <CheckCircle2 className="w-9 h-9 text-[#FF8900]" />
                  </div>

                  <div className="max-w-md mx-auto space-y-2">
                    <h3 className="font-arvo text-2xl sm:text-3xl font-bold text-[#073D2B]">
                      Enquiry Ready to Dispatch
                    </h3>
                    <p className="text-sm text-[#202923]/80 leading-relaxed font-sans">
                      Thank you, <strong>{formData.fullName}</strong>. To ensure zero turnaround delay, transmit your request directly to our consultant:
                    </p>
                  </div>

                  {/* Summary of submitted details */}
                  <div className="bg-white p-5 rounded-xl border border-[#073D2B]/12 text-left text-xs space-y-2 max-w-md mx-auto shadow-xs">
                    <div className="flex justify-between py-1 border-b border-gray-100">
                      <span className="text-[#202923]/60">Service Required:</span>
                      <span className="font-semibold text-[#073D2B]">{formData.serviceRequired}</span>
                    </div>
                    <div className="flex justify-between py-1 border-b border-gray-100">
                      <span className="text-[#202923]/60">Business Name:</span>
                      <span className="font-semibold text-[#073D2B]">{formData.businessName}</span>
                    </div>
                    <div className="flex justify-between py-1 border-b border-gray-100">
                      <span className="text-[#202923]/60">Industry Sector:</span>
                      <span className="font-semibold text-[#073D2B]">{formData.industry}</span>
                    </div>
                    <div className="flex justify-between py-1">
                      <span className="text-[#202923]/60">Contact Phone:</span>
                      <span className="font-semibold text-[#073D2B]">{formData.phone}</span>
                    </div>
                  </div>

                  {/* 1-Click Action Buttons */}
                  <div className="flex flex-col sm:flex-row gap-3 justify-center max-w-md mx-auto">
                    <a
                      href={generateWhatsAppUrl({ formData })}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center gap-2 px-6 py-3.5 text-sm font-semibold text-white bg-[#073D2B] hover:bg-[#10563A] rounded-xl transition-all shadow-sm font-sans"
                    >
                      <MessageSquare className="w-4 h-4 text-[#FF8900]" />
                      <span>Transmit via WhatsApp</span>
                    </a>

                    <a
                      href={generateEmailUrl({ formData })}
                      className="inline-flex items-center justify-center gap-2 px-6 py-3.5 text-sm font-semibold text-[#073D2B] bg-white hover:bg-slate-50 border border-[#073D2B]/20 rounded-xl transition-colors font-sans"
                    >
                      <Mail className="w-4 h-4 text-[#FF8900]" />
                      <span>Transmit via Email</span>
                    </a>
                  </div>

                  <div className="pt-4 border-t border-[#073D2B]/10">
                    <button
                      type="button"
                      onClick={resetForm}
                      className="inline-flex items-center gap-1.5 text-xs text-[#202923]/70 hover:text-[#073D2B] transition-colors cursor-pointer"
                    >
                      <RotateCcw className="w-3.5 h-3.5" />
                      <span>Submit another enquiry or edit details</span>
                    </button>
                  </div>
                </div>
              ) : (
                /* Interactive Enquiry Form */
                <form onSubmit={handleSubmit} noValidate className="space-y-5">
                  <div className="border-b border-[#073D2B]/10 pb-4">
                    <h3 className="font-arvo text-2xl font-bold text-[#073D2B]">
                      Request a Consultation
                    </h3>
                    <p className="text-xs text-[#202923]/70 mt-1 font-sans">
                      Complete the parameters below to receive targeted advice suited to your facility and compliance timeline.
                    </p>
                  </div>

                  {/* Full Name and Business Name */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="fullName" className="block text-xs font-semibold text-[#202923] mb-1.5 font-sans">
                        Full Name <span className="text-red-600">*</span>
                      </label>
                      <input
                        type="text"
                        id="fullName"
                        name="fullName"
                        value={formData.fullName}
                        onChange={handleChange}
                        onBlur={() => handleBlur('fullName')}
                        placeholder="e.g. Rajesh Patil"
                        className={`w-full px-3.5 py-2.5 text-sm bg-white rounded-xl border ${
                          touched.fullName && errors.fullName
                            ? 'border-red-500 focus:ring-red-400'
                            : 'border-[#073D2B]/20 focus:border-[#073D2B]'
                        } focus:outline-hidden focus:ring-1 focus:ring-[#073D2B] transition-colors font-sans`}
                      />
                      {touched.fullName && errors.fullName && (
                        <p className="text-xs text-red-600 mt-1">{errors.fullName}</p>
                      )}
                    </div>

                    <div>
                      <label htmlFor="businessName" className="block text-xs font-semibold text-[#202923] mb-1.5 font-sans">
                        Business Name <span className="text-red-600">*</span>
                      </label>
                      <input
                        type="text"
                        id="businessName"
                        name="businessName"
                        value={formData.businessName}
                        onChange={handleChange}
                        onBlur={() => handleBlur('businessName')}
                        placeholder="e.g. Apex Confectionery LLP"
                        className={`w-full px-3.5 py-2.5 text-sm bg-white rounded-xl border ${
                          touched.businessName && errors.businessName
                            ? 'border-red-500 focus:ring-red-400'
                            : 'border-[#073D2B]/20 focus:border-[#073D2B]'
                        } focus:outline-hidden focus:ring-1 focus:ring-[#073D2B] transition-colors font-sans`}
                      />
                      {touched.businessName && errors.businessName && (
                        <p className="text-xs text-red-600 mt-1">{errors.businessName}</p>
                      )}
                    </div>
                  </div>

                  {/* Phone and Email */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="phone" className="block text-xs font-semibold text-[#202923] mb-1.5 font-sans">
                        Phone Number <span className="text-red-600">*</span>
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        onBlur={() => handleBlur('phone')}
                        placeholder="10-digit mobile (e.g. 9137639148)"
                        className={`w-full px-3.5 py-2.5 text-sm bg-white rounded-xl border ${
                          touched.phone && errors.phone
                            ? 'border-red-500 focus:ring-red-400'
                            : 'border-[#073D2B]/20 focus:border-[#073D2B]'
                        } focus:outline-hidden focus:ring-1 focus:ring-[#073D2B] transition-colors font-sans`}
                      />
                      {touched.phone && errors.phone && (
                        <p className="text-xs text-red-600 mt-1">{errors.phone}</p>
                      )}
                    </div>

                    <div>
                      <label htmlFor="email" className="block text-xs font-semibold text-[#202923] mb-1.5 font-sans">
                        Email Address <span className="text-red-600">*</span>
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        onBlur={() => handleBlur('email')}
                        placeholder="contact@business.com"
                        className={`w-full px-3.5 py-2.5 text-sm bg-white rounded-xl border ${
                          touched.email && errors.email
                            ? 'border-red-500 focus:ring-red-400'
                            : 'border-[#073D2B]/20 focus:border-[#073D2B]'
                        } focus:outline-hidden focus:ring-1 focus:ring-[#073D2B] transition-colors font-sans`}
                      />
                      {touched.email && errors.email && (
                        <p className="text-xs text-red-600 mt-1">{errors.email}</p>
                      )}
                    </div>
                  </div>

                  {/* Industry and Service Dropdowns */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="industry" className="block text-xs font-semibold text-[#202923] mb-1.5 font-sans">
                        Industry <span className="text-red-600">*</span>
                      </label>
                      <select
                        id="industry"
                        name="industry"
                        value={formData.industry}
                        onChange={handleChange}
                        onBlur={() => handleBlur('industry')}
                        className={`w-full px-3.5 py-2.5 text-sm bg-white rounded-xl border ${
                          touched.industry && errors.industry
                            ? 'border-red-500 focus:ring-red-400'
                            : 'border-[#073D2B]/20 focus:border-[#073D2B]'
                        } focus:outline-hidden focus:ring-1 focus:ring-[#073D2B] transition-colors font-sans`}
                      >
                        <option value="">Select your sector</option>
                        {INDUSTRIES.map((ind) => (
                          <option key={ind.id} value={ind.name}>
                            {ind.name}
                          </option>
                        ))}
                      </select>
                      {touched.industry && errors.industry && (
                        <p className="text-xs text-red-600 mt-1">{errors.industry}</p>
                      )}
                    </div>

                    <div>
                      <label htmlFor="serviceRequired" className="block text-xs font-semibold text-[#202923] mb-1.5 font-sans">
                        Service Required <span className="text-red-600">*</span>
                      </label>
                      <select
                        id="serviceRequired"
                        name="serviceRequired"
                        value={formData.serviceRequired}
                        onChange={handleChange}
                        onBlur={() => handleBlur('serviceRequired')}
                        className={`w-full px-3.5 py-2.5 text-sm bg-white rounded-xl border ${
                          touched.serviceRequired && errors.serviceRequired
                            ? 'border-red-500 focus:ring-red-400'
                            : 'border-[#073D2B]/20 focus:border-[#073D2B]'
                        } focus:outline-hidden focus:ring-1 focus:ring-[#073D2B] transition-colors font-sans`}
                      >
                        <option value="">Select service</option>
                        {SERVICES.map((srv) => (
                          <option key={srv.id} value={srv.title}>
                            {srv.number}. {srv.title}
                          </option>
                        ))}
                      </select>
                      {touched.serviceRequired && errors.serviceRequired && (
                        <p className="text-xs text-red-600 mt-1">{errors.serviceRequired}</p>
                      )}
                    </div>
                  </div>

                  {/* Preferred Contact Method */}
                  <div>
                    <label className="block text-xs font-semibold text-[#202923] mb-1.5 font-sans">
                      Preferred Channel
                    </label>
                    <div className="grid grid-cols-3 gap-3">
                      {[
                        { id: 'whatsapp', label: 'WhatsApp', icon: MessageSquare },
                        { id: 'phone', label: 'Phone Call', icon: Phone },
                        { id: 'email', label: 'Email', icon: Mail },
                      ].map((item) => (
                        <label
                          key={item.id}
                          className={`flex items-center justify-center gap-2 p-2.5 text-xs font-medium rounded-xl border cursor-pointer transition-all ${
                            formData.preferredContact === item.id
                              ? 'bg-[#073D2B] text-white border-[#073D2B] shadow-xs'
                              : 'bg-white text-[#202923] border-[#073D2B]/15 hover:bg-slate-50'
                          }`}
                        >
                          <input
                            type="radio"
                            name="preferredContact"
                            value={item.id}
                            checked={formData.preferredContact === item.id}
                            onChange={handleChange}
                            className="sr-only"
                          />
                          <item.icon className="w-3.5 h-3.5 text-[#FF8900]" />
                          <span>{item.label}</span>
                        </label>
                      ))}
                    </div>
                  </div>

                  {/* Operational Notes */}
                  <div>
                    <label htmlFor="message" className="block text-xs font-semibold text-[#202923] mb-1.5 font-sans">
                      Operational Context or Timeline (Optional)
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={3}
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Share specifics about upcoming audit deadlines, license categories, facility size, or current compliance pain points..."
                      className="w-full px-3.5 py-2.5 text-sm bg-white rounded-xl border border-[#073D2B]/20 focus:border-[#073D2B] focus:outline-hidden focus:ring-1 focus:ring-[#073D2B] transition-colors font-sans"
                    />
                  </div>

                  {/* Privacy Consent Checkbox */}
                  <div className="pt-1">
                    <label className="flex items-start gap-2.5 cursor-pointer">
                      <input
                        type="checkbox"
                        id="privacyConsent"
                        name="privacyConsent"
                        checked={formData.privacyConsent}
                        onChange={handleChange}
                        className="mt-1 h-4 w-4 text-[#073D2B] border-gray-300 rounded-sm focus:ring-[#073D2B]"
                      />
                      <span className="text-xs text-[#202923]/80 leading-normal font-sans">
                        I agree that Food Circle may use the submitted details strictly to respond to this consultation enquiry.{' '}
                        <button
                          type="button"
                          onClick={onOpenPrivacyNotice}
                          className="text-[#10563A] underline font-semibold hover:text-[#073D2B]"
                        >
                          View Privacy Notice
                        </button>
                        .
                      </span>
                    </label>
                    {touched.privacyConsent && errors.privacyConsent && (
                      <p className="text-xs text-red-600 mt-1">{errors.privacyConsent}</p>
                    )}
                  </div>

                  {/* Submit Button */}
                  <div className="pt-2">
                    <button
                      type="submit"
                      className="w-full inline-flex items-center justify-center gap-2 px-6 py-3.5 text-sm font-bold text-white bg-[#073D2B] hover:bg-[#10563A] active:scale-[0.99] rounded-xl shadow-md transition-all focus-visible:outline-2 focus-visible:outline-[#FF8900] cursor-pointer font-sans"
                    >
                      <Send className="w-4 h-4 text-[#FF8900]" />
                      <span>Submit Consultation Request</span>
                    </button>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
