import { combineReducers } from 'redux'
import userReducer from './user'
import accountReducer from './account'

const rootReducer = combineReducers({
  user: userReducer,
  account: accountReducer
})

export default rootReducer
