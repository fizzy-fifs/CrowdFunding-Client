import React, { useState, useEffect } from "react";
import "./ProgressBar.css";

function ProgressBar ({ width, percent }) {
  const [value, setValue] = useState(0)
  
  useEffect(() => {
    setValue(percent * width)
  })
  

  return (
    <div className="progress-div" style={{ width: `${width}px` }}>
      <div style={{ width: `${value}px` }} className="progress"></div>
    </div>
  );
};

export default ProgressBar
