let user = {
  username:'',
  email: '',
  avatar: ''
}

export default function userReducer(state=user, action){
  switch(action.type){
    case 'USER':
      return {
        username:action.username,
        email:action.email,
        avatar:action.avatar
      }
    default:
      return state
  }
}
