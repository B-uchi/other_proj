import React, { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import MainHome from "./MainHome";
import Contact from "./Contact";
import About from "./About";
import Listings from "./Listings";
import Navbar from "../../components/estate/Navbar";
import PropertyDetails from "./PropertyDetails";
import RelatedArticles from "./RelatedArticles";
import HowItWorks from "./HowItWorks";
import { MyProvider } from "../../components/util/ArticleContext";

const EstateRoutes = () => {
  const location = window.location;
  const [showNavbar, setShowNavbar] = useState(false);

  useEffect(() => {
    setShowNavbar(location.pathname !== "/");
  }, [location]);
  return (
    <div className="h-[100vh]">
      {showNavbar && <Navbar showNavbar={showNavbar} />}
      <MyProvider>
        <Routes>
          <Route element={<MainHome />} path="/" />
          <Route path="/*" element={<Navbar />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/about" element={<About />} />
          <Route path="/listings" element={<Listings />} />
          <Route path="/listings/:id" element={<PropertyDetails />} />

          <Route path="/articles/:id" element={<RelatedArticles />} />

          <Route path="/how-it-works" element={<HowItWorks />} />
        </Routes>
      </MyProvider>
    </div>
  );
};

export default EstateRoutes;
