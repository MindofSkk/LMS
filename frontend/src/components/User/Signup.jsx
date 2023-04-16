import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
// import Link from "@mui/material/Link";
import { Link, useNavigate } from "react-router-dom";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { useState } from "react";
import axios from "axios";
import { Avatar } from "@mui/material";
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';


export const Signup = () => {
  const [text, setText] = useState({});
  const [image, setImage] = useState(null);

  const Navigate = useNavigate();
  const handleChange = (e) => {
    const { value, name } = e.target;
    setText({
      ...text,
      [name]: value,
    });
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("text", text);
    const formdata = new FormData();
    formdata.append("name", text.name);
    formdata.append("email", text.email);
    formdata.append("password", text.password);   
    formdata.append("Image", image);
    axios.post("http://localhost:8080/user/signup", formdata).then(() => {
      alert("sign up successfully");
    });
    Navigate("/login");
  };

  return (
    <>
    <br />
    <Container component="main" maxWidth="xs"style={{backgroundColor:"white", border:"1px solid black"}}>
      <Box
        sx={{
          marginTop: 2,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
             <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign up
          </Typography>
        <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
          <TextField
            margin="normal"
            required
            fullWidth
            id="email"
            label="Enter Your Name"
            name="name"
            type="text"
            onChange={handleChange}
            // autoComplete="name"
            autoFocus
          />
          <TextField
            margin="normal"
            required
            fullWidth
            id="email"
            label="Email Address"
            type="email"
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
          <lable>Upload Your Profile Pic</lable>
           <TextField
            margin="normal"
            id="outlined-basic"
            // label="Profile Pic"
            variant="outlined"
            fullWidth
            type="file"
            name="Image"
            onChange={(e) => setImage(e.target.files[0])}            
           
        
          />
          
   
          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
          >
            Sign up
          </Button>
          <Grid container  style={{paddingBottom:"20px"}} >
            <Grid item>
              <Link to="/login" variant="body2">
                {"Already have an account? Login"}
              </Link>
            </Grid>
          </Grid>
        </Box>
      </Box>
    </Container>
    </>
  );
};
