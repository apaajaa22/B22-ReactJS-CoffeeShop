import { combineReducers } from 'redux'
import { persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import carts from './carts'
import chat from './chat'
import auth from './auth'
import products from './products'
import category from './category'
import users from './users'
import history from './history'
import register from './register'
import message from './message'
import profile from './profile'

const persistAuth = {
  storage,
  key: 'auth',
}

const reducer = combineReducers({
  carts,
  chat,
  auth: persistReducer(persistAuth, auth),
  products,
  category,
  users,
  history,
  register,
  message,
  profile,
})

export default reducer
