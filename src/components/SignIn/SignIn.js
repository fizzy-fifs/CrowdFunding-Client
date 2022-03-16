import axios from "axios";
import React, { useState } from "react";
import { Link, Navigate } from "react-router-dom";
import Cookies from "universal-cookie";
import setProjectsToStorage from "../../setToStorage/setProjectsToStorage";
import setBusinessesToStorage from "../../setToStorage/setBusinessesToStorage";

function SignIn() {
  const [redirect, setRedirect] = useState(false)
  const [data, setData] = useState({
    email: "",
    password: ""
  })

  let cookies = new Cookies();

  const handleChange = (event) => {
    const newData = {...data}
    newData[event.target.id] = event.target.value
    setData(newData)
  }

  const submit = async (event) => {
    event.preventDefault()
    // const formData = new FormData(event.target)

    // formData.set('email', formData.get(`${event.target.email.value}`));
    // formData.set('password', formData.get(`${event.target.password.value}`));

    console.log(data)
    
    await axios
      .post('https://fundedlocal-server.herokuapp.com/api/v1.0/users/login', data,  )
      .then((res) =>  {
        if (res.status === 200) {
          cookies.set('signedInUser', res.data.user)
          cookies.set('jwt', res.data.jwt)
          setRedirect(true);
        } else {
          console.log(res.data)
        }
      })
  }

  if (redirect) {
    setProjectsToStorage();
    setBusinessesToStorage();
    return <Navigate to='/home' />
  }

  return (
    <div className="Signin">
      <form onSubmit={submit}>
        <header>
          <h1>Welcome</h1>
          <h2>Sign In</h2>
        </header>

        <span>
          <input
            type="email;"
            placeholder="Email"
            id="email"
            value={data.email}
            onChange={(event) => handleChange(event)}
            required
          />
        </span>

        <span>
          <br></br>
          <input
            type="password"
            placeholder="Password"
            id="password"
            value={data.password}
            onChange={(event) => handleChange(event)}
            required
          />
        </span>

        <span>
          <button type="submit">Sign In</button>
        </span>

        <Link to='/signup'>Sign Up</Link>
      </form>
    </div>
  );
}

export default SignIn;
