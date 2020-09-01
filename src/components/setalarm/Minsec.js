import React, { useState } from "react";
import ReactDOM from "react-dom";
import "./setalarm.css";
function Minsec() {
  var ssec = 0;
  const [ssecVal, ssecFetch] = useState(ssec);
  const minfun = (e) => {
    ssec = e.target.value;
  };
  return <input type="text" className="box" id="ssec" onMouseLeave={minfun} />;
}

export default Minsec;
