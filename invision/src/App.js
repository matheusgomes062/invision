import React from "react";
import "./App.scss";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LeftStillSlider from "./Components/LeftStillSlider";
import Home from "./Components/Home";
import Login from "./Components/Login/Login";

function App() {
  return (
    <div>
      <BrowserRouter>
        {/* <LeftStillSlider /> */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login/*" element={<Login />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
