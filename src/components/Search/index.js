import React from "react";
import { IcSearch } from "../../assets";
import HeaderSearch from "./HeaderSearch";
import MainSearch from "./MainSearch";
function Search({ type }) {
  switch (type) {
    case "main":
      return <MainSearch />;
    case "header":
      return <HeaderSearch />;
    default:
      return <MainSearch />;
  }
}

export default Search;
