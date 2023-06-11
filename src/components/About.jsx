import React from "react";
import p1 from "../assets/me.jpeg";
import resume from "../assets/DeepakSinghResume.pdf";
const About = () => {
  return (
    <div id="about" className="max-w-[1040px] m-auto md:pl-20 p-4 py-16">
      <h1 className="text-4xl font-bold text-center text-[#001b5e]">About</h1>
      <div className="flex w-full flex-col md:flex-row md:justify-between items-center justify-center">
        <div>
          <img
            src={p1}
            className="mt-5 md:m-5 md:w-[350px] md:h-[250px] rounded-xl shadow-gray-400 md:hover:scale-110 hover:scale-105"
          />
        </div>
        <div>
          <p className="text-center py-8 px-8">
            I'm Deepak Singh, a web developer skilled in building reusable
            components, experienced in React-Redux, and familiar with Node
            Express and MongoDB. I strive to deliver seamless user experiences
            and continually expand my expertise in web development.
          </p>
          <div className="flex flex-row w-full justify-center items-center ">
            <a
              href="#contact"
              className="bg-[#001b5e] flex items-center hover:scale-110 justify-center text-gray-100 w-[20%] mr-5 mt-2 p-4 rounded-lg"
            >
              Contact
            </a>
            <a
              href={resume}
              download="Resume"
              className="bg-[#001b5e] flex items-center hover:scale-110 justify-center text-gray-100 w-[20%] mr-5 mt-2 p-4 rounded-lg"
            >
              Resume
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
