import React, { useState } from "react";
import ReactDOM from "react-dom";
import Components from "./components";
import "./app.css";
import { Min, Sec, Hour } from "./components/time";
import { Hoursec, Minsec, Ssec, Submit } from "./components/setalarm";
function Main() {
  var time = new Date();
  const [ctime, setTime] = useState(time);

  const updateTime = () => {
    time = new Date();
    setTime(time);
  };
  setInterval(updateTime, 1000);
  var hour = time.getHours();

  var min = time.getMinutes();
  var sec = time.getSeconds();

  // function for getting value of time and setting alarm
  const submit = (e) => {
    e.preventDefault();
  };

  if (hour < 10) {
    hour = "0" + hour;
  } else {
  }
  if (min < 10) {
    min = "0" + min;
  } else {
  }
  if (sec < 10) {
    sec = "0" + sec;
  } else {
  }
  function hr(sethrs) {
    console.log(sethrs);
  }
  return (
    <div className="app">
      <div className="clock">
        <Hour hrs={hour} />
        <div className="flexmin">
          <Min min={min} />
          <Sec sec={sec} />
        </div>
      </div>
      <div className="console">
        <div className="setalarm">
          <h3>Set Alarm</h3>
          <div className="setcomp">
            <form onSubmit={submit}>
              <Hoursec />
              <Minsec />
              <Ssec />
              <br />
              <Submit />
            </form>
          </div>
        </div>
        <div className="showalarm">
          <h3>Alarms</h3>
        </div>
      </div>
    </div>
  );
}

export default Main;
