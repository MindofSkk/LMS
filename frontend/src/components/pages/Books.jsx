import React, { useEffect, useState } from "react";

import axios from "axios";
import styles from "./Book.module.css";
import { Button } from "@mui/material";
import { TableData } from "./TableData";
export const Books = () => {
  const [books, setBook] = useState([]);
  const [value, setValue] = useState("");

  const getdata = () => {
    axios.get("http://localhost:7000/Books").then((res) => {
      setBook(res.data);
    });
  };
  useEffect(() => {
    getdata();
  }, []);

  const handlesearch = () => {
    console.log(value);
    test(value);
  };

  function test(value) {
    axios.get(`http://localhost:7000/Books?q=${value}`).then((res) => {
      console.log(res.data);
      setBook(res.data);
    });
  }

  return (
    <div>
      <div style={{ textAlign: "center" }}>
        <br />
        <input
        className={styles.input}
          type="text"
          placeholder=" Enter the Book Name..."
          onChange={(e) => {
            setValue(e.target.value);
            handlesearch();
          }}
        />
      </div>
      <hr />

      <TableData data={books} />
      {/* <div style={{textAlign:"center"}}>
        <br />
        <input
          type="text"
          placeholder="Enter the Book Name"
          onChange={(e) => {setValue(e.target.value);handlesearch()}}
        />
        <button onClick={handlesearch}>Search</button>
      </div>
      <div className={styles.grid}>
        {book.map((e, index) => {
          return (
            <div key={index}>
              <img
                src="https://www.collinsdictionary.com/images/full/book_181404689_1000.jpg"
                alt=""
                width={"90px"}
              />
              <p>
                <strong>{e.title}r</strong>
              </p>
              <p>{e.publisher}</p>
              <div> <Button variant="text">More Details</Button>   <Button variant="outlined">Add This Book</Button></div>
            </div>
          );
        })}
      </div> */}
    </div>
  );
};
