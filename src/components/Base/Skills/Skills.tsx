import BarChart, { chartType } from "@components/Shared/BarChart/BarChart";
import React, { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import SkillsIcone, {
  skillIcon,
} from "@components/Shared/SkillsIcone/SkillsIcone";

const Skills = () => {
  const [development, setDevelopment] = useState<chartType[]>([]);
  const [productivity, setProductivity] = useState<chartType[]>([]);
  const [skills, setSkills] = useState<skillIcon[]>([]);

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

    async function fetchSkills() {
      const response = await fetch("/skills.json");
      const data = await response.json();
      setSkills(data);
    }
    fetchSkills();

    AOS.init({ duration: 3000 });
  }, []);

  return (
    <section
      className="flex flex-col md:min-h-screen pt-14 max-md:p-3"
      id="skills"
    >
      <div className="flex w-full gap-7">
        <h3 className="font-bold text-xl md:text-4xl text-center w-full md:pt-3 pt-11">
          My skills
        </h3>
      </div>
      <div className="flex flex-wrap gap-4 md:p-12 md:gap-14 justify-center">
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
      </div>
    </section>
  );
};

export default Skills;
