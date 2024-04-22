import React from "react";
import { Link } from "react-router-dom";
import Input from "../components/Input";

const Signup = () => {
  const [username, setUsername] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [email, setEmail] = React.useState("");

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };
  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  };
  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };
  const handleSubmit = () => {
    console.log("Username: ", username);
    console.log("Password: ", password);
    console.log("Email: ", email);
    setPassword("");
    setUsername("");
    setEmail("");
  };
  return (
    <div className="min-h-screen min-w-screen bg-slate-300 flex justify-center items-center h-screen">
      <div className="bg-white rounded-md shadow-md p-8 ">
        <h1 className="text-3xl font-bold text-center text-green-500 mb-8">
          Signup
        </h1>
        <Input
          type="email"
          placeholder="Email"
          value={email}
          onChange={handleEmailChange}
        ></Input>
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
          Signup
        </button>
        <span className="text-center block mt-4">
          Already have an account?{" "}
          <Link to="/login" className="text-green-500">
            Login instead
          </Link>
        </span>
      </div>
    </div>
  );
};

export default Signup;
