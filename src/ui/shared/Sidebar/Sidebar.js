import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { slide as Menu } from 'react-burger-menu'
import './sidebar.css'

class Sidebar extends Component {
  state = {
    isOpen: false
  }
  closeBmMenu = () => {
    this.setState({
      isOpen: false
    })
  }
  render() {
    return(
      <div className="sidebar">
        <Menu isOpen={this.state.isOpen}>
          <div className="bm-user-info">
            <img src="http://media.haoduoshipin.com/yummy/default-avatar.png" alt="avatar" />
            <div className="bm-user-auth">
              <Link to="" className="bm-user-left">
                happypeter
              </Link>
              <Link to="" className="bm-user-right">
                退出
              </Link>
            </div>
          </div>
          <div className="bm-link-list">
            <Link onClick={this.closeBmMenu} to="/">Home</Link>
            <Link onClick={this.closeBmMenu} to="/signup">注册</Link>
            <Link onClick={this.closeBmMenu} to="/cart">购物车</Link>
            <Link onClick={this.closeBmMenu} to="/dishes">猜你喜欢</Link>
          </div>
          <button onClick={this.closeBmMenu} className="bm-close-button">
            关闭
          </button>
        </Menu>
      </div>
    )
  }
}

export default Sidebar
