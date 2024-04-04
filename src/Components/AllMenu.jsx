import { useState } from "react";
function AllMenu({ currentMenu, handleMenuId }) {
  return (
    <>
      <div
        id="all_menu"
        className="menu_all"
        style={{
          width: "100%",
          backgroundColor: "transparent",
        }}
      >
        <div
          className="menu__"
          style={{
            display: "flex",
            margin: "3em 0 0 0",
            justifyContent: "center",
            gridGap: "1rem",
            flexWrap: "wrap",
          }}
        >
          <div
            onClick={() => handleMenuId("lanch")}
            style={{
              position: "relative",
              display: "block",
              overflow: "hidden",
              cursor: "pointer",
            }}
          >
            <a href="#lanch">
              <img
                src={
                  "https://images.pexels.com/photos/1510690/pexels-photo-1510690.jpeg"
                }
                alt=""
                style={{
                  width: "270px",
                  height: "270px",
                  objectFit: "cover",
                  transform: "scale(1)",
                  transformOrigin: "center top",
                }}
              />
            </a>
            <p
              style={{
                position: "absolute",
                top: "90%",
                left: "0",
                color: "Window",
                fontSize: "27px",
                textTransform: "uppercase",
                margin: "-10px 20px",
                fontFamily: "inherit",
              }}
            >
              lanch{" "}
            </p>
          </div>

          {/* 2 */}
          <div
            onClick={() => handleMenuId("sandwichs")}
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
                "https://images.pexels.com/photos/1639565/pexels-photo-1639565.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              }
              alt=""
              style={{
                width: "270px",
                height: "270px",
                objectFit: "cover",
                transform: "scale(1)",
                transformOrigin: "center right",
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
            onClick={() => handleMenuId("salads")}
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
                "https://images.pexels.com/photos/1211887/pexels-photo-1211887.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              }
              alt=""
              style={{
                width: "270px",
                height: "270px",
                objectFit: "cover",
                transform: "scale(1)",
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
            onClick={() => handleMenuId("drinks")}
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
                "https://images.pexels.com/photos/2336670/pexels-photo-2336670.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              }
              alt=""
              style={{
                width: "270px",
                height: "270px",
                objectFit: "cover",
                transform: "scale(1)",
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
          {/* 5 */}
          <div
            onClick={() => handleMenuId("asia")}
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
                "https://images.pexels.com/photos/1148086/pexels-photo-1148086.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              }
              alt=""
              style={{
                width: "270px",
                height: "270px",
                objectFit: "cover",
                transform: "scale(1)",
                transformOrigin: "center",
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
              asia{" "}
            </p>
          </div>
          {/* 6 */}
          <div
            onClick={() => handleMenuId("desserts")}
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
                "https://images.pexels.com/photos/1854652/pexels-photo-1854652.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              }
              alt=""
              style={{
                width: "270px",
                height: "270px",
                objectFit: "cover",
                transform: "scale(1.2)",
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
              dessert{" "}
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
export default AllMenu;
