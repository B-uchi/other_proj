import "../style.css";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  useLocation,
} from "react-router-dom";
import Homepage from "./pages/metals/Homepage";
import InvHomepage from "./pages/investment/InvHomepage";
import EstateRoutes from "./pages/estate/EstateRoutes";

function App() {
  return (
    <Router>
      <div className="h-[100vh]">
        <Routes>
          <Route element={<EstateRoutes />} path="*" />
          <Route path="/metals" element={<Homepage />} />
          <Route path="/investments" element={<InvHomepage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
