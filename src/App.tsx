import "./App.css";
import { Stack, Typography } from "@mui/material";
import Logo from "../public/Logo.jpg";
import { useState } from "react";
import NavBar from "./components/NavBar";
import { Header } from "./components/Header";
import { MainComponent } from "./components/MainComponent";

function App() {
  const [show, setShow] = useState(true);

  setTimeout(() => {
    setShow(false);
  }, 2000);

  return (
    <div className="p-5 ">
      <Stack direction="row" spacing={2}>
        {show ? (
          <div className="h-screen flex items-center justify-center w-screen ">
            <img src={Logo} style={{ height: "350px", width: "350px" }} />
          </div>
        ) : (
          <div className="w-[100%]">
            <Header />
            <MainComponent />
          </div>
        )}
      </Stack>
    </div>
  );
}

export default App;
