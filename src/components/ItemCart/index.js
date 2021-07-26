import React from "react";

function ItemCart({ pic, name, quantity, size, price }) {
  return (
    <div className="flex flex-row items-center py-2">
      <img src={pic} className="md:w-20 w-14 md:h-20 h-14 rounded-xl" alt="food" />
      <div className="flex flex-col flex-1 md:ml-8 ml-5">
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
