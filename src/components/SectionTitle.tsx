import { Heading2 } from "./ui/typography";

type SectionTitleProps = {
  title: string;
  description: string;
};

export default function SectionTitle({ title, description }: SectionTitleProps) {
    return <div className="text-center mb-8">
      <Heading2 color="navy-primary" className="text-3xl font-bold">{title}</Heading2>
      <p className="mt-4 text-lg text-gray-600 max-w-3xl mx-auto">
        {description}
      </p>
    </div>;
}