import React, { useState } from "react"
import { useEffect } from "react"
import { useHistory, useLocation } from "react-router-dom"
import { IcSearch } from "../../assets"
import qs from 'querystring'

function HeaderSearch({onKeyDown, onChange,value}) {

  return (
    <div className="focus:outline-none -ml-40 bg-gray-300 px-3 py-2 rounded-full flex flex-row justify-center items-center space-x-2">
      <button>
        <img src={IcSearch} alt="icon search" />
      </button>
      <input
        className="bg-gray-300 focus:outline-none w-36"
        type="text"
        placeholder="Search"
        onChange={onChange}
        onKeyDown={onKeyDown}
        value={value}
      />
    </div>
  );
}

export default HeaderSearch;
