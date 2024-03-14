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
        subTitle="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Hic, provident. Accusamus at dolorem expedita dicta."
      />
      <ServicesCard
        icons={<SiAntdesign />}
        title="Graphic Design"
        subTitle="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Hic, provident. Accusamus at dolorem expedita dicta."
      />
      <ServicesCard
        icons={<MdOutlineSecurity/>}
        title="Cyber Security Technician"
        subTitle="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Hic, provident. Accusamus at dolorem expedita dicta."
      />
       <ServicesCard
        icons={<GiConsoleController />}
        title="Gaming"
        subTitle="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Hic, provident. Accusamus at dolorem expedita dicta."
      />
    </div>
  );
};

export default MyPassions;
