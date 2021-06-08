import React from "react";
import { ILFood4 } from "../../assets";

function ItemHistory() {
  return (
    <div class=" bg-white flex flex-row px-5 py-3 rounded-xl items-center ">
      <img class="w-16 h-16 mr-5 rounded-full" src={ILFood4} alt="food" />
      <div>
        <h3 class="font-bold text-xl">Veggie tomato mix</h3>
        <p class="text-yellow-900">IDR 34.000</p>
        <div class="flex flex-row justify-between">
          <p class="text-yellow-900">Delivered</p>
          <label class="checkbox">
            <input type="checkbox" />
            <span class="item"></span>
          </label>
        </div>
      </div>
    </div>
  );
}

export default ItemHistory;
