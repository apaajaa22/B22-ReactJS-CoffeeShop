import React from "react";

function ListCategory({ category, onClick }) {
  return (
    <ul className="flex flex-row  my-8 space-x-24 justify-center">
      <li>
        <button
          onClick={onClick}
          className="px-2 text-gray-500 focus:outline-none font-bold text-lg focus:border-yellow-900 focus:text-yellow-900 border-b-2 border-white"
        >
          {category}
        </button>
      </li>
    </ul>
  );
}

export default ListCategory;
