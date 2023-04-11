import React, { useEffect, useState } from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";

export const AddBooks = () => {
  const navigate = useNavigate();

  const [inputs, setInputs] = useState({});

  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setInputs((values) => ({ ...values, [name]: value }));
  };
  const add = () => {
    console.log(inputs);
  };

  return (
    <div style={{ textAlign: "center" }}>
      <div style={{ display: "flex", justifyContent: "space-around" }}>
        {" "}
        <Button onClick={()=>navigate("/userdetails")}>User Details</Button>
        <h3
          style={{ textAlign: "center" }}
          onClick={() => {
            navigate("/admin");
          }}
        >
          Admin
        </h3>
        <Button>Add Books</Button>
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
          id="outlined-basic"
          label="Book Name"
          variant="outlined"
          name="Name"
          value={inputs.name}
          onChange={handleChange}
        />

        <TextField
          id="outlined-basic"
          label="Auther"
          variant="outlined"
          name="Auther"
          value={inputs.name}
          onChange={handleChange}
        />

        <TextField
          id="outlined-basic"
          label="Publisher"
          variant="outlined"
          name="Publisher"
          value={inputs.name}
          onChange={handleChange}
        />

        <TextField
          id="outlined-basic"
          label="Description"
          variant="outlined"
          name="Description"
          value={inputs.name}
          onChange={handleChange}
        />
        <TextField
          id="outlined-basic"
          label="Pages"
          variant="outlined"
          type="number"
          name="Pages"
          value={inputs.name}
          onChange={handleChange}
        />
      </Box>
      <Button variant="outlined" onClick={add}>
        {" "}
        Add Book{" "}
      </Button>
    </div>
  );
};
