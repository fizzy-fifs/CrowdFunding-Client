import axios from "axios";
import React, { useState } from "react";
import { Navigate } from "react-router-dom";

function SignIn() {
  const [user, setUser] = useState("");
  const [redirect, setRedirect] = useState(false)

  const submit = async (event) => {
    event.preventDefault()
    const userJson = JSON.stringify(user)
    

    await axios
      .post('https://crowdfunding-server.herokuapp.com/api/v1.0/users/login', userJson, {
        headers: {
          'Content-Type': 'application/json',
        }
      })
      .then((res) => {
        if (res.data.id !== null) {
          localStorage.setItem('signedInUser', JSON.stringify(res.data))
          setRedirect(true);
        } else {
          console.log(res.data)
        }
      })
  }

  if (redirect) {
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
            onChange={(e) => setUser({ ...user, email: e.target.value })}
            required
          />
        </span>

        <span>
          <br></br>
          <input
            type="password"
            placeholder="Password"
            onChange={(e) => setUser({ ...user, password: e.target.value })}
            required
          />
        </span>

        <span>
          <button type="submit">Sign In</button>
        </span>
      </form>
    </div>
  );
}

export default SignIn;
