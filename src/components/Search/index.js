import React from "react";
import HeaderSearch from "./HeaderSearch";
import MainSearch from "./MainSearch";
function Search({ type, onKeyDown, onChange, value }) {
  switch (type) {
    case "main":
      return <MainSearch />;
    case "header":
      return <HeaderSearch onKeyDown={onKeyDown} onChange={onChange} value={value} />;
    default:
      return <MainSearch />;
  }
}

export default Search;
