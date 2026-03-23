'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState, useEffect, useCallback } from 'react';
import { ArrowRight, ChevronLeft, ChevronRight, Sparkles } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

interface Update {
  id: string;
  title: string;
  date: string;
  summary: string;
  imageSrc: string;
  path: string;
}

const recentUpdates: Update[] = [
  {
    id: 'openvpn-webinar',
    title: 'Zero Trust Security: Human-Verified Identity Beyond Passwords',
    date: 'February 11, 2026',
    summary:
      'Join iVALT and OpenVPN for an exclusive webinar on delivering human-verified Zero Trust for your organization, addressing AI deepfakes and impersonation threats.',
    imageSrc: '/press-release/images/ivalt-openvpn-webinar.png',
    path: '/recent-updates/zero-trust-security-human-verified-identity-beyond-passwords',
  },
  {
    id: 'docuid',
    title: 'iVALT Revolutionizes Document Security with Launch of DocuID®',
    date: 'April 22, 2025',
    summary:
      'A groundbreaking document protection service that empowers document owners with unprecedented control over access to their critical information.',
    imageSrc:
      '/press-release/images/ivalt-revolutionizes-document-security-with-launch-of-DocuID-net.png',
    path: '/recent-updates/ivalt-revolutionizes-document-security-with-launch-of-DocuID',
  },
  {
    id: 'ondemand-id',
    title: 'iVALT® Launches OnDemand ID™ with 5+ Factors of Identity Validation',
    date: 'February 10, 2025',
    summary:
      'A groundbreaking universal 5+factor identity product that empowers enterprises with the highest level of identity verification available.',
    imageSrc:
      '/press-release/images/ivalt-launches-ondemand-id-providing-5-factors-of-Identity-validation.png',
    path: '/recent-updates/ondemand-id-providing-5-factors-of-Identity-validation',
  },
  {
    id: 'psono',
    title: 'Psono Selects iVALT for 5-Factor Authentication',
    date: 'January 10, 2025',
    summary:
      'Psono chose iVALT to dramatically upgrade digital security using biometric and industry-leading 5 factor authentication (5FA).',
    imageSrc: '/press-release/images/psono-collaborates-with-ivalt.png',
    path: '/recent-updates/psono-selects-ivalt-5fa',
  },
];

export function RecentUpdatesCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);

  const slideVariants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 300 : -300,
      opacity: 0,
    }),
    center: {
      x: 0,
      opacity: 1,
    },
    exit: (direction: number) => ({
      x: direction < 0 ? 300 : -300,
      opacity: 0,
    }),
  };

  const paginate = useCallback((newDirection: number) => {
    setDirection(newDirection);
    setCurrentIndex(prevIndex => {
      let nextIndex = prevIndex + newDirection;
      if (nextIndex < 0) nextIndex = recentUpdates.length - 1;
      if (nextIndex >= recentUpdates.length) nextIndex = 0;
      return nextIndex;
    });
  }, []);

  // Auto-play
  useEffect(() => {
    const timer = setInterval(() => {
      paginate(1);
    }, 10000);
    return () => clearInterval(timer);
  }, [paginate]);

  const currentUpdate = recentUpdates[currentIndex];

  return (
    <section className="bg-[#FAF9F7] py-12 md:py-16 border-y border-gray-100">
      <div className="max-w-7xl  mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-8">
          <div className="flex items-center gap-3">
            <h2 className="text-2xl md:text-3xl font-bold text-navy-primary">Recent Updates</h2>
            <span className="inline-flex items-center gap-0.5 px-2 py-0.5 text-[10px] font-bold bg-gradient-to-r from-rose-500 to-pink-500 text-white rounded-full shadow-sm">
              <Sparkles className="w-3 h-3" />
              New
            </span>
          </div>
          <Link
            href="/recent-updates"
            className="inline-flex items-center text-teal-primary font-medium hover:underline group"
          >
            View All Updates
            <ArrowRight size={16} className="ml-1 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        {/* Carousel Container */}
        <div className="relative bg-white rounded-2xl shadow-lg overflow-hidden">
          <div className="grid md:grid-cols-2 min-h-[320px]">
            {/* Image Side */}
            <div className="relative h-48 md:h-auto bg-gray-50">
              <AnimatePresence initial={false} custom={direction} mode="wait">
                <motion.div
                  key={currentIndex}
                  custom={direction}
                  variants={slideVariants}
                  initial="enter"
                  animate="center"
                  exit="exit"
                  transition={{
                    x: { type: 'spring', stiffness: 300, damping: 30 },
                    opacity: { duration: 0.2 },
                  }}
                  className="absolute inset-0 p-6 flex items-center justify-center"
                >
                  <Image
                    src={currentUpdate.imageSrc}
                    alt={currentUpdate.title}
                    fill
                    className="object-contain p-4"
                    sizes="(max-width: 768px) 100vw, 50vw"
                    priority
                  />
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Content Side */}
            <div className="p-6 md:p-8 flex flex-col justify-center relative">
              <AnimatePresence initial={false} custom={direction} mode="wait">
                <motion.div
                  key={currentIndex}
                  custom={direction}
                  variants={slideVariants}
                  initial="enter"
                  animate="center"
                  exit="exit"
                  transition={{
                    x: { type: 'spring', stiffness: 300, damping: 30 },
                    opacity: { duration: 0.2 },
                  }}
                >
                  <div className="text-sm text-teal-primary font-semibold mb-2">
                    {currentUpdate.date}
                  </div>
                  <h3 className="text-xl md:text-2xl font-bold text-navy-primary mb-3">
                    {currentUpdate.title}
                  </h3>
                  <p className="text-gray-600 mb-6 line-clamp-3">{currentUpdate.summary}</p>
                  <Link
                    href={currentUpdate.path}
                    className="inline-flex items-center px-5 py-2.5 bg-teal-primary hover:bg-teal-primary/90 text-white font-medium rounded-lg transition-colors duration-200"
                  >
                    Read More
                    <ArrowRight size={16} className="ml-2" />
                  </Link>
                </motion.div>
              </AnimatePresence>

              {/* Navigation Controls */}
              <div className="flex items-center justify-between mt-6 pt-4 border-t border-gray-100">
                {/* Dots */}
                <div className="flex gap-2">
                  {recentUpdates.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => {
                        setDirection(index > currentIndex ? 1 : -1);
                        setCurrentIndex(index);
                      }}
                      className={`w-2 h-2 rounded-full transition-all duration-300 ${
                        index === currentIndex
                          ? 'bg-teal-primary w-6'
                          : 'bg-gray-300 hover:bg-gray-400'
                      }`}
                      aria-label={`Go to slide ${index + 1}`}
                    />
                  ))}
                </div>

                {/* Arrows */}
                <div className="flex gap-2">
                  <button
                    onClick={() => paginate(-1)}
                    className="p-2 rounded-full border border-gray-200 hover:border-teal-primary hover:text-teal-primary transition-colors"
                    aria-label="Previous update"
                  >
                    <ChevronLeft size={20} />
                  </button>
                  <button
                    onClick={() => paginate(1)}
                    className="p-2 rounded-full border border-gray-200 hover:border-teal-primary hover:text-teal-primary transition-colors"
                    aria-label="Next update"
                  >
                    <ChevronRight size={20} />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
