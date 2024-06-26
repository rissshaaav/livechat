import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import reportWebVitals from "./reportWebVitals";
import { Provider } from "react-redux";
import { store } from "./context/store";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Layout from "./Layout";
import Home from "./pages/Home";
import Chats from "./pages/Chats";
// import { verifyUserApiCall } from "./apis/verifyUser.apiCall";

import {
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
  Route,
} from "react-router-dom";

// let isAuthenticated = false;
// const loginLogic = async () => {
//   let isAuthenticated = await verifyUserApiCall({"jwtFromClient": localStorage.getItem("jwtFromClient")});
//   return isAuthenticated;
// };

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/" element={<Layout/>}>
        <Route path="" element={<Home />} />
        <Route path="chat" element={<Chats />} />
      </Route>
      <Route path="login" element={<Login />} />
      <Route path="signup" element={<Signup />} />
    </>
  )
);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
