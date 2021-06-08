import React from "react";
import { Link } from "react-router-dom";
import { Logo, Search } from "..";
import { IcMessage, IcSearch, ILUser4 } from "../../assets";
function SecondaryHeader({ home, product, cart, history, isSearchInput }) {
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
          <ul className="flex flex-row space-x-8 text-md -ml-8 ">
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
          <button>
            <img src={IcSearch} alt="icon search" />
          </button>
        )}
        <button className="relative">
          <img src={IcMessage} alt="icon message" />
          <p className="bg-yellow-900 text-white rounded-full w-4 h-4 items-center justify-center flex flex-row text-xs absolute -top-2 -left-2">
            1
          </p>
        </button>
        <Link to="/userprofile">
          <img
            className="w-10 h-10 rounded-full"
            src={ILUser4}
            alt="illustration user"
          />
        </Link>
      </div>
    </nav>
  );
}

export default SecondaryHeader;
