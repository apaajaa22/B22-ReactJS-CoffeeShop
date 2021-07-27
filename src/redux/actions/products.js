/* eslint-disable no-undef */
import { http } from '../../helpers/http'
const { REACT_APP_BACKEND_URL: URL } = process.env

const getProducts = (url) => {
  if (!url) {
    return async (dispatch) => {
      const { data } = await http().get(`${URL}/products`)
      dispatch({
        type: 'SET_GET_PRODUCTS',
        payload: { products: data.results, pageInfo: data.pageInfo },
      })
    }
  } else {
    return async (dispatch) => {
      const { data } = await http().get(url)
      dispatch({
        type: 'SET_NEXT_PRODUCTS',
        payload: { products: data.results, pageInfo: data.pageInfo },
      })
    }
  }
}

const getDetailProducts = (id) => {
  return async (dispatch) => {
    const { data } = await http().get(`${URL}/products/${id}`)
    dispatch({
      type: 'SET_GET_DETAILS',
      payload: data.results,
    })
  }
}

const searchProducts = (search, sort) => {
  return async (dispatch) => {
    const {data} = await http().get(`${URL}/products?search=${search}&sort=${sort}`)
    dispatch({
      type: 'SET_GET_PRODUCTS',
      payload: { products: data.results, pageInfo: data.pageInfo },
    })
    dispatch({
      type: 'SET_PRODUCT_CATEGORY',
      payload: { productCategory: data.results, pageInfo: data.pageInfo },
    })
  }
}

export { getProducts, getDetailProducts, searchProducts }
