import React, { useEffect, useState } from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { Alert, Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { useParams } from "react-router-dom";

export const EditBook = () => {
  const { id } = useParams();
  const [predata, setPredata] = useState({});

  const getdata = () => {
    axios
      .get(`http://localhost:8080/books/${id}`)
      .then((res) => setPredata(res.data));
  };
  useEffect(() => {
    getdata();
  }, []);
  console.log(predata.Name)
  /////////////////////////////////
  const navigate = useNavigate();

  const [inputs, setInputs] = useState({});

  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setInputs((values) => ({ ...values, [name]: value }));
  };

  const add = () => {
    console.log(inputs);

    // axios.post("http://localhost:8080/books/add", inputs).then((res) => {
    //   console.log(res);
    // });
    alert("Books add on data base");
  };

  return (
    <div>
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
            id="outlined-basic"
            defaultValue={predata.title}
            variant="outlined"
            name="Name"
            value={inputs.name}
            onChange={handleChange}
          />

          <TextField
            id="outlined-basic"
            defaultValue={predata.auther}
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
          UPDATE
        </Button>
      </div>
    </div>
  );
};
