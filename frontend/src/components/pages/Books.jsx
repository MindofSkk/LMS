import React, { useEffect, useState } from "react";

import axios from "axios";
import styles from "./Book.module.css";
export const Books = () => {
  const [book, setBook] = useState([]);
  const [value, setValue] = useState("");

  const getdata = () => {
    axios.get("http://localhost:7000/Books").then((res) => {
      // console.log(res.data);
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
      <h2>List of all Books</h2>
      <hr/>
      <div>
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
            </div>
          );
        })}
      </div>
    </div>
  );
};
