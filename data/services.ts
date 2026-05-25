export type Service = {
  name: string;
  slug: string; // custom camelCase slug
  description: string;
};

export const services: Service[] = [
  
  {
    name: "Charge Entry",
    slug: "chargeEntry",
    description: "Accurate and timely charge entry services to ensure clean claim submission.",
  },
  {
    name: "Payment Posting",
    slug: "paymentPosting",
    description: "Efficient payment posting to maintain accurate financial records and reconciliation.",
  },
  {
    name: "Account Receivable",
    slug: "accountReceivable",
    description: "Proactive accounts receivable management to reduce aging and improve cash flow.",
  },
  {
    name: "Denial Management & Appeals",
    slug: "denialManagementAppeals",
    description: "Strategic denial resolution and appeals handling to maximize reimbursements.",
  },
  {
    name: "RCM Services",
    slug: "rcmServices",
    description: "Comprehensive revenue cycle management solutions tailored to healthcare providers.",
  },
  {
    name: "Medical Coding",
    slug: "medicalCoding",
    description: "Certified medical coding services ensuring compliance and accuracy.",
  },
  {
    name: "Physician Credentialing",
    slug: "physicianCredentialing",
    description: "Streamlined credentialing and enrollment services for healthcare professionals.",
  },
  {
    name: "Physician Group",
    slug: "physicianGroup",
    description: "Specialized billing and revenue optimization solutions for physician groups.",
  },
  {
    name: "Outsourced Services",
    slug: "outsourcedServices",
    description: "Flexible outsourcing solutions to reduce operational costs and improve efficiency.",
  },
  {
    name: "Medical Coding Services",
    slug: "medicalCodingServices",
    description: "Accurate and compliant medical coding services to ensure proper reimbursement and regulatory adherence.",
  },
  {
    name: "Credentialing Services",
    slug: "credentialingServices",
    description: "End-to-end provider credentialing and enrollment services to streamline approvals and payer participation.",
  },
  {
    name: "Outsource Billing Services",
    slug: "outsourceBillingServices",
    description: "Comprehensive outsourced medical billing solutions designed to improve revenue cycle efficiency and reduce overhead.",
  },
  {
    name: "Billing for Small Practices",
    slug: "billingForSmallPractices",
    description: "Customized medical billing services tailored specifically for small and independent healthcare practices.",
  },
];
