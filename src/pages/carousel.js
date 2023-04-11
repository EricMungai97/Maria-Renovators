import React from "react";
import Image from "next/image";
import Carousel from "react-bootstrap/Carousel";

function Caarousel() {
    const images = [
      { src: "/image/pf (1).jpg", alt: "", width: 400, height: 300 },
      { src: "/image/pf (2).jpg", alt: "", width: 900, height: 300 },
      { src: "/image/pf (3).jpg", alt: "", width: 400, height: 300 },
      { src: "/image/pf (4).jpg", alt: "", width: 400, height: 300 },
      { src: "/image/pf (5).jpg", alt: "", width: 400, height: 300 },
      { src: "/image/pf (6).jpg", alt: "", width: 400, height: 300 },
      { src: "/image/pf (7).jpg", alt: "", width: 400, height: 300 },
    ];
  
    return (
      <Carousel>
        {images.map((image, index) => (
          <Carousel.Item key={index}>
            <Image src={image.src} alt={image.alt} width={image.width} height={image.height} />
          </Carousel.Item>
        ))}
      </Carousel>
    );
}

export default Caarousel;
