import NavBar from "./NavBar";
import pandora from "../assets/images/pandora.png";

export const Header = () => {
  return (
    <header className="flex justify-between w-[100%] bg-[#0d0e26] py-4">
      <img src={pandora} style={{ height: "50px" }} />
      <NavBar />
    </header>
  );
};
