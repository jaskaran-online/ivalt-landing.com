import Link from "next/link";
import { ChevronRight, ExternalLink } from "lucide-react";

export default function FooterBottomBar() {
  return (
    <div className="bg-[#FAF9F7]">
      <div className="max-w-7xl mx-auto px-4 md:px-0 py-6">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          <p className="text-gray-500 text-sm">
            © 2026 iVALT. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <Link
              href="/privacy-policy"
              className="group text-gray-500 hover:text-navy-primary text-sm transition-colors duration-200 inline-flex items-center gap-1"
            >
              Privacy Policy
              <ChevronRight className="w-3 h-3 opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-200" />
            </Link>
            <span className="text-gray-300">|</span>
            <Link
              href="/terms-and-conditions"
              className="group text-gray-500 hover:text-navy-primary text-sm transition-colors duration-200 inline-flex items-center gap-1"
            >
              Terms of Service
              <ChevronRight className="w-3 h-3 opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-200" />
            </Link>
            <span className="text-gray-300">|</span>
            <a
              href="https://www.docuid.net"
              target="_blank"
              rel="noopener noreferrer"
              className="group text-gray-500 hover:text-navy-primary text-sm transition-colors duration-200 inline-flex items-center gap-1"
            >
              DocuID.net
              <ExternalLink className="w-3 h-3 transition-transform duration-200 group-hover:scale-110" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
