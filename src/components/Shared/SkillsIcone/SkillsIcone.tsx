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
      <div className="w-[130px] h-[130px] relative flex items-center">
        <Image
          src={picture}
          alt={name}
          width={300}
          height={300}
          className="absolute object-cover"
        />
      </div>
      <div>{name}</div>
    </div>
  );
};

export default SkillsIcone;
