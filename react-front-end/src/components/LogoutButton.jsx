import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@mui/material';

const LogoutButton = () => {
    const navigate = useNavigate();

    const handleLogout = () => {
        localStorage.removeItem("token");
        localStorage.removeItem("userName");
        navigate('/login');
    };

    return (
        <Button onClick={handleLogout}>Logout</Button>
    );
};

export default LogoutButton;
