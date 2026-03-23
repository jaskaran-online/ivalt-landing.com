import React from 'react';
import Image from 'next/image';
import userExperience from '@/assets/images/home/id-verify.jpg';

export const UserExperience = () => {
  return (
    <div className="flex justify-center items-center ">
      <Image
        src={userExperience}
        alt="userExperience"
        width={1100}
        height={900}
        className="rounded-lg"
      />
    </div>
  );
};
