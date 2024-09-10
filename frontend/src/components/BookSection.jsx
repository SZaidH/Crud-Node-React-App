import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { jwtDecode } from "jwt-decode";
import AddBook from "./AddBook";
import BookLibrary from "./BookLibrary";
import UpdateBook from "./UpdateBook";

const BookSection = () => {
  // State to store book information
  const [books, setBooks] = useState([]);
  // A key state that assists with rerendering this component
  const [rekey, setRekey] = useState(false);
  // State for handling book update
  const [bDetails, setBDetails] = useState({});
  // State for handling the required component
  const [comp, setComp] = useState("Add");
  // State to store JWT
  const [token, setToken] = useState(null);
  // State to store username from JWT
  const [userName, setUserName] = useState("");

  // Fetching the user token from local storage
  useEffect(() => {
    const storedToken = localStorage.getItem("token");
    if (storedToken) {
      setToken(storedToken);
      try {
        // Decoding the token to extract the username
        const decodedToken = jwtDecode(storedToken);
        setUserName(decodedToken.uName);
      } catch (error) {
        console.error("Error decoding token:", error);
      }
    }
  }, []);

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

  const logOut = () => {
    const storedToken = localStorage.getItem("token");
    if (storedToken) setToken(null);
  };

  return (
    <section className="book-section">
      <header className="flex flex-col items-center justify-center mt-3 mx-2 font-primary">
        <img src="../../public/logo.png" className="w-40 mb-5" alt="Logo" />
        {/* Logo Credit: www.freepik.com */}
        {!token ? (
          <h2 className="font-secondary text-secondary font-semibold">
            Please Login to add books to the Jolly Library{" "}
            <Link to="/uLogin">
              <button className="bg-[#ed6a5a] p-2 rounded-md text-white">
                Login
              </button>
            </Link>
          </h2>
        ) : (
          <h2 className="font-secondary text-secondary font-semibold">
            Welcome, {userName}{" "}
            <button
              className="bg-[#ed6a5a] p-2 rounded-md text-white"
              onClick={logOut}
            >
              Logout
            </button>
          </h2>
        )}
      </header>

      {token ? (
        comp === "Add" ? (
          <AddBook setRekey={setRekey} />
        ) : (
          <UpdateBook
            bDetails={bDetails}
            setComp={setComp}
            setRekey={setRekey}
          />
        )
      ) : null}
      <BookLibrary
        books={books}
        setBDetails={setBDetails}
        setComp={setComp}
        setRekey={setRekey}
      />
    </section>
  );
};

export default BookSection;
