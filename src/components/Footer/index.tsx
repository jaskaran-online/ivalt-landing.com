"use client";

import { usePathname } from "next/navigation";
import { TextHoverEffect } from "@/components/ui/hover-footer";
import FooterCompanyInfo from "./FooterCompanyInfo";
import FooterProductLinks from "./FooterProductLinks";
import FooterLinkSection from "./FooterLinkSection";
import FooterContact from "./FooterContact";
import FooterBottomBar from "./FooterBottomBar";
import { footerLinks } from "./types";

export default function Footer() {
  const currentPath = usePathname();
  const isHome = currentPath === "/";

  return (
    <footer className="bg-white border-t border-[#E5E7EB]">
      {/* Contact Section */}
      {isHome && <FooterContact />}
      <div className="mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="py-16 max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            {/* Company Info */}
            <div className="lg:col-span-4">
              <FooterCompanyInfo />
            </div>

            {/* Navigation Links */}
            <div className="lg:col-span-8">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {/* Products with Icons */}
                <FooterProductLinks />

                {/* Company */}
                <FooterLinkSection
                  title="Company"
                  links={footerLinks.company}
                />

                {/* Legal */}
                <FooterLinkSection title="Legal" links={footerLinks.legal} />
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Bottom Bar */}
      <FooterBottomBar />
    </footer>
  );
}

// Export individual components for flexible usage
export { FooterCompanyInfo };
export { FooterProductLinks };
export { FooterLinkSection };
export { FooterContact };
export { FooterBottomBar };
export * from "./types";
