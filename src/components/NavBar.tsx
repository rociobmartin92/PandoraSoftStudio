import React from "react";
import menu from "../assets/menu.png";
import { colors } from "@mui/material";
const NavBar = () => {
  return (
    <>
      <ul className=" flex justify-around hidden sm:flex text-[18px] text-white sm:w-[436px] sm:items-center font-cardo">
        <li className="hover:border-b-2 border-[#A08D8D]">
          <a href="#">Nosotros</a>
        </li>
        <li className="hover:border-b-2 border-[#A08D8D]">
          <a href="#">Nuestros clientes</a>
        </li>
        <li className="hover:border-b-2 border-[#A08D8D]">
          <a href="#">Contacto</a>
        </li>
      </ul>
      <img
        src={menu}
        alt="menu"
        className="w-10 h-10 cursor-pointer sm:hidden items-center mt-13"
      />
    </>
  );
};

export default NavBar;
