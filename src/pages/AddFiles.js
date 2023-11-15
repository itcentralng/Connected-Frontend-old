// import * as React from "react";
import { Box, Container, CssBaseline, FormControl, CircularProgress, Button, Grid, FormLabel, Stack, TextField } from "@mui/material";
// import { LoadingButton } from "@mui/lab";

export default function AddFiles() {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  // const [fileUrl, setFileUrl] = React.useState(""); //you are not using the variable anywhere so i commented it out --Ibrahim
  // handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
  //   // your code here
  // }

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const handleFileChange = async (e: any) => {
    try {
      const file = e.target.files[0];
      const formData = new FormData();
      formData.append("file", file);
      // upload file here and set file URL
      // setFileUrl("http://fsfdffs");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Container component="main" maxWidth="md">
      <CssBaseline />
      <Box
        sx={{
          marginTop: 8,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Box component="form" sx={{ mt: 1 }}>
          <FormControl fullWidth margin="normal">
            <FormLabel>File</FormLabel>
            <Stack direction="row" spacing={1}>
              <TextField type="file" id="file" name="file" onChange={handleFileChange} fullWidth required />
              {false && <CircularProgress />}
            </Stack>
          </FormControl>
          <Button
            type="submit"
            fullWidth
            // loading variant="outlined"
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
          >
            Add
          </Button>
          <Grid container>
            <Grid item xs>
              {/* <Link href="#" variant="body2">
                Forgot password?
              </Link> */}
            </Grid>
            <Grid item>
              {/* <Link href="#" variant="body2">
                {"Don't have an account? Sign Up"}
              </Link> */}
            </Grid>
          </Grid>
        </Box>
      </Box>
    </Container>
  );
}
