import React from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'

import './signup.css'

import TitleHeader from '../../shared/TitleHeader/TitleHeader'
import Settings from '../../../settings'
import store from '../../../redux/store'

class Signup extends React.Component {

  signup = (e) => {
    e.preventDefault()
    let data = {
      username: this.username.value,
      password: this.password.value
    }
    axios.post(`${Settings.host}/user/signup`, data)
    .then( res => {
      alert(res.data.msg)
      if(res.data.username){
        store.dispatch({type:'AUTH_USER', username:res.data.username})
        localStorage.setItem('username',res.data.username)
        this.props.history.push('/')
        this.signForm.reset()
      }
    })
    .catch(err => alert(err.response.data.msg))
  }

  render(){
    console.log(this.props.account)
    return(
      <div className="signup">
        <TitleHeader title="signup" />
        <div className="signup-content">
          <div className="signup-hero" >
            <h1 className="title">
              注册
            </h1>
            <p className="slogan">
              连接小而确定的幸福
            </p>
          </div>
          <form ref={value => this.signForm = value} onSubmit={this.signup} className="signup-form">
            <div className="signup-text-inputs">
              <div className="signup-text-inputs-inner">
                <input type="text" ref={value => this.username = value} placeholder="用户名" />
                <input type="text" placeholder="Email" />
                <input type="password" ref={value => this.password = value} placeholder="password" />
                <input type="password" placeholder="再输一遍" />
              </div>
            </div>
            <div className="signup-actions">
              <button type="submit">注册</button>
            </div>
          </form>
          <div className="signup-other-option">
            <Link to="/login">已有账号？直接登录</Link>
          </div>
        </div>
      </div>
    )
  }
}

const mapStateToprops = (state) =>({
  account:state.account
})

export default connect(mapStateToprops)(Signup)
