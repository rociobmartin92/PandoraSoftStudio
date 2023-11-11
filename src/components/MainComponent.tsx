import React from "react";
import imgmain from "../assets/imgmain.png";

export const MainComponent = () => {
  return (
    <main className=" flex items-center justify-center w-screen">
      <img src={imgmain} alt="menu" className="w-[40%] mb-10" />
    </main>
  );
};
