import React from "react";

const NavBar = () => {
  return (
    <>
      <ul className=" flex justify-around hidden sm:flex text-[18px] text-white sm:w-[436px] sm:items-center font-cardo ">
        <li className="hover:border-b-2 border-[#A08D8D]">
          <a href="#About">Nosotros</a>
        </li>
        <li className="hover:border-b-2 border-[#A08D8D]">
          <a href="#Clients">Servicios</a>
        </li>
        <li className="hover:border-b-2 border-[#A08D8D]">
          <a href="#Planes">Planes</a>
        </li>
        <li className="hover:border-b-2 border-[#A08D8D]">
          <a href="#Contact">Contacto</a>
        </li>
      </ul>
      {/* <img
        src={menu}
        alt="menu"
        className="w-10 h-10 cursor-pointer sm:hidden items-center mt-13"
      /> */}
    </>
  );
};

export default NavBar;
