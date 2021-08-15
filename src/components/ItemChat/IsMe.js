/* eslint-disable react/prop-types */
import React from 'react'
import { ILUserDefault } from '../../assets'

function IsMe({pic, name, chat}) {
  return (
    <div className='bg-white px-10 py-5 rounded-xl flex flex-row items-center'>
      <img src={pic !== null ? pic : ILUserDefault} className="w-16 h-16 object-cover mr-5" />
      <div className='flex flex-col'>
        <h3 className="text-black font-bold text-lg ">{name}</h3>
        <p className="text-black flex text-justify text-sm">
          {chat}
        </p>
      </div>
    </div>
  )
}

export default IsMe
