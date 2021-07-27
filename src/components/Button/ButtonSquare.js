import React from 'react'

// eslint-disable-next-line react/prop-types
function ButtonSquare({ text, ...rest }) {
  return (
    <button
      {...rest}
      className="focus:outline-none text-red-900 font-bold text-lg bg-yellow-400 px-16 py-4 rounded-lg w-full"
    >
      {text}
    </button>
  )
}

export default ButtonSquare
