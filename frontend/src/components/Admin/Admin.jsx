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
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import { Link, useNavigate } from "react-router-dom";
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
    axios.get("http://localhost:8080/Books").then((res) => {
      setAlldata(res.data);
    });
  };
  useEffect(() => {
    getdata();
  }, []);

  const addthisdata = (e) => {
    console.log(e.id);
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
      .delete(`http://localhost:8080/Books/${id}`)
      .then((res) => getdata())
      .catch((err) => console.log(err));
  };

  // pagniation
  const [page, setPage] = useState(1);
  const EachPage = 4;

  const totalPages = Math.ceil(alldata.length / EachPage);
  const handleNextPage = () => {
    if (page < totalPages) {
      setPage(page + 1);
    }
  };

  const handlePrevPage = () => {
    if (page > 1) {
      setPage(page - 1);
    }
  };
  const BookShow =  alldata.slice(
    (page - 1) * EachPage,
    page * EachPage
  );
  return (
    <div>
      <div style={{ display: "flex", justifyContent: "space-around" }}>
        {" "}
        <Button onClick={() => navigate("/userdetails")}  style={{color:"white"}}>User Details</Button>
        <h3 style={{ textAlign: "center" }}>Admin</h3>
        <Button onClick={() => navigate("/addbooks")} style={{color:"white"}}>Add Books</Button>
      </div>

      <TableContainer component={Paper} style={{ width: "80%", margin: "auto" }}>
        <Modal
          open={open}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box sx={style}>
            <Typography id="modal-modal-title" variant="h6" component="h3">
              {dis.Name}{" "}
            </Typography>
            <p>
              Publisher : {dis.Publisher} {dis.Pages}
            </p>
            <Typography id="modal-modal-description" sx={{ mt: 2 }}>
              {dis.Description}{" "}
            </Typography>
          </Box>
        </Modal>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow style={{ backgroundColor: "gray" }}>
            <TableCell style={{ fontWeight: "bolder" }}></TableCell>
              <TableCell style={{ fontWeight: "bolder" }}> Name</TableCell>
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
            {BookShow.map((row, index) => (
              <TableRow
                key={index}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                    <TableCell align="left">
                <img
                  src={`http://localhost:8080/${row.Image}`}
                  alt=""
                  width={"80px"}
                  height={"100px"}
                />
              </TableCell>
                <TableCell component="th" scope="row">
                  {row.Name}
                </TableCell>
                <TableCell align="center">{row.Publisher}</TableCell>
                <TableCell align="center">{row.Auther}</TableCell>
                <TableCell align="center">{row.Pages}</TableCell>
                <TableCell align="center" onClick={(e) => handleOpen(row)}>
                  <u> More Details</u>{" "}
                </TableCell>

                <TableCell align="center">
                  <Button variant="outlined" onClick={(e) => addthisdata(row)}>
                    {/* Edit */}
                    <Link to={`/edit/${row._id}`}>Edit</Link>
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
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          marginBottom: "10px",
          backgroundColor:"transparent"
          ,
          padding:"20px 0px ",
          width:"80%",
          margin :"auto",
          
        }}
      >
        <Button
          variant="contained"
          style={{
            backgroundColor: "black",
            color: "white",
            marginRight: "5px",
          }}
          onClick={handlePrevPage}
        >
          Prev
        </Button>
        <Button
          variant="contained"
          style={{ backgroundColor: "black", color: "white" }}
          onClick={handleNextPage}
        >
          Next
        </Button>
      </div>
    </div>
  );
};
