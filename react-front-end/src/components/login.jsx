import React, { useState } from "react";
import { TextField, Button, Grid, Paper } from "@mui/material";
import { Link, useNavigate } from "react-router-dom";

const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [emailError, setEmailError] = useState(false);
    const [passwordError, setPasswordError] = useState(false);

    const navigate = useNavigate();

    const handleSubmit = (event) => {
        event.preventDefault();

        setEmailError(false);
        setPasswordError(false);

        if (email === '') {
            setEmailError(true);
        }
        if (password === '') {
            setPasswordError(true);
        }

        if (email && password) {
            console.log(email, password);
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
                            label="Email"
                            onChange={e => setEmail(e.target.value)}
                            required
                            variant="outlined"
                            color="secondary"
                            type="email"
                            sx={{ mb: 3 }}
                            fullWidth
                            value={email}
                            error={emailError}
                        />
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
                            sx={{ mb: 3 }}
                        />
                        <Button variant="outlined" color="secondary" type="submit">Login</Button>
                    </form>
                    <small>Need an account? <Link to="/Register">Register here</Link></small>
                </Paper>
            </Grid>
        </Grid>
    );
};

export default Login;
