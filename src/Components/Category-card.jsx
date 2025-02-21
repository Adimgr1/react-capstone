import { useContext, useEffect, useRef, useState } from "react";
import data from "../Pages/catagory.json";
import Movie_chips from "./Movie_chips";
import { Context_border } from "../Context/Context_border";
export default function Category(prop) {
  let [border, selectedBorder]= useState(false)
  

  return (
    <div
      onClick={() => {
        if(prop.selected.length>=2){
          prop.setok(false)
        }
        const isSelected = prop.selected.some(
          (item) => item.genre === prop.movies.genre
        )
        if (isSelected) {
          prop.setSelectedCategory(prop.selected.filter(
            (item) => item.genre != prop.movies.genre
          ));
          selectedBorder(false)
          
        } else {
          let a = data.filter((movies) => movies.genre === prop.movies.genre);
          prop.setSelectedCategory([...prop.selected, ...a]);
          selectedBorder(true)
        }

      }}
      style={{
        height: "250px",
        width: "250px",
        backgroundColor: prop.movies.bcgc,
        borderRadius: "40px",
        overflow: "hidden",
        cursor: "pointer",
        border: prop.selected.some(
          (item) => item.genre === prop.movies.genre
        )? "10px solid #006400": ""
      }}
    >
      <h1
        style={{
          fontWeight: "900",
          fontSize: "40px",
          WebkitTextStroke: "0.3px black",
          marginLeft: "25px",
          marginTop: "40px",
        }}
      >
        {prop.movies.genre}
      </h1>
      <div
        style={{
          width: "90%",
          height: "50%",
          marginLeft: "15px",
          marginTop: "10px",
        }}
      >
        <img
          style={{ width: "100%", height: "100%", borderRadius: "20px" }}
          src={prop.movies.src}
        />
      </div>
    </div>
  );
}
