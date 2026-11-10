export interface ServiceItem {
  id: string;
  number: string;
  title: string;
  shortDesc: string;
  detailedDesc: string;
  icon: string;
  category: 'regulatory' | 'audit' | 'management' | 'operations';
  featured?: boolean;
  deliverables: string[];
}

export interface IndustryItem {
  id: string;
  name: string;
  description: string;
  icon: string;
  complianceFocus: string;
  scale?: 'large' | 'medium' | 'standard';
}

export interface WhyChooseItem {
  title: string;
  tagline: string;
  description: string;
}

export interface ApproachStep {
  step: string;
  title: string;
  description: string;
}

export interface CorePrinciple {
  title: string;
  description: string;
}

export interface CertificationItem {
  id: string;
  number: string;
  title: string;
  issuer: string;
  displayString: string;
}

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
}

export const BUSINESS_INFO = {
  name: "Food Circle",
  tagline: "Safety • Quality • Trust",
  mainHeadline: "Food Safety. Quality. Confidence.",
  supportingHeadline: "Practical food safety and regulatory compliance solutions to help food businesses strengthen systems, improve hygiene, and prepare for audits with confidence.",
  supportingLine: "Your partner in food safety and compliance.",
  eyebrow: "FOOD SAFETY • QUALITY • COMPLIANCE",
  consultancy: {
    name: "Food Circle",
    designation: "Food Safety & Compliance Consultancy",
    credentials: "Food Technologist | FSSC 22000 Lead Auditor",
  },
  contact: {
    phone: "9137639148",
    phoneDisplay: "+91 91376 39148",
    phoneLink: "tel:+919137639148",
    email: "food.circle.consultant@gmail.com",
    emailLink: "mailto:food.circle.consultant@gmail.com",
    whatsappNumber: "919137639148",
    whatsappDisplay: "+91 91376 39148",
    location: "Mumbai, Maharashtra, India",
    serviceModel: "Consultancy and on-site services for food businesses across Mumbai & Maharashtra. (No public walk-in office)",
  },
};

export const CERTIFICATIONS: CertificationItem[] = [
  {
    id: "fssc-22000-v6-la",
    number: "01",
    title: "FSSC 22000 V6 (FSMS) Lead Auditor",
    issuer: "SGS",
    displayString: "FSSC 22000 V6 (FSMS) Lead Auditor – SGS",
  },
  {
    id: "iso-22000-2018-la",
    number: "02",
    title: "ISO 22000:2018 Lead Auditor",
    issuer: "Vision Consultancy Services",
    displayString: "ISO 22000:2018 Lead Auditor – Vision Consultancy Services",
  },
  {
    id: "digital-mitra-fssai",
    number: "03",
    title: "Digital Mitra under Food Safety Mitra Scheme",
    issuer: "FSSAI",
    displayString: "Digital Mitra under Food Safety Mitra Scheme – FSSAI",
  },
  {
    id: "fssc-22000-haccp-ia",
    number: "04",
    title: "FSSC 22000 + HACCP Internal Auditor",
    issuer: "SGS",
    displayString: "FSSC 22000 + HACCP Internal Auditor – SGS",
  },
  {
    id: "haccp-level-2",
    number: "05",
    title: "HACCP Level 2",
    issuer: "CPHFS",
    displayString: "HACCP Level 2 – CPHFS",
  },
  {
    id: "fss-labelling-display",
    number: "06",
    title: "New FSS (Labelling & Display) Regulation",
    issuer: "CPHFS",
    displayString: "New FSS (Labelling & Display) Regulation – CPHFS",
  },
  {
    id: "fssai-fostac",
    number: "07",
    title: "FSSAI FoSTaC Certification",
    issuer: "FSSAI",
    displayString: "FSSAI FoSTaC Certification – FSSAI",
  },
  {
    id: "export-cert-milk",
    number: "08",
    title: "Export Certification of Milk Products",
    issuer: "EIA Mumbai",
    displayString: "Export Certification of Milk Products – EIA Mumbai",
  },
  {
    id: "iso-22000-2005",
    number: "09",
    title: "ISO 22000:2005 (FSMS)",
    issuer: "IR CLASS",
    displayString: "ISO 22000:2005 (FSMS) – IR CLASS",
  },
];

export const ABOUT_PRINCIPLES: CorePrinciple[] = [
  {
    title: "Practical Guidance",
    description:
      "Operational food safety recommendations grounded in real production setups, kitchen workflows, and staff capability, eliminating unrealistic documentation.",
  },
  {
    title: "Compliance-Focused Approach",
    description:
      "Methodical alignment with FSSAI regulations, Schedule 4 mandates, and global standards like HACCP, ISO 22000, and FSSC 22000.",
  },
  {
    title: "Continuous Improvement",
    description:
      "Establishing sustainable monitoring, internal reviews, and hygiene routines that keep your food facility prepared every day, not just before an audit.",
  },
];

export const SERVICES: ServiceItem[] = [
  {
    id: "fssai-licensing",
    number: "01",
    title: "FSSAI Licensing & Registration Assistance",
    shortDesc: "End-to-end guidance for Basic, State, and Central FSSAI licensing and renewal filings.",
    detailedDesc: "Complete regulatory assistance including eligibility categorization, FoSCoS portal documentation compilation, layout plans, water test report readiness, and prompt responses to regulatory queries.",
    icon: "FileCheck",
    category: "regulatory",
    featured: true,
    deliverables: [
      "FoSCoS application preparation & category mapping",
      "Prerequisite document compilation (FSMS plan, blueprint, water reports)",
      "Liaison support for licensing authority queries",
      "Annual return and renewal tracking",
    ],
  },
  {
    id: "hygiene-audits",
    number: "02",
    title: "Food Safety & Hygiene Audits",
    shortDesc: "Comprehensive on-site baseline evaluations identifying contamination risks and operational gaps.",
    detailedDesc: "Systematic plant and kitchen inspections analyzing personal hygiene, raw material handling, cross-contamination risks, chemical storage, pest exclusion, and sanitation practices against regulatory criteria.",
    icon: "ClipboardCheck",
    category: "audit",
    featured: true,
    deliverables: [
      "Detailed gap analysis report with photographic evidence",
      "Risk severity scoring across all operational zones",
      "Prioritized Corrective Action Plan (CAPA)",
      "Post-audit debrief with plant and quality managers",
    ],
  },
  {
    id: "fssai-schedule-4",
    number: "03",
    title: "FSSAI Schedule 4 Compliance",
    shortDesc: "Implementation of mandatory general sanitary and hygienic requirements for all food facilities.",
    detailedDesc: "Translating statutory Schedule 4 mandates into tangible facility layouts, drainage standards, air quality controls, handwashing stations, temperature logging, and food handler medical fitness protocols.",
    icon: "ShieldAlert",
    category: "regulatory",
    deliverables: [
      "Schedule 4 Part II / Part III clause-by-clause checklist",
      "Facility layout & segregation advisory",
      "Sanitation standard operating procedures (SSOPs)",
      "Personnel hygiene & medical screening frameworks",
    ],
  },
  {
    id: "haccp-fsms",
    number: "04",
    title: "HACCP & Food Safety Management System (FSMS) Documentation",
    shortDesc: "Structured Hazard Analysis Critical Control Point plans custom-built for your production lines.",
    detailedDesc: "Development of full HACCP studies covering process flow diagrams, hazard identification, Critical Control Point (CCP) determination, critical limits, monitoring logs, and corrective action mechanisms.",
    icon: "ShieldCheck",
    category: "management",
    featured: true,
    deliverables: [
      "Complete hazard analysis matrix (Biological, Chemical, Physical, Allergen)",
      "CCP decision tree records and monitoring logs",
      "Critical limits and corrective action protocols",
      "Verification and validation schedules",
    ],
  },
  {
    id: "fssc-iso-22000",
    number: "05",
    title: "FSSC 22000 / ISO 22000 Consultancy",
    shortDesc: "Consultancy for internationally recognized Food Safety Management System certification readiness.",
    detailedDesc: "Technical guidance navigating FSSC 22000 V6 and ISO 22000:2018 requirements, Prerequisite Programs (PRPs per ISO/TS 22002-1), management reviews, and pre-assessment audit readiness.",
    icon: "Award",
    category: "management",
    deliverables: [
      "Gap assessment against ISO 22000:2018 & FSSC V6 mandates",
      "Prerequisite Programs (PRPs) alignment & validation",
      "Food fraud and food defense (TACCP/VACCP) guidance",
      "Internal audit and management review preparation",
    ],
  },
  {
    id: "internal-audits",
    number: "06",
    title: "Internal Audits & Compliance Checks",
    shortDesc: "Independent, objective periodic internal reviews ensuring ongoing system compliance.",
    detailedDesc: "Thorough internal audits conducted by qualified Lead/Internal Auditors to evaluate conformance with documented FSMS policies, detect procedural drift, and ensure unannounced audit readiness.",
    icon: "Search",
    category: "audit",
    deliverables: [
      "Formal internal audit plan and schedule",
      "Non-conformance reports (NCRs) with root-cause identification",
      "CAPA verification and close-out documentation",
      "Executive summary for management review",
    ],
  },
  {
    id: "staff-awareness",
    number: "07",
    title: "Food Safety Staff Awareness",
    shortDesc: "Practical sessions on personal hygiene, allergen handling, and cross-contamination control.",
    detailedDesc: "Engaging, practical awareness sessions delivered to production floor teams, kitchen crew, and warehouse staff covering personal cleanliness, safe temperature zones, hand hygiene, and good manufacturing practices (GMP).",
    icon: "Users",
    category: "operations",
    deliverables: [
      "Workplace hygiene guidelines in accessible language",
      "Visual posters and standard work instructions",
      "Hygiene awareness sign-off logs",
      "Basic hygiene assessment records",
    ],
  },
  {
    id: "food-testing-coordination",
    number: "08",
    title: "Food Testing Coordination",
    shortDesc: "Sampling plans and testing coordination with NABL-accredited and FSSAI-approved laboratories.",
    detailedDesc: "Developing regulatory-compliant sampling schedules for raw materials, finished products, potable water, and microbial surface swabs, with clear technical interpretation of analytical test reports.",
    icon: "FlaskConical",
    category: "regulatory",
    deliverables: [
      "Annual testing matrix per regulatory requirements",
      "Sampling protocol and sterile collection advisory",
      "Laboratory liaison with NABL-accredited partners",
      "Report evaluation and compliance certificate collation",
    ],
  },
  {
    id: "food-labelling-compliance",
    number: "09",
    title: "Food Labelling & Regulatory Compliance Guidance",
    shortDesc: "Review of product packaging labels against FSSAI Labelling & Display Regulations.",
    detailedDesc: "Detailed regulatory label verification for ingredient lists, nutritional facts panels, allergen declarations, veg/non-veg logos, FSSAI license numbers, shelf-life dates, and claim substantiation.",
    icon: "Tag",
    category: "regulatory",
    deliverables: [
      "Label review report highlighting mandatory corrections",
      "Nutritional panel formatting & font size verification",
      "Allergen warning & statutory declaration checks",
      "Marketing claim alignment with FSS regulations",
    ],
  },
  {
    id: "new-business-setup",
    number: "10",
    title: "New Food Business Setup Guidance",
    shortDesc: "Layout and hygienic design advisory for commercial kitchens, factories, and cloud kitchens.",
    detailedDesc: "Pre-construction and facility design advisory ensuring unidirectional material and personnel flow, zoning, adequate drainage, food-grade surfaces, ventilation, and statutory licensing roadmap from day one.",
    icon: "Store",
    category: "operations",
    featured: true,
    deliverables: [
      "Facility floor plan review for linear workflow",
      "Sanitary infrastructure and drainage recommendations",
      "Equipment layout to prevent cross-contamination",
      "Prerequisite compliance checklist prior to commissioning",
    ],
  },
  {
    id: "documentation-records",
    number: "11",
    title: "Food Safety Documentation & Record Management",
    shortDesc: "Streamlined, audit-ready operational logbooks, registers, and traceability frameworks.",
    detailedDesc: "Custom design of practical daily checklists, cleaning registers, raw material receiving logs, dispatch sheets, pest control monitoring, calibration logs, and mock recall frameworks.",
    icon: "FolderKanban",
    category: "management",
    deliverables: [
      "Complete set of customized daily operational logs",
      "Traceability & mock recall exercise templates",
      "Equipment maintenance and calibration logs",
      "Supplier qualification and verification records",
    ],
  },
  {
    id: "hygiene-storage-temp",
    number: "12",
    title: "Hygiene, Storage & Temperature Control Checks",
    shortDesc: "Verification of cold chain integrity, dry storage hygiene, FIFO protocols, and pest exclusion.",
    detailedDesc: "On-site temperature monitoring across walk-in freezers, chillers, hot-holding units, and dry stores to ensure critical limits are observed, cross-contamination is eliminated, and storage practices comply with safety standards.",
    icon: "ThermometerSnowflake",
    category: "operations",
    deliverables: [
      "Cold-chain and chiller calibration assessment",
      "Storage layout and segregation audit (FIFO/FEFO)",
      "Pest vulnerability points mapping",
      "Corrective measures for thermal abuse risks",
    ],
  },
  {
    id: "audit-prep-capa",
    number: "13",
    title: "Audit Preparation & Corrective Action Support",
    shortDesc: "Targeted readiness drills and formal CAPA documentation ahead of statutory or customer audits.",
    detailedDesc: "Preparation for upcoming licensing inspections, client third-party audits, or surveillance visits, paired with rigorous root-cause analysis and Corrective & Preventive Action (CAPA) formulation for past audit findings.",
    icon: "CheckCircle",
    category: "audit",
    deliverables: [
      "Pre-audit mock inspection and document drill",
      "CAPA formulation for existing non-conformances",
      "Root cause analysis support (5-Why / Fishbone)",
      "Objective evidence file preparation for auditor review",
    ],
  },
  {
    id: "process-improvement",
    number: "14",
    title: "Food Safety Process Improvement",
    shortDesc: "Optimizing sanitation, waste management, and quality control routines to eliminate recurrent hazards.",
    detailedDesc: "Collaborative operational refinement targeting recurring customer complaints, shelf-life inconsistencies, cleaning inefficiencies, and production waste through verified food safety interventions.",
    icon: "TrendingUp",
    category: "operations",
    deliverables: [
      "Process mapping to pinpoint hazard hotspots",
      "Standard Operating Procedures (SOPs) simplification",
      "Waste disposal and sanitation optimization plan",
      "Periodic progress review and metric tracking",
    ],
  },
];

export const INDUSTRIES: IndustryItem[] = [
  {
    id: "hotels",
    name: "Hotels",
    description: "Multi-outlet culinary operations, banquet catering, guest dining hygiene, and comprehensive kitchen compliance.",
    icon: "Building2",
    complianceFocus: "Cross-contamination, buffet temperature control, food handler health certification.",
    scale: "large",
  },
  {
    id: "catering",
    name: "Catering Services",
    description: "High-volume outdoor catering, industrial canteens, corporate cafeterias, and institutional event service.",
    icon: "UtensilsCrossed",
    complianceFocus: "Transport thermal integrity, off-site food handling, water potability verification.",
    scale: "large",
  },
  {
    id: "restaurants",
    name: "Restaurants",
    description: "Fine dining, casual dining, and quick service restaurants requiring consistent hygiene and FoSCoS compliance.",
    icon: "ChefHat",
    complianceFocus: "Daily sanitation logs, oil quality monitoring, allergen disclosures on menus.",
    scale: "standard",
  },
  {
    id: "cloud-kitchens",
    name: "Cloud Kitchens",
    description: "Delivery-only food businesses and dark kitchens operating high-throughput cooking in compact spaces.",
    icon: "Flame",
    complianceFocus: "Space zoning, dispatch packaging integrity, rider handover hygiene.",
    scale: "standard",
  },
  {
    id: "retailers-supermarkets",
    name: "Retailers and Supermarkets",
    description: "Modern trade grocery chains, gourmet food retailers, cold cut counters, and packaged food stores.",
    icon: "ShoppingBag",
    complianceFocus: "Expiry tracking, refrigerated display units, damaged goods isolation.",
    scale: "large",
  },
  {
    id: "dairy",
    name: "Dairy Businesses",
    description: "Milk chilling centres, processing dairies, paneer/cheese manufacturing, and dairy distribution.",
    icon: "Milk",
    complianceFocus: "Cold chain verification, microbiological safety, pasteurization logbooks.",
    scale: "large",
  },
  {
    id: "bakeries",
    name: "Bakeries",
    description: "Artisanal bakeries, industrial bread plants, pastry shops, and confectionery manufacturers.",
    icon: "Croissant",
    complianceFocus: "Flour pest control, allergen segregation, egg handling hygiene, shelf-life tests.",
    scale: "standard",
  },
  {
    id: "fmcg",
    name: "FMCG Businesses",
    description: "Fast-moving packaged consumer food brands expanding distribution across wholesale and online channels.",
    icon: "PackageCheck",
    complianceFocus: "Standardized packaging, batch traceability, statutory nutritional labelling.",
    scale: "large",
  },
  {
    id: "spices-snacks",
    name: "Spices & Snacks Manufacturers",
    description: "Namkeen production, dry snack fryers, spice grinding mills, and regional specialty food units.",
    icon: "Sparkles",
    complianceFocus: "Moisture prevention, deep-frying oil safety, aflatoxin and heavy metal checks.",
    scale: "standard",
  },
  {
    id: "beverages",
    name: "Beverage Businesses",
    description: "Packaged drinking water plants, fruit juice bottlers, ready-to-drink teas, and craft drink processors.",
    icon: "CupSoda",
    complianceFocus: "Water potability benchmarks, CIP sanitation logs, sterile filling checks.",
    scale: "standard",
  },
  {
    id: "manufacturing-units",
    name: "Food Manufacturing Units",
    description: "Primary and secondary food manufacturing facilities requiring full FSMS, HACCP, and Schedule 4 rigor.",
    icon: "Factory",
    complianceFocus: "Zoning, pest barrier maintenance, CCP monitoring, supplier quality verification.",
    scale: "large",
  },
  {
    id: "warehousing-distribution",
    name: "Warehousing & Distribution",
    description: "Third-party logistics, cold storage hubs, ambient food depots, and transport fleet managers.",
    icon: "Warehouse",
    complianceFocus: "Pallet spacing, temperature data loggers, rodent proofing, FIFO dispatch.",
    scale: "standard",
  },
];

export const APPROACH_STEPS: ApproachStep[] = [
  {
    step: "01",
    title: "Understand Your Business",
    description: "Review the business type, operations, product categories, applicable regulations, and management goals.",
  },
  {
    step: "02",
    title: "Identify Compliance Gaps",
    description: "Assess relevant documentation, physical hygiene practices, process workflows, and existing controls.",
  },
  {
    step: "03",
    title: "Build Practical Solutions",
    description: "Recommend appropriate documentation, customized procedures, corrective actions, and implementation priorities.",
  },
  {
    step: "04",
    title: "Strengthen Audit Readiness",
    description: "Support preparation, documentation review, internal checks, staff awareness, and continual improvement.",
  },
];

export const WHY_CHOOSE_ITEMS: WhyChooseItem[] = [
  {
    title: "Commitment to Quality",
    tagline: "High Standards",
    description:
      "We believe food quality and safety are non-negotiable fundamentals that safeguard brand reputation and customer health.",
  },
  {
    title: "Practical Compliance Support",
    tagline: "Realistic Solutions",
    description:
      "Every checklist and procedure is tailored to your real facility capabilities, avoiding paperwork that teams cannot maintain.",
  },
  {
    title: "Building Trust",
    tagline: "Transparent Advisory",
    description:
      "Clear guidance without inflated promises, false accreditation claims, or hidden fees. We give you honest assessments.",
  },
  {
    title: "Continuous Improvement",
    tagline: "Long-Term Value",
    description:
      "Systems built to evolve with regulatory changes, business expansion, and emerging customer safety expectations.",
  },
];

export const FAQS: FAQItem[] = [
  {
    id: "faq-role",
    question: "What does a food safety consultant help with?",
    answer: "A food safety consultant helps food businesses navigate statutory regulatory requirements, identify hygiene and contamination risks, prepare for statutory inspections, design HACCP and FSMS documentation, and establish sustainable quality protocols tailored to daily operations.",
  },
  {
    id: "faq-types",
    question: "Which food businesses can receive consultancy support?",
    answer: "Food Circle supports all food enterprises across Mumbai and Maharashtra, including hotels, catering services, restaurants, cloud kitchens, bakeries, dairy processors, food manufacturing facilities, FMCG brands, and warehousing/distribution centres.",
  },
  {
    id: "faq-haccp",
    question: "What is HACCP and why is it important?",
    answer: "HACCP (Hazard Analysis Critical Control Point) is an internationally recognized systematic approach to food safety that identifies biological, chemical, physical, and allergen hazards before they happen. Implementing HACCP prevents foodborne contamination, reduces product recalls, and strengthens consumer trust.",
  },
  {
    id: "faq-fsms",
    question: "What is an FSMS?",
    answer: "An FSMS (Food Safety Management System) is an integrated framework of policies, procedures, standard operating routines, and monitoring logs that ensures food produced or handled by a business consistently meets statutory safety and quality standards (such as FSSAI Schedule 4, ISO 22000, or FSSC 22000).",
  },
  {
    id: "faq-audit-prep",
    question: "How can a business prepare for an audit?",
    answer: "Preparation starts with an objective baseline audit to spot non-compliances, followed by organizing mandatory documentation (FSSAI licenses, water test reports, pest control records, medical fitness certificates), closing physical hygiene gaps, and conducting a mock inspection with staff.",
  },
  {
    id: "faq-enquire",
    question: "How can a business enquire about services?",
    answer: "You can submit an enquiry directly through our website consultation form, call us at +91 91376 39148, email food.circle.consultant@gmail.com, or send a direct WhatsApp message. We review your requirements and coordinate an initial on-site or advisory discussion.",
  },
];
