import React from "react";
import { FaMapPin, FaStar } from "react-icons/fa";
import {
  HotelNameHeader,
  Stars,
  LocationPin,
  Rating,
  LocationBtn,
} from "./StyleComponents";

function HotelHeader() {
  return (
    <>
      <HotelNameHeader>
        <h1>Hotel Las Palmas</h1>
        <Stars>
          <FaStar />
          <FaStar />
          <FaStar />
          <FaStar />
        </Stars>
        <LocationPin>
          <FaMapPin />
          <LocationBtn>
            <span>Albufeira, Portugal</span>
          </LocationBtn>
        </LocationPin>
        <Rating>
          <div>8.6</div>
          <div>429 votes</div>
        </Rating>
      </HotelNameHeader>
    </>
  );
}

export default HotelHeader;
