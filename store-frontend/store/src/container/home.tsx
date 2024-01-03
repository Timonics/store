import React from "react";

import Nav from "../components/nav";
import TopSideBar from "../components/topSideBar";
import BottomSideBar from "../components/bottomSideBar";
import Hero from "../components/hero";
import Footer from "../components/footer";

const home = () => {
  return (
    <>
      <Nav />
      <TopSideBar />
      <BottomSideBar />
      <Hero />
      <Footer />
    </>
  );
};

export default home;