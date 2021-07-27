import React from 'react'

// eslint-disable-next-line react/prop-types
function Alert({ message }) {
  return (
    <div
      className="bg-red-100 border-l-4 border-red-500 text-red-700 p-4 md:mx-32 mx-10 rounded-xl my-3"
      role="alert"
    >
      <p className="font-bold">Be Warned</p>
      <p>{message}</p>
    </div>
  )
}

export default Alert
