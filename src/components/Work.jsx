import React from "react";
import { MdWork } from "react-icons/md";
import { FaUniversity } from "react-icons/fa";
import { RxDotFilled } from "react-icons/rx";
import { workExpData } from "../data/experience.jsx";
const Work = () => {
  return (
    <div id="work" className="max-w-[1040px] m-auto md:pl-20 p-4 py-16">
      <h1 className="text-4xl font-bold text-center text-[#001] mb-3">
        Experience/Education
      </h1>
      {workExpData &&
        workExpData.map((item, index) => <WorkItem key={index} data={item} />)}
    </div>
  );
};

const WorkItem = ({ data }) => {
  const char = ">";
  return (
    <div className="flex flex-col md:flex-row relative border-l border-stone-200">
      <ul className="mb-10 ml-4">
        <div className="absolute w-3 h-3 bg-stone-0 rounded-full  mt-1.5 -left-2 border-white">
          {data.isWork ? <MdWork /> : <FaUniversity />}
        </div>
        <p className="flex flex-wrap gap-4 flex-row items-center justify-start text-xs ">
          <span className="inline-block px-2 py-1 font-semibold text-white bg-[#001b5e] rounded-md">
            {data.year}
          </span>
          <span className="text-2xl font-semibold text-[#001b5e]">
            {data.place}
          </span>
          <span className="text-lg font-600 text-[#001b5e] leading-none">
            {data.title}
          </span>
          <span className="my-1 text-sm font-normal leading-none text-stone-400">
            {data.duration}
          </span>
        </p>
        <p>
          {data.projectName && (
            <span className="inline-block px-2 py-1 font-semibold text-white bg-[#001b5e] rounded-md">
              {data.projectName}
            </span>
          )}
        </p>
        <p className="my-2 text-base font-normal  ">
          {data?.details.map((item, index) => {
            return (
              <>
                {item.subheading && <div>
                  <span className="mr-2 mt-1 text-[#001b5e] text-lg font-semibold justify-start items-center">
                    {item.subheading}
                  </span>
                </div>}
                {item.points && <div className="flex flex-row items-start mt-1">
                  {/* <BsFillRecordFill size={10} className="mb-11 mr-2 md:mb-0 text-[#001b5e]" /> */}
                  <span className="mr-2 mt-1 text-[#001b5e] text-lg font-semibold justify-start items-center">
                    <RxDotFilled />
                  </span>
                  <p className="text-stone-800">{item.points}</p>
                </div>}
              </>
            );
          })}
        </p>
      </ul>
    </div>
  );
};

export default Work;
