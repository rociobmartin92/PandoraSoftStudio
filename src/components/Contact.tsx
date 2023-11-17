import React, { useForm, SubmitHandler } from "react-hook-form";
import instagra from "../assets/instagram.svg";
import whatsapp from "../assets/whatsapp.svg";
import emailjs from "@emailjs/browser";

type IFormInput = {
  name: string;
  email: string;
  description: string;
  country: string;
  city: string;
  state: string;
  project: string;
};

interface ITemplate extends HTMLFormElement {
  from_name: string;
  from_email: string;
  message: string;
  from_state: string;
  from_project: string;
  to_name: string;
}

export const Contact = () => {
  console.log(import.meta.env.VITE_USER);

  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm({
    defaultValues: {
      name: "",
      email: "",
      description: "",
      country: "",
      city: "",
      project: "",
      state: "",
    },
  });

  const onSubmit: SubmitHandler<IFormInput> = (data) => {
    // e.preventDefault();
    console.log("DATA", data);

    const templateData: ITemplate = {
      from_name: data.name,
      from_email: data.email,
      from_state: data.state,
      from_project: data.project,
      to_name: "Pandora",
      message: data.description,
    };

    console.log("primer paso");
    emailjs
      .send(
        import.meta.env.VITE_EMAIL_SERVICE_ID,
        import.meta.env.VITE_EMAIL_TEMPLATE_ID,
        templateData,
        import.meta.env.VITE_EMAIL_PUBLIC_KEY
      )
      .then(
        (result) => {
          console.log("Entro");
          console.log(result.text);
        },
        (error) => {
          console.log("No ntro");
          console.log("Error sending Email", error.text);
        }
      );
    console.log("paso final");
  };

  return (
    <section
      id="Contact"
      className="text-white font-raj sm:flex items-baseline  px-[15%] mt-[120px] mb-6 w-screen"
    >
      <div className="sm:text-center">
        <p className="text-2xl mb-5 ">Contáctanos:</p>
        <p>martinrocio.1992@gmail.com</p>
        <p>+54 2984391081</p>
        <div className="flex mt-5 cursor-pointer">
          <a href="https://api.whatsapp.com/send?phone=542984391081&text=">
            <img className="w-7 " src={whatsapp} alt="insta" />
          </a>
          <a href="https://www.instagram.com/pandora.studio.vr/">
            <img className="w-8 ml-8" src={instagra} alt="whats" />
          </a>
        </div>
      </div>

      <div className="border-b border-gray-900/10 sm:ml-[100px] mt-[40px]">
        <p className="text-2xl sm:mb-5 mb-0 ">Cotizá con nosotros:</p>
        <form
          // onSubmit={sendEmail}
          onSubmit={handleSubmit(onSubmit)}
        >
          <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
            <div className="sm:col-span-3">
              <label className="block text-md font-medium leading-6 text-white">
                Nombre y apellido
              </label>
              <div className="mt-2">
                <input
                  {...register("name", { required: true })}
                  type="text"
                  className=" pl-3 block w-full font-extrabold rounded-md text-black border-0 py-1.5 shadow-sm sm:text-sm sm:leading-6"
                />
              </div>
              {errors.name && (
                <span className="text-xs text-yellow-400">
                  Este campo es requerido
                </span>
              )}
            </div>
            <div className="sm:col-span-3">
              <label className="block text-smd font-medium leading-6 text-white">
                Email
              </label>
              <div className="mt-2">
                <input
                  {...register("email", { required: true })}
                  type="email"
                  className=" pl-3 block w-full font-extrabold text-black rounded-md border-0 py-1.5 shadow-sm sm:text-sm sm:leading-6"
                />
              </div>
              {errors.email && (
                <span className="text-xs text-yellow-400">
                  Este campo es requerido
                </span>
              )}
            </div>

            <div className="sm:col-span-4">
              <label className="block text-md font-medium leading-6 text-white">
                Tipo de emprendimiento
              </label>
              <div className="mt-2">
                <input
                  {...register("description", { required: true })}
                  type="text"
                  className=" pl-3 block w-full font-extrabold text-black rounded-md border-0 py-1.5 shadow-sm sm:text-sm sm:leading-6"
                />
              </div>
              {errors.description && (
                <span className="text-xs text-yellow-400">
                  Este campo es requerido
                </span>
              )}
            </div>

            <div className="sm:col-span-3">
              <label className="block text-sm font-medium leading-6 text-white">
                Estoy interesado en
              </label>
              <div className="mt-2">
                <select
                  {...register("project", { required: true })}
                  className="pl-3 block w-full rounded-md border-0 py-2 text-black shadow-sm   sm:max-w-xs sm:text-sm sm:leading-6"
                >
                  <option value="app">Aplicación Android</option>
                  <option value="we">Web estática</option>
                  <option value="wd">Web dinámica</option>
                  <option value="de">Diseños</option>
                </select>
              </div>
              {errors.project && (
                <span className="text-xs text-yellow-400">
                  Este campo es requerido
                </span>
              )}
            </div>

            <div className="sm:col-span-2 sm:col-start-1">
              <label className="block text-sm font-medium leading-6 text-white">
                País
              </label>
              <div className="mt-2">
                <select
                  {...register("country")}
                  id="country"
                  name="country"
                  className="pl-3 block w-full rounded-md border-0 py-2 text-black shadow-sm   sm:max-w-xs sm:text-sm sm:leading-6"
                >
                  <option value="arg">Argentina</option>
                  <option value="urug">Uruguay</option>
                  <option value="chile">Chile</option>
                </select>
              </div>
            </div>
            <div className="sm:col-span-2 ">
              <label className="block text-sm font-medium leading-6 text-white">
                City
              </label>
              <div className="mt-2">
                <input
                  {...register("city")}
                  type="text"
                  className=" pl-3 block w-full font-extrabold text-black rounded-md border-0 py-1.5 shadow-sm sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div className="sm:col-span-2">
              <label className="block text-sm font-medium leading-6 text-white">
                Provincia/Estado
              </label>
              <div className="mt-2">
                <input
                  {...register("state")}
                  type="text"
                  className=" pl-3 block w-full font-extrabold text-black rounded-md border-0 py-1.5 shadow-sm sm:text-sm sm:leading-6"
                />
              </div>
            </div>
          </div>
          <button
            className="mt-8 p-2 border-[#1f203c] border-2 rounded-lg  hover:border-[#2d2e46]"
            type="submit"
          >
            Enviar
          </button>
        </form>
      </div>
    </section>
  );
};
