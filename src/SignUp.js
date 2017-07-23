import React from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'

import Header from './Header'

class SignUp extends React.Component{
  handleSign(e){
    e.preventDefault()
    let username = this.usernameInput.value
    let password = this.passwordInput.value
    let data = {username:username,password:password}
    axios.post('http://192.168.0.138:5000/signup',data)
    .then(res => alert(res.data.message))
    .catch(err => alert(err))
  }
  render(){
    return(
      <div className='sign'>
        <Header />
        <h1>注册</h1>
        <h5>连接一个个小而确定的幸福</h5>
        <form className='sign_form' ref={value => this.signForm = value} onSubmit={this.handleSign.bind(this)}>
          <input ref={value => this.usernameInput = value} placeholder='用户名' /><br />
          <input type='email' placeholder='Email' /><br />
          <input ref={value => this.passwordInput = value} type='password' placeholder='密码' /><br />
          <input type='password' placeholder='再输入一遍' /><br />
          <input type='submit' value='注册' />
        </form>
        <Link className='sign_a' to='/login'>没有账号？点此注册</Link>
      </div>
    )
  }
}
export default SignUp
