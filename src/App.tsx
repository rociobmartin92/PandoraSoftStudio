import "./App.css";
import Logo from "../public/Logo.jpg";
import { useState } from "react";
import { Header } from "./components/Header";
import { MainComponent } from "./components/MainComponent";
import { About } from "./components/About";
import { Clients } from "./components/Clients";
import { Stack } from "@mui/material";
import { Contact } from "./components/Contact";

function App() {
  const [show, setShow] = useState(true);

  setTimeout(() => {
    setShow(false);
  }, 2000);

  return (
    <div className="px-5 ">
      <Stack direction="row" spacing={2}>
        {show ? (
          <div className="h-screen flex items-center justify-center w-screen ">
            <img src={Logo} style={{ height: "350px", width: "350px" }} />
          </div>
        ) : (
          <div className="w-[100%]">
            <Header />
            <MainComponent />
            <About />
            <Clients />
            <Contact />
          </div>
        )}
      </Stack>
    </div>
  );
}

export default App;
