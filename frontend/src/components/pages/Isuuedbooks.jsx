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

export const Isuuedbooks = () => {
  var booksdata = JSON.parse(localStorage.getItem("Booksdata"));
  const [alldata, setAlldata] = useState([]);
  useEffect(() => {
    setAlldata(booksdata);
  }, []);

  // console.log(alldata.Name)

  const [open, setOpen] = React.useState(false);
  const [dis, setDis] = useState({});
  const handleOpen = (e) => {
    setOpen(true);

    console.log("open", e);

    setDis(e);
  };
  const handleClose = () => setOpen(false);

  ////add details

  const deletedata = (e) => {
    const updatedData = alldata.filter((item) => item._id !== e._id);
    console.log(updatedData);
    localStorage.setItem("Booksdata", JSON.stringify(updatedData));
    setAlldata(updatedData);
  };
  return (
    <div>
      <div style={{ textAlign: "center", fontWeight: "bolder" }}>
        {" "}
        All Issued Books
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
                  {console.log(row.Name)} {row.Name}
                </TableCell>
                <TableCell align="center">{row.Publisher}</TableCell>
                <TableCell align="center">{row.Auther}</TableCell>
                <TableCell align="center">{row.Pages}</TableCell>
                <TableCell align="center" onClick={(e) => handleOpen(row)}>
                  <Button variant="contained" endIcon={<ExpandMoreIcon />}>
                    More Details
                  </Button>
                </TableCell>

                <TableCell align="center">
                  <Button
                    variant="outlined"
                    onClick={(e) => deletedata(row)}
                    style={{
                      color: "green",
                      border: "1px solid green",
                      fontWeight: "bolder",
                    }}
                  >
                    Return
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};
