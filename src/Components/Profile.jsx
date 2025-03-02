import { decryptingData } from "../encryption";
export default function Profile() {
  let data = decryptingData("profile.info");
  return (
    <>
      <div
        style={{
          width: "500px",
          height: "300px",
          borderRadius: "30px",
          background: "linear-gradient(135deg,#6021FF, #E3C3FC)",
          display: "flex",
          flexDirection: "row",
          padding: "30px",
          gap: "40px",
        }}
      >
        <img
          style={{
            width: "190px",
            height: "250px",
            borderTopLeftRadius: "40px",
            borderTopRightRadius: "40px",
            borderBottomLeftRadius: "40px",
            borderBottomRightRadius: "40px",
            border: "3px solid white",
          }}
          src="https://mrwallpaper.com/images/thumbnail/cool-profile-pictures-red-anime-fw4wgkj905tjeujb.webp"
          alt=""
        />
        <div style={{ paddingTop: "30px" }}>
          <div>
            <h3>{data.name}</h3>
            <h3>{data.email}</h3>
            <h1 style={{ marginTop: "2px", fontSize: "40px" }}>
              {data.username}
            </h1>
          </div>
          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              flexDirection: "row",
              gap: "10px",
            }}
          >
            {JSON.parse(localStorage.getItem("SelectedMovie")).map((items) => (
              <div
                style={{
                  width: "120px",
                  height: "40px",
                  borderRadius: "50px",
                  backgroundColor: "white",
                  fontSize: "22px",
                  color: "black",
                  display:"flex",
                  justifyContent:"center",
                  alignItems:"center"
                }}
              >
                {items.genre}
              </div>
            ))}
          </div>
          
        </div>
      </div>
    </>
  );
}
