import React from 'react'
import { Link } from 'react-router-dom'
import shunzhi from './img/12_03.jpg'

class HomePage extends React.Component{
  render(){
    return(
      <div className='home'>
        <img src={shunzhi} alt='shunzhi' />
        <h1>吮指</h1>
        <h5>享受舌尖艳遇</h5>
        <div className='home_bottom'>
          <Link to='/sign' >注册</Link>
          <Link to='/login' >登录</Link>
        </div>
      </div>
    )
  }
}
export default HomePage
