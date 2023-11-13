import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Container, Paper, TextField, Button, Grid, Avatar, Typography } from '@mui/material';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';

const RegistrationPage = () => {
  const navigate = useNavigate();
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');

  const handleSignUp = () => {
    if (password === confirmPassword) {
      navigate('/login');
    } else {
      setError(alert('Passwords do not match'));
    }
  };
  return (
    <>
      <Typography component="h1" variant="h5" style={{ marginTop: 30, color: "#1976d2", textAlign: "center" }}>Welcome to Connected</Typography>

      <Container component="main" maxWidth="xs" style={{ marginTop: 30 }}>
      <Paper elevation={3} style={{ padding: 20, display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <Avatar>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Sign up
        </Typography>
        <form style={{ width: '100%', marginTop: 10 }}>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <TextField fullWidth label="Organisation Name" variant="outlined" />
            </Grid>
            <Grid item xs={12}>
              <TextField fullWidth label="Email" variant="outlined" />
            </Grid>
            <Grid item xs={12}>
            <TextField fullWidth label="Password" type="password" variant="outlined" onChange={(e) => setPassword(e.target.value)} />
              </Grid>
              <Grid item xs={12}>
                <TextField fullWidth label="Confirm Password" type="password" variant="outlined" onChange={(e) => setConfirmPassword(e.target.value)} />
            </Grid>
            <Grid item xs={18}>
              <TextField fullWidth label="About your organization" variant="outlined" />
            </Grid>
          </Grid>
          <Button type="button" fullWidth variant="contained" color="primary" style={{ marginTop: 20 }} onClick={handleSignUp}>
              Sign Up
            </Button>
        </form>
      </Paper>
    </Container>
    </>
  );
};

export default RegistrationPage;
