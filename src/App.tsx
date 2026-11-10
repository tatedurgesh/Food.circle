import React, { useState } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Services } from './components/Services';
import { Certifications } from './components/Certifications';
import { Industries } from './components/Industries';
import { WhyUs } from './components/WhyUs';
import { Approach } from './components/Approach';
import { FAQ } from './components/FAQ';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { FloatingWhatsApp } from './components/FloatingWhatsApp';
import { LegalModal } from './components/LegalModals';

export default function App() {
  const [selectedService, setSelectedService] = useState<string>('');
  const [selectedIndustry, setSelectedIndustry] = useState<string>('');
  const [modalType, setModalType] = useState<'privacy' | 'terms' | null>(null);

  const scrollToContact = () => {
    const el = document.getElementById('contact');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToServices = () => {
    const el = document.getElementById('services');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleSelectServiceForEnquiry = (serviceTitle: string) => {
    setSelectedService(serviceTitle);
    scrollToContact();
  };

  const handleSelectIndustryForEnquiry = (industryName: string) => {
    setSelectedIndustry(industryName);
    scrollToContact();
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#FAF8F1] text-[#202923] selection:bg-[#FF8900]/25 selection:text-[#073D2B]">
      {/* Header */}
      <Header onRequestConsultation={scrollToContact} />

      {/* Main Content Sections */}
      <main className="flex-1">
        {/* Hero Section */}
        <Hero
          onRequestConsultation={scrollToContact}
          onExploreServices={scrollToServices}
        />

        {/* About Section */}
        <About />

        {/* 14 Services Section */}
        <Services onSelectServiceForEnquiry={handleSelectServiceForEnquiry} />

        {/* Certifications Section */}
        <Certifications />

        {/* 12 Industries Section */}
        <Industries onSelectIndustryForEnquiry={handleSelectIndustryForEnquiry} />

        {/* Why Choose Us */}
        <WhyUs onRequestConsultation={scrollToContact} />

        {/* 4-Step Methodology / Approach */}
        <Approach />

        {/* FAQ Section */}
        <FAQ />

        {/* Contact & Consultation Section */}
        <ContactSection
          selectedService={selectedService}
          selectedIndustry={selectedIndustry}
          onClearPrefill={() => {
            setSelectedService('');
            setSelectedIndustry('');
          }}
          onOpenPrivacyNotice={() => setModalType('privacy')}
        />
      </main>

      {/* Footer */}
      <Footer
        onOpenPrivacy={() => setModalType('privacy')}
        onOpenTerms={() => setModalType('terms')}
        onSelectService={handleSelectServiceForEnquiry}
      />

      {/* Persistent Floating WhatsApp Button */}
      <FloatingWhatsApp />

      {/* Legal Dialogs (Privacy & Terms) */}
      <LegalModal
        isOpen={modalType !== null}
        type={modalType}
        onClose={() => setModalType(null)}
      />
    </div>
  );
}
