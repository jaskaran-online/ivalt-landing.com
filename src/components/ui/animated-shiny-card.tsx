import { cn } from "@/lib/utils";

const AnimatedShinyCard = ({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) => {
  return (
    <div
      className={cn(
        "group relative cursor-pointer",
        "bg-white dark:bg-black",
        "transition-all duration-300",
        "hover:scale-[1.02] hover:shadow-xl",
        className
      )}
    >
      <div
        className={cn(
          "absolute -inset-0.5 z-0 rounded-lg bg-gradient-to-b from-[whitesmoke] to-[#FAF9F7] opacity-0 transition-all duration-1000 group-hover:opacity-100",
          "blur-xl"
        )}
      />
      <div className="relative z-10 h-full overflow-hidden rounded-[7px] bg-white p-8 dark:bg-black">
        {children}
      </div>
    </div>
  );
};

export default AnimatedShinyCard;
