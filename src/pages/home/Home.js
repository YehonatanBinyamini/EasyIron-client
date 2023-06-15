import React from "react";
import "./home.css";
import movie from "../../assets/images/metal-video.mp4";

function Home() {
  return (
    <div className="home-container">
      <h1>EasyIron</h1>
      <video
        loop={true}
        muted={true}
        src={movie}
        autoPlay={true}
        id={"metal-video"}
      >
      </video>
    </div>
  );
}

export default Home;
