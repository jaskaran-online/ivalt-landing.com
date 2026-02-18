"use client";

import Link from "next/link";
import Image from "next/image";
import { ArrowRight, LayoutGrid, List } from "lucide-react";
import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import SectionTitle from "@/components/SectionTitle";

interface Update {
  id: string;
  title: string;
  date: string;
  summary: string;
  imageSrc: string;
  imageAlt: string;
  path: string;
}

const recentUpdates: Update[] = [
  {
    id: "openvpn-webinar",
    title:
      "iVALT Partners with OpenVPN for Human-Verified Zero Trust Webinar",
    date: "February 11, 2026",
    summary:
      "Join iVALT and OpenVPN for an exclusive webinar on delivering human-verified Zero Trust for your organization, addressing AI deepfakes and impersonation threats.",
    imageSrc:
      "/press-release/images/ivalt-openvpn-webinar.png",
    imageAlt: "iVALT OpenVPN Webinar",
    path: "/recent-updates/ivalt-openvpn-human-verified-zerotrust-webinar",
  },
  {
    id: "docuid",
    title: "iVALT Revolutionizes Document Security with Launch of DocuID®",
    date: "April 22, 2025",
    summary:
      "iVALT, an innovator in identity verification and security solutions, today announced the launch of DocuID, a groundbreaking document protection service that empowers document owners with unprecedented control over access to their critical information.",
    imageSrc:
      "/press-release/images/ivalt-revolutionizes-document-security-with-launch-of-DocuID-net.png",
    imageAlt: "iVALT DocuID Launch",
    path: "/recent-updates/ivalt-revolutionizes-document-security-with-launch-of-DocuID",
  },
  {
    id: "ondemand-id",
    title:
      "iVALT® Launches OnDemand ID providing 5+ Factors of Identity Validation",
    date: "February 10, 2025",
    summary:
      "iVALT®, a leading innovator of Zero Trust identity solutions, today announced the official launch of OnDemand ID™, a groundbreaking universal 5+factor identity product that empowers enterprises with the highest level of identity verification available.",
    imageSrc:
      "/press-release/images/ivalt-launches-ondemand-id-providing-5-factors-of-Identity-validation.png",
    imageAlt: "iVALT OnDemand ID Launch",
    path: "/recent-updates/ondemand-id-providing-5-factors-of-Identity-validation",
  },
  {
    id: "psono",
    title:
      "Psono Selects iVALT to Transform Digital Security with 5-Factor Authentication",
    date: "January 10, 2025",
    summary:
      "Psono, a leader in secure password management using end-to-end encryption, chose iVALT to dramatically upgrade digital security using iVALT's biometric and industry-leading 5 factor authentication (5FA).",
    imageSrc: "/press-release/images/psono-collaborates-with-ivalt.png",
    imageAlt: "Psono Selects iVALT 5FA",
    path: "/recent-updates/psono-selects-ivalt-5fa",
  },
];

type ViewMode = "list" | "grid";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -20 },
};

export default function RecentUpdatesClient() {
  const [viewMode, setViewMode] = useState<ViewMode>("list");

  return (
    <main className="mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24 bg-[#FAF9F7]">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-8">
          <SectionTitle
            title="Recent Updates"
            description="Stay updated with the latest news and announcements from iVALT"
            textAlign="text-left"
          />
          <div className="flex items-center gap-2 bg-white rounded-lg p-1 shadow-sm self-start sm:self-auto">
            <button
              onClick={() => setViewMode("list")}
              className={`p-2 rounded-md transition-all duration-200 ${
                viewMode === "list"
                  ? "bg-teal-primary text-white"
                  : "text-gray-500 hover:bg-gray-100"
              }`}
              aria-label="List view"
            >
              <List size={20} />
            </button>
            <button
              onClick={() => setViewMode("grid")}
              className={`p-2 rounded-md transition-all duration-200 ${
                viewMode === "grid"
                  ? "bg-teal-primary text-white"
                  : "text-gray-500 hover:bg-gray-100"
              }`}
              aria-label="Grid view"
            >
              <LayoutGrid size={20} />
            </button>
          </div>
        </div>

        <AnimatePresence mode="wait">
          {viewMode === "list" ? (
            <motion.div
              key="list"
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              exit="hidden"
              className="space-y-16"
            >
              {recentUpdates.map((update) => (
                <motion.div
                  key={update.id}
                  variants={itemVariants}
                  className="bg-white rounded-xl hover:shadow-sm overflow-hidden lg:flex"
                >
                  <div className="lg:w-2/5 relative h-64 lg:h-auto">
                    <Image
                      src={update.imageSrc}
                      alt={update.imageAlt}
                      className="object-contain px-4"
                      fill
                      sizes="(max-width: 768px) 100vw, 40vw"
                      priority
                    />
                  </div>
                  <div className="p-8 lg:w-3/5 flex flex-col justify-between">
                    <div>
                      <div className="text-sm text-teal-primary font-semibold mb-2">
                        {update.date}
                      </div>
                      <h2 className="text-2xl font-bold text-navy-primary mb-4">
                        {update.title}
                      </h2>
                      <p className="text-gray-600 mb-6 line-clamp-3">
                        {update.summary}
                      </p>
                    </div>
                    <div>
                      <Link
                        href={update.path}
                        className="inline-flex items-center px-6 py-3 bg-teal-primary hover:bg-teal-primary/80 text-white font-medium rounded-md transition-colors duration-200"
                      >
                        Read More
                        <ArrowRight size={16} className="ml-2" />
                      </Link>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          ) : (
            <motion.div
              key="grid"
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              exit="hidden"
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            >
              {recentUpdates.map((update) => (
                <motion.div
                  key={update.id}
                  variants={itemVariants}
                  className="bg-white rounded-xl hover:shadow-lg overflow-hidden flex flex-col"
                >
                  <div className="relative h-48">
                    <Image
                      src={update.imageSrc}
                      alt={update.imageAlt}
                      className="object-contain px-4"
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      priority
                    />
                  </div>
                  <div className="p-6 flex flex-col flex-grow">
                    <div className="text-sm text-teal-primary font-semibold mb-2">
                      {update.date}
                    </div>
                    <h2 className="text-xl font-bold text-navy-primary mb-3 line-clamp-2">
                      {update.title}
                    </h2>
                    <p className="text-gray-600 mb-4 line-clamp-3 flex-grow">
                      {update.summary}
                    </p>
                    <Link
                      href={update.path}
                      className="inline-flex items-center px-4 py-2 bg-teal-primary hover:bg-teal-primary/80 text-white font-medium rounded-md transition-colors duration-200 text-sm self-start"
                    >
                      Read More
                      <ArrowRight size={14} className="ml-2" />
                    </Link>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </main>
  );
}
