import * as React from "react";
import { useState, useEffect } from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { Button } from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import axios from "axios";
import { useNavigate } from "react-router-dom";
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
  const token = JSON.parse(localStorage.getItem("token"));

  let alldata = data.data;
  const navigate = useNavigate();
  const addthisdata = (e) => {
    const userdata = JSON.parse(localStorage.getItem("userdata"));

    if (token == "123") {
      alert("Admin cannot release book");
    } else if (!userdata) {
      navigate("/Login");
    } else {
      const id = e._id;

      const payload = {
        ...e,
        userid: userdata.id,
      };
      axios
        .post("http://localhost:8080/books/issuebook", payload)
        .then((res) => {
          if (res.data.add == 1) {
            minusQuantity(e);
          }

          alert(res.data.message);
        })
        .catch((err) => console.log(err));
    }
  };

  const minusQuantity = (e) => {
    console.log("e", e);
    const id = e._id;
    let temp = e.Quantity;
    temp = temp - 1;
    console.log(temp);
    let obj = e;
    obj.Quantity = temp;
    axios.patch(`http://localhost:8080/books/${id}`, obj).then((res) => {
      console.log(res);
    });
  };
  //for modal

  const [open, setOpen] = React.useState(false);
  const [dis, setDis] = useState({});
  const [stock, Usestock] = useState(true);
  const handleOpen = (e) => {
    setOpen(true);

    // console.log("open", e);

    setDis(e);
  };
  const handleClose = () => setOpen(false);

  ////add details

  //pagination part
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
  const BookShow = alldata.slice((page - 1) * EachPage, page * EachPage);
  return (
    <>
      <TableContainer
        component={Paper}
        style={{ width: "80%", margin: "auto" }}
      >
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
            <TableRow style={{ backgroundColor: "gray", color: "white" }}>
              <TableCell style={{ fontWeight: "bolder" }}></TableCell>

              <TableCell style={{ fontWeight: "bolder" }}>Name</TableCell>
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

          {BookShow.length != 0 ? (
            <TableBody>
              {BookShow.map((row, index) => (
                <TableRow
                  key={index}
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell align="center">
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
                    <Button variant="contained" endIcon={<ExpandMoreIcon />}>
                      More
                    </Button>
                  </TableCell>

                  <TableCell align="center">
                    {row.Quantity ? (
                      <Button
                        variant="outlined"
                        onClick={(e) => addthisdata(row)}
                        style={{
                          color: "green",
                          border: "1px solid green",
                          fontWeight: "bolder",
                        }}
                      >
                        Issue
                      </Button>
                    ) : (
                      <h4 style={{ color: "red" }}>Out Of Stock</h4>
                    )}
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          ) : (
            <div> No Data Found.....</div>
          )}
        </Table>
      </TableContainer>

      <div
        style={{
          display: "flex",
          justifyContent: "center",
          marginBottom: "10px",
          backgroundColor: "transparent",
          padding: "20px 0px ",
          width: "80%",
          margin: "auto",
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
    </>
  );
};
