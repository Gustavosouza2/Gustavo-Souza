import React from "react";
import { FaReact, FaHtml5 } from "react-icons/fa";
import { SiRedux, SiTailwindcss, SiJavascript } from "react-icons/si";
import { DiCss3, DiSass } from "react-icons/di";

const Habilidades = () => {
  return (
    <div name="skills" className="w-full h-screen bg-[#111112] dark:bg-slate-100 text-gray-300">
      {/* Container */}
      <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full">
        <div>
          <p className="text-4xl font-bold inline border-b-4 border-[#fc4a1a] dark:text-[#111112]">
            Habilidades
          </p>
          <p className="py-4 dark:text-[#7a839e]">// Algumas Tecnologias que tenho conhecimento.</p>
        </div>

        <div className="w-full grid grid-cols-2 sm:grid-cols-4 gap-4 text-center py-8">
          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
            <FaHtml5 size={80} className="w-20 mx-auto text-[#fc4a1a]" />
            <p className="my-4 dark:text-[#7a839e]">HTML</p>
          </div>
          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
            <DiCss3 size={80} className="w-20 mx-auto text-[#264de4]" />
            <p className="my-4 dark:text-[#7a839e]">CSS</p>
          </div>
          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
            <SiJavascript size={80} className="w-20 mx-auto text-[#f0db4f]" />
            <p className="my-4 dark:text-[#7a839e]">Javascript</p>
          </div>
          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
            <FaReact size={80} className="w-20 mx-auto text-[#88dded]" />
            <p className="my-4 dark:text-[#7a839e]">React</p>
          </div>
          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
            <SiRedux size={80} className="w-20 mx-auto text-[#764abc]" />
            <p className="my-4 dark:text-[#7a839e]">Redux</p>
          </div>
          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
            <DiSass size={80} className="w-20 mx-auto text-[#cc6699]" />
            <p className="my-4 dark:text-[#7a839e]">SASS</p>
          </div>
          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
            <SiTailwindcss size={80} className="w-20 mx-auto text-[#36B7F0]" />
            <p className="my-4 dark:text-[#7a839e]">Tailwind</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Habilidades;
