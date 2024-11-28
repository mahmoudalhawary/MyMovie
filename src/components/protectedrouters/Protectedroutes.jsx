import React from "react";
import { Navigate } from "react-router-dom";

export default function Protectedroutes(props) {
  let token = localStorage.getItem("token");
  console.log(token);
  if (token == "moask12ejafnio210r42newifoisakas.dasdasfmkwer123ewd") {
    return props.children;
  } else {
    return <Navigate to="/signin" />;
  }
}
