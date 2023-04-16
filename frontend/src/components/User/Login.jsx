import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import axios from "axios";

export const Login = () => {
  const [text, setText] = useState({});
  const navigate = useNavigate();
  const handleChange = (e) => {
    const { value, name } = e.target;
    setText({
      ...text,
      [name]: value,
    });
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(text);

    if (text.email == "admin@gmail.com" && text.password == "admin@gmail.com") {
      let a = "123";
      localStorage.setItem("token", JSON.stringify(a));
      localStorage.setItem("Name", JSON.stringify("admin"));
      localStorage.removeItem("userdata");

      navigate("/admin");
    } else {
      axios
        .post("http://localhost:8080/user/login", text)
        .then((res) => {
          console.log(res.data.document.token);
          let token = res.data.document.token;
          localStorage.setItem("userdata", JSON.stringify(res.data.document));

          if (token) {
            localStorage.setItem("token", JSON.stringify(token));
            navigate("/profile");          }
        })
        .catch((err) => {
          alert("invalid credantials");
        });
    }
  };

  return (
    <>
      <br />
      <Container
        component="main"
        maxWidth="xs"
        style={{ backgroundColor: "white", border: "1px solid black" }}
      >
        <Box
          sx={{
            marginTop: 2,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Typography component="h1" variant="h5">
            Login{" "}
          </Typography>
          <Box
            component="form"
            onSubmit={handleSubmit}
            noValidate
            sx={{ mt: 1 }}
          >
            <TextField
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              autoComplete="email"
              onChange={handleChange}
              autoFocus
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
              onChange={handleChange}
            />
            <FormControlLabel
              control={<Checkbox value="remember" color="primary" />}
              label="Remember me"
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Login
            </Button>

            <Grid container style={{ paddingBottom: "20px" }}>
              <Grid item xs></Grid>
              <Grid item>
                <Link to="/signup" variant="body2">
                  {"Don't have an account? Sign Up"}
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Container>
    </>
  );
};
