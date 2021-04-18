import React, { useState, useContext } from 'react';
import '../../styles/layout/_navbar.scss';
import { Link } from 'react-router-dom';
import { authContext } from '../../AuthProvider'

const Navbar = () => {
    const [clicked, setClicked] = useState(false)

    const { user } = useContext(authContext);

    const handleClick = () => {
        setClicked(!clicked)
    }

    return(
        <nav className="NavbarItems">
            <h1 className="navbar-logo">Aurora Junkies</h1>
                <div className='menu-icon' onClick={handleClick}>
                    <i className={clicked ? 'fas fa-times' : 'fas fa-bars'}></i>
                </div>
                <ul className={clicked ? 'nav-menu active' : 'nav-menu'} onClick={handleClick}>
                    <li><Link className='nav-links' to="/">Forecast</Link></li>
                    <li><Link className='nav-links' to="/meetups">Meetups</Link></li>
                    <li><Link className='nav-links' to="/maps">Maps</Link></li>
                    <li><Link className='nav-links' to="/profile">Profile</Link></li>
                    <li><Link className='nav-links' to="/settings">Settings</Link></li>
                    <li><Link className='nav-links' to="/login">{user.name ? 'Logout' : 'Login'}</Link></li>
                </ul>
        </nav>
    );
};

export default Navbar;
