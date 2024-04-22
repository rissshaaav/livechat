import React from "react";

const MessageInput = ({
  topLeftlabel,
  topRightLabel,
  bottomLeftLabel,
  bottomRightLabel,
  value,
  onChange,
}) => {
  return (
    <label className="flex-1 form-control mt-2">
      <div className="label p-0">
        <span className="label-text">{topLeftlabel}</span>
        <span className="label-text-alt">{topRightLabel}</span>
      </div>
      <textarea
        className="textarea textarea-bordered h-auto"
        placeholder="Message..."
      ></textarea>
      <div className="label p-1">
        <span className="label-text-alt">{bottomLeftLabel}</span>
        <span className="label-text-alt">{bottomRightLabel}</span>
      </div>
    </label>
  );
};

export default MessageInput;
