import React from 'react'
import HeaderSearch from './HeaderSearch'
import MainSearch from './MainSearch'
// eslint-disable-next-line react/prop-types
function Search({ type, onKeyDown, onChange, value, valueSort, onChangeSort, onClickSearch }) {
  switch (type) {
    case 'main':
      return <MainSearch onKeyDown={onKeyDown} onChange={onChange} onClick={onClickSearch} value={value} />
    case 'header':
      return <HeaderSearch onClickSearch={onClickSearch} valueSort={valueSort} onChangeSort={onChangeSort} onKeyDown={onKeyDown} onChange={onChange} value={value} />
    default:
      return <MainSearch />
  }
}

export default Search
