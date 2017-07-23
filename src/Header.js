import React from 'react'
import { Link } from 'react-router-dom'

class Header extends React.Component{
  render(){
    return(
      <header className='header'>
        <Link to='/'><svg class="icon" width="24px" height="20.00px" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg"><path fill="#fff" d="M62.95126 107.46557 62.95126 248.349251l892.295096 0L955.246356 107.46557 62.95126 107.46557zM62.95126 577.076134l892.295096 0L955.246356 436.1945 62.95126 436.1945 62.95126 577.076134zM62.95126 905.801994l892.295096 0L955.246356 764.92036 62.95126 764.92036 62.95126 905.801994z" /></svg></Link>
      </header>
    )
  }
}

export default Header
