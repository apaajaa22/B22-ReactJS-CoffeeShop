/* eslint-disable react/prop-types */
import React from 'react'
import FormHeader from './FormHeader'
import HeaderResponsive from './HeaderResponsive'
import MainHeader from './MainHeader'
import SecondaryHeader from './SecondaryHeader'
function Header({
  type,
  label,
  navigation,
  home,
  product,
  cart,
  history,
  isSearchInput,
  onClick,
  onKeyDown,
  onChange,
  value,
  valueSort,
  onChangeSort,
  onClickSearch
}) {
  switch (type) {
    case 'main':
      return (
        <MainHeader
          home={home}
          product={product}
          cart={cart}
          history={history}
          isSearchInput={isSearchInput}
          onKeyDown={onKeyDown}
          onChange={onChange}
          value={value}
          valueSort={valueSort}
          onChangeSort={onChangeSort}
          onClickSearch={onClickSearch}
        />
      )
    case 'secondary':
      return (
        <SecondaryHeader
          home={home}
          product={product}
          cart={cart}
          history={history}
          isSearchInput={isSearchInput}
          onClick={onClick}
        />
      )
    case 'form':
      return <FormHeader label={label} navigation={navigation} />
    case 'responsive':
      return <HeaderResponsive isSearchInput={isSearchInput} />
    default:
      return <MainHeader />
  }
}

export default Header
