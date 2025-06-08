import Link from "next/link";
import Image from "next/image";
// import HeroImage from "@/assets/hero-image.png";
// import HeroImage from "@/assets/hero-image-removebg-preview.png";
import HeroImage from "@/assets/blue-image.png";
import { FadeInOnScroll } from "../ui/FadeInOnScroll";

export default function Hero() {
  return (
    <section className="relative md:py-30 py-12 bg-[#FAF9F7]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:grid lg:grid-cols-2 lg:gap-8 items-center">
          <FadeInOnScroll>
            <h1 className="text-5xl font-bold tracking-tight text-primary mb-6">
              <span className="underline decoration-teal-primary">
                AI-Adaptive{" "}
              </span>{" "}
              Solutions that Redefine Identity
            </h1>
            <p className="mt-6 md:text-xl text-lg text-gray-600 max-w-3xl">
              Real-time Identity to Stop Social Engineering and AI Deepfakes.
              Next Generation Document Access Control. And Everything In
              Between.
            </p>
            <div className="mt-10 flex flex-col sm:flex-row gap-4">
              <Link
                href="/solutions"
                className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-white bg-primary hover:bg-opacity-90"
              >
                Learn More
              </Link>
              <Link
                href="/solutions"
                className="inline-flex items-center justify-center px-5 py-3 border border-gray-300 text-base font-medium rounded-md text-primary bg-white hover:bg-gray-50"
              >
                Solutions
              </Link>
            </div>
          </FadeInOnScroll>
          <div className="mt-12 lg:mt-0">
            <div className="overflow-hidden">
              <Image
                src={HeroImage}
                alt="Hero Image"
                width={500}
                height={500}
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
