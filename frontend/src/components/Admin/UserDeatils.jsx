import { Button } from '@mui/material';
import React from 'react'
import { useNavigate } from 'react-router-dom';

export const UserDeatils = () => {
    const navigate=useNavigate()

  return (
    <div><div style={{ display: "flex", justifyContent: "space-around" }}>
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
  </div>{" "} <hr /></div>
  )
}
