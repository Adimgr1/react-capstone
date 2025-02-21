import { useContext } from "react";
import { Context_border } from "../Context/Context_border";

export default function Movie_chips(prop) {
  let { setChanged } = useContext(Context_border);
  return (
    <div style={{ paddingTop: "10px", position: "relative" }}>
      <div
        style={{
          width: "200px",
          height: "60px",
          backgroundColor: prop.items.bcgc,
          borderRadius: "40px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <h1>{prop.items.genre}</h1>
        <div
          onClick={() => {
            prop.setSelectedCategory(
              prop.selected.filter((item) => item.genre != prop.items.genre)
            );
            setChanged(false)
          }}
          style={{
            width: "30px",
            height: "30px",
            backgroundColor: "red",
            position: "absolute",
            top: "0px",
            left: "0px",
            border: "2px solid white",
            borderRadius: "50%",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            cursor: "pointer",
          }}
        >
          X
        </div>
      </div>
    </div>
  );
}
