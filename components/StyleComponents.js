import styled, { createGlobalStyle, keyframes } from "styled-components";

// Animations
const backgroundAnimate = keyframes`
 0% {
   background: rgba(0,0,0, 0);
}
 100% { 
   background: rgba(0,0,0, .7); 
   transform: translateX(0rem);
 }
`;
const tranformSide = keyframes`
 0% {
   transform: translateX(0rem)
}
 100% { 
   transform: translateX(100rem)
 }
`;

export const GlobalStyles = createGlobalStyle`
* {
  margin: 0;
  padding: 0;
}

*,
*::after,
*::before {
  -webkit-box-sizing: inherit;
  box-sizing: inherit;
}

html {
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
  font-size: 62.5%;
}
@font-face {
     font-family: 'Prompt';
     src: url('../public/fonts/Prompt-Regular.ttf');
  }
@media only screen and (max-width: 68.75em) {
  html {
    font-size: 53%;
  }
}

body {
  min-height: 100vh;
  font-family: "Open Sans", sans-serif;
  font-weight: 400;
  line-height: 1.6rem;
  color: ${(props) => props.theme.secondary.dark1};
  background-image: ${(props) => props.theme.primary.main};
  background-size: cover;
  background-repeat: no-repeat;
}
`;

// Container
export const Container = styled.div`
  background-color: ${(props) => props.theme.secondary.white};

  @media (max-width: 75em) {
    & {
      margin: 0 auto;
      max-width: 100%;
    }
  }
`;
export const ContentContainer = styled.div`
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;

  @media (max-width: 56.25em) {
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
    -ms-flex-direction: column;
    flex-direction: column;
  }
`;
export const HotelContent = styled.div`
  -webkit-box-flex: 1;
  -ms-flex: 1;
  flex: 1;
  min-height: 90vh;
  max-height: max-content;
  overflow-y: scroll;

  @media (max-width: 400px) {
    min-height: 150vh;
  }
`;

//  Navbar Starts
export const NavHeader = styled.div`
  font-size: 1.4rem;
  background-color: ${(props) => props.theme.secondary.white};
  min-height: 6rem;
  border-bottom: 0.1rem solid ${(props) => props.theme.secondary.light2};
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media (max-width: 31.25em) {
    & {
      flex-wrap: wrap;
      min-height: 11rem;
      align-content: space-around;
    }
  }
`;
export const Logo = styled.div`
  margin-left: 2rem;
  height: 3rem;
`;
export const SearchBar = styled.form`
  -webkit-box-flex: 0;
  -ms-flex: 0 0 40%;
  flex: 0 0 40%;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  -webkit-box-pack: center;
  -ms-flex-pack: center;
  justify-content: center;

  @media (max-width: 31.25em) {
    & {
      -webkit-box-ordinal-group: 2;
      -ms-flex-order: 1;
      order: 1;
      background-color: ${(props) => props.theme.secondary.light2};
      -webkit-box-flex: 100%;
      -ms-flex: 100%;
      flex: 100%;
    }
  }
`;
export const SearchInput = styled.input`
  color: inherit;
  font-size: inherit;
  font-family: inherit;
  background-color: ${(props) => props.theme.secondary.light2};
  border: none;
  width: 90%;
  border-radius: 100px;
  border: 0.1rem solid ${(props) => props.theme.secondary.light2};
  padding: 0.8rem 2rem;
  margin-right: -3rem;
  -webkit-transition: all 0.2s;
  transition: all 0.2s;

  :focus {
    width: 100%;
    outline: none;
    background-color: ${(props) => props.theme.secondary.light3};

    @media (max-width: 31.25em) {
      & {
        width: 90%;
      }
    }
  }
  ::-webkit-input-placeholder {
    font-weight: 100;
    color: ${(props) => props.theme.secondary.dark3};
  }
`;
export const SearchButton = styled.button`
  border: none;
  fill: ${(props) => props.theme.secondary.light3};
  background-color: ${(props) => props.theme.secondary.light2};
  :focus {
    outline: none;
  }
  :active {
    -webkit-transform: translateY(3px);
    transform: translateY(3px);
  }
`;
export const BadgeIconStyle = styled.div`
  position: relative;

  & .nav__notification {
    font-size: 0.8rem;
    height: 1.75rem;
    width: 1.75rem;
    border-radius: 50%;
    background-color: ${(props) => props.theme.primary.main};
    color: ${(props) => props.theme.secondary.white};
    position: absolute;
    top: 1.5rem;
    right: 1.1rem;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-pack: center;
    -ms-flex-pack: center;
    justify-content: center;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
  }
  & svg {
    height: 2.25rem;
    width: 2.25rem;
    fill: ${(props) => props.theme.secondary.dark2};
  }
`;
export const NavIcons = styled.div`
  -ms-flex-item-align: stretch;
  align-self: stretch;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;

  & > * {
    padding: 0 2rem;
    cursor: pointer;
    height: 100%;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
  }
  & > *:hover {
    background-color: ${(props) => props.theme.secondary.light2};
  }
  & .user-photo {
    width: 10px !important;
    border-radius: 50%;
    margin-right: 1rem;
  }
`;
export const ProfileIcon = styled.div`
  & .photo {
    height: 3.75rem;
    border-radius: 50%;
    margin-right: 1rem;
  }
  & .name {
    font-size: 1.5rem;
    color: ${(props) => props.theme.secondary.dark2};
    padding: 0 1rem;
  }
`;
// Navbar Ends

// Sidebar Starts
export const SidebarContainer = styled.div`
  background-color: ${(props) => props.theme.secondary.dark1};
  flex: 0 0 18%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  @media (max-width: 56.25em) {
    & {
      min-height: auto;
    }
  }
`;
export const SidebarList = styled.ul`
  font-size: 1.4rem;
  list-style: none;
  margin-top: 3.5rem;

  @media (max-width: 56.25em) {
    & {
      display: -webkit-box;
      display: -ms-flexbox;
      display: flex;
      justify-content: space-between;
      width: 100%;
      margin: 0;
    }
  }
`;
export const SidebarListItem = styled.div`
  position: relative;
  background-color: ${(props) => props.activeLink && props.theme.primary.light};

  @media (max-width: 56.25em) {
    & {
      -webkit-box-flex: 1;
      -ms-flex: 1;
      flex: 1;
    }
  }

  :not(:last-child) {
    margin-bottom: 0.5rem;

    @media (max-width: 56.25em) {
      & {
        margin-bottom: 0rem;
      }
    }
  }

  ::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: 3px;
    background-color: ${(props) => props.theme.primary.main};
    -webkit-transform: scaleY(0);
    transform: scaleY(0);
    -webkit-transition: width 0.5s cubic-bezier(0.99, 0, 0, 1.01) 0.2s,
      background-color 0.2s, -webkit-transform 0.4s;
    transition: width 0.5s cubic-bezier(0.99, 0, 0, 1.01) 0.2s,
      background-color 0.2s, -webkit-transform 0.4s;
    transition: transform 0.4s, width 0.5s cubic-bezier(0.99, 0, 0, 1.01) 0.2s,
      background-color 0.2s;
    transition: transform 0.4s, width 0.5s cubic-bezier(0.99, 0, 0, 1.01) 0.2s,
      background-color 0.2s, -webkit-transform 0.4s;
  }

  :hover::before {
    -webkit-transform: scaleY(1);
    transform: scaleY(1);
    width: 100%;
  }

  :active::before {
    background-color: ${(props) => props.theme.primary.light};
  }

  & a {
    &:link,
    &:visited {
      color: ${(props) => props.theme.secondary.light1};
      text-decoration: none;
      text-transform: uppercase;
      padding: 1.5rem 3rem;
      position: relative;
      z-index: 10;
      display: -webkit-box;
      display: -ms-flexbox;
      display: flex;
      -webkit-box-align: center;
      -ms-flex-align: center;
      align-items: center;

      @media (max-width: 56.25em) {
        & {
          -webkit-box-pack: center;
          -ms-flex-pack: center;
          justify-content: center;
          padding: 2rem;
        }
      }

      @media (max-width: 37.5em) {
        & {
          -webkit-box-orient: vertical;
          -webkit-box-direction: normal;
          -ms-flex-direction: column;
          flex-direction: column;
          padding: 1.5rem 0.5rem;
        }
      }
    }
  }

  & svg {
    width: 1.75rem;
    height: 1.75rem;
    margin-right: 2rem;
    fill: currentColor;

    @media (max-width: 37.5em) {
      & {
        margin-right: 0;
        width: 1.5rem;
        height: 1.5rem;
        margin-bottom: 0.7rem;
      }
    }
  }
`;
export const SidebarBottom = styled.div`
  font-size: 1.2rem;
  color: ${(props) => props.theme.secondary.light4};
  text-align: center;
  padding: 2.5rem;

  @media (max-width: 56.25em) {
    & {
      display: none;
    }
  }
`;
// Sidebar Ends

// Gallery Images
export const GalleryContainer = styled.div`
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  width: 100%;

  & figure {
    flex: 1;
    width: 33%;

    & > div {
      position: relative !important;

      & img {
        height: auto !important;
        position: relative !important;
      }
    }
  }
`;
//  Gallery Images Ends

// Hotel header Starts
export const HotelNameHeader = styled.div`
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  border-bottom: 0.1rem solid ${(props) => props.theme.secondary.light2};

  & h1 {
    font-size: 2.25rem;
    font-weight: 300;
    text-transform: uppercase;
    letter-spacing: 1px;
    padding: 1.5rem 3rem;

    @media (max-width: 37.5em) {
      & {
        font-size: 1.8rem;
        padding: 1.25rem 2rem;
      }
    }
  }
`;
export const Stars = styled.div`
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  margin-right: auto;

  & svg {
    width: 1.75rem;
    height: 1.75rem;
    fill: ${(props) => props.theme.primary.main};
  }
`;
export const LocationPin = styled.div`
  font-size: 1.2rem;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;

  & svg {
    width: 1.75rem;
    height: 1.75rem;
    fill: ${(props) => props.theme.primary.main};
    margin-right: 0.7rem;
    @media (max-width: 28.125em) {
      & {
        display: none;
      }
    }
  }

  @media (max-width: 28.125em) {
    & {
      display: none;
    }
  }
`;
export const Rating = styled.div`
  background-color: ${(props) => props.theme.primary.main};
  margin-left: 3rem;
  color: ${(props) => props.theme.secondary.white};
  -ms-flex-item-align: stretch;
  align-self: stretch;
  padding: 1rem 2.25rem;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
  -ms-flex-direction: column;
  flex-direction: column;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  -webkit-box-pack: center;
  -ms-flex-pack: center;
  justify-content: center;

  @media (max-width: 37.5em) {
    & {
      padding: 0rem 1.5rem;
    }
  }

  @media (max-width: 28.125em) {
    & {
      margin-left: 1rem;
    }
  }

  & div:first-child {
    font-size: 2.24rem;
    font-weight: 300;
    margin-bottom: 3px;
    @media (max-width: 37.5em) {
      & {
        font-size: 1.8rem;
      }
    }
  }

  & div:last-child {
    font-size: 0.8rem;
    text-transform: uppercase;
    @media (max-width: 37.5em) {
      & {
        font-size: 0.6rem;
      }
    }
  }
`;
export const InlineBtn = styled.button`
  border: none;
  color: ${(props) => props.theme.primary.main};
  font-size: inherit;
  border-bottom: 1px solid currentColor;
  padding-bottom: 2px;
  display: inline-block;
  background-color: transparent;
  cursor: pointer;
  -webkit-transition: all 0.3s;
  transition: all 0.3s;

  & span {
    margin-left: 0.3rem;
    -webkit-transition: margin-left 0.4s;
    transition: margin-left 0.4s;
  }

  :hover {
    color: ${(props) => props.theme.secondary.dark1};
  }

  :focus {
    outline: none;
  }
`;
// Hotel header Ends

// Hotel Details Starts
export const HotelDetails = styled.div`
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  font-size: 1.3rem;
  padding: 1.5rem;
  background-color: ${(props) => props.theme.secondary.light2};
  border-bottom: 0.1rem solid ${(props) => props.theme.secondary.light2};
  color: ${(props) => props.theme.secondary.dark2};
  line-height: 2rem;

  @media (max-width: 56.25em) {
    & {
      padding: 1rem;
    }
  }
  @media (max-width: 37.5em) {
    & {
      -webkit-box-orient: vertical;
      -webkit-box-direction: normal;
      -ms-flex-direction: column;
      flex-direction: column;
    }
  }
`;
export const HotelDescription = styled.div`
  background-color: ${(props) => props.theme.secondary.white};
  -webkit-box-shadow: 0 2rem 5rem rgba(0, 0, 0, 0.07);
  box-shadow: 0 2rem 5rem rgba(0, 0, 0, 0.07);
  -webkit-box-flex: 0;
  -ms-flex: 0 0 60%;
  flex: 0 0 60%;
  margin-right: 4.5rem;
  padding: 3.5rem;

  @media (max-width: 56.25em) {
    & {
      padding: 2rem;
      margin-right: 3rem;
    }
  }

  @media (max-width: 37.5em) {
    & {
      margin-right: 0;
      margin-bottom: 3rem;
    }
  }
`;
export const TextParahs = styled.p`
  :not(:last-of-type) {
    margin-bottom: 3rem;
  }
`;
export const DetailList = styled.ul`
  margin: 3rem 0rem;
  list-style: none;
  padding: 3rem 0rem;
  border-bottom: 0.1rem solid ${(props) => props.theme.secondary.light2};
  border-top: 0.1rem solid ${(props) => props.theme.secondary.light2};
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -ms-flex-wrap: wrap;
  flex-wrap: wrap;

  & li {
    -webkit-box-flex: 50%;
    -ms-flex: 50%;
    flex: 50%;
    margin-bottom: 1rem;

    ::before {
      content: "";
      display: inline-block;
      height: 1rem;
      width: 1rem;
      margin-right: 0.7rem;
      background-color: ${(props) => props.theme.primary.main};
    }
  }
`;
//  Reccomendation Section
export const RecommendedSection = styled.div`
  font-size: 1.3rem;
  color: ${(props) => props.theme.secondary.dark3};
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;

  & > p {
    margin-right: auto;
  }

  & > div {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
  }

  & img {
    -webkit-box-sizing: content-box;
    box-sizing: content-box;
    height: 4rem;
    border-radius: 50%;
    border: 0.3rem solid ${(props) => props.theme.secondary.white};

    :not(:last-child) {
      margin-right: -1.8rem;
    }
  }
`;
// Hotel Details Ends

// Reviews Section
export const UserReview = styled.div`
  -webkit-box-flex: 1;
  -ms-flex: 1;
  flex: 1;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
  -ms-flex-direction: column;
  flex-direction: column;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;

  & figure {
    background-color: ${(props) => props.theme.secondary.white};
    -webkit-box-shadow: 0 2rem 5rem rgba(0, 0, 0, 0.07);
    box-shadow: 0 2rem 5rem rgba(0, 0, 0, 0.07);
    padding: 3rem;
    margin-bottom: 3.5rem;
    position: relative;
    overflow: hidden;

    ::before {
      content: "";
      position: absolute;
      line-height: 1;
      top: -2.75rem;
      left: -0.9rem;
      font-size: 20rem;
      z-index: 1;
      font-family: sans-serif;
      color: ${(props) => props.theme.secondary.light3};
    }

    @media (max-width: 56.25em) {
      & {
        margin-bottom: 3rem;
        padding: 2rem;
      }
    }
  }

  & blockquote {
    z-index: 10;
    position: relative;
  }

  & figcaption {
    margin-top: 2rem;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
  }

  & img {
    border-radius: 50%;
  }

  & .review_box {
    margin-right: auto;

    & p:first-child {
      font-size: 1.2rem;
      text-transform: uppercase;
      font-weight: 400;
    }
    & p:last-child {
      font-size: 1rem;
      color: ${(props) => props.theme.secondary.dark3};
    }
  }

  & .review_rating {
    color: ${(props) => props.theme.primary.main};
    font-size: 2.2rem;
    font-weight: 300;
  }

  & div:first-child {
    margin-right: 2rem !important;
  }
`;
// Reviews Section ends

// CTA Starts
export const CtaBtnSection = styled.div`
  padding: 3.5rem 0;
  text-align: center;
  color: ${(props) => props.theme.secondary.dark3};

  & h2 {
    text-transform: uppercase;
    font-size: 1.8rem;
    font-weight: 300;
    margin-bottom: 2.5rem;
    line-height: 2.5rem;
  }

  @media (max-width: 56.25em) {
    & {
      padding: 2.5rem 0;
    }
  }
`;
export const VisibleAnimatedBtn = styled.button`
  font-size: 1.3rem;
  border: none;
  font-weight: 300;
  text-transform: uppercase;
  position: relative;
  border-radius: 100px;
  overflow: hidden;
  background: ${(props) => props.theme.primary.light};
  color: ${(props) => props.theme.secondary.white};
  cursor: pointer;

  > * {
    height: 100%;
    width: 100%;
    -webkit-transition: all 0.3s;
    transition: all 0.3s;
    display: inline-block;
  }

  :focus {
    outline: none;
    -webkit-box-shadow: 0 2rem 5rem rgba(0, 0, 0, 0.07);
    box-shadow: 0 2rem 5rem rgba(0, 0, 0, 0.07);
  }

  :hover {
    background: ${(props) => props.theme.primary.main};

    & span:last-child {
      top: 0;
    }
    & span:first-child {
      transform: translateY(100%);
    }
  }

  & span:first-child {
    padding: 2rem 7.5rem;
  }

  & span:last-child {
    padding: 2rem 0rem;
    position: absolute;
    left: 0;
    top: 0;
    top: -100%;
  }
`;
// CTA Ends

// Rooms Page Starts
export const RoomsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 3rem;
  height: 100%;
  margin: 2rem;

  a {
    text-decoration: none;
  }
  @media (max-width: 700px) {
    grid-template-columns: repeat(2, 1fr);
  }
  @media (max-width: 440px) {
    grid-template-columns: repeat(2, 1fr);
    margin: 1rem;
    grid-gap: 0.5rem;
  }
  @media (max-width: 360px) {
    grid-template-columns: repeat(1, 1fr);
    margin: 3rem;
    grid-gap: 2rem;
  }
`;

// Rooms Card
export const RoomWrapper = styled.div`
  user-select: none;
  cursor: pointer;
  grid-row: auto;

  & > div {
    background-image: url(${(props) => props.url});
    background-size: cover;
    background-position: top;
    backface-visibility: hidden;
    height: 100%;
    border-radius: 0.5rem;
    position: relative;
    overflow: hidden;

    & > div {
      transform: translateX(-100rem);
    }

    &:hover {
      & > div {
        animation-name: ${backgroundAnimate};
        animation-delay: 0.1s;
        animation-duration: 1s;
        animation-fill-mode: forwards;
        min-height: 100%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;

        & h3 {
          text-align: center;
          overflow-wrap: break-word;
          color: ${(props) => props.theme.secondary.white};
        }
      }
      & h4 {
        animation-name: ${tranformSide};
        animation-delay: 0.1s;
        animation-duration: 1s;
        animation-fill-mode: forwards;
      }
    }

    & h4 {
      display: inline-block;
      position: absolute;
      bottom: 1rem;
      right: 0rem;
      padding: 0.5rem 1.2rem;
      max-width: 80%;
      background-color: ${(props) => props.theme.primary.light};
      font-size: 1.5rem;
      backface-visibility: hidden;
      color: ${(props) => props.theme.secondary.white};
    }
  }
`;
export const RatingContainer = styled.div`
  font-size: ${(props) => props.fontSize}rem;
  margin: ${(props) => props.marginTop}rem 0rem;
  color: ${(props) => props.color};
  display: flex;
  flex-direction: ${(props) => props.direction};
  justify-content: space-around;
  align-items: center;

  & span {
    margin-left: 0.3rem;
    font-size: 1.3rem;
    color: ${(props) => props.textColor || props.theme.secondary.light1};
  }
`;
// Rooms Page Ends

// NO DATA FOUND
export const NoDataFound = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  flex: 1;
  font-size: 3rem;
  color: ${(props) => props.theme.primary.dark};
  font-family: "Prompt";
`;

// Carousel
export const CarouselContainer = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  align-items: center;
  position: relative;

  & > div {
    position: relative !important;
    width: 100%;
    display: flex;
    justify-content: space-between;
    padding: 1rem;
    background-color: ${props => props.theme.secondary.dark1};

    & svg{
      font-size: 2rem;
      color: ${props => props.theme.secondary.light1};
    }
  }
  & img {
    position: relative !important;
    height: auto !important;
  }
`;
export const AboutHotel = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);

  & div{
    :nth-child(2){
      grid-row: 1 2;
    }
  }
`;
