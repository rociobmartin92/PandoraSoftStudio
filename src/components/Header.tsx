import NavBar from "./NavBar";
import pandora from "../assets/pandora.png";

export const Header = () => {
  return (
    <header className="flex justify-between w-[100%] ">
      <img src={pandora} style={{ height: "50px" }} />
      <NavBar />
    </header>
  );
};
