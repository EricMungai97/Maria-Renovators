import React from "react";
import Image from "next/image";
import Carousel from "react-bootstrap/Carousel";

function Caarousel() {
  const images = [
    { src: "/image/image1.JPEG", alt: ""},
    { src: "/image/image2.JPEG", alt: ""},
    { src: "/image/image3.JPEG", alt: ""},
    { src: "/image/image4.JPEG", alt: ""},
    { src: "/image/image5.JPEG", alt: ""},
    { src: "/image/image7.JPEG", alt: ""},
    { src: "/image/image8.JPEG", alt: ""},
    { src: "/image/image9.JPEG", alt: ""},
  ];

  return (
    <Carousel>
      {images.map((image, index) => (
        <Carousel.Item key={index}>
          <div className="h-screen w-screen">
            <Image
              src={image.src}
              alt={image.alt}
              height={image.height}
              objectFit="cover"
              layout="fill"
            />
          </div>
        </Carousel.Item>
      ))}
    </Carousel>
  );
}

export default Caarousel;
