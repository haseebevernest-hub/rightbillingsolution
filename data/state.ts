export type StateContentSection = {
  title: string;
  paragraphs: string[];
};

export type StateContent = {
  heroTitle: string;
  heroSubtitle: string;
  sections: StateContentSection[];
};

export type State = {
  code: string;
  name: string;
  slug: string;
  content: StateContent;
};

/**
 * 🔥 Dynamic Content Generator
 * This prevents duplicating content for 50 states.
 */
function generateStateContent(name: string): StateContent {
  return {
    heroTitle: `Services in ${name}`,
    heroSubtitle: `Professional and reliable medical billing solutions tailored for healthcare providers across ${name}.`,
    sections: [
      {
        title: `Specialized Medical Billing Services in ${name}`,
        paragraphs: [
          `Our medical billing experts proudly serve healthcare providers throughout ${name}. We support clinics, private practices, and specialty providers with accurate billing solutions.`,
          `Our experienced billers and coders excel in precise data entry, ICD/CPT coding, payment posting, and denial management while strictly adhering to HIPAA compliance standards.`,
          `We ensure seamless electronic and paper claim submissions, minimizing errors and accelerating reimbursements for practices in ${name}.`
        ]
      },
      {
        title: `Revenue Growth Solutions for ${name} Practices`,
        paragraphs: [
          `Our billing strategies are designed to help providers in ${name} maximize revenue while staying compliant with federal and state healthcare regulations.`,
          `Outsourcing medical billing services can improve collections by up to 20%, reduce administrative burden, and allow physicians to focus on patient care.`,
          `Through accurate coding, detailed audits, consistent insurance follow-ups, and strong accounts receivable management, we guarantee higher profitability and steady growth for clinics across ${name}.`
        ]
      }
    ]
  };
}

/**
 * Base state list
 */
const baseStates = [
  { code: "AL", name: "Alabama", slug: "alabama" },
  { code: "AK", name: "Alaska", slug: "alaska" },
  { code: "AZ", name: "Arizona", slug: "arizona" },
  { code: "AR", name: "Arkansas", slug: "arkansas" },
  { code: "CA", name: "California", slug: "california" },
  { code: "CO", name: "Colorado", slug: "colorado" },
  { code: "CT", name: "Connecticut", slug: "connecticut" },
  { code: "DE", name: "Delaware", slug: "delaware" },
  { code: "DC", name: "District of Columbia", slug: "district-of-columbia" },
  { code: "FL", name: "Florida", slug: "florida" },
  { code: "GA", name: "Georgia", slug: "georgia" },
  { code: "HI", name: "Hawaii", slug: "hawaii" },
  { code: "ID", name: "Idaho", slug: "idaho" },
  { code: "IL", name: "Illinois", slug: "illinois" },
  { code: "IN", name: "Indiana", slug: "indiana" },
  { code: "IA", name: "Iowa", slug: "iowa" },
  { code: "KS", name: "Kansas", slug: "kansas" },
  { code: "KY", name: "Kentucky", slug: "kentucky" },
  { code: "LA", name: "Louisiana", slug: "louisiana" },
  { code: "ME", name: "Maine", slug: "maine" },
  { code: "MD", name: "Maryland", slug: "maryland" },
  { code: "MA", name: "Massachusetts", slug: "massachusetts" },
  { code: "MI", name: "Michigan", slug: "michigan" },
  { code: "MN", name: "Minnesota", slug: "minnesota" },
  { code: "MS", name: "Mississippi", slug: "mississippi" },
  { code: "MO", name: "Missouri", slug: "missouri" },
  { code: "MT", name: "Montana", slug: "montana" },
  { code: "NE", name: "Nebraska", slug: "nebraska" },
  { code: "NV", name: "Nevada", slug: "nevada" },
  { code: "NH", name: "New Hampshire", slug: "new-hampshire" },
  { code: "NJ", name: "New Jersey", slug: "new-jersey" },
  { code: "NM", name: "New Mexico", slug: "new-mexico" },
  { code: "NY", name: "New York", slug: "new-york" },
  { code: "NC", name: "North Carolina", slug: "north-carolina" },
  { code: "ND", name: "North Dakota", slug: "north-dakota" },
  { code: "OH", name: "Ohio", slug: "ohio" },
  { code: "OK", name: "Oklahoma", slug: "oklahoma" },
  { code: "OR", name: "Oregon", slug: "oregon" },
  { code: "PA", name: "Pennsylvania", slug: "pennsylvania" },
  { code: "RI", name: "Rhode Island", slug: "rhode-island" },
  { code: "SC", name: "South Carolina", slug: "south-carolina" },
  { code: "SD", name: "South Dakota", slug: "south-dakota" },
  { code: "TN", name: "Tennessee", slug: "tennessee" },
  { code: "TX", name: "Texas", slug: "texas" },
  { code: "UT", name: "Utah", slug: "utah" },
  { code: "VT", name: "Vermont", slug: "vermont" },
  { code: "VA", name: "Virginia", slug: "virginia" },
  { code: "WA", name: "Washington", slug: "washington" },
  { code: "WV", name: "West Virginia", slug: "west-virginia" },
  { code: "WI", name: "Wisconsin", slug: "wisconsin" },
  { code: "WY", name: "Wyoming", slug: "wyoming" },
];

/**
 * Final exported states with dynamic content injected
 */
export const states: State[] = baseStates.map((state) => ({
  ...state,
  content: generateStateContent(state.name),
}));
