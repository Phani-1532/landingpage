import React from 'react'
import './Navbar.css'
import logo from '../../assets/logo.svg'

function Navbar() {
  return (
    <div className='navbar'>
        <div className='navbar-img'>
            <img src = {logo} alt = "logo" />

        </div>
        <div className='navbar-btn'>
            <button className='navbar-btn-register'>Pre Register</button>
        </div>

    </div>
  )
}

export default Navbar