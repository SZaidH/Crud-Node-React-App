import { useState } from "react";
import axios from "axios";

const AddBook = () => {
  // States related to the Book
  const [bTitle, setBtitle] = useState("");
  const [bAuthor, setBauthor] = useState("");
  const [bPrice, setBprice] = useState();

  // handleSubmit handles form data and sends it to the backend
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const bData = { bTitle, bAuthor, bPrice };
      //POST to the backend
      const response = await axios.post("http://localhost:3000/create", bData);
      console.log("Response: ", response.data);
    } catch (error) {
      console.error("Error submitting form: ", error);
    }
  };

  return (
    <div className="flex items-center justify-center ">
      <div className="border-2 w-10/12 2xl:w-5/12 p-3 my-8 rounded-lg bg-white">
        <h1 className="font-primary text-xl mb-5 text-primary">
          Add a new Book to the Club
        </h1>
        <form
          onSubmit={handleSubmit}
          className="flex flex-col justify-center text-lg font-secondary text-secondary"
        >
          <label htmlFor="bTitle">Book Title</label>
          <input
            type="text"
            id="bTitle"
            value={bTitle}
            name="bTitle"
            className="border-2 mb-5"
            onChange={(e) => setBtitle(e.target.value)}
          />
          <label htmlFor="bAuthor">Author</label>
          <input
            type="text"
            id="bAuthor"
            value={bAuthor}
            name="bAuthor"
            className="border-2 mb-5"
            onChange={(e) => setBauthor(e.target.value)}
          />
          <label htmlFor="bPrice">Price</label>
          <input
            type="number"
            id="bPrice"
            value={bPrice}
            name="bPrice"
            className="border-2 mb-5"
            onChange={(e) => setBprice(e.target.value)}
          />
          <button
            type="submit"
            className=" md:w-2/12 mx-auto md:mx-0 rounded-lg text-white bg-[#ed6a5a] hover:bg-black p-2"
          >
            Add Book
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddBook;
