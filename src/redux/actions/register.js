/* eslint-disable no-undef */
import { http } from '../../helpers/http'
const { REACT_APP_BACKEND_URL: URL } = process.env

const authRegister = (email, password, phoneNumber) => {
  return async (dispatch) => {
    const form = new URLSearchParams()
    form.append('email', email)
    form.append('password', password)
    form.append('phone_number', phoneNumber)
    try {
      // eslint-disable-next-line no-unused-vars
      const { data } = await http().post(
        `${URL}/auth/register`,
        form.toString()
      )
      dispatch({
        type: 'SET_AUTH_REGISTER',
      })
    } catch (error) {
      dispatch({
        type: 'SET_AUTH_LOGIN_FAILED',
        payload: error.response.data.message,
      })
    }
  }
}

export { authRegister }
