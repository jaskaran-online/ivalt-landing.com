import React from 'react';
import Image from 'next/image';
import protectDocoId from '@/assets/images/solutions/docuId-protection.jpg';

export const ProtectionDocuId = () => {
  return (
    <div className="flex justify-center mt-11 items-center ">
      <Image src={protectDocoId} alt="ProtectionDocuId" width={1100} height={1100} />
    </div>
  );
};
