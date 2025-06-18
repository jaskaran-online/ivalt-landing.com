import { FadeInOnScroll } from "@/components/ui/FadeInOnScroll";
import SectionTitle from "@/components/SectionTitle";
import { Target, Zap, Bot, Globe, Users, Shield } from "lucide-react";

export default function VisionSection() {
  const futureApplications = [
    {
      icon: Bot,
      text: "AI Agent Authentication & Authorization",
      color: "text-teal-primary",
    },
    {
      icon: Globe,
      text: "IoT Device Identity Management",
      color: "text-teal-primary",
    },
    {
      icon: Users,
      text: "Advanced Human-AI Interaction Security",
      color: "text-teal-primary",
    },
    {
      icon: Shield,
      text: "Cross-Platform Identity Verification",
      color: "text-teal-primary",
    },
  ];

  return (
    <section className="py-16 bg-[#FAF9F7]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <FadeInOnScroll>
          <SectionTitle
            title="Vision: Future Applications"
            description="Extensible platform designed for future-proof identity validation"
          />
        </FadeInOnScroll>

        <div className="mt-12 grid lg:grid-cols-2 gap-12 items-center">
          <FadeInOnScroll>
            <div className="bg-white rounded-lg p-8 border-4 border-teal-primary/20">
              <div className="flex items-center gap-3 mb-6">
                <Target className="h-8 w-8 text-teal-primary" />
                <h3 className="text-2xl font-bold text-teal-primary">
                  Platform Extensibility
                </h3>
              </div>
              <p className="text-gray-700 text-lg mb-6">
                iVALT&apos;s platform is extensible beyond the initial three
                applications—designed for{" "}
                <strong>future-proof identity validation</strong> across
                emerging AI, IoT, and human interaction scenarios.
              </p>
              <div className="bg-teal-primary/10 p-6 rounded-lg">
                <div className="flex items-center gap-3">
                  <Zap className="h-6 w-6 text-teal-primary" />
                  <div>
                    <p className="font-semibold text-teal-primary">
                      Fast Integration
                    </p>
                    <p className="text-gray-600 text-sm">
                      OpenAPI, enterprise-ready
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </FadeInOnScroll>

          <FadeInOnScroll delay={0.2}>
            <div className="space-y-6">
              {futureApplications.map((app, index) => (
                <div
                  key={index}
                  className="bg-white rounded-lg p-6 border border-gray-200 shadow-sm"
                >
                  <div className="flex items-center gap-3">
                    <app.icon className={`h-6 w-6 ${app.color}`} />
                    <p className="text-gray-700">{app.text}</p>
                  </div>
                </div>
              ))}
            </div>
          </FadeInOnScroll>
        </div>
      </div>
    </section>
  );
}
