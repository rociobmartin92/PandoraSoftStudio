import React from "react";
import { lazy, Suspense } from "react";

const Header = lazy(() => import("../components/Header"));
const MainComponent = lazy(() => import("../components/MainComponent"));
const About = lazy(() => import("../components/About"));
const Clients = lazy(() => import("../components/Clients"));
const Contact = lazy(() => import("../components/Contact"));
const Footer = lazy(() => import("../components/Footer"));
const Planes = lazy(() => import("../components/Planes"));

const Main = () => {
  return (
    <Suspense fallback={<h1>Cargando..</h1>}>
      <div className="w-[100%]">
        <Header />
        <MainComponent />
        <About />
        <Clients />
        <Contact />
        <Planes />
        <Footer />
      </div>
    </Suspense>
  );
};

export default Main;
