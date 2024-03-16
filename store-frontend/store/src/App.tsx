import React from "react";
import { Routes, Route } from "react-router-dom";

import Intro from "./components/intro"
import Home from "./container/home";
import Login from "./components/login";
import Register from "./components/register";
import Category from "./components/category"

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Intro />} />
      <Route path="home" element={<Home />} />
      <Route path="login" element={<Login />} />
      <Route path="register" element={<Register />} />
      <Route path='category' element={<Category />}/>
    </Routes>
  );
};

export default App;
