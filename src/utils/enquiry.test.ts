import test from 'node:test';
import assert from 'node:assert/strict';
import {
  cleanPhoneNumber,
  isValidIndianPhone,
  isValidEmail,
  validateEnquiryForm,
  generateWhatsAppUrl,
  generateEmailUrl,
  EnquiryFormData,
} from './enquiry';

test('cleanPhoneNumber strips non-digits', () => {
  assert.equal(cleanPhoneNumber('+91 (913) 763-9148'), '919137639148');
  assert.equal(cleanPhoneNumber('9137639148'), '9137639148');
});

test('isValidIndianPhone validates 10-digit mobile numbers', () => {
  assert.equal(isValidIndianPhone('9137639148'), true);
  assert.equal(isValidIndianPhone('9876543210'), true);
  assert.equal(isValidIndianPhone('8123456789'), true);
  assert.equal(isValidIndianPhone('7000000000'), true);
  assert.equal(isValidIndianPhone('6123456789'), true);
  assert.equal(isValidIndianPhone('1234567890'), false); // starts with 1
  assert.equal(isValidIndianPhone('98765'), false); // too short
  assert.equal(isValidIndianPhone(''), false);
});

test('isValidIndianPhone validates 12-digit format with 91 prefix', () => {
  assert.equal(isValidIndianPhone('+919137639148'), true);
  assert.equal(isValidIndianPhone('919876543210'), true);
  assert.equal(isValidIndianPhone('911234567890'), false); // 91 + 1...
});

test('isValidEmail validates normal and invalid formats', () => {
  assert.equal(isValidEmail('food.circle.consultant@gmail.com'), true);
  assert.equal(isValidEmail('client@company.co.in'), true);
  assert.equal(isValidEmail('plainaddress'), false);
  assert.equal(isValidEmail('missing@domain'), false);
  assert.equal(isValidEmail(''), false);
});

test('validateEnquiryForm requires required fields and consent', () => {
  const invalidData: EnquiryFormData = {
    fullName: '',
    businessName: '',
    phone: '',
    email: '',
    industry: '',
    serviceRequired: '',
    preferredContact: 'whatsapp',
    message: '',
    privacyConsent: false,
  };

  const res = validateEnquiryForm(invalidData);
  assert.equal(res.isValid, false);
  assert.ok(res.errors.fullName);
  assert.ok(res.errors.businessName);
  assert.ok(res.errors.phone);
  assert.ok(res.errors.email);
  assert.ok(res.errors.industry);
  assert.ok(res.errors.serviceRequired);
  assert.ok(res.errors.privacyConsent);

  const validData: EnquiryFormData = {
    fullName: 'Rajesh Patil',
    businessName: 'Apex Foods LLP',
    phone: '9137639148',
    email: 'rajesh@apexfoods.in',
    industry: 'Food Manufacturing Units',
    serviceRequired: 'HACCP & Food Safety Management System (FSMS) Documentation',
    preferredContact: 'whatsapp',
    message: 'Need HACCP audit preparation',
    privacyConsent: true,
  };

  const validRes = validateEnquiryForm(validData);
  assert.equal(validRes.isValid, true);
  assert.equal(Object.keys(validRes.errors).length, 0);
});

test('generateWhatsAppUrl includes service and recipient', () => {
  const url = generateWhatsAppUrl({ serviceName: 'Food Safety & Hygiene Audits' });
  assert.ok(url.includes('wa.me/919137639148'));
  assert.ok(url.includes('Food%20Safety%20%26%20Hygiene%20Audits'));
});

test('generateEmailUrl includes recipient and subject', () => {
  const url = generateEmailUrl({ serviceName: 'FSSAI Schedule 4 Compliance' });
  assert.ok(url.startsWith('mailto:food.circle.consultant@gmail.com'));
  assert.ok(url.includes('FSSAI%20Schedule%204%20Compliance'));
});
