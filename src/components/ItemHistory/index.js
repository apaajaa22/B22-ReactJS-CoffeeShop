import React from "react";
import { Link } from "react-router-dom";
import { ILFood4 } from "../../assets";

function ItemHistory({ code, total, payment, onClick, to }) {
  return (
    <Link
      onClick={onClick}
      to={to}
      class=" bg-white flex flex-row px-5 py-3 rounded-xl items-center focus:outline-none"
    >
      <img class="w-16 h-16 mr-5 rounded-full" src={ILFood4} alt="food" />
      <div className="flex flex-col">
        <h3 class="font-bold text-xl">{code}</h3>
        <p class="text-yellow-900">IDR {total}</p>
        <p class="text-yellow-900">Payment: {payment}</p>
      </div>
    </Link>
  );
}

export default ItemHistory;
