import React from "react";
import HeaderSearch from "./HeaderSearch";
import MainSearch from "./MainSearch";
function Search({ type, onKeyDown, onChange, value, valueSort, onChangeSort, onClickSearch }) {
  switch (type) {
    case "main":
      return <MainSearch />;
    case "header":
      return <HeaderSearch onClickSearch={onClickSearch} valueSort={valueSort} onChangeSort={onChangeSort} onKeyDown={onKeyDown} onChange={onChange} value={value} />;
    default:
      return <MainSearch />;
  }
}

export default Search;
