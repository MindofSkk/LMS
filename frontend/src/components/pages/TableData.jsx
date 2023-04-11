import * as React from "react";
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
import { Link } from "react-router-dom";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

import Box from "@mui/material/Box";
// import Button from '@mui/material/Button';
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";

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

export const TableData = (data) => {
  let alldata = data.data;

  const addthisdata = (e) => {
    console.log(e.id);
   alert("First Login")
    // let fadata=alldata.filter((item)=>{
    // })
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

  return (
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
              Action
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
                {/* <u style={{color:"green",fontWeight:"bolder"}}> More Details</u>{" "} */}
                <Button variant="contained" endIcon={<ExpandMoreIcon />}>
                  More Details
                </Button>
              </TableCell>

              <TableCell align="center">
                <Button
                  variant="outlined"
                  onClick={(e) => addthisdata(row)}
                  style={{
                    color: "green",
                    border: "1px solid green",
                    fontWeight: "bolder",
                  }}
                >
                  Add
                </Button>
              </TableCell>

              {/* <TableCell align="center">{row.protein}</TableCell> */}
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};
