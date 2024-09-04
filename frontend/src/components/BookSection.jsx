import AddBook from "./AddBook";

const BookSection = () => {
  return (
    <section className="book-section">
      <header className="flex justify-between mt-3 mx-2 font-primary">
        <div className="">{/* Empty space for enabling 3 Column layout */}</div>
        <h1 className=" text-primary text-3xl">Jolly Book Club</h1>
        <button className="bg-[#ed6a5a] p-2 rounded-md text-white ">
          Login
        </button>
      </header>

      <AddBook />
    </section>
  );
};

export default BookSection;
