import React from "react";
import { RatingContainer } from "./StyleComponents";
import { FaStar, FaRegStar, FaStarHalfAlt } from "react-icons/fa";

const Ratings = ({ rating, text, color, marginTop, fontSize, textColor, direction}) => {
  return (
    <RatingContainer color={color || "#f0e748"} marginTop={marginTop || 1} fontSize={fontSize || 2}
    textColor={textColor} direction={direction || 'column'}>
      <div>
      {rating >= 1 ? (
        <FaStar />
      ) : rating >= 0.5 ? (
        <FaStarHalfAlt />
      ) : (
        <FaRegStar />
      )}
      {rating >= 2 ? (
        <FaStar />
      ) : rating >= 1.5 ? (
        <FaStarHalfAlt />
      ) : (
        <FaRegStar />
      )}
      {rating >= 3 ? (
        <FaStar />
      ) : rating >= 2.5 ? (
        <FaStarHalfAlt />
      ) : (
        <FaRegStar />
      )}
      {rating >= 4 ? (
        <FaStar />
      ) : rating >= 3.5 ? (
        <FaStarHalfAlt />
      ) : (
        <FaRegStar />
      )}
      {rating >= 5 ? (
        <FaStar />
      ) : rating >= 4.5 ? (
        <FaStarHalfAlt />
      ) : (
        <FaRegStar />
      )}
      </div>
      <span>{text || ""}</span>
    </RatingContainer>
  );
};

export default Ratings;
