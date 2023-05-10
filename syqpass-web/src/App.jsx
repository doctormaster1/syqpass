import React, { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";

import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
// import Devices from "./pages/Device";
import Profile from "./pages/Profile";
// import Settings from "./pages/Settings";

import Passwords from "./pages/Password";

const App = () => {
  const [loading, setLoading] = useState(true);

  const preloader = document.getElementById("preloader");

  if (preloader) {
    setTimeout(() => {
      preloader.style.display = "none";
      setLoading(false);
    }, 2000);
  }

  useEffect(() => {
    setTimeout(() => setLoading(false), 1000);
  }, []);

  return (
    !loading && (
      <>
        <Routes>
          <Route exact path="/" element={<Login />} />
          <Route path="/dashboard" element={<Dashboard />} />
          {/* <Route path="/device" element={<Devices />} /> */}
          <Route path="/profile" element={<Profile />} />
          {/* <Route path="/setting" element={<Settings />} /> */}
          <Route path="/passwords" element={<Passwords />} />
        </Routes>
      </>
    )
  );
};

export default App;
