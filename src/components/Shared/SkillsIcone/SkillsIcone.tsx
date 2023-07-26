import Image from "next/image";
import React from "react";

export interface skillIcon {
  name: string;
  picture: string;
  persent: number;
}

const SkillsIcone = ({ name, persent, picture }: skillIcon) => {
  return (
    <div className="flex justify-center pt-9">
      <div className="w-[100px] h-[100px] relative">
        <Image
          src={picture}
          alt={name}
          width={100}
          height={100}
          className="rounded-[100%] absolute w-[100px] h-[100px] object-cover"
        />
        <div
          className={`w-full bg-secondary h-full rounded-[100%] absolute opacity-${persent}`}
        ></div>
      </div>
      {/* <div>{name}</div> */}
    </div>
  );
};

export default SkillsIcone;
