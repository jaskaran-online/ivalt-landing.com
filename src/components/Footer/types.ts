import { LucideIcon } from "lucide-react";

export interface FooterLink {
  label: string;
  href: string;
}

export interface ProductLink {
  label: string;
  href: string;
  icon: LucideIcon;
  description: string;
}

export interface FooterLinkSectionProps {
  title: string;
  links: FooterLink[];
}

export interface ProductLinksProps {
  links: ProductLink[];
}

export const footerLinks = {
  company: [
    { label: "Why iVALT?", href: "/why-ivalt" },
    { label: "Solutions", href: "/solutions" },
    { label: "About Us", href: "/about" },
    { label: "Contact", href: "/contact" },
    { label: "Recent Updates", href: "/recent-updates" },
  ],
  legal: [
    { label: "Privacy Policy", href: "/privacy-policy" },
    { label: "Terms of Service", href: "/terms-and-conditions" },
  ],
};
