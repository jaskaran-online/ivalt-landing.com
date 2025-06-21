import React from "react";
import { Check } from "lucide-react";
import { FadeInOnScroll } from "./FadeInOnScroll";
import { cn } from "@/lib/utils";

interface FeatureListProps {
  features: string[];
  className?: string;
  itemClassName?: string;
  iconClassName?: string;
  textClassName?: string;
  iconBackgroundClassName?: string;
  animateItems?: boolean;
  animationDelay?: number;
  responsiveColumns?: boolean;
}

export function FeatureList({
  features,
  className,
  itemClassName,
  iconClassName = "text-navy-primary w-6 h-6",
  textClassName = "text-base md:text-lg text-navy-primary text-left",
  iconBackgroundClassName = "bg-[#FAF9F7] rounded-full p-2 shadow-sm",
  animateItems = true,
  animationDelay = 2,
  responsiveColumns = false,
}: FeatureListProps) {
  return (
    <div
      className={cn(
        "space-y-2",
        responsiveColumns
          ? "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4 w-full mx-auto max-w-4xl md:mt-4"
          : "",
        className
      )}
    >
      {features.map((feature, index) => {
        const itemContent = (
          <div
            className={cn(
              "inline-flex items-center justify-start gap-4 mb-2 text-left",
              itemClassName
            )}
          >
            <div
              className={cn(
                "flex items-center justify-center",
                iconBackgroundClassName
              )}
            >
              <Check className={iconClassName} width={24} height={24} />
            </div>
            <p
              className={textClassName}
              dangerouslySetInnerHTML={{ __html: feature }}
            />
          </div>
        );

        if (animateItems) {
          return (
            <FadeInOnScroll delay={index * animationDelay} key={index}>
              {itemContent}
            </FadeInOnScroll>
          );
        }

        return <div key={index}>{itemContent}</div>;
      })}
    </div>
  );
}

// Preset variations for common use cases
export function SimpleFeatureList({
  features,
  className,
}: {
  features: string[];
  className?: string;
}) {
  return (
    <FeatureList
      features={features}
      className={className}
      animateItems={false}
      iconClassName="w-4 h-4 text-teal-primary transition-all duration-300 group-hover:scale-125"
      textClassName="text-sm text-gray-600"
      iconBackgroundClassName=""
    />
  );
}

export function AnimatedFeatureList({
  features,
  className,
}: {
  features: string[];
  className?: string;
}) {
  return (
    <FeatureList
      features={features}
      className={className}
      animateItems={true}
      animationDelay={2}
    />
  );
}
