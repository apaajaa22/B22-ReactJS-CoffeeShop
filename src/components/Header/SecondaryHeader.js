/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { Logo, Search } from '..'
import { IcMessage, IcSearch, ILUserDefault } from '../../assets'
import { getUser } from '../../redux/actions/users'
function SecondaryHeader({
  home,
  product,
  cart,
  history,
  isSearchInput,
  onClick,
  auth,
  users,
}) {
  useEffect(() => {
    console.log(auth)
    getUser(auth.token)
  }, [])
  return (
    <nav className="flex flex-row justify-between py-7 items-center">
      <Logo />
      <div>
        {isSearchInput ? (
          <ul className="flex flex-row space-x-8 text-md -mr-36 ">
            <li>
              <Link className={home} to="/">
                Home
              </Link>
            </li>
            <li>
              <Link className={product} to="/products">
                Product
              </Link>
            </li>
            <li>
              <Link className={cart} to="/cart">
                Your Cart
              </Link>
            </li>
            <li>
              <Link className={history} to="/history">
                History
              </Link>
            </li>
          </ul>
        ) : (
          <ul className="flex flex-row space-x-8 text-md  ">
            <li>
              <Link className={home} to="/">
                Home
              </Link>
            </li>
            <li>
              <Link className={product} to="/products">
                Product
              </Link>
            </li>
            <li>
              <Link className={cart} to="/cart">
                Your Cart
              </Link>
            </li>
            <li>
              <Link className={history} to="/history">
                History
              </Link>
            </li>
          </ul>
        )}
      </div>
      <div className="flex flex-row items-center justify-center space-x-8">
        {isSearchInput ? (
          <Search type="header" />
        ) : (
          <button className="focus:outline-none">
            <img src={IcSearch} alt="search" />
          </button>
        )}
        <button className="relative">
          <img src={IcMessage} alt="icon message" />
          <p className="bg-yellow-900 text-white rounded-full w-4 h-4 items-center justify-center flex flex-row text-xs absolute -top-2 -left-2">
            1
          </p>
        </button>
        <Link to="/userprofile">
          {users.users.map((user) => {
            return user.picture !== null ? (
              <img
                className="w-10 h-10 rounded-full object-cover"
                src={user.picture}
                alt="user"
              />
            ) : (
              <img
                src={ILUserDefault}
                alt="user"
                className="w-10 h-10 rounded-full object-cover "
              />
            )
          })}
        </Link>
      </div>
    </nav>
  )
}
const mapStateToProps = (state) => ({
  auth: state.auth,
  users: state.users,
})

const mapDisPatchToProps = { getUser }

export default connect(mapStateToProps, mapDisPatchToProps)(SecondaryHeader)
