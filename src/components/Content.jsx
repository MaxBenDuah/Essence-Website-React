import React from "react";
import castData from "../castData.js";
import Section from "./Section";

const Content = function ({contentImage}) {
  //console.log(contentImage)
  return (
    <div className="content">
      <div className="intro">
        <h3>Home &#183; Entertainment</h3>
        <h2>"Juice" turns 30: See the film's cast then and now</h2>
        <hr />
        <p>from omar epps to samuel l. jackson, here's how the stars of this classic <br /> coming-of-age film progressed through hollywood since it's release in 1992.</p>
      </div>
      <Section photo={contentImage} dataOfCast={castData} />
      {/* <div class="info">
        <div className="first">
          <img src={contentImage} alt="Juice" />
        </div>
        <div className="second">
          <div className="classification">
            <div className="left">
              <div className="left-yellow"></div>
              <h4>Top cast <i class="fa-solid fa-chevron-right"></i></h4>
            </div>
            <h5 className="right"><i class="fa-solid fa-pen"></i> Edit</h5>
          </div>
          <div className="cast">
            <ul className="cast">
              {castData.map(cast => <Cast key={cast.name} castdata={cast}/>)}
            </ul>
          </div>
        </div>
      </div> */}
    </div>
  );
}

export default Content;