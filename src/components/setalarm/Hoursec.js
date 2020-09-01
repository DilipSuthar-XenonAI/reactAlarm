import React, { useState } from "react";
import ReactDOM from "react-dom";
import "./setalarm.css";
import Data from "../../Data";
function Hoursec(props) {
  var [updatedhr, changinghr] = useState("");
  const sethour = (e) => {
    updatedhr = e.target.value;
    console.log(updatedhr);
  };
  return (
    <span>
      <input type="text" className="box" onChange={sethour} />
      <Data sethrs={updatedhr} />
    </span>
  );
}
export default Hoursec;
