import "animate.css";

export const Contact = () => {
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

      <div className="border-b border-gray-900/10 ml-12">
        <p className="text-2xl mb-5 animate__animated animate__slideInLeft">
          Cotizá con nosotros:
        </p>
        <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
          <div className="sm:col-span-3">
            <label className="block text-sm font-medium leading-6 text-white">
              First name
            </label>
            <div className="mt-2">
              <input
                type="text"
                name="first-name"
                id="first-name"
                className=" pl-3 block w-full font-extrabold rounded-md text-black border-0 py-1.5 shadow-sm sm:text-sm sm:leading-6"
              />
            </div>
          </div>

          <div className="sm:col-span-3">
            <label className="block text-sm font-medium leading-6 text-white">
              Last name
            </label>
            <div className="mt-2">
              <input
                type="text"
                name="last-name"
                id="last-name"
                className=" pl-3 block w-full font-extrabold text-black rounded-md border-0 py-1.5 shadow-sm sm:text-sm sm:leading-6"
              />
            </div>
          </div>

          <div className="sm:col-span-4">
            <label className="block text-sm font-medium leading-6 text-white">
              Email address
            </label>
            <div className="mt-2">
              <input
                id="email"
                name="email"
                type="email"
                className=" pl-3 block w-full font-extrabold text-black rounded-md border-0 py-1.5 shadow-sm sm:text-sm sm:leading-6"
              />
            </div>
          </div>

          <div className="sm:col-span-3">
            <label className="block text-sm font-medium leading-6 text-white">
              Country
            </label>
            <div className="mt-2">
              <select
                id="country"
                name="country"
                className="pl-3 block w-full rounded-md border-0 py-2 text-black shadow-sm   sm:max-w-xs sm:text-sm sm:leading-6"
              >
                <option>United States</option>
                <option>Canada</option>
                <option>Mexico</option>
              </select>
            </div>
          </div>

          <div className="col-span-full">
            <label className="block text-sm font-medium leading-6 text-white">
              Street address
            </label>
            <div className="mt-2">
              <input
                type="text"
                name="street-address"
                id="street-address"
                className=" pl-3 block w-full font-extrabold text-black rounded-md border-0 py-1.5 shadow-sm sm:text-sm sm:leading-6"
              />
            </div>
          </div>

          <div className="sm:col-span-2 sm:col-start-1">
            <label className="block text-sm font-medium leading-6 text-white">
              City
            </label>
            <div className="mt-2">
              <input
                type="text"
                name="city"
                id="city"
                className=" pl-3 block w-full font-extrabold text-black rounded-md border-0 py-1.5 shadow-sm sm:text-sm sm:leading-6"
              />
            </div>
          </div>

          <div className="sm:col-span-2">
            <label className="block text-sm font-medium leading-6 text-white">
              State / Province
            </label>
            <div className="mt-2">
              <input
                type="text"
                name="region"
                id="region"
                className=" pl-3 block w-full font-extrabold text-black rounded-md border-0 py-1.5 shadow-sm sm:text-sm sm:leading-6"
              />
            </div>
          </div>

          <div className="sm:col-span-2">
            <label className="block text-sm font-medium leading-6 text-white">
              ZIP / Postal code
            </label>
            <div className="mt-2">
              <input
                type="text"
                name="postal-code"
                id="postal-code"
                className="pl-3 block w-full font-extrabold text-black rounded-md border-0 py-1.5 shadow-sm sm:text-sm sm:leading-6"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
