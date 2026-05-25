export type Review = {
  id: number;
  name: string;
  role: string;
  company?: string;
  avatar: string;
  review: string;
};

export const reviews: Review[] = [
  {
    id: 1,
    name: "Dr. Emily Carter",
    role: "Clinic Owner",
    company: "",
    avatar: "/review/femaleDoc.jpg",
    review:
      "Smart Billing Solutions has transformed our revenue cycle. Their accuracy and promptness in handling claims have significantly reduced our administrative stress.",
  },
  {
    id: 2,
    name: "Michael Thompson",
    role: "Michael Thompson",
    company: "",
    avatar: "/review/maleDoc.jpg",
    review:
      "The team at Smart Billing Solutions is responsive, knowledgeable, and reliable. They ensure our billing processes are smooth and error-free.",
  },
  {
    id: 3,
    name: "Dr. Raj Patel",
    role: "Cardiologist",
    company: "",
    avatar: "/review/maleDoc.jpg",
    review:
      "Outsourcing our billing to Smart Billing Solutions was the best decision. They streamline claims, improve cash flow, and let us focus on patient care.",
  },
];
