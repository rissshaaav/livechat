import React from "react";
import liveChat from "../assets/images/livechat.png";


const Home = () => {
  return (
    <div className="flex justify-center items-center h-full w-full">
      <img
        src={liveChat}
        alt="Welcome to Chat App"
        className="aspect-square w-4/12"
      />
    </div>
  );
};

export default Home;
