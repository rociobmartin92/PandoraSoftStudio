import { useForm, SubmitHandler } from "react-hook-form";

type IFormInput = {
  name: string;
  email: string;
  description: string;
  country: string;
  city: string;
  state: string;
  project: string;
};

export const Contact = () => {
  const { handleSubmit, register } = useForm({
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
    console.log(data);
  };

  return (
    <section
      id="Contact"
      className="text-white font-raj flex items-baseline  px-[15%] mt-[120px] mb-6 w-screen"
    >
      <div className="">
        <p className="text-2xl mb-5 animate__animated animate__slideInLeft">
          Contáctanos:
        </p>
        <p>ventas@empdigital.cl</p>
        <p>C+56 9 6645 9934</p>
      </div>

      <div className="border-b border-gray-900/10 ml-[100px]">
        <p className="text-2xl mb-5 animate__animated animate__slideInLeft">
          Cotizá con nosotros:
        </p>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
            <div className="sm:col-span-3">
              <label className="block text-sm font-medium leading-6 text-white">
                Nombre y apellido
              </label>
              <div className="mt-2">
                <input
                  {...register("name")}
                  type="text"
                  className=" pl-3 block w-full font-extrabold rounded-md text-black border-0 py-1.5 shadow-sm sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div className="sm:col-span-3">
              <label className="block text-sm font-medium leading-6 text-white">
                Email
              </label>
              <div className="mt-2">
                <input
                  {...register("email")}
                  type="email"
                  className=" pl-3 block w-full font-extrabold text-black rounded-md border-0 py-1.5 shadow-sm sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div className="sm:col-span-4">
              <label className="block text-sm font-medium leading-6 text-white">
                Tipo de emprendimiento
              </label>
              <div className="mt-2">
                <input
                  {...register("description")}
                  type="text"
                  className=" pl-3 block w-full font-extrabold text-black rounded-md border-0 py-1.5 shadow-sm sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div className="sm:col-span-3">
              <label className="block text-sm font-medium leading-6 text-white">
                Estoy interesado en
              </label>
              <div className="mt-2">
                <select
                  {...register("project")}
                  className="pl-3 block w-full rounded-md border-0 py-2 text-black shadow-sm   sm:max-w-xs sm:text-sm sm:leading-6"
                >
                  <option value="we">Web estática</option>
                  <option value="wd">Web dinámica</option>
                  <option value="app">Aplicación Android</option>
                  <option value="de">Diseño</option>
                </select>
              </div>
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
          <input type="submit" />
        </form>
      </div>
    </section>
  );
};
