import React from "react";
import { Link } from "react-router-dom";
import Input from "../components/Input";
import { signupApiCall } from "../apis/signup.apiCall";
import { useDispatch } from "react-redux";
import { storeUsername, storeEmail } from "../context/userData.slice";
import { useNavigate } from "react-router-dom";

const Signup = () => {
  const [username, setUsername] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [email, setEmail] = React.useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };
  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  };
  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };
  const handleSubmit = async () => {
    // Send a POST request to the server
    const res = await signupApiCall({ username, email, password });
    // console.log("signupRes", res.username, res.email);

    localStorage.setItem("jwtFromClient", res.token);
    //dispatch the username and email to the store
    dispatch(storeUsername(res.username));
    dispatch(storeEmail(res.email));

    //navigate to the home page
    navigate("/");

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
