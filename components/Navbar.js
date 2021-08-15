import React from "react";
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

const Navbar = () => {
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

      <SearchBar>
        <SearchInput type="text" placeholder="Search hotels" />
        <SearchButton>
          <FaSearch />
        </SearchButton>
      </SearchBar>

      {/* User Navigation Section */}
      <NavIcons>
        <BadgeIcon icon={<FaBookmark />} count={7} />
        <BadgeIcon icon={<FaRocketchat />} count={13} />
        <ProfileIcon>
          <Image
            src="https://res.cloudinary.com/dev-rajan/image/upload/v1626013030/Hotel-Management-App/100_skq9we.jpg"
            alt="User photo"
            height="30px"
            width="30px"
            className="photo"
          />
          <span className="name">Jonas</span>
        </ProfileIcon>
      </NavIcons>
    </NavHeader>
  );
};

export default Navbar;
