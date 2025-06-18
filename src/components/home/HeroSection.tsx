import { FadeInOnScroll } from "@/components/ui/FadeInOnScroll";
import Link from "next/link";

export default function HeroSection() {
  return (
    <section className="relative md:py-30 py-12 bg-[#FAF9F7]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <FadeInOnScroll>
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-teal-primary/10 text-teal-primary text-sm font-medium mb-6">
              Identity Validation Platform®
            </div>
            <h1 className="text-5xl font-bold tracking-tight text-primary mb-6">
              <span className="underline decoration-teal-primary">
                iVALT – Identity Validation Platform®
              </span>
            </h1>
            <h2 className="text-4xl font-bold text-teal-primary mb-8">
              Authenticate Anywhere® & ANYONE
            </h2>
            <p className="mt-6 md:text-xl text-lg text-gray-600 max-w-4xl mx-auto">
              Revolutionary platform for verified trust across all digital
              interactions — <strong>without passwords</strong>. Validate the
              identity of humans, IoT devices, and AI agents with unprecedented
              security.
            </p>
            <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/solutions"
                className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-white bg-primary hover:bg-opacity-90"
              >
                Learn More
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center px-5 py-3 border border-gray-300 text-base font-medium rounded-md text-primary bg-white hover:bg-gray-50"
              >
                Get Started
              </Link>
            </div>
          </FadeInOnScroll>
        </div>
      </div>
    </section>
  );
}
