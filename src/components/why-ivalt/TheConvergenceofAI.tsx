import Image from 'next/image';
import TheConvergenceofAIImage from '@/assets/images/why-ivalt/TheConvergenceofAI.jpg';

const TheConvergenceofAI = () => {
  return (
    <div className="bg-white py-16 px-4">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-4xl md:text-5xl font-bold text-[#2A3F6C] mb-2">
          The Convergence of AI
        </h2>
        <p className="mx-auto mt-4 max-w-3xl text-xl font-bold italic text-teal-primary sm:text-2xl mb-12">
          The Future of Identity Is Provable Human Authority
        </p>

        <div className="max-w-7xl mx-auto flex justify-center py-6 md:py-12">
          {/* Main Image */}
          <Image
            src={TheConvergenceofAIImage}
            alt="The Convergence of AI"
            width={1200}
            height={800}
            className="object-cover h-auto"
          />
        </div>
      </div>
    </div>
  );
};

export default TheConvergenceofAI;
