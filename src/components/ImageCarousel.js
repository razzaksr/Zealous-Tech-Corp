import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // Import carousel styles
import { Box } from "@mui/material";
import slide0 from "../Images/slide0.jfif";
import slide1 from "../Images/slide1.jfif";
import slide2 from "../Images/slide2.jfif";
import slide3 from "../Images/slide3.jfif";
import slide4 from "../Images/slide4.jfif";
import slide5 from "../Images/slide5.jfif";
import slide6 from "../Images/slide6.jfif";

const images = [
  {
    src: slide0,
    alt: "Image 0",
  },
  {
    src: slide1,
    alt: "Image 1",
  },
  {
    src: slide2,
    alt: "Image 2",
  },
  {
    src: slide3,
    alt: "Image 3",
  },
  {
    src: slide4,
    alt: "Image 4",
  },
  {
    src: slide5,
    alt: "Image 5",
  },
  {
    src: slide6,
    alt: "Image 6",
  },
];

const ImageCarousel = () => {
  return (
    <Box sx={{ maxWidth: 800, margin: "0 auto", mt: 4 }} md={{ maxWidth: 500 }}>
      <Carousel showThumbs={false} autoPlay infiniteLoop>
        {images.map((image, index) => (
          <div key={index}>
            <img
              src={image.src}
              alt={image.alt}
              style={{ width: "100%", height: "auto" }}
            />
          </div>
        ))}
      </Carousel>
    </Box>
  );
};

export default ImageCarousel;
