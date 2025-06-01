export default function Container({ children, className }: { children: React.ReactNode, className?: string }) {
  return <div className={` mx-auto px-4 sm:px-6 lg:px-8 py-12 ${className}`}>{children}</div>;
}