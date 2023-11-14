import webdesign from "../assets/webdesign.jpeg";
import ConstructionIcon from "@mui/icons-material/Construction";
import BrushIcon from "@mui/icons-material/Brush";
import SupportAgentIcon from "@mui/icons-material/SupportAgent";
import ImportantDevicesIcon from "@mui/icons-material/ImportantDevices";

export const Web = () => {
  return (
    <div className="h-screen ">
      <div className="text-white p-8 rounded-md flex justify-between">
        <div>
          <p className="text-2xl font-bold mb-4">
            ¿Necesitas una página web para darte a conocer?
          </p>
          <p className="text-lg mb-9">
            En Pandora Studio creamos la tuya a la medida de tu emprendimiento o
            proyecto
          </p>

          <ul className="space-y-4">
            <div className="flex items-center">
              <BrushIcon />
              <li className="animate__animated animate__slideInLeft text-lg ml-3">
                Diseño a cargo de un profesional de UX/UI
              </li>
            </div>
            <div className="flex items-center">
              <ImportantDevicesIcon />
              <li className="animate__animated animate__slideInLeft text-lg  ml-3">
                Sitios atractivos, personalizados, responsivos y escalables
              </li>
            </div>
            <div className="flex items-center">
              <ConstructionIcon />
              <li className="animate__animated animate__slideInLeft text-lg  ml-3">
                Soporte por 3 meses.
              </li>
            </div>
            <div className="flex items-center">
              <SupportAgentIcon />
              <li className="animate__animated animate__slideInLeft text-lg  ml-3">
                Asesoría para que puedas realizar cambios en tu web sin volver a
                cotizar.
              </li>
            </div>
          </ul>
        </div>
        <div>
          <img src={webdesign} className="w-[400px] h-[280px] ml-10" />
        </div>
      </div>
    </div>
  );
};
