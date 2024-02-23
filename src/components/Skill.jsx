import React from "react";
import { techSkill } from "../data/techskill";

const Skill = () => {
  return (
    <div id="skill" className="max-w-[1040px] m-auto md:pl-20 p-4 py-16">
      <h1 className="text-4xl font-bold text-center text-[#001b5e] mb-5">
        Skill
      </h1>
      {/* <p className="text-center py-8">
        I wrote my first line of real code that started this journey into
        digital craftsmanship that I never could've imagined, especially as
        someone who never saw themselves as anything other than a blue collar
        worker.
      </p> */}
      <div className="grid sm:grid-cols-4 gap-12">
        {techSkill.map((skill, index) => (
          <Card skill={skill.techStack} title={skill.title} key={index} />
        ))}
      </div>
    </div>
  );
};

const Card = ({ skill, title }) => {
  return (
    <div class="max-w-sm flex flex-col group hover:bg-gradient-to-r from-gray-200 to-[#001b5e] rounded overflow-hidden shadow-lg rounded-md bg-gray-100 justify-center items-center">
      <div class="px-6 py-4">
        <div class="font-bold text-xl mb-2 items-center flex justify-center">
          {title}
        </div>
        {/* <p class="text-black-200 text-base">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus
          quia, nulla! Maiores et perferendis eaque, exercitationem praesentium
          nihil.
        </p> */}
      </div>

      {skill?.map((item, index) => {
        return (
          <div class="px-6 pt-4 pb-2 flex justify-center items-center">
            <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
              {item.skill}
            </span>
          </div>
        );
      })}
    </div>
  );
};

export default Skill;
