import React from 'react'
import { Link } from 'react-router-dom'
import { ILFood4 } from '../../assets'

// eslint-disable-next-line react/prop-types
function ItemHistory({ code, total, payment, to }) {
  return (
    <Link
      to={to}
      className=" bg-white flex flex-row px-5 py-3 rounded-xl items-center focus:outline-none"
    >
      <img className="w-16 h-16 mr-5 rounded-full" src={ILFood4} alt="food" />
      <div className="flex flex-col">
        <h3 className="font-bold text-xl">{code}</h3>
        <p className="text-yellow-900">IDR {total}</p>
        <p className="text-yellow-900">Payment: {payment}</p>
      </div>
    </Link>
  )
}

export default ItemHistory
