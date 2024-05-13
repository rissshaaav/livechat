import React from "react";
import Sidebar from "./parts/Sidebar";
import { Outlet } from "react-router-dom";

import { useEffect } from "react";
import { verifyUserApiCall } from "./apis/verifyUser.apiCall";
import { storeUsername, storeEmail } from "./context/userData.slice";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";

function App() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  useEffect(() => {
    const loginLogic = async () => {
      const res = await verifyUserApiCall({
        jwtFromClient: localStorage.getItem("jwtFromClient"),
      });
      
      if (res) {
        dispatch(storeUsername(res.username));
        dispatch(storeEmail(res.email));
        // navigate("/");
      } else{
        navigate("/login");
      }
    };
    loginLogic();
  }, [dispatch, navigate]);
  return (
    <div className="min-h-screen min-w-screen bg-slate-300 flex justify-center items-center h-screen">
      <div className="w-[95%] h-[90%] bg-white rounded-lg flex gap-3 p-3">
        <div className="flex-[0.3]">
          <Sidebar />
        </div>
        <div className="flex-[0.7] bg-green-50 rounded-lg border-green-500 border-b-4 p-3">
          <Outlet />
        </div>
      </div>
    </div>
  );
}

export default App;
