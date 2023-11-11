import React from "react";
import imgmain from "../assets/imgmain4.png";
import { About } from "./About";

export const MainComponent = () => {
  return (
    <main className=" flex items-center justify-center w-screen mt-2 mb-10">
      <img src={imgmain} alt="menu" className="w-[70%] sm:w-[45%] mb-10" />
    </main>
  );
};
