import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import heroLogo from "../assets/heroLogo.png";

const hero = () => {
  return (
    <div>
      <div className="flex space-x-10 p-6 m-2 ">
        <div className="w-3/5 flex flex-col space-y-7 items-start">
          <div className="space-y-3">
            <h1 className="text-3xl text-bold">
              <span className="text-5xl text-extrabold text-purple-700">
                Discover
              </span>{" "}
              a world of exquisite fashion where style meets functionality.
            </h1>
            <p className=" text-sm font-thin leading-relaxed">
              At Mickey'z Hub, we curate a collection of high-quality, unique
              and trendy wears to elevate your lifestyle and experience. Lorem
              ipsum dolor sit amet consectetur adipisicing elit. Enim unde
              numquam amet nobis quis temporibus ipsa, quas tempora assumenda
            </p>
          </div>
          <Link
            to=""
            className="p-3 px-8 m-2 text-bold bg-purple-700 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:bg-pink-300 duration-300"
          >
            Discover
          </Link>
        </div>
        <img
          src={heroLogo}
          alt="hero picture"
          className="w-2/5 scale-x-90 scale-y-90 rounded-md shadow-2xl blur-md"
        />
      </div>
    </div>
  );
};

export default hero;
