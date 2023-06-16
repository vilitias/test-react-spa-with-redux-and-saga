import React from "react";
import "./App.css";
import { Outlet } from "react-router-dom";
import Main from "./pages/main";
import AboutMe from "./pages/about-me";
import UserDetails from "./pages/user-details";
import Header from "./components/header";

const App = () => {
  return (
    <div className="App">
      <Header />
      {/* <Main />
      <AboutMe />
      <UserDetails /> */}
      <Outlet />
    </div>
  );
};

export default App;
