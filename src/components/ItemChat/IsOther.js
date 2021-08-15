/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react'
import { ILUser1, ILUserDefault } from '../../assets'

function IsOther({pic, name , chat}) {
  return (
    <div className='bg-white px-10 py-5 rounded-xl flex flex-row items-center justify-end'>
      <div className='flex flex-col items-end'>
        <h3 className="text-black font-bold text-lg ">{name}</h3>
        <p className="text-black flex text-justify text-sm">
          {chat}
        </p>
      </div>
      <img src={pic !== null ? pic : ILUserDefault} className="w-16 h-16 object-cover ml-5" />
    </div>
  )
}

export default IsOther
