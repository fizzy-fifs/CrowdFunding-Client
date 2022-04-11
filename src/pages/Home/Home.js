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
      <div className="">
        <div className="exploreCategories bg-[#EFF5F4]">
          <header className="text-center font-bold green">
            Explore Categories
          </header>
        </div>{" "}
        <div className="place-items-center content-center h-screen bg-[#EFF5F4] p-4">
          <Category /> <Projects projects={projects} user={user} />
        </div>
      </div>
    </div>
  );
}

export default Home;
