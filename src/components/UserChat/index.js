import React from 'react'
import { ILUser1 } from '../../assets'

function UserChat() {
  return (
    <button className="flex flex-row mt-5 items-center border-b-2 pb-3 border-white focus:outline-none">
      <img src={ILUser1} className="w-16 h-16 object-cover mr-5" />
      <div className='flex flex-col items-start'>
        <h3 className="text-white font-bold text-lg ">Zulaikha</h3>
        <p className="text-white flex text-justify text-sm">
          Hey jason, I can’t find the promo section. Can u tell me where is it?
        </p>
      </div>
    </button>
  )
}

export default UserChat
