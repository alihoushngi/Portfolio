import BarChart from "@components/Shared/BarChart/BarChart";
import React, { useEffect, useState } from "react";

const Skills = () => {
  const [development, setDevelopment] = useState([]);
  const [productivity, setProductivity] = useState([]);
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
  }, []);
  console.log(development);
  console.log(productivity);

  return (
    <div className="min-h-screen flex w-full p-20" id="skills">
      <div className="min-w-[50%]">
        <h2 className="text-center text-[30px] uppercase font-bold">
          Development
        </h2>
        <div className="w-full h-full mt-3">
          <ul>
            <BarChart />
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
