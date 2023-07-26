import BarChart, { chartType } from "@components/Shared/BarChart/BarChart";
import React, { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
// import SkillsIcone, {
//   skillIcon,
// } from "@components/Shared/SkillsIcone/SkillsIcone";

const Skills = () => {
  const [development, setDevelopment] = useState<chartType[]>([]);
  const [productivity, setProductivity] = useState<chartType[]>([]);
  // const [skills, setSkills] = useState<skillIcon[]>([]);

  useEffect(() => {
    async function fetchDevelopment() {
      const response = await fetch("/development.json");
      const data = await response.json();
      setDevelopment(data);
    }
    fetchDevelopment();

    async function fetchproductivity() {
      const response = await fetch("/productivity.json");
      const data = await response.json();
      setProductivity(data);
    }
    fetchproductivity();

    // async function fetchSkills() {
    //   const response = await fetch("/skills.json");
    //   const data = await response.json();
    //   setSkills(data);
    // }
    // fetchSkills();

    AOS.init({ duration: 3000 });
  }, []);

  return (
    <div className="flex flex-col min-h-screen">
      <div className="flex w-full ps-20 pe-20 pt-20 gap-7" id="skills">
        <div className="min-w-[50%]">
          <h2
            className="text-center text-[30px] uppercase font-bold"
            data-aos="fade-down"
            data-aos-duration="1000"
          >
            Development
          </h2>
          <div className="w-full h-full mt-3">
            <ul>
              {development.map((data, index) => {
                return (
                  <BarChart
                    key={index}
                    name={data.name}
                    persent={data.persent}
                  />
                );
              })}
            </ul>
          </div>
        </div>
        <div className="min-w-[50%]">
          <h2
            className="text-center text-[30px] uppercase font-bold"
            data-aos="fade-down"
            data-aos-duration="1000"
          >
            Productivity and Design
          </h2>
          <div className="w-full h-full mt-3">
            <ul>
              {productivity.map((data, index) => {
                return (
                  <BarChart
                    key={index}
                    name={data.name}
                    persent={data.persent}
                  />
                );
              })}
            </ul>
          </div>
        </div>
      </div>
      {/* <div className="flex flex-wrap p-12">
        {skills.map((data, index) => {
          return (
            <SkillsIcone
              key={index}
              name={data.name}
              persent={data.persent}
              picture={data.picture}
            />
          );
        })}
      </div> */}
    </div>
  );
};

export default Skills;
