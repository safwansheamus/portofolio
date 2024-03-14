import React from "react";

const AboutMe = () => {
  return (
    <div className="flex flex-col md:flex-row pb-6">
      <div className="w-full md:w-1/2 text-zinc-400 px-6 border-r-[1px] border-r-zinc-800 flex items-center">
        <div className="py-6">
          <h2 className="font-semibold mb-1">Hello! I'm Muh Safwan</h2>
          <p className="text-base leading-6 ">
          Iam from Bone, South Sulawesi. Currently, I am pursuing a Diploma 4 (D4) in Computer Engineering at the University of Logistics and International Business in Bandung, now in my seventh semester. I am passionate about technology, specifically in the areas of cyber security, web development, and graphic design.
          </p>
        </div>
      </div>
      <div className="w-full md:w-1/2 p-6">
        <ul className="flex flex-col gap-1">
          <li className="aboutRightLi">
            <span className="aboutRightLiSpan">Age:</span>
            22
          </li>
          <li className="aboutRightLi">
            <span className="aboutRightLiSpan">Residence:</span>
            Indonesia
          </li>
          <li className="aboutRightLi">
            <span className="aboutRightLiSpan">Freelance:</span>
            Available
          </li>
          <li className="aboutRightLi">
            <span className="aboutRightLiSpan">Address:</span>
            South Sulawesi, Indonesia
          </li>
        </ul>
      </div>
    </div>
  );
};

export default AboutMe;
