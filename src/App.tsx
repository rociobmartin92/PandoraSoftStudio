import "./App.css";
import { Stack, Typography } from "@mui/material";
import Logo from "../public/Logo.jpg";
import { useState } from "react";
import NavBar from "./components/NavBar";
import { Header } from "./components/Header";

function App() {
  const [show, setShow] = useState(true);

  setTimeout(() => {
    setShow(false);
  }, 2000);

  return (
    <>
      <Stack direction="row" spacing={2}>
        {show ? (
          <div className="h-screen flex items-center justify-center w-screen ">
            <img src={Logo} style={{ height: "350px", width: "350px" }} />
          </div>
        ) : (
          <Header />
        )}
      </Stack>
    </>
  );
}

export default App;
