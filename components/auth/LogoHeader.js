import React from "react";
import { Logo } from "../StyleComponents";
import Image from "next/image";

const LogoHeader = () => {
  return (
    <Logo>
      <Image
        src="https://res.cloudinary.com/dev-rajan/image/upload/v1626012495/Hotel-Management-App/logo_c47gq3.png"
        alt="logo"
        height="30px"
        width="30px"
        className="logo"
      />
      <span> Hotel Las Palm</span>
    </Logo>
  );
};

export default LogoHeader;
