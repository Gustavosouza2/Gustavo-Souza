import React, { useState } from "react";
import {
  FaBars,
  FaTimes,
  FaGithub,
  FaInstagram,
  FaLinkedin,
} from "react-icons/fa";
import { BsFillPersonLinesFill } from "react-icons/bs";
import Logo from "../assets/Logonavbar.png";
import { Link } from "react-scroll";
import { MdLightMode, MdDarkMode } from "react-icons/md";
import { useTheme } from "../hooks/useTheme";

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const handleClick = () => {
    setNav(!nav);
  };

  const { theme, setTheme} = useTheme();

  return (
    <div className="fixed w-full h-[80px] flex justify-between items-center px-4 bg-[#111112] text-gray-300">
      <div className="">
        <img src={Logo} alt="Logo Image" size={0} style={{ width: "70px", margin: "-8px 0px 0px -3px" }} />
      </div>

      {/* Menu */}
      <ul className="hidden md:flex">
        <li>
          {theme === "dark" ? (<MdDarkMode size={'20px'} className="absolute left-24 text-slate-100" onClick={() => setTheme("light")} />) 
          : (<MdLightMode size={'20px'} className="absolute left-24" onClick={() => setTheme("dark")}/>)
          }
          <Link to="home" smooth={true} duration={500}>
            Home
          </Link>
        </li>
        <li>
          <Link to="about" smooth={true} duration={500}>
            Sobre
          </Link>
        </li>
        <li>
          <Link to="skills" smooth={true} duration={500}>
            Habilidades
          </Link>
        </li>
        <li>
          <Link to="work" smooth={true} duration={500}>
            Projetos
          </Link>
        </li>
        <li>
          <Link to="contact" smooth={true} duration={500}>
            Contato
          </Link>
        </li>
      </ul>

      {/* Hamburguer */}
      <div onClick={handleClick} className="md:hidden z-10">
        {!nav ? <FaBars /> : <FaTimes />}
      </div>

      {/* Mobile Menu */}
      <ul
        className={
          !nav
            ? "hidden"
            : "absolute top-0 left-0 w-full h-screen bg-[#111112] flex flex-col justify-center items-center"
        }
      >
        <li className="py-6 text-4xl">
        {theme === "dark" ? (<MdDarkMode size={'20px'} className="absolute left-10  top-10 text-slate-100" onClick={() => setTheme("light")} />) 
          : (<MdLightMode size={'20px'} className="absolute left-10  top-10" onClick={() => setTheme("dark")}/>)
          }
          <Link onClick={handleClick} to="home" smooth={true} duration={500}>
            Home
          </Link>
        </li>
        <li className="py-6 text-4xl">
          <Link onClick={handleClick} to="about" smooth={true} duration={500}>
            Sobre
          </Link>
        </li>
        <li className="py-6 text-4xl">
          <Link onClick={handleClick} to="skill" smooth={true} duration={500}>
            Habilidades
          </Link>
        </li>
        <li className="py-6 text-4xl">
          <Link onClick={handleClick} to="work" smooth={true} duration={500}>
            Projetos
          </Link>
        </li>
        <li className="py-6 text-4xl">
          <Link onClick={handleClick} to="contact" smooth={true} duration={500}>
            Contato
          </Link>
        </li>
      </ul>

      {/* Social Icons */}
      <div className="hidden lg:flex fixed flex-col top-[35%] left-0">
        <ul>
          <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-blue-600">
            <a
              className="flex justify-between items-center w-full text-gray-300"
              href="https://www.linkedin.com/in/gustavo-leonildo-de-souza-435025223/"
              target="_blank" rel="noopener noreferrer"
            >
              Linkedin <FaLinkedin size={30} />
            </a>
          </li>
          <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#333333]">
            <a
              className="flex justify-between items-center w-full text-gray-300"
              href="https://github.com/Gustavosouza2"
              target="_blank" rel="noopener noreferrer"
            >
              Github <FaGithub size={30} />
            </a>
          </li>
          <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#FD1D1D]">
            <a
              className="flex justify-between items-center w-full text-gray-300"
              href="https://www.instagram.com/gustavoleonsouza/"
              target="_blank" rel="noopener noreferrer"
            >
              Instagram <FaInstagram size={30} />
            </a>
          </li>
          <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#565F69]">
            <a
              className="flex justify-between items-center w-full text-gray-300"
              href="https://drive.google.com/drive/folders/1LIlKigFPPM_ee8uPkbh4yDM1xryEo5k3"
              target="_blank" rel="noopener noreferrer"
            >
              Currículo <BsFillPersonLinesFill size={30} />
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
