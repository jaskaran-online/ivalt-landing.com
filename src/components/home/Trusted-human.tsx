import Image from "next/image";
import React from "react";
import trustHuman from "@/assets/images/home/trust-human.jpg";

export const TrustedHuman = () => {
  return (
    <div className="flex justify-center items-center bg-[#FAF9F7] py-4">
      <Image
        src={trustHuman}
        alt="trusted human"
        width={1100}
        height={900}
        className="rounded-lg"
      />
    </div>
  );
};
