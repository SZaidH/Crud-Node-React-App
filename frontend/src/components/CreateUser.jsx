import { useState } from "react";
import axios from "axios";

const CreateUser = () => {
  const [uData, setUdata] = useState({ uName: "", uPass: "" });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUdata((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("http://localhost:3000/signup", uData);
      console.log("Response: ", response.data);
    } catch (error) {
      console.error("Error submitting form: ", error);
    }
  };

  return (
    <main className="flex items-center justify-center h-screen">
      <div className="create-user border-2 w-10/12 2xl:w-5/12 p-3 rounded-lg bg-white">
        <h1 className="font-bold font-primary text-3xl mb-5 text-primary">
          User Registration
        </h1>
        <form
          onSubmit={handleSubmit}
          className="flex flex-col justify-center text-xl font-secondary font-semibold text-secondary"
        >
          <label htmlFor="fname">Username</label>
          <input
            type="text"
            id="uName"
            value={uData.uName}
            name="uName"
            className="border-2 mb-5"
            onChange={handleChange}
          />
          <label htmlFor="uPass">Password</label>
          <input
            type="password"
            id="uPass"
            value={uData.uPass}
            name="uPass"
            className="border-2 mb-5"
            onChange={handleChange}
          />
          <button
            type="submit"
            className="w-2/4 md:w-2/12 mx-auto md:mx-0 rounded-lg text-white bg-[#ed6a5a] hover:bg-black p-2"
          >
            Sign Up
          </button>
        </form>
      </div>
    </main>
  );
};

export default CreateUser;
