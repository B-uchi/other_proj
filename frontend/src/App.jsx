import "../style.css";
import Listings from "./pages/Listings";
import About from "./pages/About";
import Contact from "./pages/Contact";
import MainHome from "./pages/MainHome";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  useLocation,
} from "react-router-dom";
import Navbar from "./components/Navbar";
import { useState, useEffect } from "react";

function App() {
  const location = window.location;
  const [showNavbar, setShowNavbar] = useState(false);

  useEffect(() => {
    setShowNavbar(location.pathname !== "/");
  }, [location]);

  return (
    <Router>
      <div className="h-[100vh]">
        {showNavbar && <Navbar showNavbar={showNavbar}/>}
        <Routes>
          <Route element={<MainHome />} path="/" />
          <Route path="/contact" element={<Contact />} />
          <Route path="/about" element={<About />} />
          <Route path="/listings" element={<Listings />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
