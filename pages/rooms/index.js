import React, { useEffect, useState } from "react";
import Head from "next/head";
import Layout from "../../components/Layout";
import RoomCard from "../../components/RoomCard";
import {
  RoomsContainer,
  NoDataFound,
  Filterbox,
  InlineBtn,
  DialogBox,
} from "../../components/StyleComponents";
import { RiCloseCircleFill } from "react-icons/ri";
import { useSelector } from "react-redux";
import { getRooms } from "../../redux/actions/roomActions";
import { wrapper } from "../../redux/store";
import { toast } from "react-toastify";
import { useRouter } from "next/router";
import { FaFilter } from "react-icons/fa";
import FilterField from "../../components/FilterField";

function Rooms() {
  const router = useRouter();
  const { rooms, error } = useSelector(
    (state) => state.allRooms
  );

  const [openDialog, setOpenDialog] = useState(false);
  const [guestsCount, setGuestsCount] = useState(null);
  const [category, setCategory] = useState("");

  useEffect(() => {
    toast.error(error);
  }, []);
  const guestsOpt = [1, 2, 3, 4, 5, 6];
  const categoryOpt = [
    "King",
    "Queen",
    "Single",
    "Double",
    "Mini Suite",
    "Connecting",
    "Apartments",
  ];
  const onApplyFilter = (e) => {
    e.preventDefault();
    if (category.trim()) {
      router.query.category = category;
    }
    if (guestsCount) {
      router.query.guests = guestsCount;
    }
    router.push(router);
  };
  return (
    <>
      <Layout title={'| Rooms'}>
        {rooms.length !== 0 ? (
          <>
            <Filterbox>
              <InlineBtn onClick={() => setOpenDialog(!openDialog)}>
                <span>
                  <FaFilter />
                  Apply Filters
                </span>
              </InlineBtn>
              {openDialog && (
                <DialogBox>
                  <form onSubmit={onApplyFilter}>
                    <RiCloseCircleFill onClick={() => setOpenDialog(false)} />
                    <div>
                      <FilterField
                        label={"No. Of Guests"}
                        optArr={guestsOpt}
                        selectedOption={guestsCount}
                        changeOption={(ev) => setGuestsCount(ev)}
                      />
                      <FilterField
                        label={"Room Category"}
                        optArr={categoryOpt}
                        selectedOption={category}
                        changeOption={(ev) => setCategory(ev)}
                      />
                    </div>
                    <button onClick={onApplyFilter}>Search</button>
                  </form>
                </DialogBox>
              )}
            </Filterbox>
            <RoomsContainer rows={rooms.length}>
              {rooms.map((room) => (
                <RoomCard room={room} key={room._id} />
              ))}
            </RoomsContainer>
          </>
        ) : (
          <NoDataFound>Oops!! No Rooms Available!</NoDataFound>
        )}
      </Layout>
    </>
  );
}

export default Rooms;

export const getServerSideProps = wrapper.getServerSideProps(
  (store) =>
    async ({ req, res, query }) => {
      await store.dispatch(
        getRooms(req, query.location, query.guests, query.category)
      );
    }
);
