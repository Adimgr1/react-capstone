import { CountdownCircleTimer } from "react-countdown-circle-timer";
import up from "./up.png";
import down from "./down.png";
import { BsArrowDownShort, BsArrowUpShort } from "react-icons/bs";
import { useState } from "react";
export default function Timer() {
  let [hour, setHour] = useState(0);
  let [minutes, setMinutes] = useState(0);
  let [seconds, setSeconds] = useState(0);
  let [total, setTotal] = useState(0);
  let [running, setRunning] = useState(false);

  let handleHour = () => {
    setHour(hour + 1);
  };
  let handleMinutes = () => {
    setMinutes(() => {
      if (minutes < 59) {
        return minutes + 1;
      } else {
        setHour(hour + 1);
        return 0;
      }
    });
  };
  let handleSecond = () => {
    if (seconds < 59) {
      setSeconds(seconds + 1);
    } else {
      if (minutes < 59) {
        setMinutes(minutes + 1);
        setSeconds(0);
      } else {
        setHour(hour + 1);
        setMinutes(0);
        setSeconds(0);
      }
    }
  };
  let handleStart = () => {
    setTotal(hour * 3600 + minutes * 60 + seconds);
    setRunning(true);
  };
  let handleStop = () => {
    setHour(0);
    setMinutes(0);
    setSeconds(0);
    setRunning(false);
    setTimeout(()=>{
      setTotal(0)
    }, 10000)
    
    
  };
  let toHourandMinute = (remainingtime) => {
    const hour = Math.floor(remainingtime / 3600);
    const minute = Math.floor((remainingtime % 3600) / 60);
    const second = Math.floor((remainingtime % 3600) % 60);
    return `${hour < 10 ? `0${hour}` : hour}:${
      minute < 10 ? `0${minute}` : minute
    }:${second < 10 ? `0${second}` : second}`;
  };

  return (
    <div
      style={{
        width: "95%",
        height: "100%",
        backgroundColor: "#221c43",
        borderRadius: "30px",
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        padding: "20px 50px 20px 50px",
      }}
    >
      <div
        style={{
          marginTop: "20px",
          width: "200px",
          height: "200px",
          backgroundColor: "black",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          borderRadius: "50%",
        }}
      >
        <CountdownCircleTimer
          key={total}
          isPlaying
          duration={total}
          colors={["#004777", "#F7B801", "#A30000", "#A30000"]}
          colorsTime={[7, 5, 2, 0]}
        >
          {({ remainingTime }) => {
            return <h1>{toHourandMinute(remainingTime)}</h1>;
          }}
        </CountdownCircleTimer>
      </div>
      <div
        className="settimer"
        style={{
          width: "50%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          padding: "0px 0px 0px 0px",
        }}
      >
        <div
          className="upper"
          style={{
            display: "flex",
            flexDirection: "row",
            height: "90%",
            width: "100%",
            gap: "30px",
          }}
        >
          <div
            className="hour"
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              color: "#7C7C7C",
            }}
          >
            <p style={{ fontSize: "25px", fontWeight: "bolder" }}>Hours</p>
            <BsArrowUpShort onClick={handleHour} size={40}></BsArrowUpShort>
            <h3 style={{ fontSize: "30px" }}>
              {hour < 10 ? `0${hour}` : hour}
            </h3>
            <BsArrowDownShort size={40}></BsArrowDownShort>
          </div>
          <div
            className="minutes"
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              color: "#7C7C7C",
            }}
          >
            <p style={{ fontSize: "25px", fontWeight: "bolder" }}>Minutes</p>
            <BsArrowUpShort onClick={handleMinutes} size={40}></BsArrowUpShort>
            <h3 style={{ fontSize: "30px" }}>
              {minutes < 10 ? `0${minutes}` : minutes}
            </h3>
            <BsArrowDownShort size={40}></BsArrowDownShort>
          </div>
          <div
            className="seconds"
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              color: "#7C7C7C",
            }}
          >
            <p style={{ fontSize: "25px", fontWeight: "bolder" }}>Seconds</p>
            <BsArrowUpShort onClick={handleSecond} size={40}></BsArrowUpShort>
            <h3 style={{ fontSize: "30px" }}>
              {seconds < 10 ? `0${seconds}` : seconds}
            </h3>
            <BsArrowDownShort size={40}></BsArrowDownShort>
          </div>
        </div>
        <div className="lower">
          <button
            onClick={running ? handleStop : handleStart}
            style={{
              width: "400px",
              height: "40px",
              position: "absolute",
              bottom: "65px",
              right: "835px",
              borderRadius: "30px",
              fontSize: "21px",
              fontWeight: "bold",
              backgroundColor: "#FF7373",
              border: "2px solid #FF7373",
              color: "white",
            }}
          >
            {running ? "STOP" : "START"}
          </button>
        </div>
      </div>
    </div>
  );
}
