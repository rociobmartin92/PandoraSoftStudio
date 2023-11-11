import React from "react";

const NavBar = () => {
  return (
    <ul className="flex justify-around bg-yellow-500 hidden sm:flex text-[20px] sm:w-[436px] sm:items-center">
      <li>
        <a className="text-white" href="#">
          Nosotros
        </a>
      </li>
      <li>
        <a href="#">Nuestros Clientes</a>
      </li>
      <li>
        <a href="#">Contacto</a>
      </li>
    </ul>
  );
};

export default NavBar;
