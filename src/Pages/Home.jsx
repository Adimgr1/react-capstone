import { useState } from "react";
import "./Home.css";
export default function Home() {
  let [value, setValue] = useState({
    name: "",
    username: "",
    email: "",
    mobile: "",
  });
  let [error, setError] = useState({
    name: false,
    username: false,
    email: false,
    mobile: false,
  });
  const changeHandler = (e) => {
    setValue({ ...value, [e.target.name]: e.target.value });
    console.log(value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    let new_error = {
      name: value.name.length === 0,
      username: value.username.length === 0,
      email: value.email.length === 0,
      mobile: value.mobile.length === 0,
    };
    setError(new_error);

    console.log(error);
  };
  return (
    <div style={{ display: "flex" }}>
      <div
        className="leftdiv"
        style={{
          height: "100vh",
          width: "50vw",
          backgroundColor: "white",
          overflow: "hidden",
        }}
      >
        <img
          src="https://super-app-al1216.vercel.app/left-banner.png"
          alt=""
          style={{ width: "100%", height: "100%", objectFit: "cover" }}
        />
      </div>
      <div
        className="rightdiv"
        style={{ height: "100vh", width: "50vw", backgroundColor: "#1e1e1e" }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            width: "100%",
            height: "100%",
          }}
        >
          <h1 className="single-day-regular" style={{ marginBottom: "30px" }}>
            Super app
          </h1>
          <div className="signup">
            <form
              onSubmit={handleSubmit}
              style={{ display: "flex", flexDirection: "column" }}
            >
              <input
                type="text"
                className="input_element"
                placeholder="Name"
                name="name"
                onChange={changeHandler}
              />
              {error.name ? (
                <p
                  style={{
                    color: "red",
                    fontSize: "15px",
                    marginBottom: "10px",
                  }}
                >
                  Name can't be empty
                </p>
              ) : (
                <></>
              )}
              <input
                type="text"
                className="input_element"
                placeholder="UserName"
                name="username"
                onChange={changeHandler}
              />
              {error.username ? (
                <p
                  style={{
                    color: "red",
                    fontSize: "15px",
                    marginBottom: "10px",
                  }}
                >
                  UserName can't be empty
                </p>
              ) : (
                <></>
              )}
              <input
                type="text"
                className="input_element"
                placeholder="Email"
                name="email"
                onChange={changeHandler}
              />
              {error.email ? (
                <p
                  style={{
                    color: "red",
                    fontSize: "15px",
                    marginBottom: "10px",
                  }}
                >
                  Email can't be empty
                </p>
              ) : (
                <></>
              )}
              <input
                type="text"
                className="input_element"
                placeholder="Mobile"
                name="mobile"
                onChange={changeHandler}
              />
              {error.mobile ? (
                <p
                  style={{
                    color: "red",
                    fontSize: "15px",
                    marginBottom: "10px",
                  }}
                >
                  Mobile number can't be empty
                </p>
              ) : (
                <></>
              )}
              <div>
                <input type="checkbox" id="check" />
                <label
                  htmlFor="check"
                  style={{
                    fontSize: "14px",
                    marginLeft: "6px",
                    fontWeight: "normal",
                  }}
                >
                  Share my registration data with Superapp
                </label>
              </div>
              <input className="submit" type="Submit" value="SIGN UP" />
            </form>
          </div>
          <p style={{ width: "500px", fontSize: "12px", marginTop: "20px" }}>
            By clicking on Sign up, you agree to Superapp{" "}
            <span style={{ color: "#72db73", cursor: "pointer" }}>
              Terms and Conditions of Use
            </span>
            . To learn more about how Superapp collects, uses, shares, and
            protects your personal data, please head to{" "}
            <span style={{ color: "#72db73", cursor: "pointer" }}>
              Superapp Privacy Policy
            </span>
            .
          </p>
        </div>
      </div>
    </div>
  );
}
