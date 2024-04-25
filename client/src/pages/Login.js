import React from "react";
import { useState } from "react";
import Input from "../components/Input";
import { Link } from "react-router-dom";
import { loginApiCall } from "../apis/login.apiCall";
import { useDispatch } from "react-redux";
import { storeUsername, storeEmail } from "../context/userData.slice";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleSubmit = async() => {
    const res = await loginApiCall({ username, password });
    console.log("loginRes", res.username, res.email);

    dispatch(storeUsername(res.username));
    dispatch(storeEmail(res.email));

    navigate("/");

    setPassword("");
    setUsername("");
  };
  return (
    <div className="min-h-screen min-w-screen bg-slate-300 flex justify-center items-center h-screen">
      <div className="bg-white rounded-md shadow-md p-8 ">
        <h1 className="text-3xl font-bold text-center text-green-500 mb-8">
          Login
        </h1>
        <Input
          placeholder="Username"
          value={username}
          onChange={handleUsernameChange}
        ></Input>
        <Input
          type="password"
          placeholder="Password"
          value={password}
          onChange={handlePasswordChange}
        ></Input>
        <button
          className="bg-green-500 w-full text-white rounded-lg px-4 py-2"
          onClick={handleSubmit}
        >
          Login
        </button>
        <span className="text-center block mt-4">
          New here?{" "}
          <Link to="/signup" className="text-green-500">
            Signup
          </Link>
        </span>
      </div>
    </div>
  );
};

export default Login;
