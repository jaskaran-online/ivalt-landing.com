import Image from 'next/image';
import humanIdentity from '@/assets/images/home/human-identity.jpg';

export const HumanIdentity = () => {
  return (
    <div className="flex justify-center items-center ">
      <Image
        src={humanIdentity}
        alt="human identity"
        width={1100}
        height={900}
        className="rounded-lg"
      />
    </div>
  );
};
