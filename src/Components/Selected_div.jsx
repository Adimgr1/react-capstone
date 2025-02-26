import { useContext, useEffect, useRef, useState } from "react";
import { final } from "../Javascript/Functions";
import { Loading_Provider, Loading_context } from "../Context/Loading";
import { useNavigate } from "react-router-dom";
import './Selected_div.css'
export default function Selected_div(prop) {
  let { loading, setLoading, error, setError } = useContext(Loading_context);
  let [movie_data, setMovie_data] = useState([]);
  let navigate= useNavigate()

  useEffect(() => {
    final(prop.genre).then((data) => {
      if (data.length == 0) {
        setError(true);
        navigate("/sorry")
        setLoading(false);
      } else {
        setMovie_data([...data]);
        setError(false);
        setLoading(false);
      }
    });
  }, []);

  return (
    <div
      style={{
        width: "100%",
        height: "360px",
        marginLeft: "170px",
        marginTop: "20px",
      }}
    >
      <h2 style={{marginLeft:"60px"}}>{prop.genre}</h2>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          width: "95%",
          height: "100%",
          marginLeft: "35px",
          gap: "30px",
        }}
      >
        {loading ? (
          <h1>Loading...</h1>
        ) : (
          movie_data?.map((items, index) => (
            <div key={index}>
              <div
              onClick={()=>{
                window.open(`${items.trailer}`,"_blank")
                
              }}
              className="onIt"
                style={{
                  width: "250px",
                  height: "280px",
                  textAlign: "center",
                  marginLeft: "10px",
                  marginTop:"10px",
                  border:"1px solid white",
                  borderRadius:"20px",
                }}
              >
                <h4 style={{ Color: "#D3D3D3" }}>{items.name}</h4>
                
                <img style={{ height: "100%" }} src={items.img} alt="" />
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
}
