/* eslint-disable react/prop-types */
import React, { useState } from 'react'
import { FiMenu } from 'react-icons/fi'
import { Link } from 'react-router-dom'
import Logo from '../Logo'
import Search from '../Search'


function HeaderResponsive({
  onChange,
  onKeyDown,
  value,
  valueSort,
  onChangeSort,
  onClickSearch,
  isSearchInput
}) {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div>
      <div className="flex-row flex justify-between ">
        <Logo />
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="focus:outline-none"
        >
          <FiMenu size={25} />
        </button>
      </div>
      {isOpen && (
        <div className="block flex-col flex mt-5 space-y-2 text-white font-bold ">
          <Link to="/" className="px-2 rounded-md hover:bg-yellow-300">
            Home
          </Link>
          <Link to="/products" className="px-2 rounded-md hover:bg-yellow-300">
            Product
          </Link>
          <Link to="/cart" className="px-2 rounded-md hover:bg-yellow-300">
            Cart
          </Link>
          <Link to="/history" className="px-2 rounded-md hover:bg-yellow-300">
            History
          </Link>
          <Link
            to="/userprofile"
            className="px-2 rounded-md hover:bg-yellow-300"
          >
            Profile
          </Link>
          <div>
            {isSearchInput && <Search
              onClickSearch={onClickSearch}
              valueSort={valueSort}
              onChangeSort={onChangeSort}
              value={value}
              onKeyDown={onKeyDown}
              onChange={onChange}
              type="header"
            />}
          </div>
        </div>
      )}
    </div>
  )
}

export default HeaderResponsive
