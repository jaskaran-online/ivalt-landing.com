import React from 'react';
import Image from 'next/image';
import ivaultBridge from '@/assets/images/home/ivault-bridge.jpg';

export const IvaultBridge = () => {
  return (
    <div className="flex justify-center items-center ">
      <Image
        src={ivaultBridge}
        alt="human identity"
        width={1100}
        height={900}
        className="rounded-lg"
      />
    </div>
  );
};
