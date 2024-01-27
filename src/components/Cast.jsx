import React from "react";

const Cast = function ({castdata}) {
  return (
    <li className="cast-list">
      <img src={castdata.img} alt="Movie Cast" />
      <h5>{castdata.name}</h5>
      <h6>{castdata.nickName}</h6>
    </li>
  );
}

export default Cast;