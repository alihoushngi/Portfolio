import ExCard from "@components/Shared/ExCard/ExCard";
import Link from "next/link";
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
    <section className="flex flex-col md:min-h-screen pt-14" id="projects">
      <h4 className="font-bold text-xl md:text-4xl text-center w-full p-10">
        My Project and Experiance
      </h4>
      <Link href="#">
        <div className="p-10">
          <ExCard projectData={project} />
        </div>
      </Link>
    </section>
  );
};

export default Projects;
