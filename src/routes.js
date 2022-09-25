import React, { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import HomePage from "./pages/HomePage/HomePage";
import RegistrationPage from "./pages/RegistrationPage/RegistrationPage";
import Login from "./components/Login/Login";

export default function RoutesApp({ currentUser }) {
  const [showLogin, setShowLogin] = useState(false);
  console.log(showLogin);

  return (
    <BrowserRouter>
      {showLogin && <Login setShowLogin={setShowLogin} />}
      <Header setShowLogin={setShowLogin} currentUser={currentUser} />
      <Routes>
        <Route exact path="/" element={<HomePage />} />
        <Route path="/registration" element={<RegistrationPage />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}
