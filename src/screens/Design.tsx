import des from "../../public/images/des.jpeg";

export const Design = () => {
  return (
    <div className="flex items-center justify-center h-screen w-screen">
      <div className="text-white text-center">
        <p className="text-2xl font-bold mb-4">
          ¿Tienes una idea y quieres plasmarla en un diseño?
        </p>
        <p className="text-lg mb-9">
          En Pandora Studio te ayudamos en todo el proceso para hacerlo real.
        </p>
        <img src={des} className="w-[750px] h-[400px]" alt="Descripción" />
      </div>
    </div>
  );
};
