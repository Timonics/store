import React from "react";
import Nav from "../components/nav";
import Hero from "../components/hero";
import Features from "../components/features";
import QualityInfo from "../components/qualityInfo";
import Section3 from "../components/section3";

const homePage = () => {
  return (
    <>
      <Nav />
      <Hero />
      <Features />
      <QualityInfo />
      <Section3 />
    </>
  );
};

export default homePage;
