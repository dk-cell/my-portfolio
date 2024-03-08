import React from "react";
import p1 from "../assets/me.jpeg";
import resume from "../assets/DeepakSinghResume.pdf";
const About = () => {
  return (
    <div id="about" className="w-full m-auto md:pl-20 p-4 py-10">
      <h1 className="text-4xl font-bold text-center text-[#001b5e]">About</h1>
      <div className="flex bg-[fff] w-full flex-col md:flex-row md:justify-between items-center justify-center">
        <div>
          <img
            src={p1}
            className="mt-5 md:m-5 md:w-[380px] md:h-[280px] rounded-xl shadow-gray-400 md:hover:scale-110 hover:scale-105"
          />
        </div>
        <div>
          <p className="px-8 mt-3">
            As a seasoned full stack developer graduated from{" "}
            <strong>NIT Jamshedpur</strong>, I excel in crafting websites that
            seamlessly blend functionality with captivating design aesthetics.
            With a firm grasp of <strong>web standards</strong> and{" "}
            <strong>best practices</strong>
            {""}, I engineer user-friendly websites that exceed expectations.
          </p>
          <p className="px-8 mt-1">
            Proficient across various <strong>programming languages</strong> and
            tools, I consistently deliver successful projects within{" "}
            <strong>strict timelines and budget constraints</strong>. While I
            thrive in <strong>collaborative team environments</strong>, I am
            also adept at working independently, demonstrating{" "}
            <strong>self-motivation and initiative</strong> to drive projects
            forward.
          </p>
          <p className="px-8 mb-3 mt-1">
            <strong>Adaptable</strong> to new technologies, I thrive in dynamic
            settings, embracing <strong>challenges</strong> and driving
            innovation through continuous learning and skill expansion.
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
