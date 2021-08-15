import React from "react";
import Image from "next/image";

function UserReviews() {
  return (
    <>
      <div className="user-reviews">
        <figure className="review">
          <blockquote className="review__text">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fuga
            doloremque architecto dicta animi, totam, itaque officia ex.
          </blockquote>
          <figcaption className="review__user">
            <Image
              src="https://res.cloudinary.com/dev-rajan/image/upload/v1626013030/Hotel-Management-App/100_skq9we.jpg"
              alt="user1"
              height="30px"
              width="30px"
              className="review__photo"
            />
            <div className="review__user-box">
              <p className="review__user-name">Nick Smith</p>
              <p className="review__user-date">Feb 23rd, 2017</p>
            </div>
            <div className="review__rating">7.8</div>
          </figcaption>
        </figure>

        <figure className="review">
          <blockquote className="review__text">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fuga
            doloremque architecto dicta animi.
          </blockquote>
          <figcaption className="review__user">
            {/* <img src="img/user-2.jpg" alt="User 1" className="review__photo"> */}
            <div className="review__user-box">
              <p className="review__user-name">Mary Thomas</p>
              <p className="review__user-date">Sept 13th, 2017</p>
            </div>
            <div className="review__rating">9.3</div>
          </figcaption>
        </figure>

        <button className="btn-inline">
          Show all <span>&rarr;</span>
        </button>
      </div>
    </>
  );
}

export default UserReviews;
