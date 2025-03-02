import Profile from "../Components/Profile";
import Note from "../Components/Note";
import News from "../Components/News";
import Weather from "../Components/Weather";
import Timer from "../Components/Timer";
import { useNavigate } from "react-router-dom";

export default function Profile_dashboard() {
  let navigate= useNavigate();
  return (
    <>
      <div
        style={{
          width: "100vw",
          height: "100vh",
          padding: "50px",
          display: "flex",
          flexDirection: "row",
        }}
      >
        <div
          style={{
            width: "70%",
            height: "100%",
            display: "flex",
            gap: "20px",
            flexDirection: "column",
          }}
          className="right"
        >
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              height: "70%",
              gap: "60px",
            }}
            className="upperLeft"
          >
            <Profile />
            <Note />
          </div>
          <div
            style={{
              width: "510px",
              height: "240px",
              position: "absolute",
              top: "380px",
              left: "50px",
            }}
          >
            <Weather />
          </div>

          <div style={{ width: "100%", height: "31%" }} className="lowerleft">
            <Timer />
          </div>
        </div>
        <div style={{ width: "30%", height: "100%" }} className="left">
          <News />
        </div>
        <div
        onClick={()=>{
          navigate("/movies")
          

        }}
          style={{
            width: "200px",
            height: "50px",
            backgroundColor: "#009900",
            color: "white",
            textAlign:"center",
            position:"absolute",
            bottom:"20px",
            right:"10px",
            borderRadius:"30px",
            paddingTop:"10px",

          }}
        >
          <h1 style={{fontSize:"20px"}}>BROWSE</h1>
        </div>
      </div>
    </>
  );
}
