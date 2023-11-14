import React from "react";
import { Header } from "../components/Header";
import { MainComponent } from "../components/MainComponent";
import { About } from "../components/About";
import { Clients } from "../components/Clients";
import { Contact } from "../components/Contact";
import { Footer } from "../components/Footer";

export const Main = () => {
  return (
    <div className="w-[100%]">
      <Header />
      <MainComponent />
      <About />
      <Clients />
      <Contact />
      <Footer />
    </div>
  );
};
