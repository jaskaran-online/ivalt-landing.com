import Image from 'next/image';
import ProvenAuthorityImage from "@/assets/images/home/human-bound.png"

const HumanAuthorityMustProven = () => {
    return (
      <div className="text-center py-16 px-4">
        <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6">
          Human Authority Must be Proven at Execution
        </h2>
        <p className="mx-auto mt-4 max-w-3xl text-xl font-bold italic text-teal-primary sm:text-2xl">
          From Identity to Provable (and Trusted) Authority
        </p>
        <div className="flex justify-center py-4">
          <div className="relative rounded-lg overflow-hidden ">
            <Image
              src={ProvenAuthorityImage}
              alt="Human Authority Must be Proven at Execution"
              width={1200}
              height={700}
              className="object-cover"
            />
          </div>
        </div>
      </div>
    );
};

export default HumanAuthorityMustProven;