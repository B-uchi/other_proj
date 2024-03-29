import React, { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import MainHome from "./MainHome";
import Contact from "./Contact";
import About from "./About";
import Listings from "./Listings";
import Navbar from "../../components/estate/Navbar";
import PropertyDetails from "./PropertyDetails";

const EstateRoutes = () => {
  const location = window.location;
  const [showNavbar, setShowNavbar] = useState(false);

  useEffect(() => {
    setShowNavbar(location.pathname !== "/");
  }, [location]);
  return (
    <div className="h-[100vh]">
      {showNavbar && <Navbar showNavbar={showNavbar} />}
      <Routes>
        <Route element={<MainHome />} path="/" />
        <Route path="/contact" element={<Contact />} />
        <Route path="/about" element={<About />} />
        <Route path="/listings" element={<Listings />} />
        <Route path="/properties/:id" element={<PropertyDetails />} />
      </Routes>
    </div>
  );
};

export default EstateRoutes;
