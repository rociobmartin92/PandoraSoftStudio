import React from "react";
import "./App.css";
import Logo from "./assets/images/logosinfondo.png";
import { useState } from "react";
import { Stack } from "@mui/material";
import { lazy, Suspense } from "react";
import { Routes, Route } from "react-router-dom";

const Mobile = lazy(() => import("./screens/Mobile"));
const Web = lazy(() => import("./screens/Web"));
const Design = lazy(() => import("./screens/Design"));
const Main = lazy(() => import("./screens/Main"));
const Planes = lazy(() => import("./components/Planes"));

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
            <Suspense fallback={<h1>Cargando..</h1>}>
              <Routes>
                <Route path="/" element={<Main />} />
                <Route path="/mobile" element={<Mobile />} />
                <Route path="/web" element={<Web />} />
                <Route path="/design" element={<Design />} />
                <Route path="/planes" element={<Planes />} />
              </Routes>
            </Suspense>
          </>
        )}
      </Stack>
    </div>
  );
}

export default App;
