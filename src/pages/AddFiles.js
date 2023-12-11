import * as React from "react";
import {
  Box,
  Container,
  CssBaseline,
  FormControl,
  CircularProgress,
  Button,
  FormLabel,
  Stack,
  TextField,
} from "@mui/material";
import SimpleSnackbar from "../components/snackbar";
import { useSelector } from "react-redux";
import { LoadingButton } from "@mui/lab";

export default function AddFiles() {
  const [file, setFile] = React.useState("");
  const [shortcode, setShortCode] = React.useState("");
  const [addedFile, setAddedFile] = React.useState();
  const { user } = useSelector((state) => state.user);
  const [loading, setLoading] = React.useState(false);
  const [error, setError] = React.useState(false);

  React.useEffect(() => {
    if (error) {
      const timeout = setTimeout(() => {
        setError(false);
      }, 3000);
      return () => clearTimeout(timeout);
    }
  }, [error]);

  const handleFileChange = async (e) => {
    setFile(e.target.files[0]);
  };

  const handleShortCodeChange = async (e) => {
    const shortcode = e.target.value;
    if (!isNaN(shortcode)) {
      setShortCode(shortcode);
    }
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    if (file && shortcode) {
      setLoading(true);
      const formData = new FormData();
      formData.append("file", file);
      formData.append("shortcode", shortcode);
      fetch(
        `${process.env.REACT_APP_API_URL}/organization/${user.name}/uploadfile`,
        {
          method: "POST",
          body: formData,
        }
      )
        .then((res) => res.json())
        .then((data) => {
          if (data.error) setError(true);
          else setAddedFile(data);
        });
      setLoading(false);
    }
  };

  return (
    <Container component="main" maxWidth="md">
      {error ? <SimpleSnackbar message="File upload failed." /> : null}
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
            <FormLabel>Create ShortCode</FormLabel>
            <Stack direction="row" spacing={1}>
              <TextField
                type="text"
                id="text"
                name="text"
                onChange={handleShortCodeChange}
                fullWidth
                required
              />
              {false && <CircularProgress />}
            </Stack>
          </FormControl>
          <FormControl fullWidth margin="normal">
            <FormLabel>File</FormLabel>
            <Stack direction="row" spacing={1}>
              <TextField
                type="file"
                id="file"
                name="file"
                onChange={handleFileChange}
                fullWidth
                required
              />
              {false && <CircularProgress />}
            </Stack>
          </FormControl>
          <LoadingButton
            loading={loading}
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            style={{ marginTop: 20 }}
            onClick={handleFormSubmit}
          >
            <span>Add File</span>
          </LoadingButton>
        </Box>
      </Box>
    </Container>
  );
}
