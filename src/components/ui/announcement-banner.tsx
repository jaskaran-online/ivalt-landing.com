"use client";

import Link from "next/link";
import { X } from "lucide-react";
import { useState, useEffect } from "react";

export function AnnouncementBanner() {
  const [isVisible, setIsVisible] = useState(true);

  // Check if user has dismissed the banner
  useEffect(() => {
    const dismissed = localStorage.getItem("webinar-banner-dismissed");
    if (dismissed) {
      setIsVisible(false);
    }
  }, []);

  const handleDismiss = () => {
    setIsVisible(false);
    localStorage.setItem("webinar-banner-dismissed", "true");
  };

  if (!isVisible) return null;

  return (
    <div className="bg-navy-primary text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-2">
        <div className="flex items-center justify-between">
          <div className="flex-1 flex items-center justify-center">
            <p className="text-sm text-center">
              <span className="font-semibold text-teal-primary">NEW:</span>{" "}
              Zero Trust Security: Human-Verified Identity Beyond Passwords — Join
              iVALT & OpenVPN for an Exclusive Webinar.{" "}
              <Link
                href="/recent-updates/zero-trust-security-human-verified-identity-beyond-passwords"
                className="inline-flex items-center text-teal-primary hover:text-teal-300 font-medium transition-colors"
              >
                Register Now
                <span className="ml-1">→</span>
              </Link>
            </p>
          </div>
          <button
            onClick={handleDismiss}
            className="flex-shrink-0 ml-4 p-1 rounded-lg hover:bg-white/10 transition-colors"
            aria-label="Dismiss announcement"
          >
            <X className="h-4 w-4" />
          </button>
        </div>
      </div>
    </div>
  );
}
