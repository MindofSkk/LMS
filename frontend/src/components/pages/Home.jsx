import { Button } from "@mui/material";
import React from "react";
import { useNavigate } from "react-router-dom";

export const Home = () => {
  const navigate = useNavigate();
  return (
    <div>
      <div style={{ display: "flex", justifyContent: "space-around" }}>
        {" "}
        <Button onClick={() => navigate("/signup")}>New User</Button>{" "}
        <h3>Library Management System.</h3>{" "}
        <Button onClick={() => navigate("/books")}>Books list </Button>
      </div>

      <div>
        <img
          src="https://www.skoolbeep.com/blog/wp-content/uploads/2020/12/WHY-CONSIDER-SKOOLBEEP-THE-BEST-SCHOOL-LIBRARY-AUTOMATION-SOFTWARE-min.png"
          width={"100%"}
          alt=""
        />
      </div>
    </div>
  );
};
