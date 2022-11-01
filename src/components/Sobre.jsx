import React from "react";

const Sobre = () => {
  return (
    <div name="about" className="w-full h-screen bg-[#111112] dark:bg-slate-100 text-gray-300">
      <div className="flex flex-col justify-center items-center w-full h-full">
        <div className="max-w-[1000px] w-full grid grid-cols-2 gap-8">
          <div className="sm:text-right pb-8 pl-4">
            <p className="text-4xl font-bold inline border-b-4 border-[#fc4a1a] dark:text-[#111112]">
              Sobre
            </p>
          </div>
          <div></div>
        </div>
        <div className="max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4">
          <div className="sm:text-right text-4xl font-bold dark:text-[#7a839e]">
            <p >
              Olá. eu sou Gustavo Souza, é um prazer ter você por aqui. 
               Dê uma olhada ao redor.
            </p>
          </div>
          <div className="dark:text-[#7a839e]">
            <p>
              Sou apaixonado por programação, e decidi me especializar em
              desenvolvimento e design de sites, já realizei soluções para
              diversas pessoas, e busco sempre trazer inovação e novas funcionalidades
              para os meus projetos.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sobre;
