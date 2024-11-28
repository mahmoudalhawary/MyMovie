import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

export default function SignUp() {
  const [count, setCount] = useState(0);
  const [loading, setLoading] = useState(true);
  const [errormsg, setErrormsg] = useState("");
   let navigate = useNavigate();
  const [formData, setFormData] = useState({
    first_name: "",
    last_name: "",
    email: "",
    password: "",
  });

  function getFormData({ target }) {
    setFormData({
      ...formData,
      [target.name]: target.value,
    });
  }

  function sendData(e) {
    setLoading(false);
    e.preventDefault();
    // let result = axiosPost("signup", formData);
    // if (result.message === "success") {
    //   navigate("/home");
    // } else {
    //   navigate("/signin");
    // }
    if (formData.email === "mo123@gmail.com" && formData.password === "123123") {
      localStorage.setItem('token', 'moask12ejafnio210r42newifoisakas.dasdasfmkwer123ewd');
      navigate("/home");
    } else if (formData.email === "mo123@gmail.com" && formData.password !== "123123") {
      setErrormsg("Incorrect password!");
    } else if (formData.password === "") {
      setErrormsg("Please enter your password!");
    } else if (formData.email !== "mo123@gmail.com" && formData.password === "123123") {
      setErrormsg("Email doesn't exist!");
    } else if (formData.email === "") {
      setErrormsg("Please enter your email!");
    } else {
      setErrormsg("Email and password are incorrect!");
    }
  }

  return (
    <>
      <h1 style={{ color: "#FFF" }}>Login Form</h1>
      {errormsg && <div className="alert alert-danger">{errormsg}</div>}
      <form className="MyForm" onSubmit={sendData}    style={{ color: "#FFF" }}>
        <label htmlFor="email">Email</label>
        <input
          type="text"
          className="form-control my-3"
          name="email"
          onChange={getFormData}
          id="email"
        />

        <label htmlFor="password">Password</label>
        <input
          type="password"
          className="form-control my-3"
          name="password"
          onChange={getFormData}
          id="password"
        />

        <button className="btn btn-primary float-end">
          {loading ? "SignIn" : "Loading..."}
        </button>
      </form>
    </>
  );
}
