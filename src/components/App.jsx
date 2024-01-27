import React from "react";
import Header from "./Header";
import Menu from "./Menu";
import Content from "./Content";
import Footer from "./Footer";
import menuData from "../menuData";

const App = function () {
  return (
    <>
      <Header title="essence" subs="subscribe" />
      <Menu data={menuData} />
      <Content contentImage="https://www.essence.com/wp-content/uploads/2022/01/29e21bf2c64a1968cb157c29ed51554c.jpg?width=1200" />
      <Footer />
    </>
  );
}

export default App;