let  account = {
  isAuthenticated: true,
  currentUser:''
}

export default function accountReducer(state = account, action){
  switch (action.type) {
    case 'ACCOUNT':
      return state
    default:
      return state
  }
}
