import React from "react";
import { useState } from "react";
import Input from "../components/Input";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleSubmit = () => {
    console.log("Username: ", username);
    console.log("Password: ", password);
    setPassword("");
    setUsername("");
  };
  return (
    <div className="bg-white rounded-md shadow-md p-8">
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
    </div>
  );
};

export default Login;
