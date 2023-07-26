import React, { useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import Logo from "@images/Logo.png";
import { StyleMenu, StyleMenuList, StyleMenuItem } from "./StyledMenu";
import AOS from "aos";
import "aos/dist/aos.css";

const Menu = () => {
  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);

  return (
    <div className="flex p-5 justify-end items-center fixed w-full bg-white z-40">
      <ul className="flex gap-6">
        <li
          className="transition-all duration-300 ease-in-out hover:font-bold hover:text-primary hover:text-xl hover:underline"
          data-aos="fade-right"
          data-aos-duration="3000"
        >
          <Link href="#about">About me</Link>
        </li>
        <li
          className="transition-all duration-300 ease-in-out hover:font-bold hover:text-primary hover:text-xl hover:underline"
          data-aos="fade-right"
          data-aos-duration="5000"
        >
          <Link href="#skills">Skills</Link>
        </li>
        <li
          className="transition-all duration-300 ease-in-out hover:font-bold hover:text-primary hover:text-xl hover:underline"
          data-aos="fade-right"
          data-aos-duration="7000"
        >
          <Link href="#experiences">Experiences</Link>
        </li>
        <li
          className="transition-all duration-300 ease-in-out hover:font-bold hover:text-primary hover:text-xl hover:underline"
          data-aos="fade-right"
          data-aos-duration="9000"
        >
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
