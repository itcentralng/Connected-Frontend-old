import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
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
import SimpleSnackbar from "../components/snackbar";
import { LoadingButton } from "@mui/lab";

const RegistrationPage = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState();
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);

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

  const handleSignUp = () => {
    if (formData?.password === confirmPassword) {
      if (formData?.password !== "") {
        setLoading(true);
        fetch(`${process.env.REACT_APP_API_URL}/register`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        })
          .then((res) => res.json())
          .then((data) => {
            setLoading(false);
            if (data.error) {
              setError(true);
            } else {
              navigate("/login");
            }
          });
      } else {
        alert("All fields are required");
      }
    } else {
      alert("Passwords do not match");
    }
  };

  return (
    <>
      {error ? (
        <SimpleSnackbar message="Registration was not successful. Pls try again" />
      ) : null}
      <Typography
        component="h1"
        variant="h5"
        style={{ marginTop: 30, color: "#1976d2", textAlign: "center" }}
      >
        Welcome to Connected
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
            Sign up
          </Typography>
          <form style={{ width: "100%", marginTop: 10 }}>
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <TextField
                  fullWidth
                  name="name"
                  label="Organisation Name"
                  variant="outlined"
                  onChange={handleFormChange}
                />
              </Grid>
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
                  name="address"
                  label="Address"
                  type="text"
                  variant="outlined"
                  onChange={handleFormChange}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  fullWidth
                  name="password"
                  label="Password"
                  type="password"
                  variant="outlined"
                  onChange={handleFormChange}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  fullWidth
                  label="Confirm Password"
                  type="password"
                  variant="outlined"
                  onChange={(e) => setConfirmPassword(e.target.value)}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  fullWidth
                  name="description"
                  label="About your organization"
                  variant="outlined"
                  onChange={handleFormChange}
                />
              </Grid>
            </Grid>
            {/* <Button
              type="button"
              fullWidth
              variant="contained"
              color="primary"
              style={{ marginTop: 20 }}
              onClick={handleSignUp}
            >
              Sign Up
            </Button> */}

            <LoadingButton
              loading={loading}
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              style={{ marginTop: 20 }}
              onClick={handleSignUp}
            >
              <span>Submit</span>
            </LoadingButton>
          </form>
          <Typography style={{ marginTop: 10 }}>
            Already have an account?{" "}
            <Link to="/login" style={{ color: "#1976d2" }}>
              Login
            </Link>
          </Typography>
        </Paper>
      </Container>
    </>
  );
};

export default RegistrationPage;
