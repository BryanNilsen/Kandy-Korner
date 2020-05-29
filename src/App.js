import React, { useState } from "react";
import "./App.css";
import Navbar from "./components/navbar/Navbar";
import AppViews from "./components/AppViews";

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  return (
    <>
      <Navbar
        isAuthenticated={isAuthenticated}
        setIsAuthenticated={setIsAuthenticated}
      />
      <AppViews
        isAuthenticated={isAuthenticated}
        setIsAuthenticated={setIsAuthenticated}
      />
    </>
  );
}

export default App;
