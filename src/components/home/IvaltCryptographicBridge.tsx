import Image from 'next/image';
import IvaltCryptographicBridgeImage from '@/assets/images/home/ivalt-cryptographic-bridge.png';

const IvaltCryptographicBridge = () => {
  return (
    <div className="text-center py-16 px-4">
      <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6">
        iVALT is the Cryptographic Bridge
      </h2>
      <p className="mx-auto mt-4 max-w-3xl text-xl font-bold italic text-teal-primary sm:text-2xl">
        Existing Identity 🡪 Provable Human Authority
      </p>
      <div className="max-w-7xl mx-auto flex justify-center py-6 md:py-12">
        {/* Main Image */}
        <Image
          src={IvaltCryptographicBridgeImage}
          alt="Human Identity Root"
          width={1200}
          height={800}
          className="object-cover h-auto"
        />
      </div>
      <p className="mx-auto mt-4 max-w-3xl text-xl font-bold italic text-primary sm:text-2xl">
        Identity → Provable Authority = Trusted Execution
      </p>
    </div>
  );
};

export default IvaltCryptographicBridge;
