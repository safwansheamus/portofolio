import React from "react";
import { useTypewriter, Cursor } from "react-simple-typewriter";
import { BsCloudLightningFill } from "react-icons/bs";
import { FaGithub, FaLinkedin } from "react-icons/fa";

// import { FiInstagram, FiMail, FiSend } from "react-icons/fi";
import CV from "../../assets/portofolio.pdf";
import { ProfilePic } from "../../assets";


const Left = () => {
  const [text] = useTypewriter({
    words: ["Informatics Engineering Student", "Cybersecurity Enthusiast", "Tech Enthusiast"],
    loop: true,
    typeSpeed: 30,
    deleteSpeed: 20,
    delaySpeed: 2000,
  });
  return (
    <div className="w-full lgl:w-5/12 h-full bg-bodyColor rounded-2xl shadow-testShwdow z-10">
      <div className="w-full h-3/5">
        <img
          className="w-full h-full object-cover rounded-2xl"
          src={ProfilePic}
          loading="priority"
          alt="bannerImage"
        />
      </div>
      <div className="w-full h-2/5 flex flex-col justify-between border-t-0 rounded-bl-xl rounded-br-xl">
        <div className="flex flex-col items-center gap-2 py-10">
          <h1 className="text-textColor text-4xl font-semibold">Muh Safwan Suhadi</h1>
          <p className="text-base text-designColor tracking-wide">
            {text}
            <Cursor cursorBlinking="false" cursorStyle="|" />
          </p>
          <div className="flex justify-center gap-2 mt-2">
            <a href="https://github.com/safwansheamus" target="blank" className="hover:text-designColor duration-300 cursor-pointer text-xl">
              <FaGithub />
            </a>
            <a href="https://www.linkedin.com/in/muhammad-sapwan-suhadi-3880b0280/" target="blank" className="hover:text-designColor duration-300 cursor-pointer text-xl">
              <FaLinkedin />
            </a>
          </div>
        </div>
        <div className="flex h-14">
          <a
            href={CV}
            target="_blank"
            className="w-1/2 border-t-[1px] borderRight border-t-zinc-800 text-sm tracking-wide uppercase  gap-2 hover:text-designColor duration-300"
            rel="noreferrer"
          >
            <button className="w-full h-full flex justify-center items-center gap-2">
              Download Portofolio <BsCloudLightningFill />
            </button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Left;
