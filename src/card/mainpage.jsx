import React from "react";
import Card from "./card";
import "./card.css";
import img from "./images/images.jpg";
import img1 from "./images/images1.jpg";
import img2 from "./images/images3.jpg";
import img3 from "./images/image4.jpg";
import img4 from "./images/image5.jpg";
import img5 from "./images/images6.jpg";

function MainPage(){
      return(
        <>
        <h1 className="heading">CARD GALLERY</h1>
        <div class="cardcomp">
        <Card img={img}/>
        <Card img={img1}/>
        <Card img={img2}/>
        <Card img={img3}/>
        <Card img={img4}/>
        <Card img={img5}/>
        </div>
        </>
      )
}
export default MainPage