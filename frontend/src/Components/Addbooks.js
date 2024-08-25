import axios from "axios";
import React, { useState } from "react";

const Addbooks = () => {
  const [bookname, setBookname] = useState("");
  const [author, setAuthor] = useState("");
  const [description, setDescription] = useState("");
  const [image, setImage] = useState("");
  const [price, setPrice] = useState("");
  // console.log(bookname);

  const addBook = async (e) => {
    e.preventDefault();
    const newBook = { bookname, author, description, image, price };

    const response = await axios.post(
      "http://localhost:3000/api/v1/addbook",
      newBook
    );
    alert(response.data.message);
    // console.log(response);

    setBookname("");
    setAuthor("");
    setDescription("");
    setImage("");
    setPrice("");
  };

  return (
    <div className="px-28 w-full h-[91.5vh] py-[5vh] text-white bg-[#D9C0A2] flex items-center justify-center">
      <form
        onSubmit={addBook}
        className="w-[60%] border-[2px] rounded-md px-[4vw] py-[2vh] flex flex-col gap-[1.5vh] border-white "
      >
        <label htmlFor="bookname">Book Name</label>
        <input
          type="text"
          id="bookname"
          placeholder="Enter Book Name"
          name="bookname"
          value={bookname}
          onChange={(e) => setBookname(e.target.value)}
          className="py-[1.5vh] px-[2vw] text-[1vw] outline-none border-[2px] rounded-md bg-transparent border-[#A3A49E] placeholder:text-[1vw] "
        />
        <label htmlFor="author">Author</label>
        <input
          type="text"
          id="author"
          placeholder="Enter Book's Author "
          name="author"
          value={author}
          onChange={(e) => setAuthor(e.target.value)}
          className="py-[1.5vh] px-[2vw] text-[1vw] outline-none border-[2px] rounded-md bg-transparent border-[#A3A49E] placeholder:text-[1vw] "
        />
        <label htmlFor="description">Description</label>
        <textarea
          name="description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          id="description"
          placeholder="Enter Book's Description"
          className="py-[1.5vh] px-[2vw] text-[1vw] outline-none border-[2px] rounded-md bg-transparent border-[#A3A49E] placeholder:text-[1vw] resize-none "
        ></textarea>
        <label htmlFor="image">Image</label>
        <input
          type="text"
          id="image"
          placeholder="Enter Image Url"
          name="image"
          value={image}
          onChange={(e) => setImage(e.target.value)}
          className="py-[1.5vh] px-[2vw] text-[1vw] outline-none border-[2px] rounded-md bg-transparent border-[#A3A49E] placeholder:text-[1vw] "
        />
        <label htmlFor="price">Price</label>
        <input
          type="Number"
          id="price"
          placeholder="Enter Book's Price"
          name="price"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
          className="py-[1.5vh] px-[2vw] text-[1vw] outline-none border-[2px] rounded-md bg-transparent border-[#A3A49E] placeholder:text-[1vw] "
        />
        <button
          type="submit"
          className="w-fit bg-white text-black text-[1vw] px-[2vw] py-[1vh] rounded-md hover:bg-[#242424] hover:text-white "
        >
          Add Book
        </button>
      </form>
    </div>
  );
};

export default Addbooks;
