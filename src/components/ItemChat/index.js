import React from 'react'
import { ILUser1 } from '../../assets'

function ItemChat() {
  return (
    <div className='bg-white px-10 py-5 rounded-xl flex flex-row items-center'>
      <img src={ILUser1} className="w-16 h-16 object-cover mr-5" />
      <div className='flex flex-col'>
        <h3 className="text-black font-bold text-lg ">Zulaikha</h3>
        <p className="text-black flex text-justify text-sm">
          Hey jason, I can’t find the promo section. Can u tell me where is it?
        </p>
      </div>
    </div>
  )
}

export default ItemChat
