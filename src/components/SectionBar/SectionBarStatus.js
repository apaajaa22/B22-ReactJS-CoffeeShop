import React from 'react'
import { InfoMarket } from '..'
import { IcCustomer, IcGps, IcUser } from '../../assets'

function SectionBarStatus() {
  return (
    <section className="bg-white h-44 mx-32 py-7 -mt-24 rounded-xl shadow-lg flex flex-row items-center justify-between px-36 ">
      <InfoMarket Icon={IcUser} value="90+" label="Staff" />
      <div className="border-r-4 border-gray-200 h-full" />
      <InfoMarket Icon={IcGps} value="30+" label="Stores" />
      <div className="border-r-4 border-gray-200 h-full" />
      <InfoMarket Icon={IcCustomer} value="800+" label="Customers" />
    </section>
  )
}

export default SectionBarStatus
