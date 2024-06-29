import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import Landing from "./pages/Landing.jsx";
import Newsletter from "./pages/Newsletter.jsx";
import Dotslash from "./pages/Dotslash.jsx";
import CSCup from "./pages/Cscup.jsx";
import Achievements from "./pages/Achievements.jsx";
import Preloader from "./components/preloader.jsx";
import "./App.css";

function App() {
  const [initialLoading, setInitialLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setInitialLoading(false);
    }, 3000); // 1.5 seconds minimum preloader

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (!initialLoading) {
      window.addEventListener('load', () => setInitialLoading(false));
    }
  }, [initialLoading]);

  if (initialLoading) {
    return <Preloader />;
  }

  return (
    <div className="App min-h-screen overflow-auto bg-gray-100">
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/newsletter" element={<Newsletter />} />
        <Route path="/dotslash" element={<Dotslash />} />
        <Route path="/cscup" element={<CSCup />} />
        <Route path="/achievements" element={<Achievements />} />
      </Routes>
    </div>
  );
}

const AppWrapper = () => (
  <Router>
    <App />
  </Router>
);

export default AppWrapper;
