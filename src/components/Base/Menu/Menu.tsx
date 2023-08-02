import React, { useEffect } from "react";
import Link from "next/link";
import AOS from "aos";
// import "aos/dist/aos.css";

const menuItem = [
  {
    name: "About me",
    id: "#about",
  },
  {
    name: "Skills",
    id: "#skills",
  },
  {
    name: "Projects",
    id: "#projects",
  },
  {
    name: "Contact me",
    id: "#contact",
  },
];

const Menu = () => {
  // useEffect(() => {
  //   AOS.init({ duration: 2000 });
  // }, []);

  return (
    <header className="md:flex md:p-5 max-md:p-2 md:justify-end justify-center items-center fixed w-full bg-white z-40 hidden">
      <nav>
        <ul className="flex gap-6">
          {menuItem.map((data, index) => {
            return (
              <li
                key={index}
                className="text-md md:text-md  after:transition-all after:duration-300 after:ease-linear hover:text-primary after:border-b-2 after:border-secondary after:w-full after:block after:scale-0 hover:after:scale-100 after:origin-left after:delay-150"
                // data-aos="fade-right"
                // data-aos-duration="3000"
              >
                <Link href={data.id}>{data.name}</Link>
              </li>
            );
          })}
        </ul>
      </nav>
    </header>
  );
};

export default Menu;
