export default function Note() {
  return (
    <>
      <div>
        <textarea
        placeholder="Enter your notes here"
          style={{
            width: "600px",
            height: "100%",
            borderRadius: "30px",
            backgroundColor:"yellow",
            border:"2px solid yellow",
            padding:"30px",
            fontSize:"20px"
          }}
          name="notes"
          id=""
        ></textarea>
      </div>
    </>
  );
}
