import Link from 'next/link';
import { FadeInOnScroll } from '@/components/ui/FadeInOnScroll';

export function Hero() {
  return (
    <section className="relative bg-linear-to-br from-dark-navy via-navy-primary to-teal-primary overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 right-0 w-96 h-96 rounded-full bg-teal-primary blur-3xl" />
        <div className="absolute bottom-0 left-0 w-80 h-80 rounded-full bg-navy-primary blur-3xl" />
      </div>
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-28">
        <FadeInOnScroll>
          <p className="text-teal-primary font-semibold text-sm uppercase tracking-widest mb-4">
            Leadership
          </p>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight max-w-3xl">
            Leadership Driving the Future of{' '}
            <span className="text-teal-primary">Human Trust</span>
          </h1>
          <p className="mt-6 text-lg text-white/80 max-w-2xl leading-relaxed">
            iVALT&apos;s leadership team combines deep expertise in cybersecurity, identity
            verification, enterprise infrastructure, compliance, and digital trust innovation.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <Link
              href="/about"
              className="inline-flex items-center px-6 py-3 bg-white text-navy-primary font-semibold rounded-xl hover:bg-teal-primary hover:text-white transition-colors duration-200"
            >
              Meet the Team
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center px-6 py-3 border-2 border-white/40 text-white font-semibold rounded-xl hover:border-white hover:bg-white/10 transition-colors duration-200"
            >
              Contact Leadership
            </Link>
          </div>
        </FadeInOnScroll>
      </div>
    </section>
  );
}
