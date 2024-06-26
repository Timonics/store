import React from "react";

import Nav from "../components/nav/nav";
import SideBar from "../components/nav/sideBar";
import Hero from "../components/hero/hero";

const home = () => {
  return (
    <div className="h-screen flex gap-1 p-2 rounded-lg">
      <div className="flex flex-col gap-1 w-1/3">
        <Nav />
        <SideBar />
      </div>
      <div className="w-2/3">
        <Hero 
          _id={""}
          name={""} 
          image={""} 
          isAvailable={false} 
        />
      </div>
    </div>
  );
};

export default home;