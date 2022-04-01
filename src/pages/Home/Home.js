import React, { useEffect } from "react";
import { Navigate } from "react-router-dom";
import Cookies from "universal-cookie";
import ListAProject from "../../components/ListAProject/ListAProject";
import Projects from "../../components/Projects/Projects";
import SignOut from "../../components/SignOut/SignOut";

function Home() {
  let cookies = new Cookies();
  let user = cookies.get("signedInUser") || "";

  const viewProjectsMap = () => {
    window.location.href = "/projects-map";
  };

  if (user === "") {
    return <Navigate to="/signin" />;
  } else {
    return (
      <div>
        <div className="max-w-[1080px] mx-auto">
          <button
            className="bg-green-500 font-semibold text-xl p-2 px-4 text-white rounded-full"
            onClick={viewProjectsMap}
          >
            View All Projects On A Map
          </button>
        </div>
        <ListAProject />
        <SignOut />
        <Projects />
      </div>
    );
  }
}

export default Home;
