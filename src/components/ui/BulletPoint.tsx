interface BulletPointProps {
  children: React.ReactNode;
  color?: string;
  size?: "sm" | "md" | "lg";
}

export default function BulletPoint({
  children,
  color = "bg-teal-primary",
  size = "sm",
}: BulletPointProps) {
  const sizeClasses = {
    sm: "w-2 h-2",
    md: "w-3 h-3",
    lg: "w-4 h-4",
  };

  const textSizeClasses = {
    sm: "text-sm",
    md: "text-base",
    lg: "text-lg",
  };

  return (
    <div className="flex items-start gap-3">
      <div className="flex-shrink-0 mt-2">
        <div className={`${sizeClasses[size]} ${color} rounded-full`} />
      </div>
      <div className={`${textSizeClasses[size]} text-gray-600 flex-1`}>
        {children}
      </div>
    </div>
  );
}
