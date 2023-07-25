import React from "react";
import "@styles/Skills.module.scss";

const Skills = () => {
  return (
    <div className="min-h-screen flex w-full p-20" id="skills">
      <div className="min-w-[50%]">
        <h2 className="text-center text-[30px] uppercase font-bold">
          Development
        </h2>
        <div className="w-full h-full mt-3">
          <ul>
            <li
              className="h-8 rounded mb-1 bg-gradient-to-r from-secondary to-gray-600 text-white chart__line"
              style={{ width: "100%" }}
            >
              <div className="flex justify-between w-full">
                <span className="leading-8 ps-2">HTML5 & CSS</span>
                <span className="leading-8 pe-2">100%</span>
              </div>
            </li>
          </ul>
        </div>
      </div>
      <div className="min-w-[50%]">
        <h2 className="text-center text-[30px] uppercase font-bold">
          Productivity and Design
        </h2>
        <div></div>
      </div>
    </div>
  );
};

export default Skills;
