import React from "react";
import { Link } from "react-router-dom";
import { Logo } from "..";
function FormHeader({ label, navigation }) {
  return (
    <nav className="flex flex-row justify-between py-8 items-center px-20 pr-32">
      <Logo />
      <div className="flex flex-row items-center space-x-5">
        <div>
          <Link
            className="bg-yellow-400 px-8 py-3 rounded-full font-medium text-yellow-900"
            to={navigation}
          >
            {label}
          </Link>
        </div>
      </div>
    </nav>
  );
}

export default FormHeader;
