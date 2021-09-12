/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
import { http } from '../../helpers/http'
import { getUser } from './users'
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

export const updateProfile = (data, token) => {
  return async (dispatch) => {
    const form = new FormData()
    const sizeLimit = 1024 * 1024 * 2
    if(data.file){
        if (data.file.size > sizeLimit) {
          Toast.fire({
            icon: 'error',
            title: 'File too large'
          })
        }
    }
    console.log(data)
    try {
      form.append('name', data.name)
      form.append('email', data.email)
      form.append('address', data.address)
      form.append('number', data.number)
      form.append('birth', data.date)
      form.append('picture', data.file)
      // for (let i in data) {
      //   if (data[i] !== "") {
      //     form.append(i, data[i]);
      //   }
      // }
      const { data: newData } = await http(token).put(
        `${URL}/private/profile`,
        form
      )
      dispatch({
        type: 'SET_UPDATE_PROFILE',
        payload: Toast.fire({
          icon: 'success',
          title: newData.message
        })
      })
      dispatch(getUser(token))
    } catch (error) {
      return Toast.fire({
        icon: 'error',
        title: error.response.data.message
      })
    }
  }
}
