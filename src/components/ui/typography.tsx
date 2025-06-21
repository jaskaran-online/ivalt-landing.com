import React from "react";
import { cn } from "@/lib/utils";

// Typography variant types
type TypographyVariant = 
  | "h1" 
  | "h2" 
  | "h3" 
  | "h4" 
  | "h5" 
  | "h6"
  | "body1"
  | "body2"
  | "caption"
  | "overline";

type ColorVariant = 
  | "default"
  | "teal-primary"
  | "navy-primary" 
  | "light-teal"
  | "dark-navy"
  | "muted"
  | "accent";

type WeightVariant = 
  | "light"
  | "normal" 
  | "medium"
  | "semibold"
  | "bold";

interface TypographyProps {
  variant?: TypographyVariant;
  color?: ColorVariant;
  weight?: WeightVariant;
  className?: string;
  children: React.ReactNode;
  as?: keyof JSX.IntrinsicElements;
}

const variantStyles: Record<TypographyVariant, string> = {
  h1: "text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl leading-tight tracking-tight",
  h2: "text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl leading-tight tracking-tight", 
  h3: "text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl leading-snug tracking-tight",
  h4: "text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl leading-snug tracking-tight",
  h5: "text-base sm:text-lg md:text-xl lg:text-xl xl:text-2xl leading-snug",
  h6: "text-sm sm:text-base md:text-lg lg:text-lg xl:text-xl leading-snug",
  body1: "text-sm sm:text-base leading-relaxed",
  body2: "text-xs sm:text-sm leading-relaxed",
  caption: "text-xs leading-normal",
  overline: "text-xs uppercase tracking-wider leading-normal",
};

const colorStyles: Record<ColorVariant, string> = {
  default: "text-foreground",
  "teal-primary": "text-teal-primary",
  "navy-primary": "text-navy-primary",
  "light-teal": "text-light-teal", 
  "dark-navy": "text-dark-navy",
  muted: "text-muted-foreground",
  accent: "text-accent-foreground",
};

const weightStyles: Record<WeightVariant, string> = {
  light: "font-light",
  normal: "font-normal",
  medium: "font-medium", 
  semibold: "font-semibold",
  bold: "font-bold",
};

const defaultElements: Record<TypographyVariant, keyof JSX.IntrinsicElements> = {
  h1: "h1",
  h2: "h2", 
  h3: "h3",
  h4: "h4",
  h5: "h5",
  h6: "h6",
  body1: "p",
  body2: "p",
  caption: "span",
  overline: "span",
};

export function Typography({
  variant = "body1",
  color = "default", 
  weight = "normal",
  className,
  children,
  as,
  ...props
}: TypographyProps) {
  const Component = as || defaultElements[variant];
  
  return (
    <Component
      className={cn(
        variantStyles[variant],
        colorStyles[color],
        weightStyles[weight],
        className
      )}
      {...props}
    >
      {children}
    </Component>
  );
}

// Specific component shortcuts
export function Heading1(props: Omit<TypographyProps, "variant">) {
  return <Typography variant="h1" weight="bold" {...props} />;
}

export function Heading2(props: Omit<TypographyProps, "variant">) {
  return <Typography variant="h2" weight="bold" {...props} />;
}

export function Heading3(props: Omit<TypographyProps, "variant">) {
  return <Typography variant="h3" weight="semibold" {...props} />;
}

export function Heading4(props: Omit<TypographyProps, "variant">) {
  return <Typography variant="h4" weight="semibold" {...props} />;
}

export function Heading5(props: Omit<TypographyProps, "variant">) {
  return <Typography variant="h5" weight="medium" {...props} />;
}

export function Heading6(props: Omit<TypographyProps, "variant">) {
  return <Typography variant="h6" weight="medium" {...props} />;
}

export function BodyText(props: Omit<TypographyProps, "variant">) {
  return <Typography variant="body1" {...props} />;
}

export function SmallText(props: Omit<TypographyProps, "variant">) {
  return <Typography variant="body2" {...props} />;
}

export function Caption(props: Omit<TypographyProps, "variant">) {
  return <Typography variant="caption" color="muted" {...props} />;
}

export function Overline(props: Omit<TypographyProps, "variant">) {
  return <Typography variant="overline" color="muted" weight="medium" {...props} />;
} 