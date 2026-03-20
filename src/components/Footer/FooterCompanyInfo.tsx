import Image from "next/image";
import Link from "next/link";
import { BodyText } from "@/components/ui/typography";
import { Button } from "@/components/ui/button";
import LinkedIn from "@/assets/linkedin.png";

export default function FooterCompanyInfo() {
  return (
    <div className="space-y-8">
      {/* Company Logo & Description */}
      <div>
        <Link href="/" className="inline-block mb-6 group">
          <Image
            src="/logo-transparent-bg.png"
            alt="Company Logo"
            width={500}
            height={500}
            className="w-30 h-auto transition-transform duration-300 group-hover:scale-105"
          />
        </Link>
        <BodyText className="text-gray-800 max-w-md text-md">
          Innovative identity solutions for modern security challenges.
          Protecting your digital future with advanced authentication
          technology.
        </BodyText>
      </div>

      {/* Social Links */}
      <div className="flex items-center space-x-3">
        <Button
          variant="shiny"
          className="bg-slate-100 hover:bg-slate-200 border group transition-all duration-300"
        >
          <Link
            href="https://www.linkedin.com/company/ivalt-inc/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <span className="flex items-center justify-center gap-2 p-2 rounded-lg">
              <Image
                src={LinkedIn}
                alt="LinkedIn"
                width={20}
                height={20}
                className="transition-transform duration-300 group-hover:scale-110"
              />
              <span className="text-sm text-gray-600 group-hover:text-navy-primary transition-colors duration-200">
                LinkedIn Profile
              </span>
            </span>
          </Link>
        </Button>
      </div>
    </div>
  );
}
