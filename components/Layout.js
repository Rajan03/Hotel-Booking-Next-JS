import React from "react";
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";
import { ToastContainer } from "react-toastify";
import { Container, ContentContainer, HotelContent } from "./StyleComponents";

const Layout = ({ children }) => {
  return (
    <>
      <Container>
        <ToastContainer
          position="bottom-right"
          autoClose={3000}
          hideProgressBar={true}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnHover={false}
        />
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
