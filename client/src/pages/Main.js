import React from "react";
import Sidebar from "../parts/Sidebar";
import Welcome from "../parts/Welcome";

const Main = () => {
  return (
    <div className="w-[95%] h-[90%] bg-white rounded-lg flex gap-3 p-3">
      <Sidebar />
      <Welcome />
    </div>
  );
};

export default Main;
