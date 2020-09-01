import React from "react";
import ReactDOM from "react-dom";
import "./time.css";
function Hour(props) {
  return (
    <div>
      <h1 className="hrs">{props.hrs}</h1>
    </div>
  );
}

export default Hour;
