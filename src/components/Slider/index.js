import React from "react";
import { IcArLeft, IcArRight } from "../../assets";

function Slider() {
  return (
    <div className="flex flex-row justify-between items-center px-32 bg-gray-100 pt-20 pb-40">
      <div className="flex flex-row space-x-4">
        <div className="w-12 bg-yellow-900 h-4 rounded-full" />
        <div className="w-4 bg-gray-400 h-4 rounded-full" />
        <div className="w-4 bg-gray-400 h-4 rounded-full" />
        <div className="w-4 bg-gray-400 h-4 rounded-full" />
      </div>
      <div className="flex flex-row space-x-5">
        <button className="focus:outline-none">
          <img
            className="w-12 h-12 bg-white border-2 border-yellow-900 rounded-full p-3"
            src={IcArLeft}
            alt="icon arrow left"
          />
        </button>
        <button className="focus:outline-none">
          <img
            className="w-12 h-12 bg-yellow-900 rounded-full p-3"
            src={IcArRight}
            alt="icon arrow left"
          />
        </button>
      </div>
    </div>
  );
}

export default Slider;
