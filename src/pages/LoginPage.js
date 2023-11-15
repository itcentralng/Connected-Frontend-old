import React from 'react';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

import { Container, Paper, TextField, Button, Grid, Avatar, Typography } from '@mui/material';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';

const LoginPage = () => {
  const navigate = useNavigate();

  const handleLogin = () => {
    navigate("/AddFiles");
  };

  return (
    <>
      <Typography component="h1" variant="h5" style={{ marginTop: 50, color: "#1976d2", textAlign: "center" }}>Welcome back to Connected</Typography>
      <Container component="main" maxWidth="xs" style={{ marginTop: 30 }}>
        <Paper elevation={3} style={{ padding: 20, display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <Avatar>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Login
          </Typography>
          <form style={{ width: '100%', marginTop: 10 }}>
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <TextField fullWidth label="Email" variant="outlined" />
              </Grid>
              <Grid item xs={12}>
                <TextField fullWidth label="Password" type="password" variant="outlined" />
              </Grid>
            </Grid>
            <Button type="submit" fullWidth variant="contained" color="primary" style={{ marginTop: 20 }} onClick={handleLogin}>
              Login
            </Button>
          </form>
          <Typography style={{ marginTop: 10 }}>
            Don't have an account? <Link to="/RegistrationPage" style={{ color: "#1976d2" }}>Sign up</Link>
          </Typography>
        </Paper>
      </Container>
    </>
  );
};

export default LoginPage;
