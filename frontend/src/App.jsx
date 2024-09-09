import "./App.css";
import { Route, Routes } from "react-router-dom";
import BookSection from "./components/BookSection";
import CreateUser from "./components/CreateUser";
import UserLogin from "./components/UserLogin";

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<BookSection />} />
        <Route path="/uSignup" element={<CreateUser />} />
        <Route path="/uLogin" element={<UserLogin />} />
      </Routes>
    </>
  );
};

export default App;
