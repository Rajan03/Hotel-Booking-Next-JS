import Image from "next/image";
import React from "react";
import { GalleryContainer } from "./StyleComponents";

const HotelGallery = () => {
  const images = [
    {
      src: "https://res.cloudinary.com/dev-rajan/image/upload/v1626012610/Hotel-Management-App/hotel-2_yvhi1u.jpg",
      alt: "hotel 1",
    },
    {
      src: "https://res.cloudinary.com/dev-rajan/image/upload/v1626012547/Hotel-Management-App/hotel-1_ubvdyk.jpg",
      alt: "hotel 2",
    },
    {
      src: "https://res.cloudinary.com/dev-rajan/image/upload/v1626012512/Hotel-Management-App/hotel-3_ikiehm.jpg",
      alt: "hotel 3",
    },
  ];
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
