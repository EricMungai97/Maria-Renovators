import React from "react";
import Image from "next/image";
import Carousel from "react-bootstrap/Carousel";

function Caarousel() {
    const images = [
      { src: "/image/pf (1).jpg" },
      { src: "/image/pf (2).jpg"},
      { src: "/image/pf (3).jpg" },
      { src: "/image/pf (4).jpg" },
      { src: "/image/pf (5).jpg" },
      { src: "/image/pf (6).jpg" },
      { src: "/image/pf (7).jpg" },
    ];
  
    return (
      <Carousel>
        {images.map((image, index) => (
          <Carousel.Item key={index}>
            <img src={image.src}/>
          </Carousel.Item>
        ))}
      </Carousel>
    );
}

export default Caarousel;
