/**
 * Site-wide constants.
 *
 * Every "Book a Call" button leads to the on-site scheduling page, which
 * embeds the cal.com calendar (smartgrowinfotech) inline. WhatsApp remains
 * a secondary channel on that page and in the footer.
 */
export const BOOK_CALL_URL = "/book-a-call";

/** cal.com account/event link used by the inline embed. */
export const CAL_LINK = "smartgrowinfotech/";

export const site = {
  name: "SmartGrow Infotech",
  tagline: "Your complete technology & training partner",
  description:
    "Software products, web & mobile development, AI/ML, digital marketing, consultancy, training & US IT staffing. Founded 2021, Hyderabad, India.",
  email: "info@smartgrowinfotech.com",
  phone: "+91 9063935182",
  phoneHref: "tel:+919063935182",
  whatsapp: "https://wa.me/919063935182",
  website: "www.smartgrowinfotech.com",
  location: "Madhapur, Hyderabad, Telangana, India",
} as const;

export type NavItem = {
  label: string;
  href: string;
  children?: { label: string; href: string }[];
};

export const navMenu: NavItem[] = [
  { label: "Home", href: "/" },
  {
    label: "Services",
    href: "/services",
    children: [
      { label: "Branding", href: "/services/branding" },
      { label: "Technology", href: "/services/technology" },
      { label: "Marketing", href: "/services/marketing" },
      { label: "Training", href: "/services/training" },
    ],
  },
  { label: "Our Work", href: "/#our-works" },
  { label: "Achievements", href: "/#achievements" },
  {
    label: "About",
    href: "/about",
    children: [
      { label: "About Us", href: "/about" },
      { label: "Team", href: "/about/team" },
      { label: "Career", href: "/about/career" },
    ],
  },
  { label: "Contact", href: "/contact" },
];

export const footerCompanyLinks = [
  { label: "Services", href: "/services" },
  { label: "Our Work", href: "/#our-works" },
  { label: "Achievements", href: "/#achievements" },
  { label: "FAQs", href: "/#faq" },
  { label: "About Us", href: "/about" },
  { label: "Team", href: "/about/team" },
  { label: "Career", href: "/about/career" },
  { label: "Technology", href: "/technology" },
  { label: "Contact", href: "/contact" },
] as const;
