import SectionTitle from "../SectionTitle";
import { Fingerprint, FileIcon, UserIcon } from "lucide-react";
import Link from "next/link";
import { FadeInOnScroll } from "../ui/FadeInOnScroll";

const solutions = [
  {
    title: "Universal Biometric ID®",
    description:
      "Biometrics as one component of next gen MFA to render stolen credentials worthless.",
    icon: <Fingerprint className="w-8 h-8 text-teal-primary" />,
  },
  {
    title: "On-Demand ID™",
    description:
      "Real-time identity to stop social engineering and AI deepfakes by adding context & dynamic factors.",
    icon: <UserIcon className="w-8 h-8 text-teal-primary" />,
  },
  {
    title: "DocuID™",
    description:
      "Restricted access control through embedded identifiers that must be verified in real-time.",
    icon: <FileIcon className="w-8 h-8 text-teal-primary" />,
  },
];

export default function Solutions() {
  return (
    <section className="py-16 bg-[#FAF9F7]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <FadeInOnScroll>
          <SectionTitle
            title="Our Solutions"
            description="Explore our range of AI-powered products designed to help your business thrive."
          />
        </FadeInOnScroll>
        <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {/* Feature 1 */}
          {solutions.map((solution, index) => (
            <FadeInOnScroll key={solution.title} delay={index * 0.1}>
              <div
                key={solution.title}
                className="bg-white rounded-lg p-8 border-4 border-gray-100 transition-all duration-300"
              >
                <div className="text-accent mb-4">{solution.icon}</div>
                <h3 className="text-xl font-semibold text-primary mb-2">
                  {solution.title}
                </h3>
                <p className="text-gray-600">{solution.description}</p>

                <Link
                  href="/solutions"
                  className="mt-3 inline-flex items-center justify-center px-5 py-2 border border-transparent text-base font-medium rounded-sm text-white bg-primary hover:bg-opacity-90"
                >
                  Learn More
                </Link>
              </div>
            </FadeInOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
}
