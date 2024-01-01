import React from "react";
import qualityLogo from "../assets/Group 77.png";

const qualityInfo = () => {
  return (
    <div className="flex flex-col items-center p-6 m-6 space-y-7">
      <img src={qualityLogo} className="" />
      <div className="space-y-3">
        <h1 className="text-5xl font-black">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit.
        </h1>
        <p className="leading-relaxed">
          Sint suscipit officia est eligendi accusamus voluptatum numqua  m,
          voluptatem officiis tenetur optio molestiae provident doloremque ipsum
          aut ex deserunt in! Autem, asperiores.
        </p>
      </div>
    </div>
  );
};

export default qualityInfo;
