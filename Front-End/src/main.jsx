import React from 'react'
import App from './App.jsx'
import * as ReactDOM from "react-dom/client";
import Profile from './pages/Profile/profile.jsx';
import Login from './pages/Login/login.jsx';
import Register from './pages/Register/register.jsx';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './pages/home/home.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home/>,
  },
  {
    path: "/login",
    element: <Login/>,
  },
  {
    path: "/register",
    element: <Register/>,
  },
  {
    path: "/profile/:username",
    element: <Profile/>,
  }
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
