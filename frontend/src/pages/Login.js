import React, { useState } from "react";
import { useHistory } from "react-router-dom";

const Login = (props) => {
  const [credential, setcredential] = useState({ email: "", password: "" });
  let history = useHistory();
  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await fetch("http://localhost:2000/api/auth/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email:credential.email, password:credential.password }),
    });
    const json = await response.json();
    if(json.success){
    
        //save the auth token and redirect
        localStorage.setItem('token', json.authToken);
        localStorage.setItem("user", JSON.stringify(response.data));
        

        // console.log("authToken", localStorage.getItem('token'))
        history.push('/');
        props.showAlert("Logged In successfully", "success")

    }
    else{
      props.showAlert("Invalid Details", "danger")
    }
  };
  const onChange =(e)=>{
    setcredential({...credential, [e.target.name]: e.target.value})
  }
  return (
    <div className="container">
      <h1 className="my-3 text-center">Login</h1>
      <form onSubmit={handleSubmit}>
        <div className="mb-3 mx-3">
          <label htmlFor="email" className="form-label mx-3">
            Email address
          </label>
          <input
            type="email"
            className="form-control mx-3"
            id="email"
            name="email"
            value={credential.email}
            onChange={onChange}
            aria-describedby="emailHelp"
          />
          <div id="emailHelp" className="form-text mx-3">
            We'll never share your email with anyone else.
          </div>
        </div>
        <div className="mb-3 mx-3">
          <label htmlFor="password" className="form-label mx-3 ">
            Password
          </label>
          <input
            type="password"
            className="form-control mx-3"
            id="password"
            value={credential.password}
            onChange={onChange}
            name="password"
          />
        </div>
        <button type="submit" className="btn btn-primary mx-auto d-block ">
          Submit
        </button>
      </form>
    </div>
  );
};

export default Login;