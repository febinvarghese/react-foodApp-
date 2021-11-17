import React, { useState } from "react";

function Card(props) {

  let usestate = useState("add to favourites");
  let activeClass = useState("");

  let [btntext, setbtntext] = usestate;
  let [clasState, setclasstate] = activeClass;

  function update(imgSrc) {

    setbtntext((prevState) => {
      if (prevState === "add to favourites") {
          props.getFavImage(imgSrc)
        return "thanks";
      } else {
        return "add to favourites";
      }
    });

    setclasstate((prevClass) => {
      if (prevClass == "") {
        return "active";
      } else {
        return "";
      }
    });
  }

  return (
    <div className={`card  ${clasState}`}>
      <img src={props.cardContent.imgSrc}></img>
      <h4>{props.cardContent.name}</h4>
      <p>{props.cardContent.description}</p>
      <button
        className="card-btn"
        onClick={() => {
          update(props.cardContent.imgSrc);
        }}
      >
        {btntext}
      </button>
    </div>
  );
}

export default Card;
