import React, { useEffect, useState } from "react";
import {
  AiOutlineHome,
  AiOutlineMail,
  AiOutlineMenu,
  AiOutlineProject,
  AiOutlineBulb,
} from "react-icons/ai";
import { GrProjects } from "react-icons/gr";
import { BsPerson } from "react-icons/bs";
const Sidenav = ({ open, setOpen }) => {
  const [nav, setNav] = useState(false);
  console.log("----->", open);
  const navHandler = () => {
    setNav(!nav);
    setOpen(false);
  };

  //   useEffect(() => { }, []);
  return (
    <div>
      <AiOutlineMenu
        className="absolute top-4 right-4 z-[99] md:hidden"
        onClick={navHandler}
      />

      {nav && (
        <div className="fixed flex flex-col w-full h-screen bg-white justify-center items-center z-20 ">
          <a
            onClick={navHandler}
            href="#main"
            className="w-[75%] flex justify-center items-center rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110"
          >
            <AiOutlineHome size={20} />
            <span className="pl-4">Home</span>
          </a>
          <a
            onClick={navHandler}
            href="#about"
            className="w-[75%] flex justify-center items-center rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110"
          >
            <BsPerson size={20} />
            <span className="pl-4">About</span>
          </a>
          <a
            onClick={navHandler}
            href="#work"
            className="w-[75%] flex justify-center items-center rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110"
          >
            <GrProjects size={20} />
            <span className="pl-4">Work</span>
          </a>
          <a
            onClick={navHandler}
            href="#skill"
            className="w-[75%] flex justify-center items-center rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110"
          >
            <AiOutlineBulb size={20} />
            <span className="pl-4">Skill</span>
          </a>

          <a
            onClick={navHandler}
            href="#projects"
            className="w-[75%] flex justify-center items-center rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110"
          >
            <AiOutlineProject size={20} />
            <span className="pl-4">Projects</span>
          </a>

          <a
            onClick={navHandler}
            href="#contact"
            className="w-[75%] flex justify-center items-center rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110"
          >
            <AiOutlineMail size={20} />
            <span className="pl-4">Contact</span>
          </a>
        </div>
      )}

      <div className="md:block hidden fixed top-[15%] z-10">
        <div className="flex flex-col">
          <a
            onClick={() => setOpen(false)}
            href="#main"
            className="rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-300"
          >
            <AiOutlineHome size={20} />
          </a>
          <a
            onClick={() => setOpen(false)}
            href="#about"
            className="rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-300"
          >
            <BsPerson size={20} />
          </a>
          <a
            onClick={() => setOpen(false)}
            href="#work"
            className="rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-300"
          >
            <GrProjects size={20} />
          </a>

          <a
            onClick={() => setOpen(false)}
            href="#skill"
            className="rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-300"
          >
            <AiOutlineBulb size={20} />
          </a>
          <a
            onClick={() => setOpen(false)}
            href="#projects"
            className="rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-300"
          >
            <AiOutlineProject size={20} />
          </a>

          <a
            onClick={() => setOpen(false)}
            href="#contact"
            className="rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-300"
          >
            <AiOutlineMail size={20} />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Sidenav;
