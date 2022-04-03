import React, { useEffect, useRef, useState } from "react";
import Cookies from "universal-cookie";
import ListAProject from "../ListAProject/ListAProject";
import Logo from "./logo_transparent.png";

const AppBar = () => {
  const [height, setHeight] = useState(0);
  const ref = useRef(null);

  const viewProjectsMap = () => {
    window.location.href = "/projects-map";
  };

  const viewRewards = () => {
    window.location.href = "/my-rewards"
  }

  let cookie = new Cookies();

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
            <div className="h-full cursor-pointer">
              <img src={Logo} alt="logo" className="h-full" />
            </div>

            <div className="flex flex-row h-full ">
              <ListAProject />
              <NavLink
                onClick={viewProjectsMap}
                title="View All Projects On A Map"
              />
              <NavLink
                onClick={viewRewards}
                title="Rewards"
              />
            </div>
          </div>
          <div className="h-full">
            <NavLink onClick={logOut} title="Sign Out" />
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
