import React from "react";
import Image from "next/image";
import { HotelDescription, TextParahs, DetailList, RecommendedSection } from "./StyleComponents";

function Description() {
  const listItems = [
    "Close to the beach",
    "Breakfast included",
    "Free airport shuttle",
    "Free wifi in all rooms",
    "Air conditioning and heating",
    "Pets allowed",
    "We speak all languages",
    "Perfect for families",
  ];
  return (
    <>
      <HotelDescription>
        <TextParahs>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi nisi
          dignissimos debitis ratione sapiente saepe. Accusantium cumque, quas,
          ut corporis incidunt deserunt quae architecto voluptate.
        </TextParahs>
        <TextParahs>
          Accusantium cumque, quas, ut corporis incidunt deserunt quae
          architecto voluptate delectus, inventore iure aliquid aliquam.
        </TextParahs>
        <DetailList>
          {listItems.map((item, i) => (
            <li key={i}>{item}</li>
          ))}
        </DetailList>
        <RecommendedSection>
          <p>
            Lucy and 3 other people recommend this hotel.
          </p>
          <div>
            <Image
              src="https://res.cloudinary.com/dev-rajan/image/upload/v1626013030/Hotel-Management-App/100_skq9we.jpg"
              alt="user1"
              height="30px"
              width="30px"
              className="recommend__photo"
            />
            <Image
              src="https://res.cloudinary.com/dev-rajan/image/upload/v1626013030/Hotel-Management-App/100_skq9we.jpg"
              alt="user2"
              height="30px"
              width="30px"
              className="recommend__photo"
            />
            <Image
              src="https://res.cloudinary.com/dev-rajan/image/upload/v1626013030/Hotel-Management-App/100_skq9we.jpg"
              alt="user3"
              height="30px"
              width="30px"
              className="recommend__photo"
            />
          </div>
        </RecommendedSection>
      </HotelDescription>
    </>
  );
}

export default Description;
