import Link from 'next/link';
import { FadeInOnScroll } from '@/components/ui/FadeInOnScroll';

export function CTA() {
  return (
    <section className="py-14 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <FadeInOnScroll>
          <h2 className="text-2xl lg:text-3xl font-bold text-navy-primary mb-3">
            Connect with iVALT Leadership
          </h2>
          <p className="text-gray-600 mb-7 max-w-xl mx-auto">
            Learn how iVALT&apos;s team is establishing provable human trust. Schedule a demo or
            reach out directly.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              href="/contact"
              className="inline-flex items-center px-7 py-3 bg-teal-primary text-white font-semibold rounded-xl hover:bg-light-teal transition-colors duration-200"
            >
              Schedule a Demo
            </Link>
            <Link
              href="/about"
              className="inline-flex items-center px-7 py-3 border-2 border-navy-primary text-navy-primary font-semibold rounded-xl hover:bg-navy-primary hover:text-white transition-colors duration-200"
            >
              Learn More
            </Link>
          </div>
        </FadeInOnScroll>
      </div>
    </section>
  );
}
