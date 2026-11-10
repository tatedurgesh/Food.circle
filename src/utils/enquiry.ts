export interface EnquiryFormData {
  fullName: string;
  businessName: string;
  phone: string;
  email: string;
  industry: string;
  serviceRequired: string;
  preferredContact: 'phone' | 'whatsapp' | 'email';
  message: string;
  privacyConsent: boolean;
}

export interface ValidationErrors {
  fullName?: string;
  businessName?: string;
  phone?: string;
  email?: string;
  industry?: string;
  serviceRequired?: string;
  privacyConsent?: string;
}

export function cleanPhoneNumber(phone: string): string {
  // Remove non-digits
  return phone.replace(/\D/g, '');
}

export function isValidIndianPhone(phone: string): boolean {
  const digits = cleanPhoneNumber(phone);
  // Valid Indian mobile numbers are 10 digits starting with 6, 7, 8, or 9
  // Or 12 digits starting with 91 followed by 6, 7, 8, 9
  if (digits.length === 10 && /^[6-9]\d{9}$/.test(digits)) {
    return true;
  }
  if (digits.length === 12 && /^91[6-9]\d{9}$/.test(digits)) {
    return true;
  }
  return false;
}

export function isValidEmail(email: string): boolean {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email.trim());
}

export function validateEnquiryForm(data: EnquiryFormData): {
  isValid: boolean;
  errors: ValidationErrors;
} {
  const errors: ValidationErrors = {};

  if (!data.fullName || data.fullName.trim().length < 2) {
    errors.fullName = 'Please enter your full name (minimum 2 characters).';
  }

  if (!data.businessName || data.businessName.trim().length < 2) {
    errors.businessName = 'Please enter your business or company name.';
  }

  if (!data.phone || !isValidIndianPhone(data.phone)) {
    errors.phone = 'Please enter a valid 10-digit mobile number.';
  }

  if (!data.email || !isValidEmail(data.email)) {
    errors.email = 'Please provide a valid email address.';
  }

  if (!data.industry || data.industry.trim() === '') {
    errors.industry = 'Please select your industry.';
  }

  if (!data.serviceRequired || data.serviceRequired.trim() === '') {
    errors.serviceRequired = 'Please select the service required.';
  }

  if (!data.privacyConsent) {
    errors.privacyConsent = 'You must agree to the privacy notice to submit your enquiry.';
  }

  return {
    isValid: Object.keys(errors).length === 0,
    errors,
  };
}

export function generateWhatsAppUrl(options: {
  phone?: string;
  serviceName?: string;
  formData?: Partial<EnquiryFormData>;
  customMessage?: string;
} = {}): string {
  const baseNumber = options.phone || '919137639148';

  let messageText = '';

  if (options.customMessage) {
    messageText = options.customMessage;
  } else if (options.formData && options.formData.fullName) {
    const f = options.formData;
    messageText = `Hello Food Circle,

My name is ${f.fullName}${f.businessName ? ` from ${f.businessName}` : ''}.
I would like to enquire about your food safety consultancy services.

• Service Required: ${f.serviceRequired || 'General Consultation'}
• Industry: ${f.industry || 'Food Business'}
• Preferred Contact: ${f.preferredContact || 'WhatsApp'}
${f.message ? `• Note: ${f.message}` : ''}

Looking forward to your guidance. Thank you!`;
  } else if (options.serviceName) {
    messageText = `Hello Food Circle, I would like to enquire about your service: "${options.serviceName}". Please let me know the details and audit/consultancy process.`;
  } else {
    messageText = 'Hello Food Circle, I would like to enquire about your food safety consultancy services.';
  }

  return `https://wa.me/${baseNumber}?text=${encodeURIComponent(messageText.trim())}`;
}

export function generateEmailUrl(options: {
  toEmail?: string;
  serviceName?: string;
  formData?: Partial<EnquiryFormData>;
} = {}): string {
  const email = options.toEmail || 'food.circle.consultant@gmail.com';
  const service = options.serviceName || options.formData?.serviceRequired || 'Food Safety Consultation';
  const subject = `Enquiry: ${service} - Food Circle`;

  let body = '';
  if (options.formData && options.formData.fullName) {
    const f = options.formData;
    body = `Dear Food Circle Team,

I would like to request consultation regarding:
Service: ${f.serviceRequired || 'General Food Safety Guidance'}

Client Details:
Name: ${f.fullName}
Business Name: ${f.businessName}
Phone: ${f.phone}
Email: ${f.email}
Industry: ${f.industry}
Preferred Contact: ${f.preferredContact}

Message / Requirements:
${f.message || 'We are looking for guidance on compliance and audits.'}

Regards,
${f.fullName}`;
  } else {
    body = `Dear Food Circle Team,

I would like to enquire about your food safety consultancy services (${service}).

Please share details on how we can proceed with an initial consultation.

Thank you.`;
  }

  return `mailto:${email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
}
