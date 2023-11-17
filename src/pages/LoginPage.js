import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import {
  Container,
  Paper,
  TextField,
  Button,
  Grid,
  Avatar,
  Typography,
} from "@mui/material";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import { useDispatch } from "react-redux";
import { login } from "../store/user.slice";

const LoginPage = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [formData, setFormData] = useState();

  const handleFormChange = (event) => {
    setFormData((prev) => ({
      ...prev,
      [event.target.name]: event.target.value,
    }));
  };

  const handleLogin = (event) => {
    event.preventDefault();
    console.log(formData);
    if (formData?.password && formData.email) {
      fetch("http://127.0.0.1:8000/organization", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      })
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          if (!data.error) {
            dispatch(login());
            navigate("/addfile");
          }
        });
    } else {
      alert("All fields are required");
    }
  };

  return (
    <>
      <Typography
        component="h1"
        variant="h5"
        style={{ marginTop: 50, color: "#1976d2", textAlign: "center" }}
      >
        Welcome back to Connected
      </Typography>
      <Container component="main" maxWidth="xs" style={{ marginTop: 30 }}>
        <Paper
          elevation={3}
          style={{
            padding: 20,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Avatar>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Login
          </Typography>
          <form style={{ width: "100%", marginTop: 10 }}>
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <TextField
                  fullWidth
                  name="email"
                  label="Email"
                  variant="outlined"
                  onChange={handleFormChange}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  fullWidth
                  label="Password"
                  type="password"
                  name="password"
                  variant="outlined"
                  onChange={handleFormChange}
                />
              </Grid>
            </Grid>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              style={{ marginTop: 20 }}
              onClick={handleLogin}
            >
              Login
            </Button>
          </form>
          <Typography style={{ marginTop: 10 }}>
            Don't have an account?{" "}
            <Link to="/register" style={{ color: "#1976d2" }}>
              Sign up
            </Link>
          </Typography>
        </Paper>
      </Container>
    </>
  );
};

export default LoginPage;
