import { Link, useNavigate } from "react-router-dom";

export default function Sorry() {
     let navigate= useNavigate()
  return (
    <div
      style={{ width: "100vw", height: "100vh", backgroundColor: "#000000" }}
    >
      <h1
        style={{
          fontSize: "100px",
          position: "absolute",
          bottom: "60px",
          left: "20px",
        }}
      >
        404 Error
      </h1>
      <p
        style={{
          fontSize: "30px",
          position: "absolute",
          bottom: "40px",
          left: "20px",
        }}
      >
        Don't panic, and try after some time
      </p>
      <img
        src="https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcQRNvVQZtFx4q_wNyEokMF_JEBsZ3XZBnhtwe052SE3I9_MYhdf"
        alt=""
        style={{
          width: "500px",
          position: "absolute",
          right: "100px",
          transform: "rotate(180deg)",
        }}
      />
      <button
        style={{
          width: "200px",
          height: "50px",
          fontSize: "30px",
          fontFamily: "monospace",
          fontWeight:"900",
          position:"absolute",
          bottom:"60px",
          right:"300px"
        }}
      >
          <Link to={"/movies"}>RETRY</Link>
        
      </button>
    </div>
  );
}
