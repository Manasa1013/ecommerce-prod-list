import React, { useState } from "react";
import { Route, Routes } from "react-router-dom";
import { AsideNav } from "./Components/AsideNav";
import { Navbar } from "./Components/Navbar";
import { Home } from "./Pages/Home";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="*" element={<Home />}></Route>
      </Routes>
    </div>
  );
}

export default App;
