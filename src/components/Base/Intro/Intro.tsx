import Image from "next/image";
import React, { useEffect } from "react";
import ali from "@images/ali.png";
import logo from "@images/Logoo.png";
import AOS from "aos";
import "aos/dist/aos.css";

const Intro = () => {
  useEffect(() => {
    AOS.init({ duration: 100 });
  }, []);

  return (
    <section className="justify-end max-md:mt-28 min-h-screen flex max-sm:p-7 max-md:p-7 max-sm:items-center max-md:items-center md:justify-start md:w-full max-sm:flex-col-reverse ">
      <div
        className="md:flex md:justify-start md:w-full md:relative md:z-50 absolute bottom-0"
        data-aos="fade-right"
      >
        <Image
          src={ali}
          alt="alihoushangi"
          className="md:bg-contain md:w-[900px] md:h-[700px] md:absolute bottom-0 md:aspect-square w-[400px] h-[300px] relative"
        />
      </div>
      <div
        className="md:mr-48 md:flex md:items-center m-0 md:m-0 mr-0 "
        // data-aos="fade-left"
      >
        <Image src={logo} alt="logo" />
      </div>
    </section>
  );
};

export default Intro;
