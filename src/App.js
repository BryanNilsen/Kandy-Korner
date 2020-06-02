import React, { useState, useEffect } from "react";
import "./App.css";
import Navbar from "./components/navbar/Navbar";
import AppViews from "./components/AppViews";
import APIManager from "./modules/APIManager";

function App() {
  const checkisAuthenticated = () => sessionStorage.getItem("userId") !== null;
  const [isAuthenticated, setIsAuthenticated] = useState(
    checkisAuthenticated()
  );

  const [user, setUser] = useState({
    id: 0,
    username: "",
    email: "",
    password: "",
    firstName: "",
    lastName: "",
    address: "",
    phone: "",
    locationId: 0,
    isSupervisor: false,
  });

  const clearUserData = () => {
    setUser({
      id: 0,
      username: "",
      email: "",
      password: "",
      firstName: "",
      lastName: "",
      address: "",
      phone: "",
      locationId: 0,
      isSupervisor: false,
    });
  };

  useEffect(() => {
    checkisAuthenticated();
  }, []);

  useEffect(() => {
    const getUserData = () => {
      const userId = sessionStorage.getItem("userId");
      console.log(userId);
      if (!userId) {
        clearUserData();
        return;
      }
      return APIManager.getResourceById("employees", userId).then((user) => {
        setUser(user);
        return user;
      });
    };
    getUserData();
  }, [isAuthenticated]);

  return (
    <>
      <Navbar
        isAuthenticated={isAuthenticated}
        setIsAuthenticated={setIsAuthenticated}
      />
      <AppViews
        isAuthenticated={isAuthenticated}
        setIsAuthenticated={setIsAuthenticated}
        userIsSupervisor={user.isSupervisor}
      />
    </>
  );
}

export default App;
