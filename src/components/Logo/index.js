import React from 'react'
import { Link } from 'react-router-dom'
import { IcLogo } from '../../assets'

function Logo() {
  return (
    <Link
      to="/"
      className="flex flex-row justify-center items-center space-x-4 focus:outline-none"
    >
      <img src={IcLogo} alt="logoCoffee" />
      <h1 className="font-bold text-xl">Coffee Shop</h1>
    </Link>
  )
}

export default Logo
