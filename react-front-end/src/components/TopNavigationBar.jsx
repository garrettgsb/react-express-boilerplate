import React, { useState } from "react";
import { Link, useNavigate } from 'react-router-dom';
import '../styles/TopNavigationBar.scss';
import FavIcon from '../components/FavIcon';
import MenuIcon from '@mui/icons-material/Menu';
import { Menu, MenuItem } from '@mui/material';

const TopNavigationBar = () => {
  const navigate = useNavigate();
  const isLoggedIn = localStorage.getItem("isLoggedIn") === "true";
  const userName = localStorage.getItem("userName");

  const handleFavIconClick = () => {
    navigate('/favorites'); // Navigate to the favorites page
  };

  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = (action) => {
    setAnchorEl(null);

    switch (action) {
      case 'account':
        navigate('/account'); // Replace '/account' with the actual path to the account page
        break;
      case 'settings':
        navigate('/settings'); // Replace '/settings' with the actual path to the settings page
        break;
      case 'logout':
        handleLogout(); // Handle the logout logic (already defined in your code)
        break;
      default:
        break;
    }
  };

  const handleLogout = () => {
    localStorage.removeItem("isLoggedIn");
    localStorage.removeItem("userName");
    navigate('/home');
  };

  return (
    <nav className="top-navigation-bar">
      <Link to="/home">
        <img src="/logoo.png" alt="Logo" className="logo" />
      </Link>
      <div className="navigation-items">
        {isLoggedIn ? (
          <>
            <span>Hello, {userName}</span>
            {/* Move this span before the MenuIcon to display the heart icon first */}
            <span onClick={handleFavIconClick} style={{ cursor: "pointer" }}>
              <FavIcon selected="true" />
            </span>
            <MenuIcon
              id="basic-button"
              aria-controls={open ? 'basic-menu' : undefined}
              aria-haspopup="true"
              aria-expanded={open ? 'true' : undefined}
              onClick={handleClick}
              style={{ color: 'white', marginLeft: '10px' }} // Added marginLeft for spacing
            />
            {open && (
              <div>
                <Menu
                  id="basic-menu"
                  anchorEl={anchorEl}
                  open={open}
                  onClose={() => handleClose()}
                  MenuListProps={{
                    'aria-labelledby': 'basic-button',
                  }}
                >
                  <MenuItem onClick={() => handleClose('account')}>Account</MenuItem>
                  <MenuItem onClick={() => handleClose('settings')}>Settings</MenuItem>
                  <MenuItem onClick={() => handleClose('logout')}>Logout</MenuItem>
                </Menu>
              </div>
            )}
          </>
        ) : (
          <Link to="/login">Login</Link>
        )}
      </div>
    </nav>
  );
};

export default TopNavigationBar;
