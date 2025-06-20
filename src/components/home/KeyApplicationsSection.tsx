import { FadeInOnScroll } from "@/components/ui/FadeInOnScroll";
import SectionTitle from "@/components/SectionTitle";
import Link from "next/link";
import { FileText, Eye, Fingerprint, LucideIcon, Check } from "lucide-react";
import AnimatedShinyCard from "@/components/ui/animated-shiny-card";
import { Button } from "../ui/button";

interface ApplicationCardProps {
  icon: LucideIcon;
  title: string;
  subtitle: string;
  description: string;
  features: string[];
  delay?: number;
}

function ApplicationCard({
  icon: Icon,
  title,
  subtitle,
  description,
  features,
  delay = 0,
}: ApplicationCardProps) {
  return (
    <FadeInOnScroll delay={delay}>
      <AnimatedShinyCard className="border-[0.4px]">
        <div className="text-accent mb-4">
          <Icon className="w-8 h-8 text-teal-primary transition-all duration-300 group-hover:scale-110 " />
        </div>
        <h3 className="text-xl font-semibold text-primary mb-2 transition-colors duration-300 group-hover:text-teal-700">
          {title}
        </h3>
        <p className="text-gray-600 mb-2 text-sm">{subtitle}</p>
        <p className="text-gray-600 mb-4">{description}</p>
        <div className="space-y-2 mb-4">
          {features.map((feature, index) => (
            <div key={index} className="flex items-center gap-3">
              <div>
                <Check className="w-4 h-4 text-teal-primary transition-all duration-300 group-hover:scale-125" />
                {/* <div className="w-2 h-2 bg-teal-primary rounded-full transition-all duration-300 group-hover:scale-125" /> */}
              </div>
              <p
                className="text-sm text-gray-600"
                dangerouslySetInnerHTML={{ __html: feature }}
              />
            </div>
          ))}
        </div>
        <Button
          variant="shiny"
          size="lg"
          className="rounded-[15px]  hover:cursor-pointer group-hover:bg-teal-primary hover:bg-teal-primary"
        >
          <Link href="/solutions">Learn More</Link>
        </Button>
      </AnimatedShinyCard>
    </FadeInOnScroll>
  );
}

export default function KeyApplicationsSection() {
  const applications = [
    {
      icon: FileText,
      title: "DocuID™",
      subtitle: "Secure Document Access Control",
      description:
        "Authors embed authorized recipients (via mobile #) in encrypted documents.",
      features: [
        "Recipients verify identity via multi-factor authentication",
        "Full Digital Rights Management (DRM)",
        "Prevents forwarding, printing, screenshots",
      ],
      delay: 0,
    },
    {
      icon: Eye,
      title: "On-Demand ID™",
      subtitle: "Combatting Social Engineering & Deepfakes",
      description: "Real-time identity verification within our mobile app.",
      features: [
        "Instantly verify identity of suspicious calls/messages",
        "Biometrics, registered device and location",

        "The only solution worldwide to truly defeat deepfake & social engineering attacks",
      ],
      delay: 0.1,
    },
    {
      icon: Fingerprint,
      title: "Universal Biometric ID®",
      subtitle: "Enterprise Security",
      description: "Enhances corporate Identity and Access Management (IAM).",
      features: [
        'When an employee logs in, iVALT "pings" their mobile',
        "Real-time biometric and contextual verification",
      ],
      delay: 0.2,
    },
  ];

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <FadeInOnScroll>
          <SectionTitle
            title="Foundational Applications"
            description="Three core applications transforming digital security"
          />
        </FadeInOnScroll>

        <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {applications.map((app, index) => (
            <ApplicationCard
              key={index}
              icon={app.icon}
              title={app.title}
              subtitle={app.subtitle}
              description={app.description}
              features={app.features}
              delay={app.delay}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
