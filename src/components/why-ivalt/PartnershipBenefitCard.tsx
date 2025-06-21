import { FadeInOnScroll } from "../ui/FadeInOnScroll";
import AnimatedShinyCard from "../ui/animated-shiny-card";
import { Button } from "../ui/button";
import { LucideIcon, Check, ArrowRight } from "lucide-react";
import Link from "next/link";

interface PartnershipBenefitCardProps {
  icon: LucideIcon;
  title: string;
  subtitle: string;
  description: string;
  features: string[];
  delay?: number;
}

export function PartnershipBenefitCard({
  icon: Icon,
  title,
  subtitle,
  description,
  features,
  delay = 0,
}: PartnershipBenefitCardProps) {
  return (
    <FadeInOnScroll delay={delay}>
      <AnimatedShinyCard className="border-[0.4px] bg-gradient-to-br from-white to-gray-50/30 hover:from-teal-50/30 hover:to-white transition-all duration-500">
        <div className="flex items-center gap-3 mb-4">
          <div className="p-3 bg-teal-primary/10 rounded-full">
            <Icon className="w-8 h-8 text-teal-primary transition-all duration-300 group-hover:scale-110" />
          </div>
          <div>
            <h3 className="text-xl font-bold text-primary mb-1 transition-colors duration-300 group-hover:text-teal-700">
              {title}
            </h3>
            <p className="text-teal-primary text-sm font-medium">{subtitle}</p>
          </div>
        </div>

        <p className="text-gray-700 mb-6 leading-relaxed">{description}</p>

        <div className="space-y-3 mb-6">
          {features.map((feature, index) => (
            <div key={index} className="flex items-start gap-3">
              <div className="mt-1">
                <Check className="w-5 h-5 text-teal-primary transition-all duration-300 group-hover:scale-110" />
              </div>
              <p className="text-gray-700 font-medium leading-relaxed">
                {feature}
              </p>
            </div>
          ))}
        </div>

        <div className="pt-4 border-t border-gray-100">
          <Button
            variant="shiny"
            size="lg"
            className="w-full rounded-[15px] bg-gradient-to-r from-teal-primary to-teal-primary/90 hover:from-teal-primary/90 hover:to-teal-primary group-hover:shadow-lg transition-all duration-300"
          >
            <Link href="/contact" className="flex items-center gap-2">
              Partner with Us
              <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
          </Button>
        </div>
      </AnimatedShinyCard>
    </FadeInOnScroll>
  );
}
