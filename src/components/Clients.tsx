import React from "react";
import app from "../assets/images/app.png";
import web from "../assets/images/web.png";
import diseños from "../assets/images/diseños.png";
import { Link } from "react-router-dom";

export const Clients = () => {
  return (
    <section
      id="Clients"
      className="text-white font-raj text-center px-[15%] mt-[120px] mb-6 w-screen "
    >
      <p className="sm:text-2xl text-xl mb-5">Servicios</p>

      <div className="flex ">
        <div className="sm:mx-5 mx-2  hover:text-xl ">
          <Link to="/mobile">
            <img
              className="sm:w-[700px] w-[1000px] rounded-md hover:shadow-white"
              src={app}
              alt="webimg"
            />
          </Link>
          <p className="mt-7 ">Soluciones móviles</p>
        </div>
        <div className="sm:mx-5 mx-2 hover:text-xl ">
          <Link to="/web">
            <img
              className="sm:w-[700px] w-[1000px]  rounded-md hover:shadow-white"
              src={web}
              alt="movimg"
            />
          </Link>
          <p className="mt-7">Soluciones web</p>
        </div>
        <div className="sm:mx-5 mx-2  hover:text-xl ">
          <Link to="/design">
            <img
              className="sm:w-[700px] w-[1000px] rounded-md hover:shadow-white"
              src={diseños}
              alt="desimg"
            />
          </Link>
          <p className="mt-7">Diseños digitales</p>
        </div>
      </div>
    </section>
  );
};
