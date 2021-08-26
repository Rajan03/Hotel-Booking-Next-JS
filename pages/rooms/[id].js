import React, { useEffect, useContext, useState } from "react";
import Head from "next/head";
import Layout from "../../components/Layout";
import { getRoomDetails } from "../../redux/actions/roomActions";
import { useSelector, useDispatch } from "react-redux";
import { toast } from "react-toastify";
import { clearError } from "../../redux/actions/roomActions";
import { wrapper } from "../../redux/store";
import { AboutHotel, HotelNameHeader } from "../../components/StyleComponents";
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
      <Head>
        <title>{room.name}</title>
      </Head>
      <Layout>
        <HotelNameHeader>
          <h1>{room.name}</h1>
          <Ratings rating={room.ratings} />
        </HotelNameHeader>
        <AboutHotel>
          <div></div>
          <div>
            <Carousel images={room.images} />
          </div>
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
