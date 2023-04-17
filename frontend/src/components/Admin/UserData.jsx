import * as React from "react";
import CardMedia from "@mui/material/CardMedia";

import { useState, useEffect } from "react";
import Table from "@mui/material/Table";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Box from "@mui/material/Box";

// import Button from '@mui/material/Button';
import Paper from "@mui/material/Paper";

import Typography from "@mui/material/Typography";
import { Button, TableBody } from "@mui/material";
import axios from "axios";
import { Navigate, useNavigate } from "react-router-dom";
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

export const UserData = ({data}) => {

//    console.log("gggggg",data)


const[userdata,setuserdata]=useState([]);

 
 useEffect(()=>{
    // console.log(data)
    setuserdata(data.issuedBooks)
 },[])

  // Pagniation
  const [page, setPage] = useState(1);
  const EachPage = 2;

  const totalPages = Math.ceil(userdata.length / EachPage);
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
  const UserDeatils = userdata.slice((page - 1) * EachPage, page * EachPage);
    // console.log(user);
  return (

    <>
      <br />
      <div
        style={{
          width: "98%",
          // border: "2px solid white",
          height: "420px",
          backgroundColor: "gray.700",
          margin:"auto"
        }}
      >
        <Box style={{ display: "flex" }}>
          <Box style={{ width: "20%",backgroundColor:"black"  }}>
           <Box style={{width:"200px",height:"50%", margin :"auto",paddingTop:"20px"}}>
           <img
              src={`http://localhost:8080/${data.Image}`}
              alt=""
              width={"200px"}
              height={"200px"}
              style={{borderRadius:"50%",margin :'auto'}}
            />
           </Box>
            <Typography align="center"> <h3 style={{color:"white",textAlign:"center"}}>{data.name} <br />
            {data.email}</h3> </Typography>
          </Box>
          
          <Box
            style={{ width: "80%", height: "418px", border: "2px solid black" }}
            align="right"
          >
            <br />
            <TableContainer
              component={Paper}
              style={{ width: "90%", margin: "auto" }}
            >
              <Table aria-label="simple table">
                <TableHead>
                  <TableRow style={{ backgroundColor: "gray", color: "white" }}>
                    <TableCell style={{ fontWeight: "bolder" }}></TableCell>

                    <TableCell style={{ fontWeight: "bolder" }}>Name</TableCell>

                    <TableCell style={{ fontWeight: "bolder" }} align="center">
                      Issued Time
                    </TableCell>
                    <TableCell style={{ fontWeight: "bolder" }} align="center">
                      {" "}
                      Issued Date
                    </TableCell>
                    <TableCell style={{ fontWeight: "bolder" }} align="center">
                      Return Date
                    </TableCell>
               
                  </TableRow>
                </TableHead>
                <TableBody>
                  {UserDeatils.map((e, index) => (
                    <TableRow
                      key={index}
                      sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                    >
                      <TableCell align="center">
                        <img
                          src={`http://localhost:8080/${e.Image}`}
                          alt=""
                          width={"80px"}
                          height={"100px"}
                        />
                      </TableCell>

                      <TableCell component="th" scope="e">
                        {e.Name}
                      </TableCell>
                      <TableCell align="center">{e.IssueTime}</TableCell>
                      <TableCell align="center">{e.IssueDate}</TableCell>
                      <TableCell
                        align="center"
                        style={{ color: "tomato", fontWeight: "bolder" }}
                      >
                        {e.ExpiryDate}{" "}
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
          </Box>
        </Box>
      </div>
    </>
  );
};
