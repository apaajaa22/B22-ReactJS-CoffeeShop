import React from "react";
import { IcSearch } from "../../assets";
function HeaderSearch() {
  return (
    <div className="focus:outline-none bg-gray-300 px-3 py-2 rounded-full flex flex-row justify-center items-center space-x-2">
      <button>
        <img src={IcSearch} alt="icon search" />
      </button>
      <input
        className="bg-gray-300 focus:outline-none w-36"
        type="text"
        placeholder="Search"
      />
    </div>
  );
}

export default HeaderSearch;
