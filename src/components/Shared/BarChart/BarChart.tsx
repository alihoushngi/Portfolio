import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

export interface chartType {
  name: string;
  persent: number;
}

const BarChart = ({ persent, name }: chartType) => {
  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);

  return (
    <li
      className="h-8 rounded mb-4 bg-gradient-to-r from-secondary to-gray-600 text-white animate-moving-bars"
      style={{ width: `${persent}%` }}
      data-aos="fade-up"
    >
      <div className="flex justify-between w-full">
        <span className="leading-8 ps-2" data-aos="fade-right">
          {name}
        </span>
        <span className="leading-8 pe-2" data-aos="fade-left">
          {persent}%
        </span>
      </div>
    </li>
  );
};

export default BarChart;
