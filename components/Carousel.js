import React, { useState, useEffect } from "react";
import Image from "next/image";
import { CarouselContainer } from "./StyleComponents";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa";

const Carousel = ({ images }) => {
  const [current, setCurrent] = useState(0);

  const showPrev = () => {
    current !== 0 && setCurrent(current - 1);
  };
  const showNext = () => {
    current !== images.length - 1 && setCurrent(current + 1);
  };

  return (
    <>
      {images && images.length > 0 && (
        <CarouselContainer src={images[current].url}>
          <div>
            <FaAngleLeft onClick={showPrev} />
            <FaAngleRight onClick={showNext} />
          </div>
        </CarouselContainer>
      )}
    </>
  );
};

export default Carousel;
