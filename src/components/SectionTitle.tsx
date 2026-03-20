import { Heading2 } from "./ui/typography";

type SectionTitleProps = {
  title: string;
  description: string;
  textAlign?: string;
};

export default function SectionTitle({
  title,
  description,
  textAlign = "text-center",
}: SectionTitleProps) {
  return (
    <div className={textAlign + " mb-8"}>
      <Heading2 color="dark-navy" className="text-3xl font-bold">
        {title}
      </Heading2>
      <p className="mt-4 text-xl text-gray-600 max-w-3xl mx-auto">
        {description}
      </p>
    </div>
  );
}
