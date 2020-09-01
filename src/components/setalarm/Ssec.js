import React from "react";
import ReactDOM from "react-dom";
import "./setalarm.css";
function Ssec() {
  var secval = 0;
  const secfun = (e) => {
    secval = e.target.value;
  };
  return <input type="text" className="box" id="ssec" onMouseLeave={secfun} />;
}

export default Ssec;
