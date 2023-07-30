import React, { useEffect } from "react";
import Link from "next/link";
import AOS from "aos";
import "aos/dist/aos.css";

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
    name: "Experiences",
    id: "#experiences",
  },
  {
    name: "Contact me",
    id: "#contact",
  },
];

const Menu = () => {
  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);

  return (
    <div className="flex p-5 justify-end items-center fixed w-full bg-white z-40">
      <ul className="flex gap-6">
        {menuItem.map((data, index) => {
          return (
            <li
              key={index}
              className="after:transition-all after:duration-300 after:ease-linear hover:text-primary after:border-b-2 after:border-secondary after:w-full after:block after:scale-0 hover:after:scale-100 after:origin-left after:delay-150"
              data-aos="fade-right"
              data-aos-duration="3000"
            >
              <Link href={data.id}>{data.name}</Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Menu;
