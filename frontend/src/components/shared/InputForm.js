import React from "react";

const InputForm = ({ htmlFor, labelText, type, name, value, handleChange }) => {
  return (
    <>
      <div className="col-span-6 mb-2">
        <label htmlFor={htmlFor}  className="block font-medium text-gray-700">
          {labelText}
        </label>
        <input
          type={type}
          className="form-control mt-1 w-full  border-blue-200 bg-white  text-gray-700"
          name={name}
          value={value}
          onChange={handleChange}
        />
      </div>
    </>
  );
};

export default InputForm; 