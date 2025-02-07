import React, { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SignIn from "./Components/SignIn/SignIn";
import SignUp from "./Components/SignUp/SignUp";
import DashBoard from "./Components/DashBoard/DashBoard";
import ForgotPassword from "./Components/SignIn/ForgotPassword"; // Import ForgotPassword

const App = () => {
  const [userData, setUserData] = useState(null);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/*" element={<SignIn setUserData={setUserData} />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/dashboard/*" element={<DashBoard />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
