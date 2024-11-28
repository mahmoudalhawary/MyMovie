import React, { useState } from "react";
import { axiosPost } from "../../Api/Api";
import { useNavigate } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import { Button } from "bootstrap";
export default function SignUp() {
  const [conut, setCount] = useState(0);
  const [loading, setloading] = useState(true);

  let navigate = useNavigate();
  const [formData, SetformData] = useState({
    first_name: "",
    last_name: "",
    email: "",
    password: "",
  });

  function getformData({ target }) {
    SetformData({
      ...formData,
      [target.name]: target.value,
    });
  }

  function sendData(e) {
    setloading(false);
    e.preventDefault();
    let result = axiosPost("signup", formData);
    if (result.message == "success") {
      navigate("/signin");
    } else {
      navigate("/signin");
    }
  }
  return (
    <>
      <h1 style={{ color: "#FFF" }}>Registration Form</h1>
      {/* <div className="alert alert-danger">requarid</div> */}
       <form className="MyForm" onSubmit={sendData} style={{ color: "#FFF" }}>
        <label htmlFor="first_name">First Name</label>
        <input
          type="text"
          className="form-control my-3"
          onChange={getformData}
          name="first_name"
          id="first_name"
        />

        <label htmlFor="last_name">Last Name</label>
        <input
          type="text"
          className="form-control my-3"
          name="last_name"
          onChange={getformData}
          id="last_name"
        />

        <label htmlFor="email"> Email</label>
        <input
          type="text"
          className="form-control my-3"
          name="email"
          onChange={getformData}
          id="email"
        />

        <label htmlFor="password">First Name</label>
        <input
          type="text"
          className="form-control my-3"
          name="password"
          onChange={getformData}
          id="password"
        />

        <button className="btn btn-primary float-end">
          {loading ? "SingUp" : "loading..."}
        </button>
      </form>
    </>
  );
}
