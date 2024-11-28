import React from "react";
import Home from "./components/Home/Home";

import People from "./components/People/People";
import Tv from "./components/Tv/Tv";
import Movies from "./components/Movies/Movies";
import { RouterProvider, Routes, createBrowserRouter } from "react-router-dom";
import ItemDetails from "./components/ItemDetails/temDetails";
import Rootlayout from "./layouts/Rootlayout";
import Notfound from "./components/NotFound/Notfound";
import Authlayout from "./layouts/Authlayout";
import SignIn from "./components/SingIn/SingIn";
import SignUp from "./components/SingUp/SingUp";
import Protectedroutes from "./components/protectedrouters/Protectedroutes";
import About from "./components/about/about";
export default function App() {
  let roures = createBrowserRouter([
    {
      path: "/",
      element: <Rootlayout />,
      children: [
        {
          index: true,
          element: (
            <Protectedroutes>
              <Home />{" "}
            </Protectedroutes>
          ),
        },
        {
          path: "home",
          element: (
            <Protectedroutes>
              <Home />{" "}
            </Protectedroutes>
          ),
        },
        {
          path: "tv",
          element: (
            <Protectedroutes>
              <Tv />
            </Protectedroutes>
          ),
        },
        {
          path: "movies",
          element: (
            <Protectedroutes>
              {" "}
              <Movies />
            </Protectedroutes>
          ),
        },
        {
          path: "people",
          element: (
            <Protectedroutes>
              <People />
            </Protectedroutes>
          ),
        },
        {
          path: "details/:id/:media_type",
          element: (
            <Protectedroutes>
              <ItemDetails />
            </Protectedroutes>
          ),
        },
        {
          path: "about",
          element: (
            <Protectedroutes>
              <About />
            </Protectedroutes>
          ),
        },
        { path: "*", element: <Notfound /> },
      ],
    },
    {
      path: "/",
      element: <Authlayout />,
      children: [
        { index: true, element: <SignIn /> },
        { path: "signin", element: <SignIn /> },
        { path: "signup", element: <SignUp /> },
      ],
    },
  ]);
  return (
    <>
      <RouterProvider router={roures} />
    </>
  );
}
