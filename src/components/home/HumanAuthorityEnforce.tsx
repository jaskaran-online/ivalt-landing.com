import Image from 'next/image';
import humanBounded from '@/assets/images/home/humanBounded.png';
const HumanAuthorityEnforce = () => {
  return (
    <div className="text-center py-16 px-4">
      <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6">
        Human Authority Enforced at Execution
      </h2>
      <p className="mx-auto mt-4 max-w-4xl text-xl font-bold italic text-teal-primary sm:text-3xl mb-4 md:mb-8">
        Identity Compromise No Longer Becomes Catastrophic
      </p>
      <div className="flex justify-center py-4">
        <div className="relative rounded-lg overflow-hidden">
          <Image
            src={humanBounded}
            alt="Human Authority Enforce"
            width={1200}
            height={700}
            className=" object-cover"
          />
        </div>
      </div>
    </div>
  );
};

export default HumanAuthorityEnforce;
