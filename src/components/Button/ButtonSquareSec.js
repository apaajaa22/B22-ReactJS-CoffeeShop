import React from "react";

function ButtonSquareSec({ text, icon }) {
  return (
    <button className="focus:outline-none text-black text-md font-semibold bg-whtie px-16 py-4 rounded-lg w-full shadow-lg border-2 border-gray-100">
      <div className="flex flex-row items-center justify-center space-x-5">
        <span>
          <img src={icon} alt="icon" />
        </span>
        <p>{text}</p>
      </div>
    </button>
  );
}

export default ButtonSquareSec;
