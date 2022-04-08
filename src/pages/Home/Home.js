import React from "react";
import Cookies from "universal-cookie";
import Category from "../../components/Category/Category";
import Projects from "../../components/Projects/Projects";

function Home() {
  const projects = JSON.parse(localStorage.getItem("projects")) || [];
  const cookie = new Cookies();
  const user = cookie.get("signedInUser") || "";
  return (
    <div>
      <div className="exploreCategories bg-[#EFF5F4]">
        <header className="text-left font-bold green">
          Explore Categories
        </header>
      </div>{" "}
      <Category />
      <Projects projects={projects} user={user} />
    </div>
  );
}

export default Home;
