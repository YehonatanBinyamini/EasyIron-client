import React from "react";
import "./home.css";
import { FaStar, FaCircle, FaArrowAltCircleRight } from "react-icons/fa";
//import movie from "../../assets/images/metal-video.mp4";

function Home() {
  return (
    <>
    <h1>easyiron</h1>
    <div className="vertical-line">
  <div className="line"></div>
  <div className="point">
    {/* <img className="icon" src={constructionIcon} alt="Construction Icon" /> */}
    <span>Start</span>
  </div>
  <div className="point">
    {/* <img className="icon" src={icon2} alt="Icon 2" /> */}
    <span>Point 2</span>
  </div>
  <div className="point">
    {/* <img className="icon" src={icon3} alt="Icon 3" /> */}
    <span>Point 3</span>
  </div>
  <div className="point">
    {/* <img className="icon" src={icon4} alt="Icon 4" /> */}
    <span>End</span>
  </div>
</div>
</>
  );
}

export default Home;
