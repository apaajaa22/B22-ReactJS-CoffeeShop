import React from "react";

function ItemCart({ pic, name, quantity, size, price }) {
  return (
    <div className="flex flex-row items-center py-2">
      <img src={pic} className="w-20 h-20 rounded-xl" alt="food" />
      <div className="flex flex-col flex-1 ml-10">
        <p>{name}</p>
        <p>x {quantity}</p>
        <p>{size}</p>
      </div>
      <div>
        <p>IDR {price}</p>
      </div>
    </div>
  );
}

export default ItemCart;
