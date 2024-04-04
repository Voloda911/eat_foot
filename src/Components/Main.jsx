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
            href="#"
          >
            delivery
          </a>
          <a
            href="#"
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
          </a>

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
      </div>
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
    "asia",
    "desserts",
    "combo",
  ].includes(currentMenu);

  const lunchMenu = [
    {
      name: "fish and vegetables ",
      price: 17.3,
      imageUrl:
        "https://images.pexels.com/photos/262959/pexels-photo-262959.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },
    {
      name: "fried potatoes with kurikia ",
      price: 11.5,
      imageUrl:
        "https://images.pexels.com/photos/1352270/pexels-photo-1352270.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },
    {
      name: "meat and vegetable sandwich ",
      price: 9.8,
      imageUrl:
        "https://images.pexels.com/photos/1988624/pexels-photo-1988624.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },
    {
      name: "poached eggs",
      price: 14.9,
      imageUrl:
        "https://images.pexels.com/photos/2067400/pexels-photo-2067400.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },
  ];

  const sandwichsAndBurgersMenu = [
    {
      name: "meat and vegetable sandwich ",
      price: 9.8,
      imageUrl:
        "https://images.pexels.com/photos/1988624/pexels-photo-1988624.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },
    {
      name: "bacon and pork burger ",
      price: 11.29,
      imageUrl:
        "https://images.pexels.com/photos/580612/pexels-photo-580612.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },

    {
      name: "double burger with pork",
      price: 13.1,
      imageUrl:
        "https://images.pexels.com/photos/2089717/pexels-photo-2089717.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },
    {
      name: "double chicken",
      price: 12.3,
      imageUrl:
        "https://images.pexels.com/photos/2657960/pexels-photo-2657960.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },
  ];

  const saladsMenu = [
    {
      name: "Azaita herb salad ",
      price: 11.2,
      imageUrl:
        "https://images.pexels.com/photos/286283/pexels-photo-286283.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },
    {
      name: "olive salad",
      price: 9.2,
      imageUrl:
        "https://images.pexels.com/photos/396132/pexels-photo-396132.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },
    {
      name: "classic salad",
      price: 8.6,
      imageUrl:
        "https://images.pexels.com/photos/8535717/pexels-photo-8535717.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },
  ];

  const asiamenu = [
    {
      name: "Azaita herb salad ",
      imageUrl:
        "https://images.pexels.com/photos/286283/pexels-photo-286283.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
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
      name: "lemonate",
      price: 4.3,
      imageUrl:
        "https://images.pexels.com/photos/2336670/pexels-photo-2336670.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },
    {
      name: "cherry lemonade ",
      price: 5,
      imageUrl:
        "https://images.pexels.com/photos/6542713/pexels-photo-6542713.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },
    {
      name: "specialty lemonate",
      price: 4.9,
      imageUrl:
        "https://images.pexels.com/photos/6542774/pexels-photo-6542774.jpeg?auto=compress&cs=tinysrgb&w=600",
    },
  ];

  const asiaMenu = [
    {
      name: "california roll.  8 pieces",
      price: 13.4,
      imageUrl:
        "https://images.pexels.com/photos/1148086/pexels-photo-1148086.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },
    {
      name: "Hissho roll.  8 pieces",
      price: 12.1,
      imageUrl:
        "https://images.pexels.com/photos/1028427/pexels-photo-1028427.jpeg?auto=compress&cs=tinysrgb&w=600",
    },
    {
      name: "sushi",
      price: 9.9,
      imageUrl:
        "https://images.pexels.com/photos/2098143/pexels-photo-2098143.jpeg?auto=compress&cs=tinysrgb&w=600",
    },
    {
      name: "roll with caviar",
      price: 12.3,
      imageUrl:
        "https://images.pexels.com/photos/670702/pexels-photo-670702.jpeg?auto=compress&cs=tinysrgb&w=600",
    },
    {
      name: "shrimp sushi  2 pieces",
      price: 4,
      imageUrl:
        "https://images.pexels.com/photos/359992/pexels-photo-359992.jpeg?auto=compress&cs=tinysrgb&w=600",
    },
    {
      name: "roll with shrimp ",
      price: 11,
      imageUrl:
        "https://images.pexels.com/photos/1148087/pexels-photo-1148087.jpeg?auto=compress&cs=tinysrgb&w=600",
    },
  ];

  const dessertsMenu = [
    {
      name: "strawberry cheesecake ",
      price: 5.2,
      imageUrl:
        "https://images.pexels.com/photos/1126359/pexels-photo-1126359.jpeg?auto=compress&cs=tinysrgb&w=600",
    },
    {
      name: "chocolate pecan cheesecake",
      price: 6,
      imageUrl:
        "https://images.pexels.com/photos/2373520/pexels-photo-2373520.jpeg?auto=compress&cs=tinysrgb&w=600",
    },
    {
      name: "chocolate cheesecake",
      price: 6,
      imageUrl:
        "https://images.pexels.com/photos/291528/pexels-photo-291528.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },
  ];
  function calculateTotal(orders) {
    return orders.reduce(
      (total, order) => total + order.price * order.count,
      0
    );
  }

  const handleMenuId = (menuId) => {
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
            id="lanch"
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
              {asiamenu.map((item, index) => (
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
      case "asia":
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
              {asiaMenu.map((item, index) => (
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
      case "desserts":
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
              {dessertsMenu.map((item, index) => (
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
                handleMenuId("lanch");
              }}
              href=""
            >
              lanch
            </a>
            <a
              className="btn btn-outline-secondary"
              onClick={(e) => {
                e.preventDefault();
                handleMenuId("sandwichs");
              }}
              href=""
            >
              sandwichs&burgers
            </a>
            <a
              className="btn btn-outline-secondary"
              onClick={(e) => {
                e.preventDefault();
                handleMenuId("salads");
              }}
              href=""
            >
              salads
            </a>
            <a
              className="btn btn-outline-secondary"
              onClick={(e) => {
                e.preventDefault();
                handleMenuId("drinks");
              }}
              href=""
            >
              drinks
            </a>
            <a
              className="btn btn-outline-secondary"
              onClick={(e) => {
                e.preventDefault();
                handleMenuId("asia");
              }}
              href=""
            >
              asia
            </a>

            <a
              className="btn btn-outline-secondary"
              onClick={(e) => {
                e.preventDefault();
                handleMenuId("desserts");
              }}
              href=""
            >
              desserts{" "}
            </a>
          </div>
          <a
            style={{ margin: "20px 0" }}
            className="btn btn-outline-secondary"
            onClick={(e) => {
              e.preventDefault();
              handleMenuId("menu");
            }}
            href=""
          >
            menu
          </a>

          {renderContent()}

          {shouldShowAllMenu && (
            <AllMenu currentMenu={currentMenu} handleMenuId={handleMenuId} />
          )}
        </div>
      </div>
    </div>
  );
}

export default Main;
