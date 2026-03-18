"use client";

import React, { useState, useEffect, useCallback } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Shield, Fingerprint, ArrowRight, Sparkles, ArrowBigRightDash } from "lucide-react";
import { Button } from "@/components/ui/button";

interface Update {
  id: string;
  title: string;
  date: string;
  path: string;
}

const recentUpdates: Update[] = [
  {
    id: "openvpn-webinar",
    title: "Zero Trust Security: Human-Verified Identity Beyond Passwords",
    date: "Feb 11, 2026",
    path: "/recent-updates/zero-trust-security-human-verified-identity-beyond-passwords",
  },
  {
    id: "docuid",
    title: "iVALT Revolutionizes Document Security with Launch of DocuID®",
    date: "Apr 22, 2025",
    path: "/recent-updates/ivalt-revolutionizes-document-security-with-launch-of-DocuID",
  },
  {
    id: "ondemand-id",
    title: "iVALT® Launches OnDemand ID™ with 5+ Factors of Identity Validation",
    date: "Feb 10, 2025",
    path: "/recent-updates/ondemand-id-providing-5-factors-of-Identity-validation",
  },
  {
    id: "psono",
    title: "Psono Selects iVALT for 5-Factor Authentication",
    date: "Jan 10, 2025",
    path: "/recent-updates/psono-selects-ivalt-5fa",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.2,
    },
  },
};

const slideUpVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: "easeOut" as const,
    },
  },
};

const scaleInVariants = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.6,
      ease: "easeOut" as const,
    },
  },
};

// Floating Recent Updates Widget
function RecentUpdatesFloating() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev + 1) % recentUpdates.length);
  }, []);

  useEffect(() => {
    const timer = setInterval(nextSlide, 5000);
    return () => clearInterval(timer);
  }, [nextSlide]);

  return (
    <motion.div
      initial={{ opacity: 0, y: -10, scale: 0.95 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ delay: 1, duration: 0.5, type: "spring", stiffness: 200 }}
      className="absolute -top-24 left-1/2 -translate-x-1/2 lg:left-auto lg:right-0 lg:translate-x-0 w-72 z-10"
    >
      <div className="bg-white rounded-xl shadow-2xl shadow-[#1E4884]/20 border border-gray-100 overflow-hidden">
        {/* Header with gradient */}
        <div className="flex items-center gap-2 px-3 py-2 bg-linear-to-r from-[#30B68E]/10 to-[#1E4884]/5 border-b border-gray-100">
          <Sparkles className="w-3 h-3 text-[#30B68E]" />
          <span className="text-xs font-semibold text-[#1E4884]">Recent Updates</span>
          <div className="ml-auto flex gap-1">
            {recentUpdates.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-1.5 h-1.5 rounded-full transition-all duration-300 ${
                  index === currentIndex ? "bg-[#30B68E] w-3" : "bg-gray-300 hover:bg-gray-400"
                }`}
                aria-label={`Go to update ${index + 1}`}
              />
            ))}
          </div>
        </div>

        {/* Content */}
        <div className="h-20 overflow-hidden relative">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ y: 15, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -15, opacity: 0 }}
              transition={{ duration: 0.35, ease: "easeOut" }}
              className="absolute inset-0 p-3 flex flex-col justify-center"
            >
              <div className="flex items-center gap-2 mb-1">
                <span className="text-[10px] bg-[#30B68E]/10 text-[#30B68E] px-1.5 py-0.5 rounded font-medium">
                  {recentUpdates[currentIndex].date}
                </span>
              </div>
              <Link
                href={recentUpdates[currentIndex].path}
                className="text-xs font-semibold text-[#1E4884] leading-snug hover:text-[#30B68E] transition-colors line-clamp-2"
              >
                {recentUpdates[currentIndex].title}
              </Link>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>

      {/* Decorative pointer */}
      <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 lg:left-auto lg:right-8 lg:translate-x-0 w-4 h-4 bg-white border-r border-b border-gray-100 rotate-45 shadow-sm" />
    </motion.div>
  );
}

export function HeroSection() {
  return (
    <section className="relative min-h-screen bg-[#FAF9F7] overflow-hidden">
      {/* Abstract geometric accent shapes */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-linear-to-l from-[#30B68E]/5 to-transparent pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#1E4884]/5 rounded-full blur-3xl pointer-events-none -translate-x-1/2 translate-y-1/2" />

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8 pt-24 lg:pt-32 pb-20">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid lg:grid-cols-12 gap-12 lg:gap-8 items-center"
        >
          {/* Left column - Main content */}
          <div className="lg:col-span-7 xl:col-span-6">
            {/* Problem statement */}
            <motion.div variants={slideUpVariants} className="space-y-0.5 mb-6">
              <p className="text-base md:text-lg flex items-center gap-2 text-gray-500 font-medium tracking-tight">
              <ArrowBigRightDash className="w-4 h-4 text-[#30B68E]" />
                <span className="text-[#1E4884]">Attackers Impersonate.</span>  
              </p>
              <p className="text-base md:text-lg flex items-center gap-2 text-[#1E4884] font-medium tracking-tight">
                <ArrowBigRightDash className="w-4 h-4 text-[#30B68E]" />
                <span className="">AI Scales the Attack.</span>
              </p>
            </motion.div>

            {/* Solution headline */}
            <motion.h1
              variants={slideUpVariants}
              className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#1E4884] leading-[1.15] tracking-tight mb-5"
            >
              <span className="text-[#30B68E]">iVALT</span> Enforces
              <br />
              Human Authority
              <br />
              <span className="relative inline-block">
                Before Execution.
              </span>
            </motion.h1>

            {/* Description */}
            <motion.p
              variants={slideUpVariants}
              className="text-sm md:text-base text-gray-600 max-w-lg leading-relaxed mb-8"
            >
            iVALT’s Identity Validation Platform® is a Revolutionary Approach to Stop Stolen Credentials for All Digital Interactions – Humans, AI Agents and IOT Devices
            </motion.p>

            {/* CTA buttons */}
            <motion.div
              variants={slideUpVariants}
              className="flex flex-wrap gap-4"
            >
              <Button
                size="lg"
                className="bg-[#1E4884] hover:bg-[#0F3366] text-white rounded-lg px-8 py-6 text-base font-semibold group transition-all duration-300 shadow-lg shadow-[#1E4884]/25"
              >
                <Link href="/solutions" className="flex items-center gap-2">
                  Explore Solutions
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-2 border-[#1E4884]/20 text-[#1E4884] hover:bg-[#1E4884]/5 rounded-lg px-8 py-6 text-base font-semibold transition-all duration-300"
              >
                <Link href="/contact">Get Started</Link>
              </Button>
            </motion.div>
          </div>

          {/* Right column - Visual elements */}
          <div className="lg:col-span-5 xl:col-span-6 relative">
            <motion.div
              variants={scaleInVariants}
              className="relative"
            >
              {/* Mac-style Window - Our Solutions */}
              <div className="relative bg-white rounded-xl shadow-2xl shadow-[#1E4884]/15 overflow-hidden border border-gray-200/60">
                {/* Mac Title Bar */}
                <div className="bg-linear-to-b  px-4 py-3 border-b border-gray-200 flex items-center gap-4">
                  {/* Traffic Lights */}
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 rounded-full bg-[#FF5F57] shadow-sm" />
                    <div className="w-3 h-3 rounded-full bg-[#FEBC2E] shadow-sm" />
                    <div className="w-3 h-3 rounded-full bg-[#28C840] shadow-sm" />
                  </div>
                  {/* Window Title */}
                  <div className="flex-1 ml-12 text-[#1E4884]">
                    <span className="text-xs font-medium text-gray-500">iVALT Solutions</span>
                  </div>
                  {/* Spacer for balance */}
                  <div className="w-16" />
                </div>

                {/* Window Content */}
                <div className="p-5">
                  {/* Solutions List */}
                  <div className="space-y-3">
                    {/* DocuID */}
                    <Link href="/solutions/docuid" className="group block">
                      <div className="flex items-center gap-3 p-3 rounded-lg bg-gray-50/80 border border-gray-100 group-hover:border-[#30B68E]/30 group-hover:bg-[#30B68E]/5 transition-all duration-200">
                        <div className="w-9 h-9 rounded-lg bg-[#30B68E]/10 flex items-center justify-center shrink-0 group-hover:bg-[#30B68E]/20 transition-colors">
                          <svg className="w-4 h-4 text-[#30B68E]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                          </svg>
                        </div>
                        <div className="flex-1 min-w-0">
                          <p className="font-semibold text-[#1E4884] text-sm group-hover:text-[#30B68E] transition-colors">
                            DocuID®
                          </p>
                          <p className="text-[11px] text-gray-500 leading-tight">
                            Document access control & digital rights
                          </p>
                        </div>
                        <div className="w-6 h-6 rounded-full bg-gray-100 flex items-center justify-center group-hover:bg-[#30B68E] transition-colors">
                          <ArrowRight className="w-3 h-3 text-gray-400 group-hover:text-white transition-colors" />
                        </div>
                      </div>
                    </Link>

                    {/* OnDemand ID */}
                    <Link href="/solutions/ondemandid" className="group block">
                      <div className="flex items-center gap-3 p-3 rounded-lg bg-gray-50/80 border border-gray-100 group-hover:border-[#1E4884]/30 group-hover:bg-[#1E4884]/5 transition-all duration-200">
                        <div className="w-9 h-9 rounded-lg bg-[#1E4884]/10 flex items-center justify-center shrink-0 group-hover:bg-[#1E4884]/20 transition-colors">
                          <svg className="w-4 h-4 text-[#1E4884]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
                          </svg>
                        </div>
                        <div className="flex-1 min-w-0">
                          <p className="font-semibold text-[#1E4884] text-sm">
                            OnDemand ID™
                          </p>
                          <p className="text-[11px] text-gray-500 leading-tight">
                            Real-time identity verification
                          </p>
                        </div>
                        <div className="w-6 h-6 rounded-full bg-gray-100 flex items-center justify-center group-hover:bg-[#1E4884] transition-colors">
                          <ArrowRight className="w-3 h-3 text-gray-400 group-hover:text-white transition-colors" />
                        </div>
                      </div>
                    </Link>

                    {/* Universal Biometric ID */}
                    <Link href="/solutions/universalid" className="group block">
                      <div className="flex items-center gap-3 p-3 rounded-lg bg-gray-50/80 border border-gray-100 group-hover:border-[#30B68E]/30 group-hover:bg-[#30B68E]/5 transition-all duration-200">
                        <div className="w-9 h-9 rounded-lg bg-[#30B68E]/10 flex items-center justify-center shrink-0 group-hover:bg-[#30B68E]/20 transition-colors">
                          <Fingerprint className="w-4 h-4 text-[#30B68E]" />
                        </div>
                        <div className="flex-1 min-w-0">
                          <p className="font-semibold text-[#1E4884] text-sm group-hover:text-[#30B68E] transition-colors">
                            Universal ID®
                          </p>
                          <p className="text-[11px] text-gray-500 leading-tight">
                            Biometric identity anywhere, anytime
                          </p>
                        </div>
                        <div className="w-6 h-6 rounded-full bg-gray-100 flex items-center justify-center group-hover:bg-[#30B68E] transition-colors">
                          <ArrowRight className="w-3 h-3 text-gray-400 group-hover:text-white transition-colors" />
                        </div>
                      </div>
                    </Link>
                  </div>

                  {/* Mac-style Action Buttons */}
                  <div className="flex items-center gap-2 mt-5 pt-4 border-t border-gray-100">
                    <Button
                      size="sm"
                      className="flex-1 bg-[#1E4884] hover:bg-[#0F3366] text-white rounded-lg h-9 text-xs font-medium"
                    >
                      <Link href="/solutions" className="w-full flex items-center justify-center gap-1.5">
                        Explore All
                        <ArrowRight className="w-3 h-3" />
                      </Link>
                    </Button>
                    <Button
                      size="sm"
                      variant="outline"
                      className="px-4 border-gray-200 text-gray-600 hover:bg-gray-50 hover:text-[#1E4884] rounded-lg h-9 text-xs font-medium"
                    >
                      <Link href="/contact">Contact Sales</Link>
                    </Button>
                  </div>
                </div>
              </div>

              {/* Recent Updates Floating Widget */}
              <RecentUpdatesFloating />
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
