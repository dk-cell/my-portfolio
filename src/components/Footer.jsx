import React from "react";
import { AiFillGithub, AiFillLinkedin } from "react-icons/ai";
import { SiCodechef } from "react-icons/si";
import { BsTelephoneForwardFill } from "react-icons/bs";
const Footer = () => {
  return (
    <div id="footer" className="h-[70px] bg-[#001b5e]">
      <div className="w-full flex p-4 justify-center items-center">
        <a href="https://github.com/dk-cell">
          <AiFillGithub className="cursor-pointer text-white" size={30} />
        </a>

        <a href="https://www.linkedin.com/in/dkksingh/">
          <AiFillLinkedin
            className="cursor-pointer text-white ml-2"
            size={30}
          />
        </a>
        <a href="https://www.codechef.com/users/dpk703656">
          <SiCodechef className="cursor-pointer text-white ml-2" size={30} />
        </a>
      </div>
    </div>
  );
};

export default Footer;
