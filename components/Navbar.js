import React, { useState } from "react";
import Image from "next/image";
import { FaRocketchat, FaBookmark, FaSearch } from "react-icons/fa";
import {
  Logo,
  NavHeader,
  NavIcons,
  ProfileIcon,
  SearchBar,
  SearchButton,
  SearchInput,
} from "./StyleComponents";
import BadgeIcon from "./BadgeIcon";
import { useRouter } from "next/router";

const Navbar = () => {
  const [location, setLocation] = useState("");
  const router = useRouter();

  const searchHandler = (e) => {
    e.preventDefault();
    setLocation(e.target.value)
    if (location.trim()) {
      router.push(`/rooms/?location=${location}`);
    } else {
      router.push(`/rooms`);
    }
  };
  return (
    <NavHeader>
      <Logo>
        <Image
          src="https://res.cloudinary.com/dev-rajan/image/upload/v1626012495/Hotel-Management-App/logo_c47gq3.png"
          alt="logo"
          height="30px"
          width="30px"
          className="logo"
        />
      </Logo>

      <SearchBar onSubmit={searchHandler}>
        <SearchInput
          type="text"
          placeholder="Search hotels"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
        />
        <SearchButton>
          <FaSearch onClick={searchHandler} />
        </SearchButton>
      </SearchBar>

      {/* User Navigation Section */}
      <NavIcons>
        <BadgeIcon icon={<FaBookmark />} count={7} />
        <BadgeIcon icon={<FaRocketchat />} count={13} />
        <ProfileIcon>
          <Image
            src="https://res.cloudinary.com/dev-rajan/image/upload/w_200,h_200,c_limit,e_blur:400,o_90,b_black/l_text:arial_80:®,ar_1:1,c_lfill,o_60,co_rgb:ffffff,b_rgb:000000,r_max/v1626013030/Hotel-Management-App/100_skq9we.jpg"
            alt="User photo"
            height="30px"
            width="30px"
            className="photo"
          />
          <span className="name">Rajan</span>
        </ProfileIcon>
      </NavIcons>
    </NavHeader>
  );
};

export default Navbar;
