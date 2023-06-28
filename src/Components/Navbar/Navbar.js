import React, { useState } from 'react';
import './Navbar.css';
import { NavLink } from 'react-router-dom'

const Navbar = () => {
    const [isNavExpanded, setIsNavExpanded] = useState(false)
    return (
        <nav className='navigate'>
            <NavLink to='/'>
                <img src='assets/logo.png' alt='logo' className="logo-img" />
                <img src='assets/phasor2k23-1.png' alt='phasor' className='title-img'></img>
                {/* <img src='logotext2.png' alt='phasor' style={{ width: '5rem', height: '4rem' }} />
                <img src='logotext1.png' alt='2k23' style={{ width: '4rem', height: '3rem' }} /> */}
            </NavLink>
            <button className="menu-btn" onClick={() => {
                setIsNavExpanded(!isNavExpanded)
            }}>
                {
                    isNavExpanded ? <i class="fa-solid fa-xmark"></i> : <i class="fa-solid fa-bars"></i>
                }
            </button>
            <div className={
                isNavExpanded ? "menu expanded" : "menu"
            }>
                <ul onClick={() => {
                    setIsNavExpanded(!isNavExpanded)
                }}>
                    <li><NavLink to='/' className='links' activeClassName='active'><i class="fa-solid fa-house"></i>Home</NavLink></li>
                    <li><NavLink to='/Events' className='links' activeClassName='active'><i class="fa-solid fa-bullhorn"></i>Events</NavLink></li>
                    <li><NavLink to='/Registration' className='links' activeClassName='active'><i class="fa-solid fa-address-card"></i>Registration</NavLink></li>
                    <li><NavLink to='/Contact' className='links' activeClassName='active'><i class="fa-solid fa-phone"></i>Contact us</NavLink></li>
                </ul>
            </div>
        </nav>
    )
}

export default Navbar
