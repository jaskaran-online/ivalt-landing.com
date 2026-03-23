import Image from 'next/image';
import SimpleUserExperienceImage from '@/assets/images/why-ivalt/SimpleUserExperience.jpg';

const SimpleUserExperience = () => {
  return (
    <div className="bg-white py-16 px-4">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-4xl md:text-5xl font-bold text-[#2A3F6C] mb-2">
          Simple User Experience
        </h2>
        <p className="mx-auto mt-4 max-w-3xl text-xl font-bold italic text-teal-primary sm:text-2xl mb-12">
          1-Click Identity for Access and Approval of ACTIONS
        </p>

        <div className="max-w-7xl mx-auto flex justify-center py-6 md:py-12">
          {/* Main Image */}
          <Image
            src={SimpleUserExperienceImage}
            alt="Simple User Experience"
            width={1200}
            height={800}
            className="object-cover h-auto"
          />
        </div>
      </div>
    </div>
  );
};

export default SimpleUserExperience;
