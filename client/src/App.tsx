// import React from 'react';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./features/global/pages/home";
import Login from "./features/users/pages/Login";
import Register from "../src/features/users/pages/Register";
// import StyledMediaCard from "./features/global/pages/home";
// import { NewsHomepage } from "./features/global/pages/home";
// import News from "../src/features/global/components/News"
// import Home from "../src/features/global/pages/Home"
// import LocationComponent from "../src/features/global/components/Location";

function App() {

  return (
    <>
      <BrowserRouter>
        <>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/Register" element={<Register />} />
            <Route path={'*'} element={<h1>404 Not Found</h1>} />
            {/* <Route path="/location" element={<LocationComponent />} /> */}
          </Routes>
          {/* {/<Kidnapped/> } */}
        </>
      </BrowserRouter>
    </>
  )

}
export default App;