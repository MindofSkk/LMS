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
import { UserData } from "./UserData";

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


export const UserDeatils = () => {
  const navigate = useNavigate();
  const [alluserdata, setalluserdata] = useState([]);
  const getdata = () => {
    axios.get("http://localhost:8080/user").then((res) => setalluserdata(res.data));
  };
  useEffect(() => {
    getdata();
  }, []);

  console.log(alluserdata)
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

    //pagination part
    const [page, setPage] = useState(1);
    const EachPage = 4;
  
    const totalPages = Math.ceil(alluserdata.length / EachPage);
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
    const BookShow = alluserdata.slice((page - 1) * EachPage, page * EachPage);
  const [UserDetails,setUserDetails]=useState(null)
    const showUserDetails=(e)=>{

      setUserDetails(e)
    }
  return (
    <div>
      <div style={{ display: "flex", justifyContent: "space-around" ,color:"white"}}>
        {" "}
        <Button onClick={() => navigate("/userdetails")} style={{color:"white"}}>User Details</Button>
        <h3
          style={{ textAlign: "center" }}
          onClick={() => {
            navigate("/admin");
          }}
        >
          Admin
        </h3>
        <Button onClick={() => navigate("/addbooks")} style={{color:"white"}}>Add Books</Button>
      </div>{" "}
      <hr />
      <div>
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
          <Box sx={style}           style={{width:"100%"}}
>

            <UserData data={UserDetails}/>
            {/* <Typography id="modal-modal-title" variant="h6" component="h3">
              {dis.Name}{" "}
            </Typography>
            <p>
              Publisher : {dis.Publisher} {dis.Pages}
            </p>
            <Typography id="modal-modal-description" sx={{ mt: 2 }}>
              {dis.Description}{" "}
            </Typography> */}
          </Box>
        </Modal>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow style={{ backgroundColor: "gray", color: "white" }}>
              <TableCell style={{ fontWeight: "bolder" }}></TableCell>

              <TableCell style={{ fontWeight: "bolder" }}>Name</TableCell>
              <TableCell style={{ fontWeight: "bolder" }} align="center">
                Email
              </TableCell>
              <TableCell style={{ fontWeight: "bolder" }} align="center">
                Total Book issued
              </TableCell>
              <TableCell style={{ fontWeight: "bolder" }} align="center">
                {" "}
                More Details
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
                    {row.name}
                  </TableCell>
                  <TableCell align="center">{row.email}</TableCell>
                  <TableCell align="center">{row.issuedBooks.length}</TableCell>
                  <TableCell align="center" onClick={(e) => handleOpen(row)}>
                    <Button variant="contained" onClick={()=>showUserDetails(row)} endIcon={<ExpandMoreIcon />}>
                      More
                    </Button>
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
      </div>
    </div>
  );
};
