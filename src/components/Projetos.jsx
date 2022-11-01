import React from "react";
import { data } from "../data/mockData";
import Coffe from "../assets/projects/mycoffe.png";
import Design from "../assets/projects/designsystem.png";
import Login from "../assets/projects/login.png";
import Financas from "../assets/projects/finanças.png";
import Netflix from "../assets/projects/netflix.png";
import Rocket from "../assets/projects/rocketpay.png";

const Projetos = () => {
  return (
    <div name="work" className="w-full md:h-screen bg-[#111112] dark:bg-slate-100 text-gray-300">
      <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 text-gray-300 border-[#fc4a1a] dark:text-[#111112]">
            Projetos
          </p>
          <p className="py-6 dark:text-[#7a839e]"> //Alguns Projetos que eu Finalizei.</p>
        </div>

        {/* Container */}
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
          {/* Grid */}
          <div
            style={{ backgroundImage: `url(${Coffe})` }}
            className="shadow-lg shadow-[#040C16] group container rounded-md flex justify-center items-center mx-auto content-div"
          >
            {/* Hover Effects */}
            <div className="opacity-0 group-hover:opacity-100 transition delay-100 duration-300 ease-in-out">
              <span className="text 2xl font-bold text-white tracking-wider">
                myCoffe
              </span>

              <div className="pt-8 text-center">
                <a href="https://mycoffeesite.netlify.app/"
                target="_blank" rel="noopener noreferrer">
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                    Demo
                  </button>
                </a>
                <a href="https://github.com/Gustavosouza2/myCoffe"
                target="_blank" rel="noopener noreferrer">
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                    Code
                  </button>
                </a>
              </div>
            </div>
          </div>
          <div
            style={{ backgroundImage: `url(${Design})` }}
            className="shadow-lg shadow-[#040C16] group container rounded-md flex justify-center items-center mx-auto content-div"
          >
            {/* Hover Effects */}
            <div className="opacity-0 group-hover:opacity-100 transition delay-100 duration-300 ease-in-out">
              <span className="text 2xl font-bold text-white tracking-wider">
                Design System
              </span>

              <div className="pt-8 text-center">
                <a href="https://gustavosouza2.github.io/lab-system/?path=/story/components-button--default"
                target="_blank" rel="noopener noreferrer">
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                    Demo
                  </button>
                </a>
                <a href="https://github.com/Gustavosouza2/lab-system"
                target="_blank" rel="noopener noreferrer">
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                    Code
                  </button>
                </a>
              </div>
            </div>
          </div>
          <div
            style={{ backgroundImage: `url(${Login})` }}
            className="shadow-lg shadow-[#040C16] group container rounded-md flex justify-center items-center mx-auto content-div"
          >
            {/* Hover Effects */}
            <div className="opacity-0 group-hover:opacity-100 transition delay-100 duration-300 ease-in-out">
              <span className="text 2xl font-bold text-white tracking-wider">
                Login
              </span>

              <div className="pt-8 text-center">
                <a href="https://react-login-brown.vercel.app/"
                target="_blank" rel="noopener noreferrer">
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                    Demo
                  </button>
                </a>
                <a href="https://github.com/Gustavosouza2/React-Login"
                target="_blank" rel="noopener noreferrer">
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                    Code
                  </button>
                </a>
              </div>
            </div>
          </div>
          <div
            style={{ backgroundImage: `url(${Financas})` }}
            className="shadow-lg shadow-[#040C16] group container rounded-md flex justify-center items-center mx-auto content-div"
          >
            {/* Hover Effects */}
            <div className="opacity-0 group-hover:opacity-100 transition delay-100 duration-300 ease-in-out">
              <span className="text 2xl font-bold text-white tracking-wider">
                Controle Financeiro
              </span>

              <div className="pt-8 text-center">
                <a href="https://controle-financeiro-sable.vercel.app/"
                target="_blank" rel="noopener noreferrer">
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                    Demo
                  </button>
                </a>
                <a href="https://github.com/Gustavosouza2/Controle-Financeiro"
                target="_blank" rel="noopener noreferrer">
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                    Code
                  </button>
                </a>
              </div>
            </div>
          </div>
          <div
            style={{ backgroundImage: `url(${Netflix})` }}
            className="shadow-lg shadow-[#040C16] group container rounded-md flex justify-center items-center mx-auto content-div"
          >
            {/* Hover Effects */}
            <div className="opacity-0 group-hover:opacity-100 transition delay-100 duration-300 ease-in-out">
              <span className="text 2xl font-bold text-white tracking-wider">
                Netflix
              </span>

              <div className="pt-8 text-center">
                <a href="https://netflix-clone-one-tau.vercel.app/"
                target="_blank" rel="noopener noreferrer">
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                    Demo
                  </button>
                </a>
                <a href="https://github.com/Gustavosouza2/Netflix"
                target="_blank" rel="noopener noreferrer">
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                    Code
                  </button>
                </a>
              </div>
            </div>
          </div>
          <div
            style={{ backgroundImage: `url(${Rocket})` }}
            className="shadow-lg shadow-[#040C16] group container rounded-md flex justify-center items-center mx-auto content-div"
          >
            {/* Hover Effects */}
            <div className="opacity-0 group-hover:opacity-100 transition delay-100 duration-300 ease-in-out">
              <span className="text 2xl font-bold text-white tracking-wider">
                RocketPay
              </span>

              <div className="pt-8 text-center">
                <a href="https://rocketpay1.netlify.app/"
                target="_blank" rel="noopener noreferrer">
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                    Demo
                  </button>
                </a>
                <a href="https://github.com/Gustavosouza2/rocketpay"
                target="_blank" rel="noopener noreferrer">
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                    Code
                  </button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projetos;
