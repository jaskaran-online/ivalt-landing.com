import Image from 'next/image';
import React from 'react';
import ondemand from '@/assets/images/solutions/on-demand.jpg';

export const OnDemand = () => {
  return (
    <div className="flex justify-center items-center ">
      <Image src={ondemand} alt="On-Demand" width={1100} height={1100} />
    </div>
  );
};
