import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'

import Header from './Header'

class Login extends React.Component{
  handleSubmit(e){
    e.preventDefault()
    console.log(this.props)
  }
  render(){
    return(
      <div className='login'>
        <Header />
        <h1>登录</h1>
        <h5>连接一个个小而确定的幸福</h5>
        <form className='login_form' onSubmit={this.handleSubmit.bind(this)}>
          <input type='text' placeholder='用户名' ref={value => this.username = value} /><br />
          <input type='password' placeholder='密码' ref={value => this.password = value} /><br />
          <input type='submit' value='登录' /><br />
        </form>
        <Link className='login_a' to='/sign'>没有账号？点此注册</Link>
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  account: state.account
})

export default connect(mapStateToProps)(Login)
