import { useEffect, useState } from "react";
import AddBook from "./AddBook";
import BookLibrary from "./BookLibrary";
import axios from "axios";

const BookSection = () => {
  // State to store book information
  const [books, setBooks] = useState({});

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
  }, []);

  return (
    <section className="book-section">
      <header className="flex justify-between mt-3 mx-2 font-primary">
        <div className="">{/* Empty space for enabling 3 Column layout */}</div>
        <h2 className=" text-primary text-3xl">Jolly Book Club</h2>
        <button className="bg-[#ed6a5a] p-2 rounded-md text-white ">
          Login
        </button>
      </header>

      <AddBook />
      <BookLibrary books={books} />
    </section>
  );
};

export default BookSection;
