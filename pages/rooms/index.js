import React from "react";
import {
  FaAccusoft,
  FaBroom,
  FaDog,
  FaHotel,
  FaNetworkWired,
} from "react-icons/fa";
import Layout from "../../components/Layout";
import { RoomWrapper } from "../../components/StyleComponents";

function Rooms() {
  return (
    <Layout>
      <RoomWrapper url="https://res.cloudinary.com/dev-rajan/image/upload/v1625991430/Hotel-Management-App/photo-1522708323590-d24dbb6b0267_omq814.jpg">
        <div>&nbsp;</div>
        <h4>
          <span>The Sea Explorer</span>
        </h4>
        <div className="list">
          <ul>
            <li>
              <FaNetworkWired />
            </li>
            <li>
              <FaHotel />
            </li>
            <li>
              <FaAccusoft />
            </li>
            <li>
              <FaDog />
            </li>
            <li>
              <FaBroom />
            </li>
          </ul>
        </div>
      </RoomWrapper>
    </Layout>
  );
}

export default Rooms;
