import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap";

import "./index.css";

import Header from "./Components/Header";
import Main from "./Components/Main";
import Footer from "./Components/Footer";
function App() {
  return (
    <div className="App">
      <Header />
      <Main />
      <Footer />
    </div>
  );
}

export default App;
