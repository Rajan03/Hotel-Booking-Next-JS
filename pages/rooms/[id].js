import React, { useEffect } from "react";
import Head from "next/head";
import Layout from "../../components/Layout";
import { getRoomDetails } from "../../redux/actions/roomActions";
import { useSelector, useDispatch } from "react-redux";
import { toast } from "react-toastify";
import { clearError } from "../../redux/actions/roomActions";
import { wrapper } from "../../redux/store";
import {
  AboutHotel,
  HotelDetails,
  DetailList,
  HotelTitle,
  AddressRatings,
  RoomBookBtn,
} from "../../components/StyleComponents";
import Ratings from "../../components/Ratings";
import Carousel from "../../components/Carousel";

const RoomDetails = () => {
  const { room, error } = useSelector((state) => state.roomDetails);
  const dispatch = useDispatch();

  // Before Mounting
  useEffect(() => {
    if (error) {
      toast.error(error);
      dispatch(clearError());
    }
  }, []);

  return (
    <>
      <Layout title={`| ${room.name}`}>
        <HotelTitle>
          <h1>{room.name}</h1>
          <RoomBookBtn>Book</RoomBookBtn>
        </HotelTitle>
        <AddressRatings>
          <p>{room.address}</p>
          <Ratings rating={room.ratings} />
        </AddressRatings>
        <AboutHotel>
          <Carousel images={room.images} />
          <p>
            <h2>Description</h2>
            <HotelDetails>{room.description}</HotelDetails>
            <h2>Features</h2>
            <DetailList my={0.001} py={2} bg spanned>
              <li>
                <span>Guests Capacity - </span>
                {room.guestCapacity} Max.
              </li>
              <li>
                <span>Available Beds - </span>
                {room.numOfBed} - {room.category} Size
              </li>
              {room.airConditioned && (
                <li>
                  <span>Fully Air Conditioned</span>
                </li>
              )}
              {room.roomCleaning && (
                <li>
                  <span>Room Cleaning</span>
                </li>
              )}
              {room.roomService && (
                <li>
                  <span>Room Service Available</span>
                </li>
              )}
              {room.internet && (
                <li>
                  <span>Available Internet Connection</span>
                </li>
              )}
              {room.breakfast && (
                <li>
                  <span>Free Breakfast Services</span>
                </li>
              )}
              {room.petsAllowed && (
                <li>
                  <span>Pets Allowed</span>
                </li>
              )}
            </DetailList>
          </p>
          <div>hotel</div>
        </AboutHotel>
      </Layout>
    </>
  );
};

export default RoomDetails;

export const getServerSideProps = wrapper.getServerSideProps(
  (store) =>
    async ({ req, params }) => {
      await store.dispatch(getRoomDetails(req, params.id));
    }
);
