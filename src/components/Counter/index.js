/* eslint-disable react/prop-types */
import React, { useState } from 'react'
import Swal from 'sweetalert2'

const Toast = Swal.mixin({
  toast: true,
  position: 'top-end',
  showConfirmButton: false,
  timer: 2000,
  timerProgressBar: true,
  didOpen: (toast) => {
    toast.addEventListener('mouseenter', Swal.stopTimer)
    toast.addEventListener('mouseleave', Swal.resumeTimer)
  }
})
// eslint-disable-next-line no-unused-vars
function Counter({ onValueChange, stateValue, max, onIncrease, onDecrease }) {
  const [counter, setCounter] = useState(stateValue)

  const onCount = (type) => {
    let result = counter
    if (type === 'plus') {
      if (counter === max) {
        Toast.fire({
          icon: 'none',
          title: `There are only ${max} of these items`
        })
      } else {
        onIncrease()
        result = counter + 1
      }
    }
    if (type === 'minus') {
      if (counter > 0) {
        onDecrease()
        result = counter - 1
      }
    }
    setCounter(result)
    // onValueChange(result);
  }
  return (
    <div className="flex flex-row space-x-4 items-center text-xl font-bold">
      <button
        onClick={() => onCount('minus')}
        className="font-bold focus:outline-none w-10 h-10 bg-yellow-400 text-3xl text-center rounded-full"
      >
        -
      </button>
      <p>{counter}</p>
      <button
        onClick={() => onCount('plus')}
        className="font-bold focus:outline-none w-10 h-10 bg-yellow-400 text-3xl text-center rounded-full"
      >
        +
      </button>
    </div>
  )
}
Counter.defaultProps = {
  onIncrease: () => {},
  onDecrease: () => {},
}
export default Counter
