import { useEffect, useState } from "react";
import axios from "axios";

const UpdateBook = ({ bDetails, setRekey, setComp }) => {
  const [bTitle, setBtitle] = useState("");
  const [bAuthor, setBauthor] = useState("");
  const [bPrice, setBprice] = useState("");

  // Update form fields when bDetails changes
  useEffect(() => {
    if (bDetails) {
      setBtitle(bDetails.bTitle || "");
      setBauthor(bDetails.bAuthor || "");
      setBprice(bDetails.bPrice || "");
    }
  }, [bDetails]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const bData = { id: bDetails._id, bTitle, bAuthor, bPrice };
      const response = await axios.put(
        `http://localhost:3000/update/${bData.id}`,
        bData
      );
      console.log("Response: ", response.data);
      setBtitle("");
      setBauthor("");
      setBprice("");
      setRekey((prev) => !prev); // Triggers a render in the parent component
      setComp("Add");
    } catch (error) {
      console.error("Error submitting form: ", error);
    }
  };

  return (
    <div className="flex items-center justify-center ">
      <div className="border-2 w-10/12 2xl:w-3/5 p-3 my-8 rounded-lg bg-white">
        <h1 className="font-primary text-xl mb-5 text-primary">
          Update Book Details
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
            className="border-2 mb-5 p-2 text-black"
            required
            onChange={(e) => setBtitle(e.target.value)}
          />
          <label htmlFor="bAuthor">Author</label>
          <input
            type="text"
            id="bAuthor"
            value={bAuthor}
            name="bAuthor"
            className="border-2 mb-5 p-2 text-black"
            required
            onChange={(e) => setBauthor(e.target.value)}
          />
          <label htmlFor="bPrice">Price</label>
          <input
            type="number"
            id="bPrice"
            value={bPrice}
            name="bPrice"
            className="border-2 mb-5 p-2 text-black"
            required
            onChange={(e) => setBprice(e.target.value)}
          />
          <button
            type="submit"
            className="md:w-2/12 mx-auto md:mx-0 rounded-lg text-white bg-[#003E1F] hover:bg-black p-2"
          >
            Update Book
          </button>
        </form>
      </div>
    </div>
  );
};

export default UpdateBook;
