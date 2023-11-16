import "./App.css";
import Logo from "../public/Logo.jpg";
import { useState } from "react";

import { Stack } from "@mui/material";

import { Routes, Route } from "react-router-dom";
import { Mobile } from "./screens/Mobile";
import { Web } from "./screens/Web";
import { Design } from "./screens/Design";
import { Main } from "./screens/Main";

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
          <>
            {/* <div className="w-[100%]">
              <Main />
            </div> */}
            <Routes>
              <Route path="/" element={<Main />} />

              <Route path="/mobile" element={<Mobile />} />
              <Route path="/web" element={<Web />} />
              <Route path="/design" element={<Design />} />
            </Routes>
          </>
        )}
      </Stack>
    </div>
  );
}

export default App;
