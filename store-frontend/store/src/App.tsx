import React from "react";
import { Routes, Route } from "react-router-dom";

import Intro from "./components/intro"
import Home from "./container/home";
import Login from "./components/login";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Intro />} />
      <Route path="home" element={<Home />} />
      <Route path="login" element={<Login />} />
    </Routes>
  );
};

export default App;
