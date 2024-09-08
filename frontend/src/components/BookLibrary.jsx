import axios from "axios";
const BookLibrary = ({ books, setBDetails, setRekey }) => {
  // Handles the Book Details when the user clicks on the Edit button. The data is sent to the parent
  const handleEditClick = (book) => {
    setBDetails({
      _id: book._id,
      bTitle: book.bTitle,
      bAuthor: book.bAuthor,
      bPrice: book.bPrice,
    });
  };

  // Handles Book deletion when the user clicks on the Delete button.
  const handleDeleteClick = async (book) => {
    const bookID = book._id;
    try {
      const response = await axios.delete(
        `http://localhost:3000/delete/${bookID}`
      );
      console.log("Response: ", response.data);
      setRekey((prev) => !prev);
    } catch (error) {
      console.error("Problem sending data to the server: ", error);
    }
  };
  return (
    <div className="flex items-center justify-center ">
      <div className="border-2 w-10/12 2xl:w-5/12 p-3 my-8 rounded-lg bg-white">
        <h2 className="font-primary text-xl mb-5 text-primary">
          Jolly Book Club Library
        </h2>

        <table className="table-auto w-full border border-gray-300 font-secondary">
          <thead className="bg-[#ed6a5a] text-white">
            <tr>
              <th className="border border-gray-300 px-4 py-2">Book</th>
              <th className="border border-gray-300 px-4 py-2">Author</th>
              <th className="border border-gray-300 px-4 py-2">Price</th>
            </tr>
          </thead>

          <tbody>
            {books.length > 0
              ? books.map((book) => (
                  <tr key={book._id}>
                    <td className="border border-gray-300 px-4 py-2">
                      {book.bTitle}
                    </td>
                    <td className="border border-gray-300 px-4 py-2">
                      {book.bAuthor}
                    </td>
                    <td className="border border-gray-300 px-4 py-2">
                      {book.bPrice}
                    </td>
                    <td className="border border-gray-300 px-4 py-2">
                      <button
                        className="bg-emerald-800 p-2 text-white mr-4 rounded-md"
                        onClick={() => handleEditClick(book)}
                      >
                        Edit
                      </button>
                      <button
                        className="bg-red-800 p-2 text-white rounded-md"
                        onClick={() => handleDeleteClick(book)}
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                ))
              : null}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default BookLibrary;
