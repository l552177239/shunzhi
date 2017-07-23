let  user = {
  username: 'Liu',
  email:'',
  avatar:''
}

export default function userReducer(state = user, action) {
  switch (action.type) {
    case 'USER':
      return state
    default:
      return state
  }
}
