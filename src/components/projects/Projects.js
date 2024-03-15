import React from "react";
import Title from "../home/Title";
import ProjectsCard from "./ProjectsCard";
import {workBukuais, workCoverbuku, workP1, workP2, workP3, workPoster } from "../../assets";

const Projects = () => {
  return (
    <div>
      <Title title="Recent Projects" subTitle="& Publications"  />
      <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-6 lgl:gap-10">
        <div className="px-6">
          <ProjectsCard
            title="Poster Pos Indonesia"
            category="Poster Design"
            image={workPoster}
          />
          <ProjectsCard
            title="Pepper AI Bot"
            category="Discord Bot"
            image={workP2}
          />
          <ProjectsCard
            title="Eduguard-LMS"
            category="Website"
            image={workP3}
          />
          <ProjectsCard
            title="Biak Tourism-Hub"
            category="Website"
            image={workP1}
          />
        </div>
        <div className="px-6">
          <ProjectsCard
            title="Golang Tutorial"
            category="Book"
            image={workBukuais}
          />
          <ProjectsCard
            title="OpenAi Discord Chatbot"
            category="Book"
            image={workCoverbuku}
          />
        </div>
      </div>
    </div>
  );
};

export default Projects;
