import React, { useState } from "react";
import p1 from "../assets/p1.png";
import p2 from "../assets/p2.png";
import { RxCross2 } from "react-icons/rx";
import {
  projectDetails1,
  projectDetails2,
  heading1,
  heading2,
} from "../data/projectDetails";

const Projects = ({ open, setOpen }) => {
  const [projectData, setProjectData] = useState("");
  const [id, setId] = useState(1);
  const [headings, setHeadings] = useState("");
  const char = ">";
  console.log(id);
  return (
    <div
      id="projects"
      className="max-w-[1040px] min-h-max m-auto md:pl-20 p-4 py-16 relative"
    >
      <h1 className="text-4xl  font-bold text-center text-[#001b5e]">
        Projects
      </h1>
      <p className="text-center py-8">
        I wrote my first line of real code that started this journey into
        digital craftsmanship that I never could've imagined, especially as
        someone who never saw themselves as anything other than a blue collar
        worker.
      </p>
      <div className="grid sm:grid-cols-2 gap-12">
        <ProjectItem
          img={p1}
          title="Crypto App"
          setOpen={setOpen}
          projectData={projectDetails1}
          setProjectData={setProjectData}
          heading={heading1}
          setHeadings={setHeadings}
          setId={setId}
          id={1}
          pid={1}
        />
        <ProjectItem
          img={p2}
          title="Crypto App"
          setOpen={setOpen}
          projectData={projectDetails2}
          setProjectData={setProjectData}
          heading={heading2}
          setHeadings={setHeadings}
          setId={setId}
          id={2}
          pid={2}
        />
      </div>
      {open && (
        <div
          id="project1"
          className="absolute min-h-max top-0 left-0 right-0 bottom-0 max-w-[1040px] z-[99] bg-gray-200 rounded-lg"
        >
          <div className="flex justify-end items-end mt-4 mr-4">
            <RxCross2
              size={30}
              onClick={() => {
                setOpen(false);
              }}
            />
          </div>
          <p className="flex justify-center items-center text-lg mb-2 font-semibold text-[#001b5e]">
            {headings[0]}
          </p>
          <div className="flex flex-col md:flex-row items-center md:mb-3">
            <div className="flex-initial group hover:bg-gradient-to-r from-gray-200 to-[#001b5e] w-[35%] h-full m-2 md:min-h-[350px] rounded-lg justify-center items-center p-4 bg-gray-300">
              <p className="shadow-lg md:mt-5 w-full">
                <img
                  src={`${id === 1 ? p1 : p2}`}
                  className="rounded-xl w-full object-fill h-100vh"
                />
              </p>
              <a
                href={`${
                  id === 1
                    ? "https://tradejunction.onrender.com/"
                    : "https://storyvista-dk.onrender.com"
                }`}
                className=" flex justify-center items-center rounded-xl shadow-lg bg-gray-100 shadow-gray-400 mt-2 p-4 cursor-pointer hover:scale-105"
              >
                Demo
              </a>
              <a
                href={`${
                  id === 1
                    ? "https://github.com/dk-cell/Trade-Junction-Ecommerce"
                    : "https://github.com/dk-cell/storyvista"
                }`}
                className="flex justify-center items-center rounded-xl shadow-lg bg-gray-100 shadow-gray-400 mt-2 p-4 cursor-pointer hover:scale-105"
              >
                Code
              </a>
            </div>
            <div className="flex-initial mb-4 md:mb-0 w-[80%] bg-gray-300 rounded-lg shadow-lg mr-2 hover:bg-[#b6bccc]">
              <p className="">
                {projectData.map((item, index) => {
                  return (
                    <div className="flex flex-row items-center m-4 leding-none">
                      <div className="flex items-center justify-center">
                        {/* <BsFillRecordFill size={10} className="mb-11 mr-2 md:mb-0 text-[#001b5e]" /> */}
                        <p className="text-stone-800 text-[13.5px] leading-none ">
                          <span className="mr-2 text-[#001b5e] font-semibold text-[14.5px] leading-none">
                            {headings[index + 1]}
                          </span>{" "}
                          {item.points}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

const ProjectItem = ({
  img,
  title,
  setOpen,
  projectData,
  setProjectData,
  heading,
  setHeadings,
  setId,
  id,
  pid,
}) => {
  return (
    <div className="relative flex items-center justify-center h-auto w-full shadow-xl shadow-gray-400 rounded-xl group hover:bg-gradient-to-r from-gray-200 to-[#001b5e]">
      <img
        src={img}
        className="rounded-xl group-hover:opacity-10 object-fill w-full h-full"
      />
      <div className="hidden group-hover:block absolute tanslate-x-[-50%] tanslate-y-[-50%]">
        <h3 className="text-2xl font-bold text-white text-center">{title}</h3>
        <p className="pb-4 pt-2 text-white text-center">React Js</p>

        <div className="flex flex-row">
          <a
            href="#project1"
            className="text-center p-3 rounded-lg bg-white text-gray-700 font-bold cursor-pointer text-lg"
            onClick={() => {
              setOpen(true);
              setProjectData(projectData);
              setHeadings(heading);
              setId(pid);
            }}
          >
            <text>Info</text>
          </a>
          <a
            href={`${
              id === 1
                ? "https://tradejunction.onrender.com/"
                : "https://storyvista-dk.onrender.com"
            }`}
            className="text-center p-3 ml-2 rounded-lg bg-white text-gray-700 font-bold cursor-pointer text-lg"
          >
            Demo
          </a>
          <a
            href={`${
              id === 1
                ? "https://github.com/dk-cell/Trade-Junction-Ecommerce"
                : "https://github.com/dk-cell/storyvista"
            }`}
            className="text-center p-3 ml-2 rounded-lg bg-white text-gray-700 font-bold cursor-pointer text-lg"
          >
            Code
          </a>
        </div>
      </div>
    </div>
  );
};

export default Projects;
