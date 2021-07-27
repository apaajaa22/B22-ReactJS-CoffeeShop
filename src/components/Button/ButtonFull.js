import React from 'react'

// eslint-disable-next-line react/prop-types
function ButtonSquare({ text, ...rest }) {
  return (
    <button
      {...rest}
      className="focus:outline-none hover:bg-yellow-400 border-2 border-yellow-400 text-red-900 text-md font-semibold bg-white px-16 py-3 rounded-full w-full"
    >
      {text}
    </button>
  )
}

export default ButtonSquare
