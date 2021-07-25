import React, { useEffect } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { Logo } from "..";
import {
  IcMessage,
  IcSearch,
  IcUserDefault,
  ILUserDefault,
} from "../../assets";
import Search from "../Search";
import { getUser } from "../../redux/actions/users";

function MainHeader({
  auth,
  home,
  product,
  cart,
  history,
  isSearchInput,
  users,
  onChange,
  onKeyDown,
  value,
  valueSort,
  onChangeSort,
  onClickSearch
}) {
  useEffect(() => {
    console.log(auth);
    getUser(auth.token);
  }, []);

  return (
    <nav className="flex flex-row justify-between py-7 items-center  ">
      <Logo />
      {isSearchInput ? (
        <ul className="flex flex-row space-x-8 text-md -mr-24">
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
      <div className="flex flex-row items-center space-x-5">
        {auth.token !== null ? (
          <div className="flex flex-row items-center justify-center space-x-8 ">
            {isSearchInput ? (
              <Search onClickSearch={onClickSearch} valueSort={valueSort} onChangeSort={onChangeSort} value={value} onKeyDown={onKeyDown} onChange={onChange} type="header" />
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
                );
              })}
            </Link>
          </div>
        ) : (
          <div className="flex flex-row items-center space-x-5">
            <div>
              <Link className="font-medium" to="/login">
                Login
              </Link>
            </div>
            <div>
              <Link
                className="bg-yellow-400 px-8 py-3 rounded-full font-medium text-yellow-900"
                to="/register"
              >
                Sign Up
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
const mapStateToProps = (state) => ({
  auth: state.auth,
  users: state.users,
});

const mapDisPatchToProps = { getUser };

export default connect(mapStateToProps, mapDisPatchToProps)(MainHeader);
