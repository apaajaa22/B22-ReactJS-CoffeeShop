/* eslint-disable no-undef */
import { http } from '../../helpers/http'
const { REACT_APP_BACKEND_URL: URL } = process.env
import Swal from 'sweetalert2'
const Toast = Swal.mixin({
  toast: true,
  position: 'top-end',
  showConfirmButton: false,
  timer: 2000,
  timerProgressBar: true,
  didOpen: (toast) => {
    toast.addEventListener('mouseenter', Swal.stopTimer)
    toast.addEventListener('mouseleave', Swal.resumeTimer)
  }
})

const addProducts = (data) => {
  return async (dispatch) => {
    dispatch({type: 'SET_CART_ADD_ITEM',
    payload: data})
    Toast.fire({
      icon: 'none',
      title: 'product added to cart'
    })
  }
}

const createTransaction = (data, token) => {
  console.log('coba data masuk', data)
  return async (dispatch) => {
    const form = new URLSearchParams()
    data.forEach((product) =>
      product
        .filter((item) => item.amount !== 0)
        .forEach((item) => {
          form.append('product_id', item.id)
          form.append('product_amount', item.amount)
          form.append('product_variant', item.id_variant)
        })
    )
    form.append('payment_method', 'Bank')
    try {
      const { data: newData } = await http(token).post(
        `${URL}/private/transactions`,
        form.toString()
      )
      dispatch({
        type: 'SET_CREATE_TRANSACTION',
        payload: newData,
      })
      dispatch({
        type: 'SET_TRANSACTION_SUCCESS',
        payload: Toast.fire({
          icon: 'success',
          title: newData.message
        })
      })
      dispatch({
        type: 'SET_CLEAR_PRODUCTS',
      })
    } catch (error) {
      dispatch({
        type: 'SET_TRANSACTION_FAILED',
        payload: Toast.fire({
          icon: 'error',
          title: error.response.data.message
        })
      })
    }
  }
}

export { addProducts, createTransaction }
