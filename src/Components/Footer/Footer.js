import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';

const Footer = () => {
    return (
        <footer className='footer'>
            <div className='footer-container'>
                <div className='footer-row'>
                    <div className='footer-col'>
                        <h4>Quick links</h4>
                        <ul>
                            <li><Link to='/'>Home</Link></li>
                            <li><Link to='/events'>Events</Link></li>
                            <li><Link to='/registration'>Registration</Link></li>
                            <li><Link to='/Contact'>Contact Us</Link></li>
                        </ul>
                    </div>
                    <div className='footer-col'>
                        <h4>Gallery </h4>
                        <ul>
                            <li><Link to='/gallery-2011'>EEL 2011</Link></li>
                            <li><Link to='/gallery-2012'>EEL 2012</Link></li>
                            <li><Link to='/gallery-2014'>EEL 2014</Link></li>
                            <li><Link to='/gallery-2018'>Phasor 2018</Link></li>
                            <li><Link to='/gallery-2019'>Phasor 2019</Link></li>
                            <li><Link to='/gallery-Alumni'>Alumni</Link></li>
                        </ul>
                    </div>
                    
                    <div className='footer-col'>
                        <h4>Social Media</h4>
                        <div className='links'>
                            <a href='mailto:phasor2k23@gmail.com'><i class="fa-solid fa-envelope"></i></a>
                            <a href='https://instagram.com/phasor2k23?igshid=YmMyMTA2M2Y='><i class="fa-brands fa-instagram"></i></a>
                            <a href='https://youtube.com/@phasor2k23'><i class="fa-brands fa-youtube"></i></a>
                        </div>
                    </div>

                </div>
                <hr style={{ color: 'white' }}></hr>
                <div className='copyright'>
                    <span>© 2023 All rights reversed.</span>
                </div>
            </div>
        </footer >
    )
}

export default Footer
