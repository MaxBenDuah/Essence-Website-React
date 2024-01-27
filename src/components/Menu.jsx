import React from "react";
import List from "./List";

const Menu = function ({data}) {
  return (
    <ul className="list-items">
      {data.map(menu => <List key={menu.id} list={menu} />)}
    </ul>
  );
}

export default Menu;