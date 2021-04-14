import React, { useState, setState } from 'react';
import './Navbar.scss';
import {BrowserRouter,Link,Route,Switch} from 'react-router-dom';


const Navbar = () => {
    const [clicked, setClicked] = useState(false)

const handleClick = () => {
    setClicked(!clicked)
}

// const [token, setToken] = useState();

//     if(!token) {
//         return(
//             <nav className="NavbarItems">
//                 <h1 className="navbar-logo">Aurora Junkies</h1>
//                     <div className='menu-icon' onClick={handleClick}>
//                         <i className={clicked ? 'fas fa-times' : 'fas fa-bars'}></i>
//                     </div>
//                     <ul className={clicked ? 'nav-menu active' : 'nav-menu'}>
//                         <li><Link className='nav-links' to="/">Forecast</Link></li>
//                         <li><Link className='nav-links' to="/login">Login</Link></li>
//                     </ul>
//             </nav>
//         )
//     }

    return(
        <nav className="NavbarItems">
            <h1 className="navbar-logo">Aurora Junkies</h1>
                <div className='menu-icon' onClick={handleClick}>
                    <i className={clicked ? 'fas fa-times' : 'fas fa-bars'}></i>
                </div>
                <ul className={clicked ? 'nav-menu active' : 'nav-menu'}>
                    <li><Link className='nav-links' to="/">Forecast</Link></li>
                    <li><Link className='nav-links' to="/meetups">Meetups</Link></li>
                    <li><Link className='nav-links' to="/profile">Profile</Link></li>
                    <li><Link className='nav-links' to="/settings">Settings</Link></li>
                    <li><Link className='nav-links' to="/login">Login</Link></li>
                </ul>
        </nav>
    );
};

export default Navbar;