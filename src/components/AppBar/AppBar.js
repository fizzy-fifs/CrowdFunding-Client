import React, { useEffect, useRef, useState } from "react";
import Logo from "./logo_transparent.png";

const AppBar = () => {
  const [height, setHeight] = useState(0);
  const ref = useRef(null);

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
              <NavLink title="Home" />
              <NavLink title="Explore" />
              <NavLink title="News" />
              <NavLink title="Events" />
            </div>
          </div>
          <div className="h-full">
            <NavLink title="Sign In" />
          </div>
        </div>
      </div>
      <div style={{ height }}></div>
    </>
  );
};

const NavLink = ({ title }) => {
  return (
    <div className="w-20 cursor-pointer border-b-0 border-[#fff0] transition-all hover:border-b-2 hover:border-green-500 h-full flex flex-col justify-center">
      <div className="font-medium text-gray-700">{title}</div>
    </div>
  );
};

export default AppBar;
