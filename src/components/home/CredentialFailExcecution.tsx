import Image from 'next/image';
import Credential from '@/assets/images/home/credential.png';

const CredentialFailExcecution = () => {
    return (
      <div className="text-center py-16 px-4">
        <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6">
          Credential Fail at Execution
        </h2>
        <p className="mx-auto mt-4 max-w-3xl text-xl font-bold italic text-teal-primary sm:text-2xl">
          AI Exponentially Amplifies this Proven Weakness
        </p>
        <div className="flex justify-center">
          <div className=" rounded-lg overflow-hidden">
            <Image
              src={Credential}
              alt="Credential Fail at Execution"
              width={1000}
              height={700}
              className=" "
            />
          </div>
        </div>
      </div>
    );
};

export default CredentialFailExcecution;