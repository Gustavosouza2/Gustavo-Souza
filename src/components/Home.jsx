import React from "react";
import { HiArrowNarrowRight } from "react-icons/hi";
import { Link } from "react-scroll";

const Home = () => {
  return (
    <div name="home" className="w-full h-screen bg-[#111112] dark:bg-slate-100">
      {/* Container */}
      <div className="max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full">
        <p className="text-[#fc4a1a] text-2xl">Olá, me chamo</p>
        <h1 className="text-4xl sm:text-7xl font-bold text-gray-300 dark:text-[#111112]">
          Gustavo Souza
        </h1>
        <h2 className="text-4xl sm:text-7xl font-bold text-[#8892b0] dark:text-[#7a839e]">
          Front-End Developer
        </h2>
        <p className="text-[#8892b0] py-4 max-w-[700px]">
          Sou um desenvolvedor front-end especializado na criação de sites,
          desde design até o código, busco sempre oferecer as melhores
          experiências digitais para os usuários.
        </p>
        <div className="">
          <button className="text-white group border-2 px-6 py-3 my-2 flex items-center hover:bg-[#fc4a1a] hover:border-[#fc4a1a] dark:text-[#111112] dark:border-[#fc4a1a]">
            <Link to="about" smooth={true} duration={500}>
              Ver Mais
            </Link>
            <HiArrowNarrowRight />
            <span className="group-hover:rotate-90 duration-300">
              <HiArrowNarrowRight className="ml-3 " />
            </span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home;
