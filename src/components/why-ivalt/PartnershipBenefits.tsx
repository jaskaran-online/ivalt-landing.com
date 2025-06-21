import { FadeInOnScroll } from "../ui/FadeInOnScroll";
import SectionTitle from "../SectionTitle";
import { PartnershipBenefitCard } from "./PartnershipBenefitCard";
import {
  Shield,
  MousePointer,
  TrendingUp,
  Users,
  DollarSign,
  BarChart3,
} from "lucide-react";

const Benefits = [
  {
    icon: Shield,
    title: "Fraud Reduction",
    subtitle: "Across the Board",
    description:
      "Comprehensive security through multiple authentication factors that make stolen credentials worthless.",
    features: [
      "Biometric authentication with face and fingerprint recognition",
      "25+ security factors for maximum protection",
      "Real-time verification and threat detection",
    ],
    delay: 0,
  },
  {
    icon: MousePointer,
    title: "Frictionless UX",
    subtitle: "User Experience",
    description:
      "Simplified authentication process that enhances user satisfaction while maintaining security.",
    features: [
      "1-Click authentication",
      "No passwords or complex procedures required",
      "Seamless integration",
    ],
    delay: 0.1,
  },
  {
    icon: TrendingUp,
    title: "New Revenue Opportunities",
    subtitle: "Business Growth",
    description:
      "Unlock new revenue streams with premium identity services and advanced security solutions.",
    features: [
      "Premium Identity-as-a-Service offerings",
      "Advanced Document Security solutions",
    ],
    delay: 0.2,
  },
  {
    icon: Users,
    title: "All Key Use Cases",
    subtitle: "Comprehensive Coverage",
    description:
      "Support for all critical business operations and customer interaction workflows.",
    features: [
      "Alert responses",
      "User actions",
      "Customer service",
      "Data access",
    ],
    delay: 0.3,
  },
  {
    icon: DollarSign,
    title: "Simple Business Model",
    subtitle: "Transparent Pricing",
    description:
      "Straightforward pricing structure that makes budgeting and scaling predictable.",
    features: [
      "Per user per month transparent pricing",
      "No hidden fees or complex licensing",
      "Scalable plans for businesses of all sizes",
    ],
    delay: 0.4,
  },
  {
    icon: BarChart3,
    title: "Constant Optimization",
    subtitle: "AI-Driven Enhancement",
    description:
      "Continuous improvement through machine learning algorithms that adapt to your business needs.",
    features: [
      "Per use case optimization and customization",
      "AI/ML models that learn and improve over time",
    ],
    delay: 0.5,
  },
];

export default function PartnershipBenefits() {
  return (
    <section className="py-16 bg-gradient-to-br from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <FadeInOnScroll>
          <SectionTitle
            title="Benefits We Bring to a Partnership"
            description="Transform your business with our comprehensive identity validation platform that delivers measurable value across multiple dimensions."
          />
        </FadeInOnScroll>

        <div className="mt-12 grid gap-6 md:gap-8 md:grid-cols-2 lg:grid-cols-3">
          {Benefits.map((benefit, index) => (
            <PartnershipBenefitCard
              key={index}
              icon={benefit.icon}
              title={benefit.title}
              subtitle={benefit.subtitle}
              description={benefit.description}
              features={benefit.features}
              delay={benefit.delay}
            />
          ))}
        </div>

        <FadeInOnScroll delay={0.7}>
          <div className="mt-12 bg-gradient-to-r from-teal-primary/10 to-teal-primary/5 p-8 rounded-2xl border-2 border-teal-primary/20 text-center backdrop-blur-sm">
            <h3 className="text-3xl font-bold text-primary mb-4">
              7 Patents Granted, 10+ Patents Pending, 4 Registered Trademarks
            </h3>
            <p className="text-gray-700 text-lg mb-6 max-w-3xl mx-auto">
              iVALT is a leader in the field of identity verification, with a
              strong portfolio of patents and trademarks.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/contact"
                className="inline-flex items-center px-8 py-3 bg-teal-primary text-white font-semibold rounded-full hover:bg-teal-primary/90 transition-colors duration-300 shadow-lg hover:shadow-xl"
              >
                Start Partnership Discussion
              </a>
              <a
                href="/solutions"
                className="inline-flex items-center px-8 py-3 bg-white text-teal-primary font-semibold rounded-full border-2 border-teal-primary hover:bg-teal-primary hover:text-white transition-colors duration-300"
              >
                Explore Solutions
              </a>
            </div>
          </div>
        </FadeInOnScroll>
      </div>
    </section>
  );
}
