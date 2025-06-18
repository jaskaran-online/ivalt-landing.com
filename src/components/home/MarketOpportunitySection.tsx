import { FadeInOnScroll } from "@/components/ui/FadeInOnScroll";
import SectionTitle from "@/components/SectionTitle";
import {
  Shield,
  Smartphone,
  Lock,
  Eye,
  Bot,
  AlertTriangle,
  TrendingUp,
  Globe,
  Zap,
  LucideIcon,
} from "lucide-react";

interface CompetitiveAdvantageProps {
  icon: LucideIcon;
  title: string;
  description: string;
  borderColor: string;
  iconColor: string;
}

function CompetitiveAdvantageCard({
  icon: Icon,
  title,
  description,
  borderColor,
  iconColor,
}: CompetitiveAdvantageProps) {
  return (
    <div className={`bg-gray-50 rounded-lg px-6 py-4 ${borderColor}`}>
      <div className="flex items-start gap-3">
        <Icon className={`h-6 w-6 ${iconColor} mt-1`} />
        <div>
          <p className="font-semibold text-gray-900">{title}</p>
          <p className="text-gray-600 text-sm">{description}</p>
        </div>
      </div>
    </div>
  );
}

interface WhyNowItemProps {
  icon: LucideIcon;
  text: string;
  iconColor: string;
}

function WhyNowItem({ icon: Icon, text, iconColor }: WhyNowItemProps) {
  return (
    <div className="flex items-start gap-3">
      <Icon className={`h-5 w-5 ${iconColor} mt-1`} />
      <p className="text-gray-700">{text}</p>
    </div>
  );
}

export default function MarketOpportunitySection() {
  const competitiveAdvantages = [
    {
      icon: Shield,
      title: "Holistic Identity",
      description: "One platform for Humans, IoT, AI",
      borderColor: "border-l-4 border-teal-primary",
      iconColor: "text-teal-primary",
    },
    {
      icon: Lock,
      title: "25-Factor Security",
      description: "Combines biometrics, location, randomness",
      borderColor: "border-l-4 border-primary",
      iconColor: "text-primary",
    },
    {
      icon: Bot,
      title: "Future-Proof",
      description: "Solves AI, IoT, Deepfake identity risks",
      borderColor: "border-l-4 border-teal-primary",
      iconColor: "text-teal-primary",
    },
    {
      icon: Smartphone,
      title: "User-Friendly",
      description: "No passwords, seamless mobile flow",
      borderColor: "border-l-4 border-primary",
      iconColor: "text-primary",
    },
    {
      icon: Zap,
      title: "Fast Integration",
      description: "OpenAPI, enterprise-ready",
      borderColor: "border-l-4 border-teal-primary",
      iconColor: "text-teal-primary",
    },
  ];

  const whyNowItems = [
    {
      icon: AlertTriangle,
      text: "Legacy identity methods are failing at scale",
      iconColor: "text-primary",
    },
    {
      icon: TrendingUp,
      text: "Exponential growth in AI and IoT deployments",
      iconColor: "text-primary",
    },
    {
      icon: Eye,
      text: "Deepfake attacks becoming mainstream threat",
      iconColor: "text-primary",
    },
    {
      icon: Globe,
      text: "Need for universal identity standards",
      iconColor: "text-primary",
    },
  ];

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <FadeInOnScroll>
          <SectionTitle
            title="Market Opportunity & Competitive Advantage"
            description="Positioned to capture significant market share in the rapidly growing IAM space"
          />
          <div className="flex justify-center mt-6 mb-12">
            <div className="inline-flex items-center px-6 py-3 rounded-full bg-primary text-white text-lg font-bold">
              $20B+ IAM market, growing rapidly with AI and IoT
            </div>
          </div>
        </FadeInOnScroll>

        <div className="grid lg:grid-cols-2 gap-12">
          <FadeInOnScroll>
            <div>
              <h3 className="text-2xl font-bold text-primary mb-6">
                iVALT Competitive Advantages
              </h3>
              <div className="space-y-4">
                {competitiveAdvantages.map((advantage, index) => (
                  <CompetitiveAdvantageCard
                    key={index}
                    icon={advantage.icon}
                    title={advantage.title}
                    description={advantage.description}
                    borderColor={advantage.borderColor}
                    iconColor={advantage.iconColor}
                  />
                ))}
              </div>
            </div>
          </FadeInOnScroll>

          <FadeInOnScroll delay={0.2}>
            <div className="bg-gradient-to-br from-teal-primary/10 to-primary/10 rounded-lg p-8 border-2 border-teal-primary/20">
              <h3 className="text-2xl font-bold text-primary mb-6">
                Why iVALT Now?
              </h3>
              <div className="space-y-4">
                {whyNowItems.map((item, index) => (
                  <WhyNowItem
                    key={index}
                    icon={item.icon}
                    text={item.text}
                    iconColor={item.iconColor}
                  />
                ))}
              </div>
              <div className="mt-6 p-4 bg-white/50 rounded-lg">
                <p className="text-primary font-semibold text-center">
                  iVALT is positioned to become the global standard for identity
                  validation
                </p>
              </div>
            </div>
          </FadeInOnScroll>
        </div>
      </div>
    </section>
  );
}
