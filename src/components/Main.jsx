import React from "react";
import { TypeAnimation } from "react-type-animation";
import { AiFillGithub, AiFillLinkedin } from "react-icons/ai";
import { SiCodechef } from "react-icons/si";
import b1 from "../assets/bg2.jpg";

const Main = () => {
  return (
    <div id="main">
      <img
        // src="https://source.unsplash.com/random/1920x1080/?wallpaper,landscape"
        src={b1}
        className="w-full h-screen object-cover object-left scale-x-[-1] "
      />
      <div className="w-full h-screen absolute top-0 left-0 bg-white/45">
        <div className="max-w-md m-auto h-full flex flex-col w-full justify-center items-center lg:items-start ">
          <h1 className="sm:text-5xl text-4xl font-bold text-gray-800 ">
            I'm Deepak Singh
          </h1>
          <h2 className="flex sm:text-3xl text-2xl text-gray-800">
            I'm
            <TypeAnimation
              sequence={[
                "Developer", // Types 'One'
                1000, // Waits 1s
                "Coder", // Deletes 'One' and types 'Two'
                2000, // Waits 2s
                "Tech Enthusiast", // Types 'Three' without deleting 'Two'
              ]}
              wrapper="span"
              cursor={true}
              repeat={Infinity}
              style={{ fontSize: "1em", paddingLeft: "5px" }}
            />
          </h2>
          <div className="flex justify-center items-center pt-6 max-w-[full] w-full">
       <div className="flex justify-between w-[100px] ">
       <a href="https://github.com/dk-cell">
              <AiFillGithub className="cursor-pointer" size={25} />
            </a>

            <a href="https://www.linkedin.com/in/dkksingh/">
              <AiFillLinkedin className="cursor-pointer  ml-2" size={25} />
            </a>
            <a href="https://www.codechef.com/users/dpk703656">
              <SiCodechef className="cursor-pointer  ml-2" size={25} />
            </a>
       </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
