import React from "react";
import styles from "./Book.module.css";
import { Button } from "@mui/joy";
import Box from "@mui/material/Box";

import { useState } from "react";

import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
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

export const Home = () => {
  const [open, setOpen] = React.useState(false);
 const  naviagte=useNavigate()
  const [dis, setDis] = useState({});
  const handleOpen = (e) => {
    setOpen(true);
  };
  const handleClose = () => setOpen(false);
  return (
    <div>
      <div className={styles.containerBox}>
      
       <div>

       <button role="button" className={styles.containerButton} onClick={()=> naviagte("/books")} > Book Issue / Return</button>

       </div>
       
      </div>
      {/* <Modal
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

      <div className={styles.card}>
        <div className={styles.book_image}>
          <img
            src="https://play-lh.googleusercontent.com/J8tWus-62iqsQF1O6SMr4A726soHe7Xi7f_kezso3RHGQdCMljXOk8wCClqE5Yxu2V0U0dfXGonf_Q=w240-h345-rw"
            alt=""
            height={"100%"}
            width={"100%"}
          />{" "}
        </div>
        <div className={styles.content}>
          <div className={styles.tilte}>
            <h4>Wings of Fire | Abdul Kalam | Audiobook | Karadi Tales </h4>{" "}
            <p> by A.P.J. Abdul Kalam</p>
          </div>
          <div className={styles.button}>
            {" "}
            <Button variant="contained" onClick={() => handleOpen()}>
              More Details
            </Button>
            <Button
              variant="outlined"
              // onClick={(e) => addthisdata(row)}
              style={{
                color: "green",
                border: "1px solid green",
                fontWeight: "bolder",
              }}
            >
              Issue Book
            </Button>
          </div>
        </div>
      </div> */}
    </div>
  );
};
