import "./Home.css";
import Category from "../Components/Category-card";
import data from "./catagory.json";
import { useState } from "react";
import Movie_chips from "../Components/Movie_chips";
import "./Movie.css";
import {
  Context_border,
  Context_border_provider,
} from "../Context/Context_border";
import { useNavigate } from "react-router-dom";
export default function Movie() {
  let [selectedCategory, setSelectedCategory] = useState([]);
  let [ok, setok] = useState(false);
  let navigate= useNavigate()

  return (
    <Context_border_provider>
      <>
        <div style={{ display: "flex", flexDirection: "row" }}>
          <div className="left" style={{ width: "50vw" }}>
            <div
              className="heading"
              style={{ marginTop: "100px", marginLeft: "100px" }}
            >
              <h1 style={{ fontSize: "70px" }} className="single-day-regular">
                Super app
              </h1>
              <p
                style={{
                  fontWeight: "900",
                  fontSize: "60px",
                  lineHeight: "62px",
                }}
              >
                Choose your <br /> entertainment <br /> category
              </p>
            </div>
            <div
              style={{
                width: "500px",
                display: "grid",
                gridTemplateColumns: "repeat(3, 1fr)",
                marginTop: "30px",
                gridGap: "10px",
                marginLeft: "100px",
              }}
            >
              {selectedCategory.map((items) => (
                <Movie_chips
                  key={items.key}
                  items={items}
                  selected={selectedCategory}
                  setSelectedCategory={setSelectedCategory}
                />
              ))}
            </div>
            <div
              style={{
                width: "50vw",
                display: "flex",
              }}
            >
              {ok ? (
                <p
                  key={Math.random()}
                  className={ok ? "warning" : null}
                  style={{
                    fontSize: "18px",
                    color: "Red",
                    marginLeft: "110px",
                    marginTop: "20px",
                  }}
                >
                  Please select at least 3 category
                </p>
              ) : (
                <></>
              )}
            </div>
          </div>
          <div
            className="right"
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(3, 1fr)",
              gridGap: "20px",
              marginTop: "50px",
            }}
          >
            {data.map((movies) => (
              <Category
                selected={selectedCategory}
                setSelectedCategory={setSelectedCategory}
                key={movies.key}
                movies={movies}
                ok={ok}
                setok={setok}
              ></Category>
            ))}
          </div>
          <div
            onClick={() => {
              if (selectedCategory.length < 3) {
                setok(false);
                setTimeout(()=>{
                  setok(true)
                },10)
              } else {
                setok(false);
                localStorage.setItem("SelectedMovie", JSON.stringify(selectedCategory))
                navigate('/recommendation')
                
              }
            }}
            style={{
              width: "100px",
              height: "40px",
              backgroundColor: "#148a08",
              position: "absolute",
              bottom: "20px",
              right: "20px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              borderRadius: "30px",
              cursor: "pointer",
            }}
          >
            Proceed
          </div>
        </div>
      </>
    </Context_border_provider>
  );
}
