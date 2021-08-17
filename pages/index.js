import CtaSection from "../components/CtaSection";
import Description from "../components/Description";
import HotelGallery from "../components/HotelGallery";
import HotelHeader from "../components/HotelHeader";
import Layout from "../components/Layout";
import UserReviews from "../components/UserReviews";
import {  HotelDetails } from "../components/StyleComponents";

export default function Home() {
  return (
    <Layout>
      <HotelGallery />
      <HotelHeader />
      <HotelDetails>
        <Description />
        <UserReviews />
      </HotelDetails>
      <CtaSection />
    </Layout>
  );
}
