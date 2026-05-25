export type SpecialtySection = {
  heading: string;
  body: string;
};

export type Specialty = {
  slug: string;
  title: string;
  description: string;
  icon: string;
  bgColor: string;
  borderColor: string;
  sections: SpecialtySection[];
  whyChooseUs: {
    image: string;
    description: string;
  };
};

export const specialties: Specialty[] = [
  {
    slug: "ambulanceTransportation",
    title: "Ambulance Transportation",
    description:
      "Emergency and non-emergency medical transportation billing solutions.",
    icon: "/icons/ambulance.png",
    bgColor: "bg-lime-400",
    borderColor: "border-blue-200",
    sections: [
      {
        heading: "Industry Challenges",
        body: `Ambulance billing requires accurate documentation, medical necessity validation, and compliance with Medicare and private payer rules.`,
      },
      {
        heading: "Our Expertise",
        body: `We manage claim submissions, denials, appeals, and payer follow-ups to maximize reimbursement.`,
      },
    ],
    whyChooseUs: {
      image: "/about/ambulanceBillingServices.webp",
      description: `Our ambulance billing specialists understand the complexities of emergency and non-emergency transport claims. We ensure precise documentation review, medical necessity validation, and compliance with Medicare, Medicaid, and commercial payer regulations.

By proactively managing denials and streamlining claims processing, we help transportation providers improve cash flow while maintaining strict regulatory compliance.`,
    },
  },

  {
    slug: "ambulatorySurgicalCenters",
    title: "Ambulatory Surgical Centers",
    description: "End-to-end revenue cycle management for ASCs.",
    icon: "/icons/ambulatorySurgicalCenters.png",
    bgColor: "bg-sky-200",
    borderColor: "border-blue-200",
    sections: [
      {
        heading: "Optimized Coding",
        body: `Proper CPT and HCPCS coding ensures accurate reimbursement.`,
      },
      {
        heading: "Denial Reduction",
        body: `We proactively address authorization and bundling issues.`,
      },
    ],
    whyChooseUs: {
      image: "/about/anesthesiologyBillingServices.webp",
      description: `We specialize in ASC billing workflows, ensuring accurate CPT coding, modifier usage, and payer-specific compliance. Our team minimizes denials by managing prior authorizations and bundling complexities effectively.

With detailed reporting and financial transparency, we help surgical centers increase collections and maintain operational efficiency.`,
    },
  },

  {
    slug: "anesthesiology",
    title: "Anesthesiology",
    description:
      "Comprehensive anesthesia billing and compliance management.",
    icon: "/icons/anesthesiology.png",
    bgColor: "bg-lime-400",
    borderColor: "border-blue-200",
    sections: [
      {
        heading: "Time-Based Billing",
        body: `Precise time tracking and modifier application for maximum reimbursement.`,
      },
      {
        heading: "Regulatory Compliance",
        body: `Adherence to payer guidelines and anesthesia documentation requirements.`,
      },
    ],
    whyChooseUs: {
      image: "/about/anesthesiologyBillingServices.webp",
      description: `Anesthesia billing requires precise time calculations and accurate modifier usage. Our experts ensure complete documentation review and strict compliance with payer-specific anesthesia guidelines.

We reduce revenue leakage, accelerate reimbursements, and provide transparent financial insights tailored to anesthesia providers.`,
    },
  },

  {
    slug: "behavioralHealth",
    title: "Behavioral Health",
    description:
      "Revenue cycle services tailored for mental health providers.",
    icon: "/icons/behavioralHealth.png",
    bgColor: "bg-sky-200",
    borderColor: "border-green-200",
    sections: [
      {
        heading: "Confidential Care Billing",
        body: `Secure and compliant handling of mental health claims.`,
      },
      {
        heading: "Insurance Navigation",
        body: `Managing pre-authorizations and payer limitations.`,
      },
    ],
    whyChooseUs: {
      image: "/about/behavioralHealthBilling.png",
      description: `We understand the sensitive and complex nature of behavioral health billing. Our team ensures HIPAA-compliant processes while managing pre-authorizations, session limits, and payer restrictions.

By reducing denials and improving claim accuracy, we help mental health providers maintain stable revenue streams.`,
    },
  },

  {
    slug: "cardiology",
    title: "Cardiology",
    description:
      "Advanced billing solutions for cardiovascular practices.",
    icon: "/icons/cardiology.png",
    bgColor: "bg-lime-400",
    borderColor: "border-blue-200",
    sections: [
      {
        heading: "Complex Procedures",
        body: `Accurate billing for diagnostics, imaging, and interventions.`,
      },
      {
        heading: "Revenue Optimization",
        body: `Reducing claim denials and improving collection rates.`,
      },
    ],
    whyChooseUs: {
      image: "/about/cardiologyBillingServices.webp",
      description: `Cardiology billing involves complex procedures, imaging, and interventional services. Our specialists ensure precise coding for high-value services while adhering to payer policies.

We optimize revenue cycles through proactive denial management and performance analytics.`,
    },
  },

  {
    slug: "chiropractic",
    title: "Chiropractic",
    description:
      "Efficient billing services for chiropractic clinics.",
    icon: "/icons/chiropractic.png",
    bgColor: "bg-sky-200",
    borderColor: "border-green-200",
    sections: [
      {
        heading: "Documentation Accuracy",
        body: `Ensuring compliance with payer documentation standards.`,
      },
      {
        heading: "Insurance Claims",
        body: `Streamlined submission and denial management.`,
      },
    ],
    whyChooseUs: {
      image: "/about/chiropracticBillingServices.webp",
      description: `Chiropractic billing requires accurate documentation and strict adherence to medical necessity standards. We streamline claims submission and manage denials efficiently.

Our transparent reporting ensures improved cash flow and minimized compliance risks.`,
    },
  },

  {
    slug: "dermatology",
    title: "Dermatology",
    description:
      "Comprehensive dermatology revenue cycle solutions.",
    icon: "/icons/dermatology.png",
    bgColor: "bg-lime-400",
    borderColor: "border-blue-200",
    sections: [
      {
        heading: "Procedure Billing",
        body: `Accurate coding for biopsies, excisions, and cosmetic services.`,
      },
      {
        heading: "Claim Monitoring",
        body: `Tracking reimbursements and resolving denials promptly.`,
      },
    ],
    whyChooseUs: {
      image: "/about/dermatologyMedicalBilling.png",
      description: `Specializing in dermatology billing services, we handle everything from routine acne treatments to advanced surgical procedures. Our billing experts ensure accurate reimbursement for both medical and elective services.

We stay updated with evolving skincare codes and payer policies so you can focus on patient care while we optimize your revenue.`,
    },
  },

  {
    slug: "durableMedicalEquipment",
    title: "Durable Medical Equipment",
    description:
      "Specialized DME billing and compliance services.",
    icon: "/icons/durableMedicalEquipment.png",
    bgColor: "bg-sky-200",
    borderColor: "border-green-200",
    sections: [
      {
        heading: "Inventory & Claims",
        body: `Managing documentation and proof-of-delivery requirements.`,
      },
      {
        heading: "Audit Protection",
        body: `Minimizing audit risk through strict compliance protocols.`,
      },
    ],
    whyChooseUs: {
      image: "/about/dmeBilling.png",
      description: `DME billing requires strict documentation and proof-of-delivery compliance. Our team ensures claims meet Medicare and private payer requirements while reducing audit risk.

We streamline inventory-linked billing and improve reimbursement timelines.`,
    },
  },

  {
    slug: "emergencyMedicineBilling",
    title: "Emergency Medicine Billing",
    description:
      "High-volume emergency department billing solutions.",
    icon: "/icons/emergencyMedicineBilling.png",
    bgColor: "bg-lime-400",
    borderColor: "border-green-200",
    sections: [
      {
        heading: "Rapid Claims Processing",
        body: `Efficient billing for time-sensitive services.`,
      },
      {
        heading: "Payer Coordination",
        body: `Handling multiple payer types and reimbursement models.`,
      },
    ],
    whyChooseUs: {
      image: "/about/emergencyMedicineBilling.webp",
      description: `Emergency medicine billing demands speed and precision. We process high-volume claims efficiently while managing multiple payer types and reimbursement models.

Our proactive denial resolution ensures stable revenue for emergency departments.`,
    },
  },

  {
    slug: "familyPractice",
    title: "Family Practice",
    description:
      "Full-service revenue cycle management for primary care.",
    icon: "/icons/familyPractice.png",
    bgColor: "bg-sky-200",
    borderColor: "border-green-200",
    sections: [
      {
        heading: "Preventive Care Billing",
        body: `Accurate coding for routine and chronic care services.`,
      },
      {
        heading: "Patient Collections",
        body: `Transparent billing and efficient patient communication.`,
      },
    ],
    whyChooseUs: {
      image: "/about/familyPracticeBilling.webp",
      description: `We support family practices with comprehensive billing solutions for preventive, chronic, and acute care services. Our coding accuracy reduces denials and improves reimbursement timelines.

Transparent reporting and patient-friendly billing processes strengthen your financial performance.`,
    },
  },

  {
    slug: "gastroenterology",
    title: "Gastroenterology",
    description:
      "Billing solutions for digestive health specialists.",
    icon: "/icons/gastroenterology.png",
    bgColor: "bg-lime-400",
    borderColor: "border-green-200",
    sections: [
      {
        heading: "Procedure Coding",
        body: `Accurate billing for endoscopy and colonoscopy services.`,
      },
      {
        heading: "Compliance Management",
        body: `Ensuring regulatory and payer compliance.`,
      },
    ],
    whyChooseUs: {
      image: "/about/gastroenterologyBillingServices.webp",
      description: `Our gastroenterology billing specialists ensure precise coding for endoscopic and diagnostic procedures. We proactively manage compliance and payer-specific requirements.

This results in fewer denials and improved revenue predictability.`,
    },
  },

  {
    slug: "generalSurgery",
    title: "General Surgery",
    description:
      "Revenue optimization for surgical practices.",
    icon: "/icons/generalSurgery.png",
    bgColor: "bg-sky-200",
    borderColor: "border-green-200",
    sections: [
      {
        heading: "Surgical Coding",
        body: `Comprehensive billing for operative procedures.`,
      },
      {
        heading: "Post-Op Billing",
        body: `Managing global period and follow-up care billing.`,
      },
    ],
    whyChooseUs: {
      image: "/about/generalSurgeryBilling.webp",
      description: `We manage complex surgical coding and global period billing with accuracy and compliance. Our team ensures appropriate reimbursement for operative and post-operative services.

By minimizing claim errors, we help surgical practices improve revenue efficiency.`,
    },
  },

  {
    slug: "neurology",
    title: "Neurology",
    description:
      "Revenue cycle services for neurological practices.",
    icon: "/icons/neurology.png",
    bgColor: "bg-lime-400",
    borderColor: "border-green-200",
    sections: [
      {
        heading: "Diagnostic Billing",
        body: `Accurate claims for EEG, EMG, and nerve studies.`,
      },
      {
        heading: "Chronic Care Coding",
        body: `Managing long-term neurological condition billing.`,
      },
    ],
    whyChooseUs: {
      image: "/about/nerologyBilling.webp",
      description: `Neurology billing involves complex diagnostics and chronic care management. Our specialists ensure precise documentation and coding for neurological services.

We improve collections while maintaining regulatory compliance.`,
    },
  },

  {
    slug: "urology",
    title: "Urology",
    description:
      "Urology billing and revenue optimization services.",
    icon: "/icons/urology.png",
    bgColor: "bg-sky-200",
    borderColor: "border-green-200",
    sections: [
      {
        heading: "Procedure Billing",
        body: `Accurate claims for urological surgeries and treatments.`,
      },
      {
        heading: "Denial Resolution",
        body: `Quick turnaround on claim corrections and appeals.`,
      },
    ],
    whyChooseUs: {
      image: "/about/urologyBillingServices.webp",
      description: `We provide specialized urology billing services with precise coding for surgical and diagnostic procedures. Our proactive denial resolution improves reimbursement speed.

Our compliance-focused approach protects your practice while enhancing revenue.`,
    },
  },
];
