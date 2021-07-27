/* eslint-disable react/jsx-key */
/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React, { useEffect, useState } from 'react'
import { Counter } from '..'

function SectionBarCounter({
  title,
  subTitle,
  buttonName,
  picture,
  stateValue,
  max,
  onClick,
  variant,
}) {
  const [item, setItem] = useState(variant)

  useEffect(() => {
    if (variant.length) {
      setItem(variant)
    }
  }, [variant])

  const onIncrease = (idx) => {
    const data = [...item]
    data[idx].amount = data[idx].amount + 1
    console.log(data)
    setItem(data)
  }

  const onDecrease = (idx) => {
    const data = [...item]
    data[idx].amount = data[idx].amount - 1
    console.log(data)
    setItem(data)
  }

  return (
    <section className="z-50 relative -mt-24 md:mx-32 flex flex-row space-x-10">
      <section className="bg-white px-5 h-36 w-full py-7 rounded-xl shadow-lg flex flex-row items-center justify-between md:px-24">
        <img
          src={picture}
          alt="food"
          className="hidden md:block w-28 h-28 rounded-full object-cover"
        />
        <div className="flex-1 md:ml-10">
          <h4 className='md:block hidden'>{title}</h4>
          {item.map((variant) => {
            return (
              <h5>
                x{variant.amount} {variant.name}
              </h5>
            )
          })}
        </div>
        <div className="space-y-1">
          {item.map((res, idx) => {
            return (
              <Counter
                key={res.name}
                onIncrease={() => onIncrease(idx)}
                onDecrease={() => onDecrease(idx)}
                stateValue={stateValue}
                max={max}
              />
            )
          })}
        </div>
      </section>
      <section className="hidden md:block w-80 h-36 rounded-xl bg-yellow-400">
        <button
          onClick={onClick}
          className="focus:outline-none w-full h-full text-2xl font-bold text-center"
        >
          CHECKOUT
        </button>
      </section>
    </section>
  )
}
SectionBarCounter.defaultProps = {
  variant: [],
}
export default SectionBarCounter
