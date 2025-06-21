import Container from "../Container";
import SectionTitle from "../SectionTitle";
import Image, { StaticImageData } from "next/image";
import { FadeInOnScroll } from "../ui/FadeInOnScroll";
import { FeatureList } from "../ui/FeatureList";

interface SolutionComponentProps {
  title: string;
  description: string;
  image: StaticImageData;
  imageAlt: string;
  features: string[];
  backgroundColor?: string;
  iconBackgroundColor?: string;
  maxWidth?: string;
  imageWidth?: string;
}

export default function SolutionComponent({
  title,
  description,
  image,
  imageAlt,
  features,
  backgroundColor = "bg-white",
  iconBackgroundColor = "bg-[#FAF9F7]",
  maxWidth = "max-w-7xl",
  imageWidth = "w-full sm:w-[90%] md:w-[80%] lg:w-[70%]",
}: SolutionComponentProps) {
  return (
    <FadeInOnScroll className={`${backgroundColor} py-6 md:py-12`}>
      <Container className={maxWidth}>
        <SectionTitle title={title} description={description} />
        <div className="flex justify-center items-center my-4 mb-6">
          <Image
            src={image}
            alt={imageAlt}
            width={1500}
            height={1500}
            className={`${imageWidth} h-auto object-cover mb-3`}
          />
        </div>
        <div className="flex flex-col items-start justify-center">
          <FeatureList
            features={features}
            iconBackgroundClassName={`${iconBackgroundColor} rounded-full p-2 shadow-sm`}
            animateItems={true}
            animationDelay={2}
            responsiveColumns={true}
          />
        </div>
      </Container>
    </FadeInOnScroll>
  );
}
