import app from "../assets/images/app.png";
import web from "../assets/images/web.png";
import diseños from "../assets/images/diseños.png";

export const Clients = () => {
  return (
    <section
      id="Clients"
      className="text-white font-raj text-center px-[15%] mt-[120px] mb-6 w-screen "
    >
      <p className="text-2xl mb-5">Servicios</p>

      <div className="flex ">
        <div className="mx-5  hover:text-lg ">
          <img
            className="sm:w-[700px] rounded-md hover:shadow-white"
            src={app}
            alt="webimg"
          />

          <p className="mt-7 ">Soluciones móviles</p>
        </div>
        <div className="mx-5 hover:text-lg ">
          <img
            className="sm:w-[700px] rounded-md hover:shadow-white"
            src={web}
            alt="movimg"
          />

          <p className="mt-7">Soluciones web</p>
        </div>
        <div className="mx-5  hover:text-lg ">
          <img
            className="sm:w-[700px] rounded-md hover:shadow-white"
            src={diseños}
            alt="desimg"
          />

          <p className="mt-7">Diseños digitales</p>
        </div>
      </div>
    </section>
  );
};
