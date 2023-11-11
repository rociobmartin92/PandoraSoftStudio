import React from "react";
import Logobig from "../../public/Logobig.png";
import NavBar from "./NavBar";

export const Header = () => {
  return (
    <header className="bg-red-700 flex justify-between w-[100%] ">
      <img src={Logobig} style={{ height: "150px", width: "150px" }} />
      <NavBar />
    </header>
  );
};
