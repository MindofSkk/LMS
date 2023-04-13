import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { Button } from "@mui/material";

import Box from "@mui/material/Box";
// import Button from '@mui/material/Button';
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import { useNavigate } from "react-router-dom";
import { EditBook } from "./EditBook";
const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

export const Admin = (data) => {
  const [alldata, setAlldata] = useState([]);
  const navigate = useNavigate();
  const getdata = () => {
    axios.get("http://localhost:7000/Books").then((res) => {
      setAlldata(res.data);
    });
  };
  useEffect(() => {
    getdata();
  }, []);

  const addthisdata = (e) => {
    console.log(e.id);
    
      // {<EditBook data={e}/>}

  };

  //for modal

  const [open, setOpen] = React.useState(false);
  const [dis, setDis] = useState({});
  const handleOpen = (e) => {
    setOpen(true);

    console.log("open", e);

    setDis(e);
  };
  const handleClose = () => setOpen(false);

  //delete Part;

  const DeleteBooks = (e) => {
    let id = e.id;
    axios
      .delete(`http://localhost:7000/Books/${id}`)
      .then((res) =>getdata() )
      .catch((err) => console.log(err));
  };

  return (
    <div>
      <div style={{ display: "flex", justifyContent: "space-around" }}>
        {" "}
        <Button onClick={() => navigate("/userdetails")}>User Details</Button>
        <h3 style={{ textAlign: "center" }}>Admin</h3>
        <Button onClick={() => navigate("/addbooks")}>Add Books</Button>
      </div>

      <TableContainer component={Paper}>
        <Modal
          open={open}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box sx={style}>
            <Typography id="modal-modal-title" variant="h6" component="h3">
              {dis.title}{" "}
            </Typography>
            <p>
              Publisher : {dis.publisher} {dis.pages}
            </p>
            <Typography id="modal-modal-description" sx={{ mt: 2 }}>
              {dis.description}{" "}
            </Typography>
          </Box>
        </Modal>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow style={{ backgroundColor: "gray" }}>
              <TableCell style={{ fontWeight: "bolder" }}>Books Name</TableCell>
              <TableCell style={{ fontWeight: "bolder" }} align="center">
                Publisher
              </TableCell>
              <TableCell style={{ fontWeight: "bolder" }} align="center">
                Auther
              </TableCell>
              <TableCell style={{ fontWeight: "bolder" }} align="center">
                {" "}
                Pages
              </TableCell>
              <TableCell style={{ fontWeight: "bolder" }} align="center">
                Description
              </TableCell>
              <TableCell style={{ fontWeight: "bolder" }} align="center">
                {" "}
                Edit
              </TableCell>
              <TableCell style={{ fontWeight: "bolder" }} align="center">
                {" "}
                Delete
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {alldata.map((row, index) => (
              <TableRow
                key={index}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  {row.title}
                </TableCell>
                <TableCell align="center">{row.publisher}</TableCell>
                <TableCell align="center">{row.author}</TableCell>
                <TableCell align="center">{row.pages}</TableCell>
                <TableCell align="center" onClick={(e) => handleOpen(row)}>
                  <u> More Details</u>{" "}
                </TableCell>

                <TableCell align="center">
                  <Button variant="outlined" onClick={(e) => addthisdata(row)}>
                    Edit
                  </Button>
                </TableCell>
                <TableCell align="center">
                  <Button
                    variant="outlined"
                    onClick={(e) => DeleteBooks(row)}
                    style={{ color: "red", border: "1px solid red" }}
                  >
                    Delete
                  </Button>
                </TableCell>

                {/* <TableCell align="center">{row.protein}</TableCell> */}
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};
