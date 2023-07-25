import React from "react";

const BarChart = () => {
  return (
    <li
      className="h-8 rounded mb-1 bg-gradient-to-r from-secondary to-gray-600 text-white"
      style={{ width: "100%" }}
    >
      <div className="flex justify-between w-full">
        <span className="leading-8 ps-2">HTML5 & CSS</span>
        <span className="leading-8 pe-2">100%</span>
      </div>
    </li>
  );
};

export default BarChart;
