import axios from "axios";
import React from "react";
import { Link } from "react-router-dom";

const Cards = ({ image, bookname, author, description, price, id, setData }) => {
  const deleteCard = async () => {
    const response = await axios.delete(
      `http://localhost:3000/api/v1/deleteBook/${id}`
    );
    alert(response.data.message);
    
    const data = await axios.get(
      `http://localhost:3000/api/v1/getbooks`
    );
    setData(data.data.books)
  };
  
  return (
    <div className="w-[14vw] mt-8 px-[1vw] py-[2vh] rounded-xl shadow-2xl bg-white">
      <div className="w-full h-[20vh] bg-blue-400 rounded-xl overflow-hidden ">
        <Link to={`/book/${id}`}>
          <img
            src={image}
            alt="bookImg"
            className="w-full h-full object-cover"
          />
        </Link>
      </div>
      <h1>{bookname}</h1>
      <h2>{author}</h2>
      <h3>{description}</h3>
      <h3>RS.{price}</h3>
      <div className="w-full flex justify-between">
        <Link to={`/edit/${id}`}>Edit Book</Link>
        <Link to={`/book/${id}`}>Read More</Link>
      </div>
    </div>
  );
};

export default Cards;
