import { HmacSHA1 } from "crypto-js";
import { useEffect, useState } from "react";
import Dataconversion from "./Dataconversion";
export default function News() {
  let [news, setnews] = useState([]);
  let [loading, setloading] = useState(false);
  let fetchData = async () => {
    setloading(false);
    let response = await fetch(
      "https://api.mediastack.com/v1/news?access_key=1105e7cdc8f9a9b09a3afd793e398119&categories=entertainment"
    );
    response = await response.json();
    return response.data;
  };

  useEffect(() => {
    async function information() {
      let value = await fetchData();
      await setnews([...value]);
      setloading(true);
    }
    information();
  }, []);
  return (
    <>
      <div
        style={{
          width: "100%",
          height: "90%",
          borderRadius: "30px",
          backgroundColor: "white",
        }}
      >
        <div
          style={{ width: "100%", height: "50%", position: "relative" }}
          className="upper"
        >
          {loading ? (
            <img
              src={news[6].image==null?"https://wbbme.org/wp-content/themes/eikra/assets/img/noimage-420x273.jpg":news[6].image}
              alt="failed to load"
              style={{ width: "100%", height: "100%" }}
            />
          ) : (
            <h1>...Loading</h1>
          )}
          {loading ? (
            <div
              style={{
                width: "100%",
                height: "35%",
                backgroundColor: "rgba(0,0,0,0.8)",
                position: "absolute",
                bottom: "0px",
                padding: "20px",
              }}
            >
              <h1
                style={{
                  color: "black",

                  fontSize: "16px",
                  color: "white",
                }}
              >
                {news[6].title}
                <div style={{ marginTop: "10px" }}>
                  {Dataconversion(news[6].published_at)}
                </div>
              </h1>
            </div>
          ) : (
            <></>
          )}
        </div>
        <div className="lower">
          {loading ? (
            <p
              style={{
                color: "black",
                paddingLeft: "30px",
                paddingRight: "30px",
                paddingTop: "20px",
                fontSize: "18px",
              }}
            >
              {news[6].description}
            </p>
          ) : (
            <></>
          )}
        </div>
      </div>
    </>
  );
}
