import Image from "next/image";
import React from "react";
import ali from "@images/ali1.png";
import logo from "@images/Logo.png";

const Header = () => {
  return (
    <section className="flex justify-start w-full min-h-screen">
      <div className="flex justify-start w-full relative">
        <Image src={ali} alt="alihoushangi" className="bg-cover" />
      </div>
      <div className="pr-12 flex items-center">
        <Image src={logo} alt="logo" />
      </div>
    </section>
  );
};

export default Header;
