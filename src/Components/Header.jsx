import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faL, faXmark } from "@fortawesome/free-solid-svg-icons";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import "bootstrap";

function Header() {
  const [isBoxVisible, setIsBoxVisible] = useState(null);

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
            style={{
              color: "wheat",
              fontSize: "20px",
              width: "35%",
              textAlign: "end",
              display: "flex",
              flexDirection: "column",
              margin: " 0 30px 0 0",
            }}
          >
            adress7980 NE 31st Ct, apt.1230, Aventura, FL 33160
            <span>+1 208 202 8305</span>
          </div>
        </div>
        <div
          className={`box_info ${
            isBoxVisible === null ? "" : isBoxVisible ? "open" : "remove"
          }`}
          style={{
            position: "absolute",
            left: "0",
            height: "100vh",
            width: "25%",
            backgroundColor: "ActiveBorder",
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
            <FontAwesomeIcon icon={faXmark} />
          </span>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-around",
              alignItems: "start",
            }}
          >
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "20px",
              }}
            >
              <a className="btn btn-outline-secondary" href="">
                home
              </a>
              <a className="btn btn-outline-secondary" href="">
                about
              </a>
              <a className="btn btn-outline-secondary" href="">
                menu
              </a>
              <a className="btn btn-outline-secondary" href="">
                cart
              </a>
            </div>
            <div
              style={{ position: "absolute", bottom: "0", padding: "0 2em " }}
            >
              <div></div>
              <p>
                <span>number</span>208-202-8305
              </p>
              <p>
                <span>adress</span>7980 NE 31st Ct, apt.1230, Aventura, FL 33160
              </p>
              <p>
                <span>time work:</span>9:00am to 10:00pm
              </p>
            </div>
          </div>
        </div>
        <div
          className="col-sm"
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "center",
            gap: "150px",
            margin: "300px 0 0 0 ",
          }}
        >
          <a
            href=""
            className="btn btn-outline-danger"
            style={{ padding: "10px 60px" }}
          >
            delivary
          </a>
          <a
            href=""
            style={{ padding: "10px 60px" }}
            className="btn btn-outline-danger"
          >
            delivary
          </a>
        </div>
        <div
          style={{
            margin: "0",
            fontSize: "20px",
            color: "white",
            textTransform: "uppercase",
            width: "30%",
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
