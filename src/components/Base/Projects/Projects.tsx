import ExCard from "@components/Shared/ExCard/ExCard";
import React, { useEffect, useState } from "react";

export interface projectType {
  fa_name: string;
  en_name: string;
  photo: string;
  fa_des: string;
  en_des: string;
  date: string;
}

export interface ExCardProps {
  projectData: projectType[];
}

const Projects = () => {
  const [project, setProject] = useState<projectType[]>([]);
  useEffect(() => {
    async function fetchProject() {
      const response = await fetch("/project.json");
      const data = await response.json();
      setProject(data);
    }
    fetchProject();
  }, []);

  return (
    <div className="flex flex-col min-h-screen pt-20" id="projects">
      <h2 className="font-bold text-4xl text-center w-full p-10">
        My Project and Experiance
      </h2>
      <div className="p-10">
        <ExCard projectData={project} />
      </div>
    </div>
  );
};

export default Projects;
