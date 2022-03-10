import React, { useState } from "react";
import axios from 'axios'
import { Navigate } from 'react-router-dom'
import Cookies from 'universal-cookie';

function SignUp() {
  const [user, setUser] = useState("");
  const [redirect, setRedirect] = useState(false)
  const cookies = new Cookies()

  const submit = async (event) => {
    event.preventDefault();

    const userJson = JSON.stringify(user)

    await axios.post(
      "https://crowdfunding-server.herokuapp.com/api/v1.0/users/newuser", userJson,
      {
        headers: {
          "Content-Type": "application/json",
        },
      })
      .then((res) =>  {
        if (res.data === 'User created successfully') {
          localStorage.setItem('signedInUser', JSON.stringify(res.data))
          setRedirect(true);
          console.log(res.data)
        } else {
          console.log(res.data)
        }
      })
    ;

    

  };
  
  if (redirect) {
    return <Navigate to='/home' />
 }

  return (
    <div className="Signup">
      <form onSubmit={submit}>
        <span>
          <br></br>
          <input
            type="text"
            placeholder="Name"
            onChange={(e) => setUser({ ...user, name: e.target.value })}
            required
          />
        </span>

        <span>
          <br></br>
          <input
            type="text"
            placeholder="Username"
            onChange={(e) => setUser({ ...user, userName: e.target.value })}
            required
          />
        </span>

        <span>
          <br></br>
          <br></br>
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
          <br></br>
          <label htmlFor="dateOfBirth">Date Of Birth</label> <br></br>
          <input
            type="text"
            placeholder="DD/MM/YYYY"
            pattern="^([0-2][0-9]|(3)[0-1])(\/)(((0)[0-9])|((1)[0-2]))(\/)\d{4}$"
            title="DD/MM/YYYY"
            onChange={(e) => setUser({ ...user, dob: e.target.value })}
            required
          />
        </span>

        <span>
          <br></br>
          <button type='submit'>Sign Up</button>
        </span>

      </form>
      </div>
  );
}

export default SignUp;
