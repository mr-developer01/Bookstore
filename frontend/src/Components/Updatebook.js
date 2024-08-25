import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

const Updatebook = () => {
  const [card, setCard] = useState("");
  const { id } = useParams();
  useEffect(() => {
    fetchCard();
  }, []);

  const fetchCard = async () => {
    const card = await axios.get(`http://localhost:3000/api/v1/getbooks/${id}`);
    console.log(card.data.book);
    setCard(card.data.book);
  };

  return (
    <div className="px-28 w-full h-[91.5vh] bg-red flex ">
      <div className=" w-[50%] h-full flex items-center justify-center ">
        <div className="card card-side w-[30vw] bg-base-100 shadow-xl">
          <figure className="w-[10vw]">
            <img
              src={card.image}
              alt="Movie"
              className="w-full h-full object-fill"
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title">{card.bookname}</h2>
            <p>{card.description}</p>
            <div className="card-actions justify-start">
              <Link to="/" className="btn btn-primary">See All Books</Link>
            </div>
          </div>
        </div>
      </div>
      <div className="w-[50%] bg-yellow-300 h-full "></div>
    </div>
  );
};

export default Updatebook;
