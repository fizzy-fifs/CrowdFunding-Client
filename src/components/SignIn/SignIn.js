import axios from "axios";
import React, { useRef, useState } from "react";
import { Navigate } from "react-router-dom";

function SignIn() {
  const [redirect, setRedirect] = useState(false)
  const [data, setData] = useState({
    email: "",
    password: ""
  })

  const handleChange = (event) => {
    const newData = {...data}
    newData[event.target.id] = event.target.value
    setData(newData)
    console.log(newData);
  }

  const submit = async (event) => {
    event.preventDefault()
    // const formData = new FormData(event.target)

    // formData.set('email', formData.get(`${event.target.email.value}`));
    // formData.set('password', formData.get(`${event.target.password.value}`));

    console.log(data)
    
    await axios
      .post('http://localhost:8080/api/v1.0/users/login', data, {
        // headers: {
        //   'Content-Type': 'multipart/form-data',
        // }
      })
      .then((res) =>  {
        if (res.status === 200) {
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
      </form>
    </div>
  );
}

export default SignIn;
