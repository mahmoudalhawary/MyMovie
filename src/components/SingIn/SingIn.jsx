import React, { useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

export default function SignIn() {
  const [loading, setLoading] = useState(true);
  const [errormsg, setErrormsg] = useState("");
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  // لو فيه token محفوظ → المستخدم متسجل بالفعل
  let token = localStorage.getItem("token");
  if (token) {
    return <Navigate to="/home" />;
  }

  function getFormData({ target }) {
    setFormData({
      ...formData,
      [target.name]: target.value,
    });
  }

  function sendData(e) {
    e.preventDefault();
    setLoading(false);

    // قراءة بيانات المستخدم اللي متسجلة من SignUp
    const savedUser = JSON.parse(localStorage.getItem("userData"));

    if (savedUser) {
      if (formData.email === savedUser.email && formData.password === savedUser.password) {
        // نجاح تسجيل الدخول → نحط token
        localStorage.setItem(
          "token",
          "moask12ejafnio210r42newifoisakas.dasdasfmkwer123ewd"
        );
        navigate("/home");
      } else if (formData.email === savedUser.email && formData.password !== savedUser.password) {
        setErrormsg("Incorrect password!");
      } else if (formData.email !== savedUser.email && formData.password === savedUser.password) {
        setErrormsg("Email doesn't exist!");
      } else {
        setErrormsg("Email and password are incorrect!");
      }
    } else {
      setErrormsg("No user registered yet. Please Sign Up first.");
    }

    setLoading(true);
  }

  return (
    <>
      <h1 style={{ color: "#FFF" }}>Login Form</h1>
      {errormsg && <div className="alert alert-danger">{errormsg}</div>}

      <form className="MyForm" onSubmit={sendData} style={{ color: "#FFF" }}>
        <label htmlFor="email">Email</label>
        <input
          type="text"
          className="form-control my-3"
          name="email"
          onChange={getFormData}
          id="email"
          value={formData.email}
        />

        <label htmlFor="password">Password</label>
        <input
          type="password"
          className="form-control my-3"
          name="password"
          onChange={getFormData}
          id="password"
          value={formData.password}
        />

        <button className="btn btn-primary float-end">
          {loading ? "Sign In" : "Loading..."}
        </button>
      </form>
    </>
  );
}
