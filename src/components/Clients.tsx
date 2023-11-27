import React from "react";
import { diseños, web, app } from "../assets/images";
import { Link } from "react-router-dom";

const Clients = () => {
  return (
    <section
      id="Clients"
      className="text-white font-raj text-center sm:px-[15%] mt-[120px] mb-6 w-screen "
    >
      <p className="sm:text-3xl text-2xl font-black sm:font-semibold mb-5">
        Servicios
      </p>

      <div className="flex ">
        <div className="sm:mx-5 mx-2 text-xl   hover:text-2xl ">
          <Link to="/mobile">
            <img
              className="sm:w-[700px] w-[400px] rounded-md hover:shadow-white"
              src={app}
              alt="webimg"
            />
          </Link>
          <p className="mt-7 font-black sm:font-semibold">Soluciones móviles</p>
        </div>
        <div className="sm:mx-5 mx-2 text-xl hover:text-2xl ">
          <Link to="/web">
            <img
              className="sm:w-[700px] w-[400px]  rounded-md hover:shadow-white"
              src={web}
              alt="movimg"
            />
          </Link>
          <p className="mt-7 font-black sm:font-semibold">Soluciones web</p>
        </div>
        <div className="sm:mx-5 mx-2 text-xl hover:text-2xl ">
          <Link to="/design">
            <img
              className="sm:w-[700px] w-[400px] rounded-md hover:shadow-white"
              src={diseños}
              alt="desimg"
            />
          </Link>
          <p className="mt-7 font-black sm:font-semibold">Diseños digitales</p>
        </div>
      </div>
    </section>
  );
};

export default Clients;