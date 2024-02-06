import React, { useState } from "react";
import { TextField, Button, Grid, Paper } from "@mui/material";
import { Link, useNavigate } from "react-router-dom";

const Login = () => {
    const [username, setUsername] = useState(""); 
    const [password, setPassword] = useState("");
    const [usernameError, setUsernameError] = useState(false); 
    const [passwordError, setPasswordError] = useState(false);

    const navigate = useNavigate();

    const handleSubmit = (event) => {
        event.preventDefault();

        setUsernameError(false);
        setPasswordError(false);

        if (username === '') { 
            setUsernameError(true);
        }
        if (password === '') {
            setPasswordError(true);
        }

        if (username && password) { 
            console.log(username, password); 
            // Mock authentication passed
            localStorage.setItem("isLoggedIn", "true");
            localStorage.setItem("userName", username); 
            navigate('/Home'); 
        }
        
    };

    return (
    <Grid container spacing={2} justifyContent="center" alignItems="center" style={{ minHeight: '100vh' }}>
    <Grid item xs={20} sm={6} style={{ display: 'flex', justifyContent: 'center' }}>
                <img src="gasstation.png" alt="Gas Station Locator" style={{ width: '100%', maxHeight: '500px', objectFit: 'cover' }} />
    </Grid>
    <Grid item xs={12} sm={6}>
    <Paper elevation={3} style={{ padding: '20px' }}>
        <form autoComplete="off" onSubmit={handleSubmit}>
            <h2>Login Form</h2>
                <TextField 
                 label="Username" 
                 onChange={e => setUsername(e.target.value)} 
                 required
                 variant="outlined"
                 color="secondary"
                 type="text" 
                 sx={{ mb: 3 }}
                 fullWidth
                 value={username} 
                 error={usernameError} />
                
                <TextField 
                  label="Password"
                  onChange={e => setPassword(e.target.value)}
                  required
                  variant="outlined"
                  color="secondary"
                  type="password"
                  value={password}
                  error={passwordError}
                  fullWidth
                  sx={{ mb: 3 }} />
    
    <Button variant="outlined" color="secondary" type="submit">Login</Button>
    </form>
    <small>Need an account? <Link to="/Register">Register here</Link></small>
    </Paper>
    </Grid>
     </Grid>
    );
};

export default Login;