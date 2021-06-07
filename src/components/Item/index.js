import React from "react";
import { Link } from "react-router-dom";

function Item({ name, pic, price }) {
  return (
    <Link
      to="/productdetail"
      className="space-y-2 shadow-xl rounded-2xl bg-white w-full h-full flex flex-col items-center py-5"
    >
      <img className="w-28 h-28 rounded-full" src={pic} alt="food" />
      <h4 className="flex-1 font-bold w-20 text-center text-xl leading-tight">
        {name}
      </h4>
      <h5 className="text-yellow-900 font-medium">IDR {price}</h5>
    </Link>
  );
}

export default Item;
