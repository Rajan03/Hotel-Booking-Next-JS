import React, { useEffect } from "react";
import Head from "next/head";
import Layout from "../../components/Layout";
import RoomCard from "../../components/RoomCard";
import { RoomsContainer, NoDataFound } from "../../components/StyleComponents";
import { useSelector } from "react-redux";
import { getRooms } from "../../redux/actions/roomActions";
import { wrapper } from "../../redux/store";
import { toast } from "react-toastify";

function Rooms() {
  const { rooms, error } = useSelector((state) => state.allRooms);

  useEffect(() => {
    toast.error(error);
  }, []);

  return (
    <>
      <Head>
        <title>Hotel Las Palm | Rooms</title>
      </Head>
      <Layout>
        <RoomsContainer>
          {rooms.length !== 0 ? (
            rooms.map((room) => <RoomCard room={room} key={room._id} />)
          ) : (
            <NoDataFound>Oops!! No Rooms Available!</NoDataFound>
          )}
        </RoomsContainer>
      </Layout>
    </>
  );
}

export default Rooms;

export const getServerSideProps = wrapper.getServerSideProps(
  (store) =>
    async ({ req, res }) => {
      await store.dispatch(getRooms(req));
    }
);
