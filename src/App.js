import Header from "./compoents/Header";
import Hero from "./compoents/Hero";
import Footer from "./compoents/Footer";
import Card from "./compoents/Card";
import cardData from "./compoents/CardData";
import "./style.css";
import React, { useState } from "react";

function App() {
  let [favImg, setfavImg] = useState([]);

  // return all favourite images
  function getFavImage(imgSrc) {
    setfavImg([...favImg, imgSrc]);
  }

  let userFavimg = favImg.map((imgsrc) => {
    return <img src={imgsrc}></img>;
  });

  function removeFavImage(imgSrc) {
    setfavImg(
      [...favImg].filter((currentImg) => {
        console.log(currentImg);
        return currentImg != imgSrc;
      
      })
    );
  }

  let card = cardData.map((cardData) => {
    return (
      <Card
        cardContent={{
          imgSrc: cardData.imgSrc,
          description: cardData.description,
          name: cardData.name,
        }}
        getFavImage={getFavImage}
        removeFavImage={removeFavImage}
      />
    );
  });

  return (
    <div className="App">
      <Header />
      <Hero />
      <h3>Destinations</h3>
      <div className="container">{card}</div>
      <div className="aside-container">
        <aside>{userFavimg}</aside>
      </div>
      <Footer />
    </div>
  );
}

export default App;
