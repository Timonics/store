import React from "react";
import { Link } from "react-router-dom";

const nav = () => {
  return (
    <header>
      <nav
        className="flex justify-between items-center m-4 p-7 
    text-sm rounded-lg bg-transparent shadow-lg "
      >
        <Link to="/" className="italic ml-8 text-neutral-500">
          Logo
        </Link>
        <div className="flex space-x-6 items-center ">
          <Link className=" text-purple-500 text-lg font-semibold transition ease-in-out hover:-translate-x-1 hover:scale-110 hover:text-purple-900 delay-150 duration-300">
            Explore
          </Link>
          <Link className="transition ease-in-out hover:-translate-x-1 hover:scale-110 
          hover:font-bold hover:text-purple-900 delay-150 duration-300">Cart</Link>
          <Link to="/login" className="transition ease-in-out hover:-translate-x-1 hover:scale-110 
          hover:font-bold hover:text-purple-900 delay-150 duration-300">Login</Link>
          <Link
            to="/register"
            className=" bg-slate-300 py-2 px-4 rounded-sm text-neutral-900 font-extrabold shadow-lg transition ease-in-out hover:-translate-y-1 hover:scale-110  hover:text-purple-700 delay-150 duration-300"
          >
            Register
          </Link>
        </div>
      </nav>
    </header>
  );
};

export default nav;
