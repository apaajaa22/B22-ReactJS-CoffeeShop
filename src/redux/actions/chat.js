/* eslint-disable no-unused-vars */
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

export const getUserChat = (token) => {
  return async (dispatch) => {
    const { data } = await http(token).get(`${URL}/private/chats/list`)
    dispatch({type :'GET_USER_CHAT', payload: data.results})
  }
}

export const getAllUser = (token, search) => {
  return async (dispatch) => {
    const { data } = await http(token).get(`${URL}/private/chats/users?search=${search}`)
    dispatch({type :'GET_ALL_USER', payload: data.results})
  }
}

export const getChat = (token, num) => {
  return async (dispatch) => {
    const { data } = await http(token).get(`${URL}/private/chats/all?recipient=${num}`)
    dispatch({type :'GET_DETAIL_CHAT', payload: data.results})
  }
}

export const sendChat = (token, data, recp) => {
    const form = new URLSearchParams()
    form.append('message', data.message)
    form.append('recipient', data.recipient)
    return async (dispatch) => {
      const { data } = await http(token).post(`${URL}/private/chats`, form)
      dispatch(getChat(token, recp))
    }
}