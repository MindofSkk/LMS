import { Button } from "@mui/material";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

export const UserDeatils = () => {
  const navigate = useNavigate();
  const [data, setdata] = useState([]);
  const getdata = () => {
    axios.get("http://localhost:8080/user").then((res) => setdata(res.data));
  };
  useEffect(() => {
    getdata();
  }, []);
  return (
    <div>
      <div style={{ display: "flex", justifyContent: "space-around" }}>
        {" "}
        <Button onClick={() => navigate("/userdetails")}>User Details</Button>
        <h3
          style={{ textAlign: "center" }}
          onClick={() => {
            navigate("/admin");
          }}
        >
          Admin
        </h3>
        <Button onClick={() => navigate("/addbooks")}>Add Books</Button>
      </div>{" "}
      <hr />
      <div>
        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 650 }} aria-label="simple table">
            <TableHead>
              <TableRow style={{ backgroundColor: "gray" }}>
                <TableCell style={{ fontWeight: "bolder" }}>
                  User Name
                </TableCell>
                <TableCell style={{ fontWeight: "bolder" }} align="center">
                  all issued books
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {data.map((row, index) => (
                <TableRow
                  key={index}
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell component="th" scope="row">
                    {row.name}
                  </TableCell>
                  <TableCell align="center">0</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </div>
    </div>
  );
};
