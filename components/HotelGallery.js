import Image from "next/image";
import React from "react";
import { GalleryContainer } from "./StyleComponents";

const HotelGallery = ({images}) => {
  return (
    <>
      <GalleryContainer>
        {images.map((img) => (
          <figure key={img.alt}>
            <Image
              layout="fill"
              objectFit="contain"
              src={img.src}
              alt={img.alt}
            />
          </figure>
        ))}
      </GalleryContainer>
    </>
  );
};

export default HotelGallery;
