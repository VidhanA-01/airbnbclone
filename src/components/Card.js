import React from "react";
import Image1 from "../images/star.png";
export default function Card(props){
  let badgeText
  if(props.openSpots===0){
    badgeText="SOLD OUT";
  }else if(props.location==="Online"){
    badgeText="ONLINE";
  }
  return(
    <div className="card">
      {badgeText && <div className="card--badge">{badgeText}</div>}
    <img src={require('../images/' + props.coverImg)} className="card--image" alt="" />
    <div className="card--stats">
        <img src={Image1} alt="" className="card--star"/>
        <span>{props.stats.rating} </span>
        <span className="gray"> ({props.stats.reviewCount}) • </span>
        <span className="gray">{props.location}</span>
    </div>
    <p>{props.title}</p>
    <p><span className="bold">From ${props.price}</span> / person</p>
</div>
  )
}