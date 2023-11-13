// RegistrationPage.js
import React from 'react';
import { Container, Paper, TextField, Button, Grid, Avatar, Typography } from '@mui/material';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';

const RegistrationPage = () => {
  return (
    <>
        <Typography component="h1" variant="h5" style={{ marginTop: 30, color: "#1976d2" }}>Welcome to Connected</Typography>

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
              <TextField fullWidth label="Password" type="password" variant="outlined" />
            </Grid>
            <Grid item xs={12}>
              <TextField fullWidth label="Confirm Password" type="password" variant="outlined" />
            </Grid>
            <Grid item xs={18}>
              <TextField fullWidth label="About your organization" variant="outlined" />
            </Grid>
          </Grid>
          <Button type="submit" fullWidth variant="contained" color="primary" style={{ marginTop: 20 }}>
            Sign Up
          </Button>
        </form>
      </Paper>
    </Container>
    </>
  );
};

export default RegistrationPage;
