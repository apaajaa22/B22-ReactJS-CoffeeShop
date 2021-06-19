import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { Logo } from "..";

function MainHeader({ auth, home, product, cart, history }) {
  return (
    <nav className="flex flex-row justify-between py-8 items-center">
      <Logo />
      <div>
        <ul className="flex flex-row space-x-8 text-md">
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
      </div>
      <div className="flex flex-row items-center space-x-5">
        {auth.token !== null ? (
          <div className=" -mt-1  ml-36 w-10 h-10 bg-black rounded-full items-center flex flex-row"></div>
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
});
export default connect(mapStateToProps)(MainHeader);
