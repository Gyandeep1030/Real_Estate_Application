import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/layout/Navbar";
import Home from "./pages/Home";
// import Login from "./pages/Login";
// import Signup from "./pages/Signup";
// import PropertyListing from "./pages/PropertyListing";

const App = () => {
  return (
    <Router>
      {/* Navbar always visible */}
      <Navbar />

      {/* Page Routes */}
      <Routes>
        <Route path="/" element={<Home />} />
        {/* <Route path="/buy" element={<PropertyListing />} />
        <Route path="/rent" element={<PropertyListing />} />
        <Route path="/sell" element={<PropertyListing />} />
        <Route path="/about" element={<div>About Us Page</div>} />
        <Route path="/contact" element={<div>Contact Page</div>} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} /> */}
      </Routes>
    </Router>
  );
};

export default App;
