import React from 'react'

// eslint-disable-next-line react/prop-types
function ButtonSquareBrown({ text, ...rest }) {
  return (
    <button
      {...rest}
      className="focus:outline-none text-white text-lg font-semibold bg-yellow-900 px-16 py-4 rounded-lg w-full"
    >
      {text}
    </button>
  )
}

export default ButtonSquareBrown
