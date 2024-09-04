const BookLibrary = () => {
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
            <tr>
              <td className="border border-gray-300 px-4 py-2">East of Eden</td>
              <td className="border border-gray-300 px-4 py-2">
                John Steinbeck
              </td>
              <td className="border border-gray-300 px-4 py-2">56</td>
              <td className="border border-gray-300 px-4 py-2">
                <button className="bg-emerald-800 p-2 text-white mr-4 rounded-md">
                  Edit
                </button>
                <button className="bg-red-800 p-2 text-white rounded-md">
                  Delete
                </button>
              </td>
            </tr>
            <tr>
              <td className="border border-gray-300 px-4 py-2">
                The Alchemist
              </td>
              <td className="border border-gray-300 px-4 py-2">Paolo Coelho</td>
              <td className="border border-gray-300 px-4 py-2">20</td>
              <td className="border border-gray-300 px-4 py-2">
                <button className="bg-emerald-800 p-2 text-white mr-4 rounded-md">
                  Edit
                </button>
                <button className="bg-red-800 p-2 text-white rounded-md">
                  Delete
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default BookLibrary;
