import React, { useEffect, useState } from "react";
import axios from "axios";
import Cards from "./Cards";

const Books = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    fetchBook();
  }, []);

  const fetchBook = async () => {
    const getBooks = await axios.get("http://localhost:3000/api/v1/getbooks");
    setData(getBooks.data.books);
  };

  return (
    <div className="px-28 w-full min-h-[91.5vh] bg-[#D9C0A2] font-mono ">
      <h1 className="text-center text-[2vw] ">See All Book Collections</h1>
      <div className="w-full flex flex-wrap justify-between ">
        {data.map((data) => (
          <Cards
            key={data._id}
            id={data._id}
            image={data.image}
            bookname={data.bookname}
            author={data.author}
            description={data.description}
            price={data.price}
            setData={setData}
          />
        ))}
      </div>
    </div>
  );
};

export default Books;
