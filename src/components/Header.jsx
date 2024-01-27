import React from "react";

const Header = function ({title, subs}) {
  return (
    <header className="header">
      <div className="icons first"><i className="fa-solid fa-bars"></i></div>
      <h2 className="title">{title}</h2>
      <div className="subscribe last">
        <div className="btn">
          <button className="subscribe-button">{subs}</button>
        </div>
        <div className="icons"><i className="fa-solid fa-magnifying-glass"></i></div>
      </div>
    </header>
  );
}

export default Header;