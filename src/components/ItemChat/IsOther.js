/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react'
import { ILUser1, ILUserDefault } from '../../assets'

function IsOther({pic, name , chat, onClick}) {
  return (
    <div className='bg-white px-8 py-3 rounded-xl flex flex-row items-center justify-end'>
      <button onClick={onClick} className='flex flex-col items-end focus:outline-none'>
        <h3 className="text-black font-bold text-lg capitalize">{name}</h3>
        <p className="text-black flex text-justify text-sm">
          {chat}
        </p>
      </button>
      <img src={pic !== null ? pic : ILUserDefault} className="w-16 h-16 object-cover ml-5 rounded-full" />
    </div>
  )
}

export default IsOther
