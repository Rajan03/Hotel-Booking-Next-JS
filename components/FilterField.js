import React, { useState } from "react";

const FilterField = ({ label, optArr, selectedOption, changeOption }) => {
  return (
    <div>
      <span>{label}</span>
      <select
        value={selectedOption}
        onChange={(e) => changeOption(e.target.value)}
      >
        <option value={""} defaultChecked>
          None
        </option>
        {optArr.map((item) => (
          <option value={item} key={item}>
            {item}
          </option>
        ))}
      </select>
    </div>
  );
};

export default FilterField;
