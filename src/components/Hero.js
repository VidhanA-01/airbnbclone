import React from "react";
import Image from "../images/photo-grid.png";
export default function Hero(){
  return(
    <div className="Hero">
      <img src={Image} alt=""  />
      <h2>Online Experiences</h2>
      <p>Join unique interactive activities led by one-of-a-kind hosts—all without leaving home.
      </p>
    </div>
  )
}