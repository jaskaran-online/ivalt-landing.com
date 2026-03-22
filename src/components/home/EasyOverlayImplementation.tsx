import Image from 'next/image';
import EasyOverlayImplementationImage from '@/assets/images/home/easy-overlay-implementation.png';

const EasyOverlayImplementation = () => {
  return (
    <div className="text-center py-16 px-4">
      <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6">
        Easy Overlay Implementation
      </h2>
      <div className="max-w-7xl mx-auto flex justify-center py-6 md:py-12">
        {/* Main Image */}
        <Image
          src={EasyOverlayImplementationImage}
          alt="Human Identity Root"
          width={1200}
          height={800}
          className="object-cover h-auto"
        />
      </div>
      <p className="mx-auto mt-4 max-w-3xl text-xl font-bold italic text-primary sm:text-2xl">
        No Changes to Infrastructure – No Software Upgrades
      </p>
    </div>
  );
};

export default EasyOverlayImplementation;
