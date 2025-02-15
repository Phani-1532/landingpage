import React from 'react'
import './Footer.css'
import {Link} from 'react-router-dom'

function Footer() {
  return (
    <>
        <footer className='footer'>
            <div className='footer-container'>
            <h1>
                    <span className="color1">U</span>
                    <span className="color2">N</span>
                    <span className="color3">I</span>
                    <span className="color4">I</span>
                    <span className="color5">S</span>
                    <span className="color6">P</span>
                    <span className="color7">H</span>
                    <span className="color8">E</span>
                    <span className="color9">R</span>
                    <span className="color10">E</span>
                </h1>
                <p>Fostering Connections, Fueling Success</p>
                <div className='footer-links'>
                    <Link to='/'><i className='fab fa-instagram'></i>Instagram</Link>
                    <Link to='/'><i className='fab fa-linkedin'></i>LinkedIn</Link>
                </div>
            </div>
        </footer>
    </>
  )
}

export default Footer