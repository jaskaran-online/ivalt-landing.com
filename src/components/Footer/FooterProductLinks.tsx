"use client";

import { useState } from "react";
import Link from "next/link";
import { Heading4, SmallText } from "@/components/ui/typography";
import { Fingerprint, Smartphone, FileLock, ChevronRight } from "lucide-react";

const productLinks = [
  {
    label: "Universal Biometric ID®",
    href: "/solutions/universalid",
    icon: Fingerprint,
    description: "Enterprise Security Solution",
  },
  {
    label: "On-Demand ID™",
    href: "/solutions/ondemandid",
    icon: Smartphone,
    description: "Combat Deepfakes & Social Engineering",
  },
  {
    label: "DocuID®",
    href: "/solutions/docuid",
    icon: FileLock,
    description: "Secure Document Access Control",
  },
];

export default function FooterProductLinks() {
  const [hoveredProduct, setHoveredProduct] = useState<string | null>(null);

  return (
    <div>
      <Heading4 color="navy-primary" className="mb-6">
        Products
      </Heading4>
      <ul className="space-y-2">
        {productLinks.map((link) => {
          const Icon = link.icon;
          const isHovered = hoveredProduct === link.href;
          return (
            <li key={link.href}>
              <Link
                href={link.href}
                className="group flex items-start gap-3 p-2 -mx-2 rounded-lg transition-all duration-200 hover:bg-gray-50"
                onMouseEnter={() => setHoveredProduct(link.href)}
                onMouseLeave={() => setHoveredProduct(null)}
              >
                <div
                  className={`w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0 transition-all duration-200 ${
                    isHovered ? "bg-teal-primary/20" : "bg-teal-primary/10"
                  }`}
                >
                  <Icon
                    className={`w-4 h-4 transition-colors duration-200 ${
                      isHovered ? "text-teal-primary" : "text-teal-primary/80"
                    }`}
                  />
                </div>
                <div className="flex-1">
                  <SmallText
                    className={`font-medium transition-colors duration-200 block ${
                      isHovered ? "text-navy-primary" : "text-gray-700"
                    }`}
                  >
                    {link.label}
                  </SmallText>
                  <span
                    className={`text-xs transition-all duration-200 block mt-0.5 ${
                      isHovered
                        ? "text-gray-600 opacity-100"
                        : "text-gray-500 opacity-70"
                    }`}
                  >
                    {link.description}
                  </span>
                </div>
                <ChevronRight
                  className={`w-4 h-4 flex-shrink-0 transition-all duration-200 ${
                    isHovered
                      ? "text-navy-primary translate-x-0 opacity-100"
                      : "text-gray-400 -translate-x-1 opacity-0"
                  }`}
                />
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
