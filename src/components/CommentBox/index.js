import React from 'react'
import { IcStar } from '../../assets'

// eslint-disable-next-line react/prop-types
function CommentBox({ pic, name, origin, rate, desc }) {
  return (
    <div className="bg-white w-widthBox h-heightBox mb-5 p-6 rounded-xl border-2 border-gray-300 hover:border-red-900">
      <div className="flex flex-row space-x-5 items-center md:mb-8">
        <img className="rounded-full w-14 h-14" src={pic} alt="img user" />
        <div className="flex-1">
          <h5 className="font-semibold text-lg">{name}</h5>
          <h6 className="text-gray-500 text-sm">{origin}</h6>
        </div>
        <div className=" space-x-3 flex flex-row items-center justify-center">
          <p>{rate}</p>
          <img src={IcStar} alt="icon star" />
        </div>
      </div>
      <div>
        <p className="tracking-normal leading-relaxed">{desc}</p>
      </div>
    </div>
  )
}

export default CommentBox
