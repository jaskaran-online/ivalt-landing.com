type SectionTitleProps = {
  title: string;
  description: string;
};

export default function SectionTitle({ title, description }: SectionTitleProps) {
    return <div className="text-center mb-8">
      <h2 className="text-3xl font-bold text-primary">{title}</h2>
      <p className="mt-4 text-lg text-gray-600 max-w-3xl mx-auto">
        {description}
      </p>
    </div>;
}