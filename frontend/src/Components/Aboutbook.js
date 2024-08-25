import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

const Aboutbook = () => {
  const [book, setBook] = useState("");
  console.log(book);

  const { id } = useParams();

  useEffect(() => {
    getBook();
  }, []);

  const getBook = async () => {
    const response = await axios.get(
      `http://localhost:3000/api/v1/getbooks/${id}`
    );
    setBook(response.data.book);
  };

  return (
    <div className="px-28 w-full h-[91.5vh] flex ">
      <div className="w-[50%] h-full flex items-center justify-center ">
        <div className="w-[70%] h-[85%] rounded-xl overflow-hidden ">
          <img
            src={book.image}
            alt="bookImg"
            className="w-full h-full object-fill "
          />
        </div>
      </div>
      <div className="w-[50%] h-full flex items-center justify-center bg-green-200 ">
        <div className="w-[70%] h-[85%] rounded-xl overflow-hidden ">
          <h1>Title: {book.bookname}</h1>
          <h1>Author: {book.author}</h1>
          <h1>Description: {book.description}</h1>
          <h1>Price: {book.price}</h1>
          <Link to="/books">See Books</Link>
        </div>
      </div>
    </div>
  );
};

export default Aboutbook;
