import React from "react";
import { Navigate } from "react-router-dom";
import Cookies from "universal-cookie";
import AppBar from "../../components/Appbar/Appbar";
import ListAProject from "../../components/ListAProject/ListAProject";
import Projects from "../../components/Projects/Projects";
import SignOut from "../../components/SignOut/SignOut";

function Home() {
  let cookies = new Cookies();
  let user = cookies.get("signedInUser") || "";

  if (user === "") {
    return <Navigate to="/signin" />;
  } else {
    return (
      <div>
        <AppBar />
        <Projects />
      </div>
    );
  }
}

export default Home;
