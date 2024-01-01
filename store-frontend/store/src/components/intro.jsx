import React from "react";
import { Link } from "react-router-dom";

const intro = () => {
  return (
    <div className="h-screen flex items-center place-content-center">
      <div className=" flex flex-col items-center place-content-center bg-slate-300 space-y-12 shadow-2xl rounded-lg p-12 py-24">
        <div className="flex flex-col space-y-2 text-center">
          <h1
            className=" 
        text-5xl
        font-black text-center"
          >
            Welcome to <span className=" text-purple-600">Mickey'z Hub </span>
          </h1>
          <h2>Elevate Your Style, Simplify Your Shopping!</h2>
        </div>

        <Link
          to="home"
          className=" py-2 px-28 rounded-md bg-purple-600 hover:bg-purple-500
           font-semibold animate-bounce"
        >
          Start Shopping!!!
        </Link>
      </div>
    </div>
  );
};

export default intro;
