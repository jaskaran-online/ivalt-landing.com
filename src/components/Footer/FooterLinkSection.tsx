import Link from "next/link";
import { Heading4, SmallText } from "@/components/ui/typography";
import { ChevronRight } from "lucide-react";
import { FooterLinkSectionProps } from "./types";

export default function FooterLinkSection({
  title,
  links,
}: FooterLinkSectionProps) {
  return (
    <div>
      <Heading4 color="navy-primary" className="mb-6">
        {title}
      </Heading4>
      <ul className="space-y-2">
        {links.map((link) => (
          <li key={link.href}>
            <Link
              href={link.href}
              className="group flex items-center gap-2 py-2 px-3 -mx-3 rounded-lg text-gray-600 hover:text-navy-primary hover:bg-gray-50 transition-all duration-200"
            >
              <ChevronRight className="w-4 h-4 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-400 text-teal-primary" />
              <SmallText className="text-sm group-hover:text-teal-primary">
                {link.label}
              </SmallText>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
