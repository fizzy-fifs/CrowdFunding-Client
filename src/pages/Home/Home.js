import React from "react";
import { Navigate } from "react-router-dom";
import Cookies from "universal-cookie";
import AppBar from "../../components/Appbar/Appbar";
import Category from "../../components/Category/Category";
import ListAProject from "../../components/ListAProject/ListAProject";
import Projects from "../../components/Projects/Projects";
import SignOut from "../../components/SignOut/SignOut";

function Home() {
  return (
    <div>
      <div className="exploreCategories bg-[#EFF5F4]">
        <header className="text-left font-bold green">
          Explore Categories
        </header>
      </div>{" "}
      <Category />
      <Projects />
    </div>
  );
}

export default Home;
