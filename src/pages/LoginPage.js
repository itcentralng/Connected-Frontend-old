import React, { useEffect, useState } from "react";
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
import LoadingButton from "@mui/lab/LoadingButton";
import { useDispatch } from "react-redux";
import { login } from "../store/user.slice";
import SimpleSnackbar from "../components/snackbar";

const LoginPage = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [formData, setFormData] = useState();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    if (error) {
      const timeout = setTimeout(() => {
        setError(false);
      }, 2000);
      return () => clearTimeout(timeout);
    }
  }, [error]);

  const handleFormChange = (event) => {
    setFormData((prev) => ({
      ...prev,
      [event.target.name]: event.target.value,
    }));
  };

  const handleLogin = (event) => {
    event.preventDefault();
    setLoading(true);
    if (formData?.password && formData.email) {
      fetch(`${process.env.REACT_APP_API_URL}/login`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Access-Control-Allow-Origin": "*",
        },
        body: JSON.stringify(formData),
      })
        .then((res) => res.json())
        .then((data) => {
          setLoading(false);
          if (data.error) {
            setError(true);
          } else {
            dispatch(login(data));
            navigate("/addfile");
          }
        });
    } else {
      alert("All fields are required");
    }
  };

  return (
    <>
      {error ? (
        <SimpleSnackbar message="Login was not successful. Pls try again" />
      ) : null}
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
            <LoadingButton
              loading={loading}
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              style={{ marginTop: 20 }}
              onClick={handleLogin}
            >
              <span>Submit</span>
            </LoadingButton>
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
