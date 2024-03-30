import { useState } from "react";
function AllMenu({ currentMenu }) {
  return (
    <>
      <div
        className="menu_all"
        style={{
          width: "100%",
          height: "100vh",
          backgroundColor: "transparent",
        }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            margin: "5em 0 0 0 ",
          }}
        >
          <div
            className=""
            style={{
              position: "relative",
              display: "block",
              overflow: "hidden",
              cursor: "pointer",
            }}
          >
            <img
              src={
                "https://media.istockphoto.com/id/1435215487/photo/fried-eggs-on-a-bright-background-with-tomatoes-onions-and-bread.jpg?s=1024x1024&w=is&k=20&c=ITO_nB-2pgpW6f7_EOB8ew0X6TCgxKuog3sOikCfpcE="
              }
              alt=""
              style={{
                width: "270px",
                height: "270px",
                objectFit: "cover",
                transform: "scale(1.8)",
                transformOrigin: "center top",
              }}
            />
            <p
              style={{
                position: "absolute",
                top: "90%",
                left: "0",
                color: "Window",
                fontSize: "27px",
                textTransform: "uppercase",
                margin: "-10px 20px",
                fontFamily: "Noto Sans KR sans-serif ",
              }}
            >
              lanch{" "}
            </p>
          </div>
          {/* 2 */}
          <div
            className=""
            style={{
              position: "relative",
              display: "block",
              overflow: "hidden",
              cursor: "pointer",
            }}
          >
            <img
              src={
                "https://images.pexels.com/photos/8751410/pexels-photo-8751410.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              }
              alt=""
              style={{
                width: "270px",
                height: "270px",
                objectFit: "cover",
                transform: "scale(1.8)",
                transformOrigin: "center top",
              }}
            />
            <p
              style={{
                position: "absolute",
                top: "90%",
                left: "0",
                color: "wheat",
                textTransform: "uppercase",
                margin: "-10px 20px",
              }}
            >
              sandwichs&burgers{" "}
            </p>
          </div>
          {/* 3 */}
          <div
            className=""
            style={{
              position: "relative",
              display: "block",
              overflow: "hidden",
              cursor: "pointer",
            }}
          >
            <img
              src={
                "https://images.pexels.com/photos/8751410/pexels-photo-8751410.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              }
              alt=""
              style={{
                width: "270px",
                height: "270px",
                objectFit: "cover",
                transform: "scale(1.8)",
                transformOrigin: "center top",
              }}
            />
            <p
              style={{
                position: "absolute",
                top: "90%",
                left: "0",
                color: "wheat",
                textTransform: "uppercase",
                margin: "-10px 20px",
              }}
            >
              salads
            </p>
          </div>
          {/* 4 */}
          <div
            className=""
            style={{
              position: "relative",
              display: "block",
              overflow: "hidden",
              cursor: "pointer",
            }}
          >
            <img
              src={
                "https://images.pexels.com/photos/3323682/pexels-photo-3323682.jpeg"
              }
              alt=""
              style={{
                width: "270px",
                height: "270px",
                objectFit: "cover",
                transform: "scale(1.8)",
                transformOrigin: "center top",
              }}
            />
            <p
              style={{
                position: "absolute",
                top: "90%",
                left: "0",
                color: "wheat",
                textTransform: "uppercase",
                margin: "-10px 20px",
              }}
            >
              drinks{" "}
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
export default AllMenu;
