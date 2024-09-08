import { useEffect, useState } from "react";
import AddBook from "./AddBook";
import BookLibrary from "./BookLibrary";
import axios from "axios";
import UpdateBook from "./UpdateBook";

const BookSection = () => {
  // State to store book information
  const [books, setBooks] = useState([]);
  // A key state that assists with rerendering this component
  const [rekey, setRekey] = useState(false);
  // State for handling book update
  const [bDetails, setBDetails] = useState({});

  useEffect(() => {
    const fetchBooks = async () => {
      try {
        const response = await axios.get("http://localhost:3000/books");
        setBooks(response.data);
      } catch (error) {
        console.error("Error fetching books: ", error);
      }
    };

    fetchBooks();
  }, [rekey]); // Triggers a render when the key is mutated in the child component AddBook

  return (
    <section className="book-section">
      <header className="flex justify-between mt-3 mx-2 font-primary">
        <div className="">{/* Empty space for enabling 3 Column layout */}</div>
        <h2 className=" text-primary text-3xl">Jolly Book Club</h2>
        <button className="bg-[#ed6a5a] p-2 rounded-md text-white ">
          Login
        </button>
      </header>

      {/* <AddBook setRekey={setRekey} /> */}
      <UpdateBook bDetails={bDetails} setRekey={setRekey} />
      <BookLibrary books={books} setBDetails={setBDetails} />
    </section>
  );
};

export default BookSection;
