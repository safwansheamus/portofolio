import React from "react";
import Title from "../home/Title";
import ProjectsCard from "./ProjectsCard";

const Projects = () => {
  return (
    <div>
      <Title title="Recent Projects" subTitle="& Publications"  />
      <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-6 lgl:gap-10">
        <div className="px-6">
          <ProjectsCard
            title="Poster Pos Indonesia"
            category="Poster Design"
            image="https://raw.githubusercontent.com/safwansheamus/AssetBuatNugas/main/Portofolio/Poster.png"
          />
          <ProjectsCard
            title="Pepper AI Bot"
            category="Discord Bot"
            image="https://raw.githubusercontent.com/safwansheamus/AssetBuatNugas/main/Portofolio/p2.png"
          />
          <ProjectsCard
            title="Eduguard-LMS"
            category="Website"
            image="https://raw.githubusercontent.com/safwansheamus/AssetBuatNugas/main/Portofolio/p3.png"
          />
          <ProjectsCard
            title="Biak Tourism-Hub"
            category="Website"
            image="https://raw.githubusercontent.com/safwansheamus/AssetBuatNugas/main/Portofolio/p1.png"
          />
        </div>
        <div className="px-6">
          <ProjectsCard
            title="Golang Tutorial"
            category="Book"
            image="https://raw.githubusercontent.com/safwansheamus/AssetBuatNugas/main/Portofolio/Sampul%20Buku%20AI.png"
          />
          <ProjectsCard
            title="OpenAi Discord Chatbot"
            category="Book"
            image="https://raw.githubusercontent.com/safwansheamus/AssetBuatNugas/main/Portofolio/coverbuku.jpeg"
          />
        </div>
      </div>
    </div>
  );
};

export default Projects;
