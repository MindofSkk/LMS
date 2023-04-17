import React, { useEffect, useState } from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { useParams } from "react-router-dom";

export const EditBook = () => {
  const { id } = useParams();
  const [inputs, setInputs] = useState({});

  const getdata = () => {
    axios
      .get(`http://localhost:8080/books/${id}`)
      .then((res) => setInputs(res.data));
  };
  useEffect(() => {
    getdata();
  }, []);
  /////////////////////////////////
  const navigate = useNavigate();

  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setInputs((values) => ({ ...values, [name]: value }));
  };

  const updatedetails = () => {
    console.log(inputs);

    axios
      .patch(`http://localhost:8080/books/${id}`, inputs)
      .then((res) => {
        console.log(res);
      })
      .catch((err) => console.log(err));
    alert("Details Up to date");
    navigate("/admin");
  };

  return (
    <div
      style={{ textAlign: "center", backgroundColor: "white", height: "500px" }}
    >
      <div style={{ textAlign: "center" }}>
        <div style={{ display: "flex", justifyContent: "space-around" }}>
          {" "}
          <h3
            style={{ textAlign: "center" }}
            onClick={() => {
              navigate("/admin");
            }}
          >
            Edit Books Details
          </h3>
        </div>{" "}
        <hr />
        <Box
          component="form"
          sx={{
            "& > :not(style)": { m: 1, width: "25ch" },
          }}
          noValidate
          autoComplete="off"
        >
          <TextField
            id="outlined-number"
            label="Name"
            name="Name"
            type="Text"
            InputLabelProps={{
              shrink: true,
            }}
            value={inputs.Name}
            onChange={handleChange}
          />

          <TextField
            id="outlined-number"
            label="Auther"
            name="Auther"
            type="Text"
            InputLabelProps={{
              shrink: true,
            }}
            value={inputs.Auther}
            onChange={handleChange}
          />

          <TextField
            id="outlined-number"
            label="Publisher"
            name="Publisher"
            type="Text"
            InputLabelProps={{
              shrink: true,
            }}
            value={inputs.Publisher}
            onChange={handleChange}
          />
          <br />

          <TextField
            id="outlined-number"
            label="Description"
            name="Description"
            type="Text"
            InputLabelProps={{
              shrink: true,
            }}
            value={inputs.Description}
            onChange={handleChange}
          />

          <TextField
            id="outlined-number"
            label="Pages"
            type="number"
            name="Pages"
            InputLabelProps={{
              shrink: true,
            }}
            value={inputs.Pages}
            onChange={handleChange}
          />
          <TextField
            id="outlined-basic"
            label="Quantity"
            type="number"
            name="Quantity"
            InputLabelProps={{
              shrink: true,
            }}
            value={inputs.Quantity}
            onChange={handleChange}
          />
        </Box>
        <Button variant="outlined" onClick={updatedetails}>
          {" "}
          UPDATE
        </Button>
      </div>
    </div>
  );
};
