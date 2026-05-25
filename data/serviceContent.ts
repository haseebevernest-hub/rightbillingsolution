export type ContentBlock =
  | { type: "heading"; text: string }
  | { type: "paragraph"; text: string }
  | { type: "list"; items: string[] };

export type ServiceContentMap = {
  [key: string]: ContentBlock[];
};

export const serviceContent: ServiceContentMap = {
  medicalCodingServices: [
    {
      type: "heading",
      text: "How do medical coding services work?",
    },
    {
      type: "paragraph",
      text: `Error-free medical Coding is a critical process. Medical Billers and Coders provide medical coding services that enable your practice to accelerate your payments. Physicians across the nation have been struggling to find a professional who can relieve them of their administrative chores so that they can face the challenges of providing quality healthcare. Most physicians would instead have a specialist take care of the reimbursement process and maximize their revenue, but they are tirelessly looking for the rest to manage their revenue cycle.`,
    },
    {
      type: "heading",
      text: "Medical Coding Services",
    },
    {
      type: "paragraph",
      text: `Medical Coding Services is a specialized function in revenue cycle management that involves healthcare providers, patients, payers, and physician administrative staff. Medical Coding works in tandem with billers to process accurate revenue codes based on the clinical documentation maintained by the healthcare provider. The expertise of a certified and experienced Medical Coder is to ensure quick and denial-free reimbursement to the providers.`,
    },
    {
      type: "paragraph",
      text: `Medical Billers and Coders (MBC), the largest consortium of medical billing and coding services in the US, assists physicians and healthcare organizations in coding diagnoses, procedures, and services, which medical billers finally turn into revenue.`,
    },
    {
      type: "paragraph",
      text: `These coding professionals have thorough training and knowledge of medical terminology, disease processes, and pharmacology, ensuring smooth migration to ICD-10 and HIPAA 5010 compliant reporting.`,
    },
    {
      type: "heading",
      text: "Value our Medical Coding Professionals bring to your Revenue Cycle:",
    },
    {
      type: "list",
      items: [
        "Updates on all coding changes and Fee Schedule analysis",
        "They follow all CCI edits and LMRP standards for coded charts",
        "Deep understanding of the usage of appropriate Modifiers and PoS",
        "Code Audits for unbundling, up-coding, and down-coding",
      ],
    },
    {
      type: "paragraph",
      text: `This expertise and accuracy in Coding have drastically reduced denial ratios and improved collections. Our professional billing and coding personnel help streamline operational processes and optimize revenue cycle management.`,
    },
  ],

  // 👇 Temporary placeholder content for other services
  chargeEntry: [
  {
    type: "heading",
    text: "Accurate and Timely Charge Entry Services",
  },
  {
    type: "paragraph",
    text: `Charge entry is the foundation of a healthy revenue cycle. Even minor errors during charge capture can result in claim denials, compliance risks, and delayed reimbursements. Our charge entry specialists ensure every procedure, diagnosis, and modifier is entered accurately and in compliance with payer guidelines.`,
  },
  {
    type: "paragraph",
    text: `We work closely with healthcare providers to capture complete encounter details and translate them into clean claims ready for submission. Our structured workflow minimizes rework and accelerates payment cycles.`,
  },
  {
    type: "heading",
    text: "Our Charge Entry Process Includes:",
  },
  {
    type: "list",
    items: [
      "Accurate CPT, ICD-10, and HCPCS code entry",
      "Verification of patient demographics and insurance details",
      "Modifier validation and compliance checks",
      "Real-time error detection before claim submission",
      "Daily productivity and accuracy audits",
    ],
  },
  {
    type: "paragraph",
    text: `By ensuring precision at the charge entry stage, we help reduce denials, improve first-pass acceptance rates, and strengthen your overall revenue cycle performance.`,
  },
],


 paymentPosting: [
  {
    type: "heading",
    text: "Efficient and Transparent Payment Posting",
  },
  {
    type: "paragraph",
    text: `Payment posting is more than data entry — it is a critical reconciliation process that directly impacts financial reporting and revenue tracking. Our team ensures accurate posting of insurance payments, patient payments, adjustments, and denials.`,
  },
  {
    type: "paragraph",
    text: `We reconcile payments against billed charges, identify underpayments, and flag discrepancies for immediate follow-up.`,
  },
  {
    type: "heading",
    text: "Our Payment Posting Services Include:",
  },
  {
    type: "list",
    items: [
      "ERA and EOB posting",
      "Denial and adjustment identification",
      "Underpayment analysis",
      "Daily and monthly reconciliation reporting",
      "Credit balance review and resolution",
    ],
  },
  {
    type: "paragraph",
    text: `With accurate payment posting, providers gain full financial visibility and improved cash flow control.`,
  },
],


 accountReceivable: [
  {
    type: "heading",
    text: "Proactive Accounts Receivable Management",
  },
  {
    type: "paragraph",
    text: `Uncollected revenue can severely impact your practice’s financial stability. Our Accounts Receivable (AR) specialists aggressively follow up on outstanding claims to reduce aging and improve collections.`,
  },
  {
    type: "paragraph",
    text: `We prioritize claims based on aging buckets, payer trends, and claim value to ensure maximum recovery in the shortest time.`,
  },
  {
    type: "heading",
    text: "Our AR Services Include:",
  },
  {
    type: "list",
    items: [
      "Insurance follow-ups and status checks",
      "Denial investigation and resolution",
      "Appeals submission and tracking",
      "Aging analysis and reporting",
      "Root cause analysis for recurring denials",
    ],
  },
  {
    type: "paragraph",
    text: `Our proactive AR approach ensures faster reimbursements and a healthier revenue cycle.`,
  },
],


denialManagementAppeals: [
  {
    type: "heading",
    text: "Strategic Denial Management & Appeals",
  },
  {
    type: "paragraph",
    text: `Denied claims directly impact your bottom line. Our denial management team identifies root causes, corrects errors, and submits strong appeals to recover lost revenue.`,
  },
  {
    type: "paragraph",
    text: `We analyze denial trends to prevent recurring issues and strengthen your first-pass acceptance rate.`,
  },
  {
    type: "heading",
    text: "Our Denial Management Approach:",
  },
  {
    type: "list",
    items: [
      "Detailed denial analysis and categorization",
      "Corrected claim resubmissions",
      "Timely appeal letter drafting and submission",
      "Payer communication and escalation",
      "Denial trend reporting and prevention strategy",
    ],
  },
  {
    type: "paragraph",
    text: `Our structured appeals process maximizes reimbursements while improving long-term billing accuracy.`,
  },
],
rcmServices: [
  {
    type: "heading",
    text: "Comprehensive Revenue Cycle Management Services",
  },
  {
    type: "paragraph",
    text: `Revenue Cycle Management (RCM) is the backbone of any healthcare practice. Our RCM services ensure end-to-end financial workflow management — from patient registration to final payment — improving cash flow and operational efficiency.`,
  },
  {
    type: "paragraph",
    text: `We integrate coding, billing, AR, and payment posting into a streamlined process that reduces errors, prevents denials, and maximizes reimbursements.`,
  },
  {
    type: "heading",
    text: "Our RCM Services Include:",
  },
  {
    type: "list",
    items: [
      "Patient registration and eligibility verification",
      "Medical coding and billing",
      "Accounts receivable management",
      "Denial management and appeals",
      "Payment posting and reconciliation",
      "Comprehensive reporting and analytics",
    ],
  },
  {
    type: "paragraph",
    text: `By managing your revenue cycle comprehensively, we allow providers to focus on patient care while ensuring financial stability and growth.`,
  },
],

physicianCredentialing: [
  {
    type: "heading",
    text: "Streamlined Physician Credentialing Services",
  },
  {
    type: "paragraph",
    text: `Credentialing is a critical process to enroll providers with insurance payers. Our team manages the entire credentialing workflow to ensure timely approvals and uninterrupted reimbursements.`,
  },
  {
    type: "paragraph",
    text: `We verify licenses, certifications, work history, and payer requirements to minimize delays and reduce administrative burden.`,
  },
  {
    type: "heading",
    text: "Our Credentialing Services Include:",
  },
  {
    type: "list",
    items: [
      "Primary source verification of credentials",
      "Payer enrollment and re-credentialing",
      "License and certification tracking",
      "Provider demographic updates",
      "Credentialing follow-up and approval tracking",
    ],
  },
  {
    type: "paragraph",
    text: `By outsourcing credentialing, providers save time, reduce errors, and maintain full compliance with regulatory requirements.`,
  },
],

physicianGroup: [
  {
    type: "heading",
    text: "Billing & Revenue Optimization for Physician Groups",
  },
  {
    type: "paragraph",
    text: `Managing billing for multiple providers can be complex. Our specialized services for physician groups streamline claims processing, improve cash flow, and ensure consistent compliance.`,
  },
  {
    type: "paragraph",
    text: `We coordinate coding, AR, and reporting across multiple providers to optimize revenue and reduce administrative overhead.`,
  },
  {
    type: "heading",
    text: "Services Tailored for Physician Groups:",
  },
  {
    type: "list",
    items: [
      "Centralized billing and claim submission",
      "Multi-provider accounts receivable management",
      "Denial tracking and resolution",
      "Analytics and performance reporting",
      "Compliance monitoring across all providers",
    ],
  },
  {
    type: "paragraph",
    text: `Our approach ensures every provider in your group receives timely reimbursements while maintaining regulatory compliance.`,
  },
],
outsourcedServices: [
  {
    type: "heading",
    text: "Flexible Outsourced Healthcare Services",
  },
  {
    type: "paragraph",
    text: `Outsourcing administrative and revenue cycle tasks allows providers to focus on patient care. Our outsourced services are scalable, secure, and designed to improve operational efficiency.`,
  },
  {
    type: "paragraph",
    text: `We provide trained professionals for coding, billing, payment posting, AR management, and more — customized to your practice’s needs.`,
  },
  {
    type: "heading",
    text: "Our Outsourced Services Include:",
  },
  {
    type: "list",
    items: [
      "Medical coding and billing",
      "Accounts receivable management",
      "Denial management and appeals",
      "Payment posting and reconciliation",
      "Credentialing support",
    ],
  },
  {
    type: "paragraph",
    text: `By leveraging our outsourced solutions, healthcare providers reduce overhead, improve cash flow, and maintain high-quality administrative support.`,
  },
],
credentialingServices: [
  {
    type: "heading",
    text: "End-to-End Provider Credentialing Services",
  },
  {
    type: "paragraph",
    text: `Our credentialing services streamline provider enrollment with payers, hospitals, and regulatory bodies. We ensure accurate documentation and timely approvals for uninterrupted operations.`,
  },
  {
    type: "paragraph",
    text: `We manage primary source verification, payer enrollment, re-credentialing, and license tracking to minimize administrative burden.`,
  },
  {
    type: "heading",
    text: "Benefits of Our Credentialing Services:",
  },
  {
    type: "list",
    items: [
      "Faster payer enrollment",
      "Reduced claim denials due to credentialing errors",
      "Compliance with regulatory standards",
      "Ongoing license and certification tracking",
      "Streamlined provider onboarding",
    ],
  },
  {
    type: "paragraph",
    text: `Our credentialing solutions give your practice confidence that all providers are fully approved and compliant.`,
  },
],
outsourceBillingServices: [
  {
    type: "heading",
    text: "Comprehensive Outsourced Billing Solutions",
  },
  {
    type: "paragraph",
    text: `Our outsourced billing services allow healthcare providers to optimize revenue without increasing in-house staff. We handle end-to-end billing tasks from claim submission to collections.`,
  },
  {
    type: "paragraph",
    text: `We use industry-standard software, follow best practices, and ensure compliance with all payer requirements.`,
  },
  {
    type: "heading",
    text: "Our Outsourced Billing Services Include:",
  },
  {
    type: "list",
    items: [
      "Claim preparation and submission",
      "Accounts receivable management",
      "Denial management and appeals",
      "Payment posting and reconciliation",
      "Reporting and analytics",
    ],
  },
  {
    type: "paragraph",
    text: `By outsourcing billing, providers reduce costs, increase efficiency, and improve revenue cycle performance.`,
  },
],
billingForSmallPractices: [
  {
    type: "heading",
    text: "Tailored Billing for Small Practices",
  },
  {
    type: "paragraph",
    text: `Small and independent healthcare practices need personalized billing support. Our services are designed to optimize revenue, minimize errors, and reduce administrative burden for small teams.`,
  },
  {
    type: "paragraph",
    text: `We focus on clean claim submission, timely follow-ups, and accurate payment posting, helping small practices stay financially healthy.`,
  },
  {
    type: "heading",
    text: "Our Small Practice Billing Services Include:",
  },
  {
    type: "list",
    items: [
      "Accurate coding and claim submission",
      "Payment posting and reconciliation",
      "Denial management and appeals",
      "Accounts receivable follow-up",
      "Monthly financial reporting",
    ],
  },
  {
    type: "paragraph",
    text: `With our specialized support, small practices can focus on patient care while maintaining a robust revenue cycle.`,
  },
],

};
