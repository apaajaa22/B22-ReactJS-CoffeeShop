import React from 'react'
import { Link } from 'react-router-dom'

// eslint-disable-next-line react/prop-types
function Item({ name, picture, price, to }) {
  return (
    <Link
      to={to}
      className="space-y-2 shadow-xl rounded-2xl bg-white w-full h-full flex flex-col justify-center items-center py-5"
    >
      <img
        className="w-28 h-28 rounded-full object-cover"
        src={`${picture}`}
        alt="food"
      />
      <h4 className="text-center flex-1 font-bold w-20 flex justify-center text-xl leading-tight">
        {name}
      </h4>
      <h5 className="text-yellow-900 font-medium text-align">IDR {price}</h5>
    </Link>
  )
}

export default Item
//default image, update patch, window alert jadi modal, responsive, searching, sorting, eslint
