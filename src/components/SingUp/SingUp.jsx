import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

export default function SignUp() {
  const [loading, setLoading] = useState(false);
  const [errormsg, setErrormsg] = useState("");
  const navigate = useNavigate();

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
    e.preventDefault();
    setLoading(true);

    try {
      // نخزن البيانات في localStorage
      localStorage.setItem("userData", JSON.stringify(formData));

      // بعد الحفظ نحول المستخدم على صفحة تسجيل الدخول
      navigate("/signin");
    } catch (error) {
      console.error(error);
      setErrormsg("Something went wrong while saving data!");
    } finally {
      setLoading(false);
    }
  }

  return (
    <>
      <h1 style={{ color: "#FFF" }}>Registration Form</h1>
      {errormsg && <div className="alert alert-danger">{errormsg}</div>}

      <form className="MyForm" onSubmit={sendData} style={{ color: "#FFF" }}>
        <label htmlFor="first_name">First Name</label>
        <input
          type="text"
          className="form-control my-3"
          onChange={getFormData}
          name="first_name"
          id="first_name"
          required
        />

        <label htmlFor="last_name">Last Name</label>
        <input
          type="text"
          className="form-control my-3"
          name="last_name"
          onChange={getFormData}
          id="last_name"
          required
        />

        <label htmlFor="email">Email</label>
        <input
          type="email"
          className="form-control my-3"
          name="email"
          onChange={getFormData}
          id="email"
          required
        />

        <label htmlFor="password">Password</label>
        <input
          type="password"
          className="form-control my-3"
          name="password"
          onChange={getFormData}
          id="password"
          required
        />

        <button type="submit" className="btn btn-primary float-end">
          {loading ? "Loading..." : "Sign Up"}
        </button>
      </form>
    </>
  );
}
