import { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import MainLayout from "./mainLayout"; 
import Career from "./pages/career"; 
import Blog from "./pages/blog"; 
import Faq from "./pages/Faq"; 

const App = () => {
  const [playState, setPlayState] = useState(false);

  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            <MainLayout setPlayState={setPlayState} playState={playState} />
          }
        />
        <Route path="/career" element={<Career />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/faq" element={<Faq />} /> 
        <Route
          path="*"
          element={
            <div>
              Page not found.{" "}
              <button onClick={() => (window.location.href = "/")}>
                Go back to Main Website
              </button>
            </div>
          }
        />
      </Routes>
    </Router>
  );
};

export default App;
