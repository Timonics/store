import React from "react";
import { Routes, Route, RouteProps } from "react-router-dom";

import Intro from "./components/intro/intro"
import Home from "./container/home";
import Login from "./components/auth/login";
import Register from "./components/auth/register";
import CategoryLayout from "./components/category/categoryLayout"
import Category from "./components/category/category"
import CategoryDetails from "./components/category/categoryDetails"
import ProductDetails from "./components/hero/productDetails";
import Cart from "./components/cart/emptyCart";
import premiumDeals from "./components/deals/premiumDeals";
import upcomingCategory from "./components/category/upcomingCategory";
import successRegister from "./components/auth/successRegister";

const App: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<Intro />} />
      <Route path="home" element={<Home />} />
      <Route path="login" element={<Login />} />
      <Route path="register" element={<Register />} />
     {/*  <Route path="success-register" element={<successRegister />} /> */}
      {/* <Route path="premium-deals" element={<premiumDeals />} /> */}
      <Route path="cart" element={<Cart />} />
      <Route path="category" element={<CategoryLayout />}>
        <Route index element={<Category />} />
        <Route path=":categoryID" element={<CategoryDetails />}>
           {/* <Route path="" element={<upcomingCategory />}/> */}
        </Route>
      </Route>
    </Routes>
  );
};

export default App;
