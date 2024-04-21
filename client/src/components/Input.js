import React from "react";

const Input = ({
  type,
  placeholder,
  topLeftlabel,
  topRightLabel,
  bottomLeftLabel,
  bottomRightLabel,
  value,
  onChange,
  children,
}) => {
  return (
    <label className="form-control w-full">
      <div className="label">
        {topLeftlabel && <span className="label-text">{topLeftlabel}</span>}
        {topRightLabel && (
          <span className="label-text-alt">{topRightLabel}</span>
        )}
      </div>
      <div className="input input-bordered flex items-center gap-2">
        {children}
        <input
          type={type || "text"}
          placeholder={placeholder || "Type here"}
          className="grow"
          value={value}
          onChange={onChange}
        />
      </div>
      <div className="label">
        {bottomLeftLabel && (
          <span className="label-text-alt">{bottomLeftLabel}</span>
        )}
        {bottomRightLabel && (
          <span className="label-text-alt">{bottomRightLabel}</span>
        )}
      </div>
    </label>
  );
};

export default Input;
