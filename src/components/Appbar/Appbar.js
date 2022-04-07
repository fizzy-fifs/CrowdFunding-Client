import React, { useEffect, useRef, useState } from "react";
import { Navigate } from "react-router-dom";
import Cookies from "universal-cookie";
import ListAProject from "../ListAProject/ListAProject";
import Search from "../Search/Search";
import SearchIcon from "@mui/icons-material/Search";
import Logo from "./logo_transparent.png";

const AppBar = () => {
  const [height, setHeight] = useState(0);
  const ref = useRef(null);

  let cookie = new Cookies();
  let user = cookie.get("signedInUser") || "";

  let allProjects = JSON.parse(localStorage.getItem("projects")) || "";

  const viewProjectsMap = () => {
    return (window.location.href = "/projects-map");
  };

  const goHome = () => {
    window.location.href = "/home";
  };

  const renderSearchBar = (string) => {
    console.log(string);
    return <Search details={allProjects} />;
  };

  const viewRewards = () => {
    if (user === "") {
      return (window.location.href = "/signin");
    }
    window.location.href = "/my-rewards";
  };

  const signIn = () => {
    window.location.href = "/signin";
  };

  const logOut = () => {
    cookie.remove("signedInUser");
    cookie.remove("jwt");
    localStorage.clear();
    window.location.href = "/";
  };

  useEffect(() => {
    setHeight(ref.current.clientHeight);
  }, []);
  return (
    <>
      <div ref={ref} className="h-20 bg-white fixed z-50 w-full shadow-md">
        <div className="max-w-[1080px] p-2 flex flex-row justify-between items-center h-full m-auto">
          <div className="flex flex-row items-center h-full">
            <div className="h-full cursor-pointer" onClick={goHome}>
              <img src={Logo} alt="logo" className="h-full" />
            </div>

            <div className="flex flex-row h-full ">
              <ListAProject />
              <NavLink
                onClick={viewProjectsMap}
                title="View All Projects On A Map"
              />
              <NavLink onClick={viewRewards} title="Rewards" />
            </div>
          </div>

          <div
            className="search"
            style={{ position: "sticky", cursor: "pointer" }}
          >
            <Search details={allProjects} />
          </div>
          
          <div className="h-full">
            {user === "" && <NavLink onClick={signIn} title="Sign In" />}
            {user !== "" && <NavLink onClick={logOut} title="Sign Out" />}
          </div>
        </div>
      </div>
      <div style={{ height }}></div>
    </>
  );
};

const NavLink = ({ title, onClick }) => {
  return (
    <div
      onClick={onClick}
      className="w-fit px-3 cursor-pointer border-b-0 border-[#fff0] transition-all hover:border-b-2 hover:border-green-500 h-full flex flex-col justify-center"
    >
      <div className="font-medium text-gray-700">{title}</div>
    </div>
  );
};

export default AppBar;
