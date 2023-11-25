import React from "react";

export const Planes = () => {
  return (
    <section
      id="Planes"
      className="text-white font-raj  items-baseline font-black sm:font-semibold px-[15%] mt-[120px] mb-6 w-screen"
    >
      <div className="sm:flex justify-around">
        {/* <!-- BRONCE --> */}
        <div className=" p-4 ">
          <p className="text-xl font-bold mb-4">BRONCE</p>
          <img
            className="w-24 h-24 object-cover mb-4"
            src="https://cdcpublicidad.com.ar/wp-content/uploads/2023/02/basico.png"
            alt=""
            decoding="async"
            loading="lazy"
          />
          <ul className="list-disc">
            <li>Diseño personalizado</li>
            <li>Diseño responsive</li>
            <li>4 secciones</li>
            <li>Conexión con redes sociales</li>
          </ul>
          <div className="mt-4">
            <div className="text-xl font-bold">AR$</div>
            <span className="text-2xl font-bold">80 USD</span>
            <h6 className="text-sm">ÚNICA VEZ</h6>
          </div>
          <a
            href="#Contact"
            target="_self"
            className="bg-blue-500 text-white px-4 py-2 mt-4 block"
          >
            <span>QUIERO ESTE PLAN</span>
          </a>
        </div>

        {/* <!-- ESTRELLA --> */}
        <div className=" p-4 ">
          <p className="text-xl font-bold mb-4">RECOMENDADO</p>
          <img
            className="w-24 h-24 object-cover mb-4"
            src="https://cdcpublicidad.com.ar/wp-content/uploads/2023/02/ESTRELLA.png"
            alt=""
            decoding="async"
            loading="lazy"
          />
          <ul className="list-disc">
            <li>Diseño personalizado</li>
            <li>Diseño responsive</li>
            <li>5 secciones</li>
            <li>Formulario de contacto</li>
            <li>Conexión con redes sociales</li>
            <li>Autogestionable</li>
          </ul>
          <div className="mt-4">
            <div className="text-xl font-bold">AR$</div>
            <span className="text-2xl font-bold">180 USD</span>
            <h6 className="text-sm">ÚNICA VEZ</h6>
          </div>
          <a
            href="#Contact"
            target="_self"
            className="bg-blue-500 text-white px-4 py-2 mt-4 block"
          >
            <span>QUIERO ESTE PLAN</span>
          </a>
        </div>

        {/* <!-- PREMIUM --> */}

        <div className=" p-4 sm:mx-9 ">
          <p className="text-xl font-bold mb-4">PREMIUM</p>
          <img
            className="w-24 h-24 object-cover mb-4"
            src="https://cdcpublicidad.com.ar/wp-content/uploads/2023/02/premium.png"
            alt=""
            decoding="async"
            loading="lazy"
          />
          <ul className="list-disc">
            <li>Diseño personalizado</li>
            <li>Diseño responsive</li>
            <li>5 secciones</li>
            <li>Conexión con redes sociales</li>
            <li>Formulario de contacto</li>
            <li>Autenticación</li>
            <li>Autogestionable</li>
          </ul>
          <div className="mt-4">
            <div className="text-xl font-bold">AR$</div>
            <span className="text-2xl font-bold">600 USD</span>
            <h6 className="text-sm">ÚNICA VEZ</h6>
          </div>
          <a
            href="#Contact"
            target="_self"
            className="bg-blue-500 text-white px-4 py-2 mt-4 block"
          >
            <span>QUIERO ESTE PLAN</span>
          </a>
        </div>
      </div>
    </section>
  );
};
