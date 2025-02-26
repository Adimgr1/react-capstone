import { useEffect } from "react";
import "./Home.css";
import { useState } from "react";
import Movie_Card from "../Components/Movie-Card";
import { final } from "../Javascript/Functions";
import Selected_div from "../Components/Selected_div";
import { Loading_Provider, Loading_context } from "../Context/Loading";
export default function Recommendation() {
  let selected = JSON.parse(localStorage.getItem("SelectedMovie"));

  return (
    <Loading_Provider>
      <>
        <div style={{ width: "100vw", height: "100vh", padding: "80px" }}>
          <h1 className="single-day-regular">Super app</h1>
          <h4>Entertainment according to your choice</h4>
          <div
            className="hidden"
            style={{
              marginTop: "30px",
              width: "90vw",
              maxHeight: "70vh",
              overflow: "auto",
              paddingTop: "20px",
            }}
          >
            {selected.map((items) => (
              <Selected_div genre={items.genre} />
            ))}
          </div>
        </div>
      </>
    </Loading_Provider>
  );
}
