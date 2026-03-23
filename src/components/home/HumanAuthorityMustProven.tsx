import Image from 'next/image';
import ProvenAuthorityImage from "@/assets/images/home/human-bound.png"

const HumanAuthorityMustProven = () => {
    return (
      <div className="text-center py-16 px-4">
        <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6">
          Human Authority Must be Proven at Execution
        </h2>
        <p className="mx-auto mt-4 max-w-3xl text-xl font-bold italic text-teal-primary sm:text-3xl">
          From Identity to Provable (and Trusted) Authority
        </p>
        <div className="flex justify-center py-4 mt-4">
          <div className="relative rounded-lg overflow-hidden ">
            <div className=" border-5 max-w-4xl mx-auto p-6">
              <h1 className="text-2xl font-bold text-primary mb-4">
                Human-Bound Identity™ (Factors)
              </h1>
              <Image
                src={ProvenAuthorityImage}
                alt="Human Authority Must be Proven at Execution"
                width={1200}
                height={700}
                className="object-cover"
              />
            </div>
            <h2 className="text-2xl font-bold text-primary mb-4 max-w-3xl mt-6 mx-auto">
              Proven Human Authority Before Risking Actions With 1-Click on Your Mobile Phone
            </h2>
          </div>
        </div>
      </div>
    );
};

export default HumanAuthorityMustProven;