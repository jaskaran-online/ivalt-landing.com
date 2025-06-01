type SectionTitleProps = {
  title: string;
};

export default function SectionTitleBottom({ title }: SectionTitleProps) {
    return <div className="text-center mb-16">
      <h2 className="text-2xl font-bold text-teal-primary">{title}</h2>
    </div>;
}