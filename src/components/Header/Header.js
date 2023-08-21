import React from 'react'
import logo from '../../assets/logo.png'
import './Header.css'

const Header = () => {
    return (
        <div className='headerBox'>
            <img src={logo} alt="" />
            <span className="material-symbols-outlined">menu</span>
        </div>
    )
}

export default Header
