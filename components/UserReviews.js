import React from "react";
import Image from "next/image";
import { UserReview, InlineBtn } from "./StyleComponents";

function UserReviews() {
  const reviews = [
    {
      review:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fuga doloremque architecto dicta animi, totam, itaque officia ex.",
      imgUrl:
        "https://res.cloudinary.com/dev-rajan/image/upload/v1626013030/Hotel-Management-App/100_skq9we.jpg",
      username: "Nick Smith",
      dated: "Feb 23rd, 2017",
      rating: "7.8",
    },
    {
      review:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fuga doloremque architecto dicta animi, totam, itaque officia ex.",
      imgUrl:
        "https://res.cloudinary.com/dev-rajan/image/upload/v1626013030/Hotel-Management-App/100_skq9we.jpg",
      username: "Mary Thomas",
      dated: "Sept 23rd, 2017",
      rating: "9.8",
    },
  ];
  return (
    <>
      <UserReview>
        {reviews.map((review, i) => (
          <figure key={i}>
            <blockquote>{review.review}</blockquote>
            <figcaption>
              <Image src={review.imgUrl} alt={i} height="40px" width="20px" />
              <div className="review_box">
                <p>{review.username}</p>
                <p>{review.dated}</p>
              </div>
              <div className="review_rating">{review.rating}</div>
            </figcaption>
          </figure>
        ))}
        <InlineBtn>
          Show all <span>&rarr;</span>
        </InlineBtn>
      </UserReview>
    </>
  );
}

export default UserReviews;
