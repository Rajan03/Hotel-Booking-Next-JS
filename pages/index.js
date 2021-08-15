import CtaSection from "../components/CtaSection";
import Description from "../components/Description";
import HotelGallery from "../components/HotelGallery";
import HotelHeader from "../components/HotelHeader";
import Layout from "../components/Layout";
import UserReviews from "../components/UserReviews";
import { ThemeProvider } from "styled-components";
import { theme } from "../utils/themes/Theme";
import { GlobalStyles } from "../components/StyleComponents";

export default function Home() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles/>
      <Layout>
        <HotelGallery />
        <HotelHeader />
        <div className="detail">
          <Description />
          <UserReviews />
        </div>
        <CtaSection />
      </Layout>
    </ThemeProvider>
  );
}
