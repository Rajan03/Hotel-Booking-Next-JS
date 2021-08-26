import React, { useState, useEffect } from "react";
import Image from "next/image";
import { CarouselContainer } from "./StyleComponents";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

const Carousel = ({ images }) => {
  const [current, setCurrent] = useState(0);

  const showPrev = () => {
    current !== 0 && setCurrent(current - 1);
  };
  const showNext = () => {
    current !== images.length - 1 && setCurrent(current + 1);
  };

  return (
    <CarouselContainer>
      {images && images.length > 0 && (
        <Image
          src={images[current].url}
          alt={images[current]._id}
          layout="fill"
          objectFit="contain"
        />
      )}
      <div>
        <FaArrowLeft onClick={showPrev} />
        <FaArrowRight onClick={showNext} />
      </div>
    </CarouselContainer>
  );
};

export default Carousel;
