import Image from "next/image";
import React, { useEffect } from "react";
import ali from "@images/ali4.png";
import logo from "@images/Logo.png";
import AOS from "aos";
import "aos/dist/aos.css";

const Header = () => {
  useEffect(() => {
    AOS.init({ duration: 100 });
  }, []);

  return (
    <section className="flex justify-start w-full min-h-screen">
      <div
        className="flex justify-start w-full relative z-50"
        data-aos="fade-right"
      >
        <Image
          src={ali}
          alt="alihoushangi"
          className="bg-contain w-[900px] h-[700px] absolute bottom-0 aspect-[2]"
        />
      </div>
      <div className="mr-48 flex items-center" data-aos="fade-left">
        <Image src={logo} alt="logo" />
      </div>
    </section>
  );
};

export default Header;
