import Link from "next/link";
import React from "react";
import Ratings from "./Ratings";
import { InlineBtn, RoomWrapper } from "./StyleComponents";

const RoomCard = ({ room }) => {
  const { pricePerNight, name, images, ratings, _id, numOfReviews } = room;
  return (
    <RoomWrapper url={images[0].url}>
      <div>
        <h4>${pricePerNight} per night</h4>
        <div>
          <h3>{name}</h3>
          <Ratings rating={ratings} text={`${numOfReviews} Reviews`} />
          <Link href={`/rooms/${_id}`} passHref>
            <InlineBtn>View More</InlineBtn>
          </Link>
        </div>
      </div>
    </RoomWrapper>
  );
};

export default RoomCard;
