import React from "react";
import "./search-box.styles.css";
export const SearchBox = ({ placeholder, handleChange, value }) => {
  return (
    <input
      className="search"
      type="search"
      value={value}
      placeholder={placeholder}
      onChange={handleChange}
    />
  );
};
