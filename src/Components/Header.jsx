import { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faL, faXmark } from "@fortawesome/free-solid-svg-icons";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { faSun, faMoon } from "@fortawesome/free-solid-svg-icons";

function Header({ currentMenu, setCurrentMenu }) {
  const [isBoxVisible, setIsBoxVisible] = useState(null);
  const [isSpan, setIsSpan] = useState(false);
  const [isSpan2, setIsSpan2] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    const boxInfos = document.querySelectorAll(".box_info");
    const BlockEat = document.querySelectorAll("._block_eat");

    if (isDarkMode) {
      document.body.classList.remove("light-mode");
      BlockEat.forEach((block) => {
        block.style.color = "black";
      });
      boxInfos.forEach((box) => {
        box.style.backgroundColor = "";
        box.style.color = "black";
      });
    } else {
      document.body.classList.add("light-mode");
      boxInfos.forEach((box) => {
        box.style.backgroundColor = "#000000";
        box.style.color = "white";
      });
      BlockEat.forEach((block) => {
        block.style.color = "white";
      });
    }
  }, [isDarkMode]);

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
  };

  const toggleSpan = () => {
    setIsSpan(!isSpan);
  };
  const toggleSpan2 = () => {
    setIsSpan2(!isSpan2);
  };

  const toggleVisibility = () => {
    setIsBoxVisible(!isBoxVisible);
  };

  return (
    <div className="header">
      <div
        style={{
          margin: "0",
          position: "relative",
          width: "100%",
          minHeight: "100vh",
          display: "grid",
          placeItems: "center",
          backgroundPosition: "center",

          backgroundSize: "cover",
          backgroundAttachment: "fixed",
          backgroundImage:
            "url(https://images.pexels.com/photos/6077636/pexels-photo-6077636.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1)",
        }}
      >
        {" "}
        <div
          style={{
            display: "flex",
            width: "100%",
            justifyContent: "space-between",
          }}
        >
          <div>
            <span
              style={{ position: "relative", left: "100%", top: "8%" }}
              onClick={() => {
                setIsBoxVisible(true);
              }}
            >
              <FontAwesomeIcon
                style={{
                  fontSize: "25px",
                  color: "white",
                }}
                icon={faBars}
              />
              ;{" "}
            </span>
          </div>
          <div
            className="adress_"
            style={{
              color: "wheat",
              width: "35%",
              textAlign: "end",
              display: "flex",
              flexDirection: "column",
              margin: " 0 30px 0 0",
            }}
          >
            <span
              style={{
                cursor: "pointer",
                margin: "20px 20px 50px 0",
                display: "flex",
                gap: "20px",
                justifyContent: "end",
              }}
            >
              <FontAwesomeIcon
                onClick={toggleTheme}
                icon={isDarkMode ? faSun : faMoon}
              />
            </span>
            adress7980 NE 31st Ct, apt.1230, Aventura, FL 33160
            <span>+1 208 202 8305</span>
          </div>
        </div>
        <div
          className={`box_info ${
            isBoxVisible === null ? "" : isBoxVisible ? "open" : "remove"
          }`}
          style={{
            zIndex: "1000",
            position: "absolute",
            left: "0",
            height: "100vh",
            textAlign: "center",
            padding: "3em 3em",
          }}
        >
          <span
            onClick={() => {
              setIsBoxVisible(false);
            }}
            style={{
              color: "white",
              fontSize: "1.5em",
              position: "absolute",
              left: "90%",
              top: "1%",
            }}
          >
            <FontAwesomeIcon style={{ cursor: "pointer" }} icon={faXmark} />
          </span>
          <div
            style={{
              height: "100%",
              width: "100%",
              maxWidth: "250px",
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-around",
              alignItems: "start",
              gap: "200px",
            }}
          >
            <div
              className="btn_v1"
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "20px",
              }}
            >
              <a
                onClick={() => {
                  setIsBoxVisible(false);
                }}
                sty
                className="btn btn-outline-secondary"
                href="#"
              >
                home
              </a>

              <a
                onClick={toggleSpan}
                className="btn btn-outline-secondary"
                href="#"
              >
                about
              </a>
              {isSpan && (
                <span
                  className="span_"
                  style={{
                    color: "white",
                    margin: "0",
                    padding: "0",
                  }}
                >
                  section in progress{" "}
                </span>
              )}
              <a className="btn btn-outline-secondary" href="#menu_down">
                menu
              </a>
              <a
                onClick={toggleSpan2}
                className="btn btn-outline-secondary"
                href="#"
              >
                cart
              </a>
              {isSpan2 && (
                <span
                  className="span_1"
                  style={{ color: "white", margin: "0", padding: "0" }}
                >
                  section in progress{" "}
                </span>
              )}
            </div>
            <div
              className="info_head"
              style={{
                position: "relative",
                bottom: "0",
                padding: "0 2em ",
                width: "100%",
              }}
            >
              {" "}
              <p>
                <span>number</span>208-202-8305
              </p>
              <p>
                <span></span>7980 NE 31st Ct,Aventura, FL 33160
              </p>
              <p>
                <span>time work:</span>9:00am to 10:00pm
              </p>
            </div>
          </div>
        </div>
        <div className="head_btn col-sm" style={{}}>
          <a href="#menu_down" className="btn btn-outline-dark">
            delivary
          </a>
          <a href="#menu_down" className="btn btn-dark">
            menu
          </a>
        </div>
        <div
          style={{
            margin: "0",
            fontSize: "20px",
            color: "white",
            textTransform: "uppercase",
            textAlign: "center",
          }}
        >
          <span style={{ color: "wheat", fontSize: "20px" }}>
            {" "}
            Su-Fr 9:00am 10:00pm{" "}
          </span>{" "}
        </div>
      </div>
    </div>
  );
}

export default Header;
