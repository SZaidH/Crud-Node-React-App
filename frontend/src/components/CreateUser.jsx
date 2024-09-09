import { useState } from "react";
import axios from "axios"; // Axios for REST operations
import { Link, useNavigate } from "react-router-dom";

const CreateUser = () => {
  // States related to the user
  const [uName, setUname] = useState("");
  const [uPass, setUpass] = useState("");
  // State for Error
  const [error, setError] = useState("");
  const navigate = useNavigate();

  // handleSubmit handles form data and sends it to the backend
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const uData = { uName, uPass };
      //POST to the backend
      const response = await axios.post("http://localhost:3000/signup", uData);

      if (response.status === "200") console.log("Response: ", response.data);

      localStorage.setItem("token", response.data.token);

      navigate("/");
    } catch (error) {
      console.error("Error submitting form: ", error);
      setError("The user id couldn't be created. Please try again");
    }
  };

  return (
    <main className="flex items-center justify-center h-screen">
      <div className="create-user border-2 w-10/12 2xl:w-5/12 p-3 rounded-lg bg-white">
        <h1 className="font-bold font-primary text-3xl mb-5 text-primary">
          User Registration
        </h1>
        {error && <p className="text-red-500 mb-5">{error}</p>}
        <form
          onSubmit={handleSubmit}
          className="flex flex-col justify-center text-xl font-secondary font-semibold text-secondary"
        >
          <label htmlFor="fname">Username</label>
          <input
            type="text"
            id="uName"
            value={uName}
            name="uName"
            className="border-2 mb-5"
            onChange={(e) => setUname(e.target.value)}
          />
          <label htmlFor="uPass">Password</label>
          <input
            type="password"
            id="uPass"
            value={uPass}
            name="uPass"
            className="border-2 mb-5"
            onChange={(e) => setUpass(e.target.value)}
          />
          <button
            type="submit"
            className="w-2/4 md:w-2/12 mx-auto md:mx-0 rounded-lg text-white bg-[#ed6a5a] hover:bg-black p-2"
          >
            Sign Up
          </button>
        </form>
        <hr className="my-5" />
        <p className="font-secondary">
          Already a User? Please login{" "}
          <Link to="/uLogin" className="text-[#ed6a5a] font-semibold">
            here
          </Link>
        </p>
      </div>
    </main>
  );
};

export default CreateUser;
