import * as React from "react";

import "./ProgressBar.css";

function ProgressBar ({ width, percent }) {
  // if(percent > 100) {
  //   percent = 50
  // }
  let progress = percent * width;

  return (
    <div className="progress-div" style={{ width: width }}>
      <div style={{ width: `${progress}px` }} className="progress"></div>
    </div>
  );
};

export default ProgressBar
