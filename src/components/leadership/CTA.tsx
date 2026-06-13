'use client';

import Link from 'next/link';
import { motion, type Variants } from 'motion/react';

const containerVariants: Variants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.12, delayChildren: 0.1 },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: 'easeOut' },
  },
};

export function CTA() {
  return (
    <section className="relative py-20 lg:py-24 overflow-hidden bg-gradient-to-b from-white via-white to-[#f5fcf9]">
      <div
        aria-hidden="true"
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 size-[600px] rounded-full bg-teal-primary/[0.03] blur-3xl pointer-events-none"
      />

      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-60px' }}
        className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center"
      >
        <motion.p
          variants={itemVariants}
          className="text-teal-primary font-semibold text-sm uppercase tracking-widest mb-4"
        >
          Connect
        </motion.p>
        <motion.h2
          variants={itemVariants}
          className="text-3xl lg:text-[2.5rem] font-bold text-navy-primary leading-tight mb-4 text-balance"
        >
          Connect with iVALT Leadership
        </motion.h2>
        <motion.p
          variants={itemVariants}
          className="text-gray-500 mb-9 max-w-lg mx-auto leading-relaxed text-pretty"
        >
          Learn how iVALT&apos;s team is establishing provable human trust. Schedule a demo or
          reach out directly.
        </motion.p>
        <motion.div variants={itemVariants} className="flex flex-wrap justify-center gap-4">
          <Link
            href="/contact"
            className="inline-flex items-center px-7 py-3 bg-teal-primary text-white font-semibold rounded-xl shadow-sm transition-all duration-200 hover:shadow-md hover:shadow-teal-primary/20 hover:-translate-y-0.5 active:translate-y-0"
          >
            Schedule a Demo
          </Link>
          <Link
            href="/about"
            className="inline-flex items-center px-7 py-3 border-2 border-navy-primary text-navy-primary font-semibold rounded-xl transition-all duration-200 hover:bg-navy-primary hover:text-white hover:-translate-y-0.5 active:translate-y-0"
          >
            Learn More
          </Link>
        </motion.div>
      </motion.div>
    </section>
  );
}
