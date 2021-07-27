import React from 'react'
import { ILFood6 } from '../../assets'

function Coupon() {
  return (
    <div className="flex flex-row items-center -mr-10">
      <div className="w-72 h-full bg-yellow-400 rounded-2xl flex flex-col items-center ">
        <img
          src={ILFood6}
          alt="food"
          className="rounded-full w-32 h-32 mt-10"
        />
        <div className="flex flex-col items-center font-bold text-xl mt-3">
          <h3>Cappucino</h3>
          <h3>20% OFF</h3>
        </div>
        <p className="text-sm mt-2 text-center w-52">
          Buy 1 Choco Oreo and get 20% off for Cappucino
        </p>
        <div className="border-t-2 border-dashed border-black w-72 my-5 pt-5 text-center space-y-3">
          <h5>COUPON CODE</h5>
          <h5 className="text-3xl font-bold tracking-wide">BELILAGI</h5>
          <p>Valid until July 10th 2021</p>
        </div>
      </div>
      <div className="bg-black w-6 h-96 rounded-r-xl"></div>
      <div className="bg-yellow-900 w-5 h-80 rounded-r-xl"></div>
    </div>
  )
}

export default Coupon
