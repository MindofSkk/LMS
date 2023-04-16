import React, { useEffect, useState } from "react";
import axios from "axios";
import styles from "./Book.module.css";
import { TableData } from "./TableData";

export const Books = () => {
  const [books, setBook] = useState([]);
  
  
  const getBooksData = () => {
    axios.get("http://localhost:8080/books").then((res) => {
      setBook(res.data);
    });
  };
  useEffect(() => {
    getBooksData();
  }, []);

  const handlesearch = (input) => {
    if (input.trim().length > 0) {
      const filteredData = books.filter((data) =>
        data.Name.toLowerCase().includes(input.toLowerCase())
      );
      setBook(filteredData);
    } else {
      getBooksData();
    }
  };

  return (
    <div>
      <div className={styles.containerbox}>
        <div className={styles.wrap}>
          <div className={styles.search}>
            <input
              type="text"
              className={styles.searchTerm}
              placeholder="Search Book Name ...."
              onInput={(e) => handlesearch(e.target.value)}
            />
          </div>
        </div>
      </div>
      <div>
        <TableData data={books} />
      </div>
    </div>
  );
};
