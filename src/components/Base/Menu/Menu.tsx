import React from "react";
import Link from "next/link";
import Image from "next/image";
import Logo from "@images/Logo.png";
import { StyleMenu, StyleMenuList, StyleMenuItem } from "./StyledMenu";

const Menu = () => {
  return (
    <div className="flex p-5 justify-end items-center fixed w-full bg-white">
      <ul className="flex gap-6">
        <li className="transition-all duration-300 ease-in-out hover:font-bold hover:text-primary hover:text-xl hover:underline">
          <Link href="#about">About me</Link>
        </li>
        <li className="transition-all duration-300 ease-in-out hover:font-bold hover:text-primary hover:text-xl hover:underline">
          <Link href="#skills">Skills</Link>
        </li>
        <li className="transition-all duration-300 ease-in-out hover:font-bold hover:text-primary hover:text-xl hover:underline">
          <Link href="#experiences">Experiences</Link>
        </li>
        <li className="transition-all duration-300 ease-in-out hover:font-bold hover:text-primary hover:text-xl hover:underline">
          <Link href="#contact">Contact me</Link>
        </li>
      </ul>
      {/* <div>
        <Image src={Logo} alt="logo" width={130} />
      </div> */}
    </div>
  );
};

export default Menu;
