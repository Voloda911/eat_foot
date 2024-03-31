import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashAlt } from "@fortawesome/free-solid-svg-icons";
import { faMinus } from "@fortawesome/free-solid-svg-icons";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import AllMenu from "./AllMenu";
import "react-datepicker/dist/react-datepicker.css";
import DatePicker from "react-datepicker";

function OrderDetails({
  selectedOrders,
  handleAddOrder,
  handleRemoveOrder,
  handleClearAll,
  calculateTotal,
}) {
  const [choseTime, setChoseTime] = useState(false);
  const [startDate, setStartDate] = useState(new Date());

  const toggleChose = (event) => {
    event.preventDefault();
    setChoseTime(!choseTime);
  };

  return (
    <>
      {" "}
      <div id="order" style={{ width: "25%" }}>
        <div
          style={{
            width: "100%",
            borderRadius: "25px",
            overflow: "auto",
            maxHeight: " 35em",
            height: "auto",
            backgroundColor: "rgb(247, 245, 243)",
            display: "flex",
            flexDirection: "column",
            justifyContent: "start",
            alignItems: "center",
            padding: "0 1em 1em 1em ",
          }}
        >
          <div
            style={{
              margin: "2em 0 0 0 ",
              width: "90%",
              height: "auto",
              borderRadius: "10px",
            }}
          >
            <div
              style={{
                display: "flex",
                padding: "10px 20px",
                width: "100%",
                justifyContent: "space-between",
              }}
            >
              <p
                style={{
                  backgroundColor: "transparent",
                }}
              >
                Your order{" "}
              </p>
              <a onClick={handleClearAll} href="" style={{ color: "black" }}>
                <FontAwesomeIcon icon={faTrashAlt} />
              </a>
            </div>
            <div>
              <p></p>
            </div>
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              margin: "10px 0 0 0 ",
              width: "100%",
              gap: "10px",
            }}
          >
            {selectedOrders.map((order, index) => (
              <div
                key={index}
                style={{
                  // backgroundColor: "rgb(250, 246, 242)",
                  boxShadow: "0px 8px 10px -5px rgba(0, 0, 0, 0.2)",

                  borderRadius: "5px",
                  width: "90%",
                  padding: "5px 10px",
                }}
              >
                <div
                  style={{
                    fontSize: "16px",
                    textAlign: "left",
                    padding: "5px 10px",
                    borderRadius: "5px",
                    flexGrow: 1,
                  }}
                >
                  <span>{order.name}</span>
                </div>
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                  }}
                >
                  <div>
                    <a
                      style={{ cursor: "pointer" }}
                      onClick={() => handleAddOrder(order.name, order.price)}
                    >
                      <FontAwesomeIcon icon={faPlus} />
                    </a>
                    <span style={{ margin: "0 10px", fontSize: "16px" }}>
                      {order.count}
                    </span>
                    <a
                      style={{ cursor: "pointer" }}
                      onClick={() => handleRemoveOrder(order.name)}
                    >
                      <span>
                        {" "}
                        <FontAwesomeIcon icon={faMinus} />
                      </span>
                    </a>
                  </div>
                  <span
                    style={{
                      padding: "5px 10px",
                      borderRadius: "5px",
                      backgroundColor: "rgb(234, 228, 219)",
                    }}
                  >
                    $ {order.price}
                  </span>
                </div>
              </div>
            ))}
          </div>
          <div
            style={{
              padding: "0 20px",
              width: "100%",
              marginTop: "15px",
            }}
          >
            <div>
              {selectedOrders.length > 0 ? (
                <p>Total price: ${calculateTotal(selectedOrders)}</p>
              ) : (
                <p></p>
              )}
            </div>{" "}
          </div>
          <a
            className="btn btn-dark"
            style={{
              width: "90%",
              margin: "20px 0 0 0 ",
              borderRadius: "15px",
            }}
            href=""
          >
            delivery
          </a>
          <button
            variant="primary"
            onClick={toggleChose}
            className="btn btn-outline-dark"
            style={{
              width: "90%",
              margin: "20px 0 0 0 ",
              borderRadius: "15px",
            }}
          >
            Pick up
          </button>

          {choseTime && (
            <div style={{}}>
              <DatePicker
                selected={startDate}
                onChange={(date) => setStartDate(date)}
                showTimeSelect
                timeFormat="HH:mm"
                timeIntervals={30}
                timeCaption="time"
                dateFormat="MMMM d, yyyy h:mm aa"
                inline
              />
              <input style={{ overflow: "hidden" }} type="time" />
            </div>
          )}
        </div>
        <div>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Delectus
          quis nesciunt dicta sapiente veniam sequi inventore? Nihil delectus
          quisquam veritatis.
        </div>
      </div>
      <button className="btn btn-dark"></button>
    </>
  );
}
function Main() {
  const [selectedOrders, setSelectedOrders] = useState([]);
  const [currentMenu, setCurrentMenu] = useState([]);

  const shouldShowAllMenu = ![
    "lanch",
    "drinks",
    "sandwichs",
    "salads",
    "burgers",
    "grits bowl",
    "seafood",
    "combo",
  ].includes(currentMenu);

  const lunchMenu = [
    {
      name: "w",
      price: 232,
      imageUrl: "https://via.placeholder.com/270",
    },
    {
      name: "Блюдо 2",
      price: 250,
      imageUrl:
        "https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },
    {
      name: "Блюдо 2",
      price: 250,
      imageUrl:
        "https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },
    {
      name: "Блюдо 2",
      price: 250,
      imageUrl:
        "https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },
    {
      name: "Блюдо 2",
      price: 250,
      imageUrl:
        "https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },
    {
      name: "Блюдо 3",
      price: 190,
      imageUrl: "https://via.placeholder.com/270",
    },
    {
      name: "Блюдо 4",
      price: 300,
      imageUrl: "https://via.placeholder.com/270",
    },
  ];

  const sandwichsAndBurgersMenu = [
    {
      name: "Сэндвич 1",
      price: 120,
      imageUrl: "https://via.placeholder.com/270",
    },
    {
      name: "Бургер 1",
      price: 200,
      imageUrl: "https://via.placeholder.com/270",
    },
    {
      name: "Сэндвич 2",
      price: 150,
      imageUrl: "",
    },
    {
      name: "Бургер 2",
      price: 250,
      imageUrl: "https://via.placeholder.com/270",
    },
  ];

  const saladsMenu = [
    {
      name: "Салат с курицей",
      price: 180,
      imageUrl: "https://via.placeholder.com/270",
    },
    {
      name: "Греческий салат",
      price: 160,
      imageUrl: "https://via.placeholder.com/270",
    },
    {
      name: "Цезарь",
      price: 200,
      imageUrl: "https://via.placeholder.com/270",
    },
  ];

  const burgerMenu = [
    {
      name: "Салат с курицей",
      price: 180,
      imageUrl: "https://via.placeholder.com/270",
    },
    {
      name: "Греческий салат",
      price: 160,
      imageUrl: "https://via.placeholder.com/270",
    },
    {
      name: "Цезарь",
      price: 200,
      imageUrl: "https://via.placeholder.com/270",
    },
  ];
  const drinksMenu = [
    {
      name: "Лимонад",
      price: 50,
      imageUrl: "https://via.placeholder.com/270",
    },
    {
      name: "Кофе",
      price: 70,
      imageUrl: "https://via.placeholder.com/270",
    },
    {
      name: "Чай",
      price: 40,
      imageUrl: "https://via.placeholder.com/270",
    },
  ];

  const gritsBowlMenu = [
    {
      name: "Каша с фруктами",
      price: 90,
      imageUrl: "https://via.placeholder.com/270",
    },
    {
      name: "Каша с орехами",
      price: 100,
      imageUrl: "https://via.placeholder.com/270",
    },
  ];

  const comboMenu = [
    {
      name: "Комбо завтрак",
      price: 250,
      imageUrl: "https://via.placeholder.com/270",
    },
    {
      name: "Комбо обед",
      price: 300,
      imageUrl: "https://via.placeholder.com/270",
    },
  ];

  const seafoodMenu = [
    {
      name: "Креветки",
      price: 350,
      imageUrl: "https://via.placeholder.com/270",
    },
    {
      name: "Мидии",
      price: 300,
      imageUrl: "https://via.placeholder.com/270",
    },
  ];
  function calculateTotal(orders) {
    return orders.reduce(
      (total, order) => total + order.price * order.count,
      0
    );
  }

  const hendelMenuId = (menuId) => {
    setCurrentMenu(menuId);
  };
  const handleAddOrder = (itemName, itemPrice, event) => {
    if (event) event.preventDefault();

    const exist = selectedOrders.find((order) => order.name === itemName);

    if (exist) {
      setSelectedOrders(
        selectedOrders.map((order) =>
          order.name === itemName ? { ...exist, count: exist.count + 1 } : order
        )
      );
    } else {
      setSelectedOrders([
        ...selectedOrders,
        { name: itemName, count: 1, price: itemPrice },
      ]);
    }
  };

  const handleRemoveOrder = (itemName) => {
    const exist = selectedOrders.find((order) => order.name === itemName);
    if (exist.count === 1) {
      setSelectedOrders(
        selectedOrders.filter((order) => order.name !== itemName)
      );
    } else {
      setSelectedOrders(
        selectedOrders.map((order) =>
          order.name === itemName ? { ...exist, count: exist.count - 1 } : order
        )
      );
    }
  };
  const handleClearAll = (event) => {
    event.preventDefault();
    setSelectedOrders([]);
  };

  const renderContent = () => {
    switch (currentMenu) {
      case "lanch":
        return (
          <div
            className="left_side"
            style={{
              width: "100%",
              backgroundColor: "transparent",
              display: "flex",
              flexDirection: "row",
            }}
          >
            <div
              id="lanch"
              style={{
                width: "70%",
                overflow: "hidden",
                display: "flex",
                flexWrap: "wrap",
                justifyContent: "center",
                gap: "5px",
              }}
            >
              {lunchMenu.map((item, index) => (
                <div
                  key={item.id || index}
                  className=""
                  style={{ width: "270px", margin: "15px 0" }}
                >
                  <img
                    src={item.imageUrl}
                    alt=""
                    style={{
                      width: "270px",
                      height: "270px",
                      objectFit: "cover",
                    }}
                  />
                  <div style={{ width: "250px" }}>{item.name}</div>
                  <div
                    style={{ display: "flex", justifyContent: "space-between" }}
                  >
                    <p style={{ margin: "5px 0 0 0" }}>
                      <span>$</span> {item.price}
                    </p>
                    <a
                      onClick={(event) =>
                        handleAddOrder(item.name, item.price, event)
                      }
                      href=""
                      className="btn btn-dark"
                    >
                      {" "}
                      add to order
                    </a>
                  </div>
                </div>
              ))}
            </div>
            {/* order */}
            <OrderDetails
              selectedOrders={selectedOrders}
              handleAddOrder={handleAddOrder}
              handleRemoveOrder={handleRemoveOrder}
              handleClearAll={handleClearAll}
              calculateTotal={calculateTotal}
            />
          </div>
        );
      case "sandwichs":
        return (
          <div
            className="left_side"
            style={{
              width: "100%",
              backgroundColor: "transparent",
              display: "flex",
              flexDirection: "row",
            }}
          >
            <div
              id="lanch"
              style={{
                width: "70%",
                overflow: "hidden",
                display: "flex",
                flexWrap: "wrap",
                justifyContent: "center",
                gap: "5px",
              }}
            >
              {sandwichsAndBurgersMenu.map((item, index) => (
                <div
                  key={item.id || index}
                  className=""
                  style={{ width: "270px", margin: "15px 0" }}
                >
                  <img
                    src={item.imageUrl}
                    alt=""
                    style={{
                      width: "270px",
                      height: "270px",
                      objectFit: "cover",
                    }}
                  />
                  <div style={{ width: "250px" }}>{item.name}</div>
                  <div
                    style={{ display: "flex", justifyContent: "space-between" }}
                  >
                    <p style={{ margin: "5px 0 0 0" }}>
                      <span>$</span> {item.price}
                    </p>
                    <a
                      onClick={(event) =>
                        handleAddOrder(item.name, item.price, event)
                      }
                      href=""
                      className="btn btn-dark"
                    >
                      {" "}
                      add to order
                    </a>
                  </div>
                </div>
              ))}
            </div>
            {/* order */}
            <OrderDetails
              selectedOrders={selectedOrders}
              handleAddOrder={handleAddOrder}
              handleRemoveOrder={handleRemoveOrder}
              handleClearAll={handleClearAll}
              calculateTotal={calculateTotal}
            />
          </div>
        );
      case "salads":
        return (
          <div
            className="left_side"
            style={{
              width: "100%",
              backgroundColor: "transparent",
              display: "flex",
              flexDirection: "row",
            }}
          >
            <div
              id="lanch"
              style={{
                width: "70%",
                overflow: "hidden",
                display: "flex",
                flexWrap: "wrap",
                justifyContent: "center",
                gap: "5px",
              }}
            >
              {saladsMenu.map((item, index) => (
                <div
                  key={item.id || index}
                  className=""
                  style={{ width: "270px", margin: "15px 0" }}
                >
                  <img
                    src={item.imageUrl}
                    alt=""
                    style={{
                      width: "270px",
                      height: "270px",
                      objectFit: "cover",
                    }}
                  />
                  <div style={{ width: "250px" }}>{item.name}</div>
                  <div
                    style={{ display: "flex", justifyContent: "space-between" }}
                  >
                    <p style={{ margin: "5px 0 0 0" }}>
                      <span>$</span> {item.price}
                    </p>
                    <a
                      onClick={(event) =>
                        handleAddOrder(item.name, item.price, event)
                      }
                      href=""
                      className="btn btn-dark"
                    >
                      {" "}
                      add to order
                    </a>
                  </div>
                </div>
              ))}
            </div>
            {/* order */}
            <OrderDetails
              selectedOrders={selectedOrders}
              handleAddOrder={handleAddOrder}
              handleRemoveOrder={handleRemoveOrder}
              handleClearAll={handleClearAll}
              calculateTotal={calculateTotal}
            />
          </div>
        );
      case "burgers":
        return (
          <div
            className="left_side"
            style={{
              width: "100%",
              backgroundColor: "transparent",
              display: "flex",
              flexDirection: "row",
            }}
          >
            <div
              id="lanch"
              style={{
                width: "70%",
                overflow: "hidden",
                display: "flex",
                flexWrap: "wrap",
                justifyContent: "center",
                gap: "5px",
              }}
            >
              {burgerMenu.map((item, index) => (
                <div
                  key={item.id || index}
                  className=""
                  style={{ width: "270px", margin: "15px 0" }}
                >
                  <img
                    src={item.imageUrl}
                    alt=""
                    style={{
                      width: "270px",
                      height: "270px",
                      objectFit: "cover",
                    }}
                  />
                  <div style={{ width: "250px" }}>{item.name}</div>
                  <div
                    style={{ display: "flex", justifyContent: "space-between" }}
                  >
                    <p style={{ margin: "5px 0 0 0" }}>
                      <span>$</span> {item.price}
                    </p>
                    <a
                      onClick={(event) =>
                        handleAddOrder(item.name, item.price, event)
                      }
                      href=""
                      className="btn btn-dark"
                    >
                      {" "}
                      add to order
                    </a>
                  </div>
                </div>
              ))}
            </div>
            {/* order */}
            <OrderDetails
              selectedOrders={selectedOrders}
              handleAddOrder={handleAddOrder}
              handleRemoveOrder={handleRemoveOrder}
              handleClearAll={handleClearAll}
              calculateTotal={calculateTotal}
            />
          </div>
        );
      case "drinks":
        return (
          <div
            className="left_side"
            style={{
              width: "100%",
              backgroundColor: "transparent",
              display: "flex",
              flexDirection: "row",
            }}
          >
            <div
              id="lanch"
              style={{
                width: "70%",
                overflow: "hidden",
                display: "flex",
                flexWrap: "wrap",
                justifyContent: "center",
                gap: "5px",
              }}
            >
              {drinksMenu.map((item, index) => (
                <div
                  key={item.id || index}
                  className=""
                  style={{ width: "270px", margin: "15px 0" }}
                >
                  <img
                    src={item.imageUrl}
                    alt=""
                    style={{
                      width: "270px",
                      height: "270px",
                      objectFit: "cover",
                    }}
                  />
                  <div style={{ width: "250px" }}>{item.name}</div>
                  <div
                    style={{ display: "flex", justifyContent: "space-between" }}
                  >
                    <p style={{ margin: "5px 0 0 0" }}>
                      <span>$</span> {item.price}
                    </p>
                    <a
                      onClick={(event) =>
                        handleAddOrder(item.name, item.price, event)
                      }
                      href=""
                      className="btn btn-dark"
                    >
                      {" "}
                      add to order
                    </a>
                  </div>
                </div>
              ))}
            </div>
            {/* order */}
            <OrderDetails
              selectedOrders={selectedOrders}
              handleAddOrder={handleAddOrder}
              handleRemoveOrder={handleRemoveOrder}
              handleClearAll={handleClearAll}
              calculateTotal={calculateTotal}
            />
          </div>
        );
      case "grits bowl":
        return (
          <div
            className="left_side"
            style={{
              width: "100%",
              backgroundColor: "transparent",
              display: "flex",
              flexDirection: "row",
            }}
          >
            <div
              id="lanch"
              style={{
                width: "70%",
                overflow: "hidden",
                display: "flex",
                flexWrap: "wrap",
                justifyContent: "center",
                gap: "5px",
              }}
            >
              {gritsBowlMenu.map((item, index) => (
                <div
                  key={item.id || index}
                  className=""
                  style={{ width: "270px", margin: "15px 0" }}
                >
                  <img
                    src={item.imageUrl}
                    alt=""
                    style={{
                      width: "270px",
                      height: "270px",
                      objectFit: "cover",
                    }}
                  />
                  <div style={{ width: "250px" }}>{item.name}</div>
                  <div
                    style={{ display: "flex", justifyContent: "space-between" }}
                  >
                    <p style={{ margin: "5px 0 0 0" }}>
                      <span>$</span> {item.price}
                    </p>
                    <a
                      onClick={(event) =>
                        handleAddOrder(item.name, item.price, event)
                      }
                      href=""
                      className="btn btn-dark"
                    >
                      {" "}
                      add to order
                    </a>
                  </div>
                </div>
              ))}
            </div>
            {/* order */}
            <OrderDetails
              selectedOrders={selectedOrders}
              handleAddOrder={handleAddOrder}
              handleRemoveOrder={handleRemoveOrder}
              handleClearAll={handleClearAll}
              calculateTotal={calculateTotal}
            />
          </div>
        );
      case "combo":
        return (
          <div
            className="left_side"
            style={{
              width: "100%",
              backgroundColor: "transparent",
              display: "flex",
              flexDirection: "row",
            }}
          >
            <div
              id="lanch"
              style={{
                width: "70%",
                overflow: "hidden",
                display: "flex",
                flexWrap: "wrap",
                justifyContent: "center",
                gap: "5px",
              }}
            >
              {comboMenu.map((item, index) => (
                <div
                  key={item.id || index}
                  className=""
                  style={{ width: "270px", margin: "15px 0" }}
                >
                  <img
                    src={item.imageUrl}
                    alt=""
                    style={{
                      width: "270px",
                      height: "270px",
                      objectFit: "cover",
                    }}
                  />
                  <div style={{ width: "250px" }}>{item.name}</div>
                  <div
                    style={{ display: "flex", justifyContent: "space-between" }}
                  >
                    <p style={{ margin: "5px 0 0 0" }}>
                      <span>$</span> {item.price}
                    </p>
                    <a
                      onClick={(event) =>
                        handleAddOrder(item.name, item.price, event)
                      }
                      href=""
                      className="btn btn-dark"
                    >
                      {" "}
                      add to order
                    </a>
                  </div>
                </div>
              ))}
            </div>
            {/* order */}
            <OrderDetails
              selectedOrders={selectedOrders}
              handleAddOrder={handleAddOrder}
              handleRemoveOrder={handleRemoveOrder}
              handleClearAll={handleClearAll}
              calculateTotal={calculateTotal}
            />
          </div>
        );
      case "seafood":
        return (
          <div
            className="left_side"
            style={{
              width: "100%",
              backgroundColor: "transparent",
              display: "flex",
              flexDirection: "row",
            }}
          >
            <div
              id="lanch"
              style={{
                width: "70%",
                overflow: "hidden",
                display: "flex",
                flexWrap: "wrap",
                justifyContent: "center",
                gap: "5px",
              }}
            >
              {seafoodMenu.map((item, index) => (
                <div
                  key={item.id || index}
                  className=""
                  style={{ width: "270px", margin: "15px 0" }}
                >
                  <img
                    src={item.imageUrl}
                    alt=""
                    style={{
                      width: "270px",
                      height: "270px",
                      objectFit: "cover",
                    }}
                  />
                  <div style={{ width: "250px" }}>{item.name}</div>
                  <div
                    style={{ display: "flex", justifyContent: "space-between" }}
                  >
                    <p style={{ margin: "5px 0 0 0" }}>
                      <span>$</span> {item.price}
                    </p>
                    <a
                      onClick={(event) =>
                        handleAddOrder(item.name, item.price, event)
                      }
                      href=""
                      className="btn btn-dark"
                    >
                      {" "}
                      add to order
                    </a>
                  </div>
                </div>
              ))}
            </div>
            {/* order */}
            <OrderDetails
              selectedOrders={selectedOrders}
              handleAddOrder={handleAddOrder}
              handleRemoveOrder={handleRemoveOrder}
              handleClearAll={handleClearAll}
              calculateTotal={calculateTotal}
            />
          </div>
        );
      default:
    }
  };

  return (
    <div>
      <div
        className="contni_sides"
        style={{
          display: "flex",
          margin: "10px 0 0 0 ",
          flexDirection: "column",
        }}
      >
        <div
          className="rigth_side"
          style={{
            width: "100%",

            padding: "1em 2em",
            backgroundColor: "-moz-initial",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <div style={{ display: "flex", gap: "30px", padding: "" }}>
            <a
              className="btn btn-outline-secondary"
              onClick={(e) => {
                e.preventDefault();
                hendelMenuId("lanch");
              }}
              href=""
            >
              lanch
            </a>
            <a
              className="btn btn-outline-secondary"
              onClick={(e) => {
                e.preventDefault();
                hendelMenuId("sandwichs");
              }}
              href=""
            >
              sandwichs&burgers
            </a>
            <a
              className="btn btn-outline-secondary"
              onClick={(e) => {
                e.preventDefault();
                hendelMenuId("salads");
              }}
              href=""
            >
              salads
            </a>
            <a
              className="btn btn-outline-secondary"
              onClick={(e) => {
                e.preventDefault();
                hendelMenuId("burgers");
              }}
              href=""
            >
              burgers
            </a>
            <a
              className="btn btn-outline-secondary"
              onClick={(e) => {
                e.preventDefault();
                hendelMenuId("drinks");
              }}
              href=""
            >
              drinks
            </a>
            <a
              className="btn btn-outline-secondary"
              onClick={(e) => {
                e.preventDefault();
                hendelMenuId("grits bowl");
              }}
              href=""
            >
              grits bowl
            </a>
            <a
              className="btn btn-outline-secondary"
              onClick={(e) => {
                e.preventDefault();
                hendelMenuId("combo");
              }}
              href=""
            >
              combo{" "}
            </a>{" "}
            <a
              className="btn btn-outline-secondary"
              onClick={(e) => {
                e.preventDefault();
                hendelMenuId("seafood");
              }}
              href=""
            >
              seafood{" "}
            </a>
          </div>
          <a
            style={{ margin: "20px 0" }}
            className="btn btn-outline-secondary"
            onClick={(e) => {
              e.preventDefault();
              hendelMenuId("menu");
            }}
            href=""
          >
            menu
          </a>

          {renderContent()}

          {shouldShowAllMenu && <AllMenu />}
        </div>
      </div>
    </div>
  );
}

export default Main;
