import { HmacSHA1 } from "crypto-js";
import temp1 from "./temp1.gif";
import windicon from "./windicon.gif";
import { useCallback, useEffect, useState } from "react";

export default function Weather() {
  let [temp, settemp] = useState(false);
  let date = new Date();
  let date1 = date.toLocaleString("en-GB", { timezone: "Asia/Kolkata" });
  let date2 = date1.slice(0, 10);
  let time1 = date1.slice(11, 17);
  let fectchTemprature = async () => {
    let response = await fetch(
      "https://api.open-meteo.com/v1/forecast?latitude=28.6139&longitude=77.2090&current=temperature_2m,wind_speed_10m"
    );
    response = await response.json();
    return response.current;
  };
  useEffect(() => {
    let time = async () => {
      let value = await fectchTemprature();
      settemp(value);
    };
    time();
  }, []);
  return (
    <div
      style={{
        width: "100%",
        height: "100%",
        background: "white",
        borderRadius: "30px",
        color: "black",
      }}
    >
      <div
        className="topbar"
        style={{
          width: "100%",
          height: "20%",
          background: "linear-gradient(to right, #ff4ec8, #e0a8ff)",
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          padding: "10px",
          paddingRight: "20px",
        }}
      >
        <div className="left">{date2}</div>
        <div>{time1}</div>
      </div>
      <div
        style={{
          width: "100%",
          height: "80%",
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
          alignItems: "center",
          position: "relative",
        }}
      >
        {Object.keys(temp).length ? (
          <div style={{ display: "flex", flexDirection: "row" }}>
            <img src={temp1} alt="" srcset="" />
            <h1
              style={{ marginRight: "150px" }}
            >{`${temp.temperature_2m}°C`}</h1>
          </div>
        ) : (
          <h1>...Loading</h1>
        )}
        <div
          style={{
            width: "3px",
            height: "80px",
            backgroundColor: "black",
            position: "absolute",
            left: "45%",
          }}
        ></div>
        <h1>
          {Object.keys(temp).length
            ? <div style={{ display: "flex", flexDirection: "row", marginRight:"15px" }}>
              <img src={windicon} alt="" srcset="" />
              <h1 style={{fontSize:"34px"}}>{`${temp.wind_speed_10m}km/h`}</h1>
            </div>
            : "...Loading"}
        </h1>
      </div>
    </div>
  );
}
