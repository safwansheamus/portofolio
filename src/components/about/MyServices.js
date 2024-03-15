import React from "react";
import { MdOutlineSecurity } from "react-icons/md";
import { GiConsoleController } from "react-icons/gi"
import { SiAntdesign } from "react-icons/si";
import { BiCodeAlt } from "react-icons/bi";
import ServicesCard from "./ServicesCard";

const MyPassions = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2">
      <ServicesCard
        icons={<BiCodeAlt />}
        title="Web Development"
        subTitle="I am interested in developing a React project, and now I am starting to learn Next.js."
      />
      <ServicesCard
        icons={<SiAntdesign />}
        title="Graphic Design"
        subTitle="I am interested in graphic design, such as poster and logo design."
      />
      <ServicesCard
        icons={<MdOutlineSecurity/>}
        title="Cyber Security Technician"
        subTitle="I have always wanted to become a hacker because the awareness of the importance of cybersecurity in my country is still relatively low, which drives me to become a cyber security professional."
      />
       <ServicesCard
        icons={<GiConsoleController />}
        title="Gaming"
        subTitle="I have a strong interest in the gaming world, especially PC games. I spend a lot of time playing PC games, and I also enjoy playing some mobile games."
      />
    </div>
  );
};

export default MyPassions;
