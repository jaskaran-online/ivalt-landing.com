import { LucideIcon } from "lucide-react";

interface InfoCardProps {
  icon?: LucideIcon;
  title?: string;
  subtitle?: string;
  children: React.ReactNode;
  variant?: "default" | "border" | "shadow" | "highlight";
  iconColor?: string;
  className?: string;
}

export default function InfoCard({
  icon: Icon,
  title,
  subtitle,
  children,
  variant = "default",
  iconColor = "text-teal-primary",
  className = "",
}: InfoCardProps) {
  const variantClasses = {
    default: "bg-white rounded-lg p-6 border border-gray-200",
    border: "bg-white rounded-lg p-8 border-4 border-gray-100",
    shadow: "bg-white rounded-lg p-6 border border-gray-200 shadow-sm",
    highlight: "bg-white rounded-lg p-8 border-4 border-teal-primary/20",
  };

  return (
    <div
      className={`${variantClasses[variant]} transition-all duration-300 ${className}`}
    >
      {Icon && (
        <div className="mb-4">
          <Icon className={`w-8 h-8 ${iconColor}`} />
        </div>
      )}

      {title && (
        <h3 className="text-xl font-semibold text-primary mb-2">{title}</h3>
      )}

      {subtitle && <p className="text-gray-600 mb-4 text-sm">{subtitle}</p>}

      {children}
    </div>
  );
}
