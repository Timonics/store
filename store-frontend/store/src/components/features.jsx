import React from "react";
import { Link } from "react-router-dom";
import data from "../components/dummyData/data";

const features = () => {
  const dataElements = data.map((data) => (
    <Link className="text-black font-extrabold text-xl shadow-purple-400 shadow-lg  flex flex-col gap-5 items-center justify-center p-6 m-6 rounded-xl transition ease-in-out delay-150
    hover:shadow-purple-500 hover:shadow-xl hover:-translate-y-1 hover:scale-110 duration-300 w-48" to={`${data.name}`}>
      <img src="" className=" border w-32 h-28 rounded-lg bg-mypink blur-sm" />
      <h1 className="text-neutral-600">{data.name}</h1>
    </Link>
  ));

  return (
    <div className="p-10 pt-14 mt-4 rounded-3x text-neutral-600 opacity-90 bg-black flex flex-col space-y-5">
      <h1 className="text-5xl text-center font-black text-purple-900">
        🛍️ Shop the Latest Trends
      </h1>
      <p className="leading-relaxed font-medium">
        Explore our handpicked selection of [product category] that reflects the
        latest trends and timeless classics. From [feature product] to [feature
        product], find the perfect [product type] to express your unique style.
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ex mollitia
        dolores perspiciatis adipisci voluptates quaerat veniam.
      </p>
      <div className="flex justify-around m-4">{dataElements}</div>
    </div>
  );
};

export default features;
