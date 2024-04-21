import React from "react";

const Avatar = ({ status, imgUrl, children }) => {
  return (
    // <div className="avatar online placeholder"></div>
    // <div className="avatar offline placeholder"></div>
    <div className={`avatar ${status} placeholder`}>
      <div className="bg-neutral text-neutral-content rounded-full w-12">
        {imgUrl && <img src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" alt="user"/>}
        <span className="text-3xl">{children}</span>
      </div>
    </div>
  );
};

export default Avatar;
