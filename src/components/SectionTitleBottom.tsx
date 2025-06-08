type SectionTitleProps = {
  title: string;
};

export default function SectionTitleBottom({ title }: SectionTitleProps) {
  return (
    <div className="text-center md:mb-16 mb-6">
      <h2 className="md:text-2xl text-xl font-bold text-teal-primary">
        {title}
      </h2>
    </div>
  );
}
