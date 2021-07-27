import React from 'react'

// eslint-disable-next-line react/prop-types
function InfoMarket({ value, label, Icon }) {
  return (
    <div className="flex flex-row justify-center items-center space-x-5">
      <img className="bg-yellow-400 p-3 rounded-full" src={Icon} alt="icon" />
      <div>
        <p className="font-bold text-2xl">{value}</p>
        <p className="text-lg text-gray-500">{label}</p>
      </div>
    </div>
  )
}

export default InfoMarket
