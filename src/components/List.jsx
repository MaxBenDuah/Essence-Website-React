import React from "react";

const List = function ({list}) {
  return (
    <li className={`${list.id === 9 || list.id === 10 ? `list-item` : ``}`}>
      {list.name}
    </li>
  );
}

export default List;