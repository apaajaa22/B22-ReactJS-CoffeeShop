/* eslint-disable react/prop-types */
import React from 'react'
import { IcSearch } from '../../assets'
function MainSearch({ onClick, onChange, value, onKeyDown }) {
  return (
    <div className="bg-gray-300 flex flex-row items-center space-x-3 px-5 py-4 w-60 rounded-full">
      <button onClick={onClick} className="focus:outline-none">
        <img src={IcSearch} alt="icon search" />
      </button>
      <input
        onChange={onChange}
        value={value}
        onKeyDown={onKeyDown}
        type="text"
        placeholder="Search"
        className=" text-gray-900 bg-gray-300 focus:outline-none font-bold text-sm"
      />
    </div>
  )
}

export default MainSearch
