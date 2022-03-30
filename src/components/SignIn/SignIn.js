import axios from "axios";
import React, { useState } from "react";
import { Link, Navigate } from "react-router-dom";
import Cookies from "universal-cookie";
import setProjectsToStorage from "../../setToStorage/setProjectsToStorage";
import setBusinessesToStorage from "../../setToStorage/setBusinessesToStorage";

function SignIn() {
  const [redirect, setRedirect] = useState(false);
  const [data, setData] = useState({
    email: "",
    password: "",
  });

  let cookies = new Cookies();

  const handleChange = (event) => {
    const newData = { ...data };
    newData[event.target.id] = event.target.value;
    setData(newData);
  };

  const submit = async (event) => {
    event.preventDefault();
    // const formData = new FormData(event.target)

    // formData.set('email', formData.get(`${event.target.email.value}`));
    // formData.set('password', formData.get(`${event.target.password.value}`));

    console.log(data);

    await axios
      .post(
        "https://fundedlocal-server.herokuapp.com/api/v1.0/users/login",
        data
      )
      .then((res) => {
        if (res.status === 200) {
          cookies.set("signedInUser", res.data.user);
          cookies.set("jwt", res.data.jwt);
          setRedirect(true);
        } else {
          console.log(res.data);
        }
      });
  };

  if (redirect) {
    setProjectsToStorage();
    setBusinessesToStorage();
    return <Navigate to="/home" />;
  }

  return (
    <div className="Signup h-full flex-1 w-full flex flex-col justify-center items-center bg-[#EFF5F4]">
      <form
        className="bg-white p-4 w-[400px] rounded-md shadow-md flex flex-col"
        onSubmit={submit}
      >
        <header>
          <h3>SIGN IN</h3>
          <br />
        </header>

        <span>
          <input
            className="form-input"
            type="email"
            placeholder="Email"
            id="email"
            value={data.email}
            onChange={(event) => handleChange(event)}
            required
          />
        </span>

        <span>
          <input
            className="form-input"
            type="password"
            placeholder="Password"
            id="password"
            value={data.password}
            onChange={(event) => handleChange(event)}
            required
          />
        </span>

        <span>
          <br />
          <button className="form-btn" type="submit">
            Sign In
          </button>
        </span>
      </form>
      <div className="p-3 font-medium">
        Create New Account
        <Link
          className="text-green-500 hover:text-green-400 transition-all no-underline p-2 font-medium"
          to="/signup"
        >
          SIGN UP
        </Link>
      </div>
    </div>
  );
}

export default SignIn;
