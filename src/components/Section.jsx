import React from "react";
import Cast from "./Cast";

const Section = function ({photo, dataOfCast}) {
  return (
    <div className="info">
        <div className="first">
          <img src={photo} alt="Juice" />
        </div>
        <div className="second">
          <div className="classification">
            <div className="left">
              <div className="left-yellow"></div>
              <h4>Top cast <i className="fa-solid fa-chevron-right"></i></h4>
            </div>
            <h5 className="right"><i className="fa-solid fa-pen"></i> Edit</h5>
          </div>
          <div className="cast">
            <ul className="cast">
              {dataOfCast.map(cast => <Cast key={cast.name} castdata={cast}/>)}
            </ul>
          </div>
        </div>
      </div>
  );
}

export default Section;