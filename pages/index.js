import Head from "next/head";
import CtaSection from "../components/CtaSection";
import Description from "../components/Description";
import HotelGallery from "../components/HotelGallery";
import HotelHeader from "../components/HotelHeader";
import Layout from "../components/Layout";
import UserReviews from "../components/UserReviews";
import { HotelDetails } from "../components/StyleComponents";

export default function Home() {
  const images = [
    {
      src: "https://res.cloudinary.com/dev-rajan/image/upload/v1626012610/Hotel-Management-App/hotel-2_yvhi1u.jpg",
      alt: "hotel 1",
    },
    {
      src: "https://res.cloudinary.com/dev-rajan/image/upload/v1626012547/Hotel-Management-App/hotel-1_ubvdyk.jpg",
      alt: "hotel 2",
    },
    {
      src: "https://res.cloudinary.com/dev-rajan/image/upload/v1626012512/Hotel-Management-App/hotel-3_ikiehm.jpg",
      alt: "hotel 3",
    },
  ];
  return (
    <Layout>
      <Head><title>Hotel Las Palm | Home</title></Head>
      <HotelGallery images={images}/>
      <HotelHeader />
      <HotelDetails>
        <Description />
        <UserReviews />
      </HotelDetails>
      <CtaSection />
    </Layout>
  );
}
