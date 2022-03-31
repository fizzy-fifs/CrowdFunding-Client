import React from "react";
import { Link } from "react-router-dom";

function LandingPage() {
  return (
    <div className="h-[100vh] flex justify-center items-center">
      {/* <div className="logo">
        <img src={logo}></img>
      </div> */}
      <br />
      <div className="signup-in flex flex-col">
        <Link to="/signin" className="signin">
          <button className="form-btn mb-2 w-[250px] bg-blue-600">
            Sign In
          </button>
        </Link>

        <Link to="/signup" className="signup">
          <button className="form-btn w-[250px] bg-blue-600">Sign Up</button>
        </Link>
      </div>
    </div>
  );
}

export default LandingPage;
