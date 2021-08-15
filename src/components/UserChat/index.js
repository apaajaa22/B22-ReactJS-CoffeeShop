/* eslint-disable react/prop-types */
import React from 'react'

function UserChat({name, chat, picture, onClick}) {
  return (
    <button onClick={onClick} className="flex w-80 flex-row mt-5 items-center border-b-2 pb-3 border-white focus:outline-none">
      <img src={picture} className="w-16 h-16 object-cover mr-5 rounded-full bg-white" />
      <div className='flex flex-col items-start'>
        <h3 className="text-white font-bold text-lg ">{name}</h3>
        <p className="text-white flex text-justify text-sm">
          {chat}
        </p>
      </div>
    </button>
  )
}

export default UserChat
