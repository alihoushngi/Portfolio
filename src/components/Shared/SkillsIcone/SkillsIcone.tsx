import Image from "next/image";
import React from "react";

export interface skillIcon {
  name: string;
  picture: string;
  persent: number;
}

const SkillsIcone = ({ name, persent, picture }: skillIcon) => {
  return (
    <div className="flex justify-center pt-9 flex-col gap-8 items-center ">
      <div className="md:max-w-[130px] md:max-h-[130px] md:min-w-[130px] md:min-h-[130px] w-12 h-12 relative flex items-center">
        <Image
          src={picture}
          alt={name}
          width={300}
          height={300}
          className="absolute object-contain"
        />
      </div>
      <div className="text-sm">{name}</div>
    </div>
  );
};

export default SkillsIcone;
