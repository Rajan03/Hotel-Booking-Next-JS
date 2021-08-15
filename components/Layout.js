import React from "react";
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";
import { Container, ContentContainer, HotelContent } from "./StyleComponents";

const Layout = ({ children }) => {
  return (
    <>
      <Container>
        <Navbar />
        <ContentContainer>
          <Sidebar />
          <HotelContent>{children}</HotelContent>
        </ContentContainer>
      </Container>
    </>
  );
};

export default Layout;
