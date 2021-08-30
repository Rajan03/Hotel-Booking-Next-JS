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
  overflow-y: scroll;

  @media (max-width: 460px) {
    min-height: unset;
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
  min-height: 90vh;
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
    font-weight: 500;
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
  font-size: 1.2rem;
  padding: 1.5rem;
  background-color: ${(props) => props.theme.secondary.light2};
  border-bottom: 0.1rem solid ${(props) => props.theme.secondary.light2};
  color: ${(props) => props.theme.secondary.dark1};
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
  margin: ${(props) => props.my || 3}rem 0rem;
  padding: ${(props) => props.py || 3}rem 0rem;
  list-style: none;
  border-bottom: 0.1rem solid ${(props) => props.theme.secondary.light2};
  border-top: 0.1rem solid ${(props) => props.theme.secondary.light2};
  background-color: ${(props) => props.bg && props.theme.secondary.light2};
  padding: ${(props) => props.bg && "1rem"};
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
    font-size: 1.3rem;
    color: ${(props) => props.spanned && props.theme.primary.main};
    font-weight: ${(props) => props.spanned && 500};

    & span {
      font-weight: 700;
      color: ${(props) => props.spanned && props.theme.secondary.dark1};
    }
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
  grid-template-rows: repeat(2, 50%);
  min-height: 100%;
  padding: 2rem 2rem 0rem 2rem;

  a {
    text-decoration: none;
  }

  @media (max-width: 700px) {
    grid-template-rows: repeat(${(props) => props.rows / 2}, 50%);
    grid-template-columns: repeat(2, 50%);
  }

  @media (max-width: 460px) {
    grid-template-columns: 100%;
    grid-template-rows: repeat(${(props) => props.rows}, 100%);
    margin: 1rem;
    grid-gap: 2rem;
  }
`;

// Rooms Card
export const RoomWrapper = styled.div`
  user-select: none;
  cursor: pointer;
  grid-row: auto;
  max-width: 90%;
  max-height: 90%;

  @media (max-width: 460px) {
    max-width: 100%;
    min-height: 30vh;
  }

  &:hover {
    & > div {
      min-height: 100%;

      & > div {
        animation-name: ${backgroundAnimate};
        animation-delay: 0.1s;
        animation-duration: 1s;
        animation-fill-mode: forwards;
        min-height: inherit;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        backface-visibility: hidden;

        & h3 {
          text-align: center;
          color: ${(props) => props.theme.secondary.white};
        }
      }
    }
    & h4 {
      animation-name: ${tranformSide};
      animation-delay: 0.1s;
      animation-duration: 1s;
      animation-fill-mode: forwards;
    }
  }

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
    margin-left: 0.4rem;
    font-size: 1.3rem;
    color: ${(props) =>
      props.textColor
        ? props.theme.secondary.dark1
        : props.theme.secondary.light1};
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

export const HotelTitle = styled.div`
  border-bottom: 0.1rem solid ${(props) => props.theme.secondary.light2};
  display: flex;
  justify-content: space-between;
  align-items: center;

  & h1 {
    font-size: 2.25rem;
    font-weight: 500;
    text-transform: uppercase;
    letter-spacing: 1px;
    line-height: 2rem;
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;
    padding: 1.5rem 3rem;
    flex: 70%;

    @media (max-width: 37.5em) {
      & {
        font-size: 1.8rem;
        padding: 1.25rem 1rem;
        line-height: 1.9rem;
      }
    }
  }

  & > div {
    flex: 1;
    align-self: flex-start;
  }
`;
export const AddressRatings = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  padding: 1rem 3rem 0.3rem 3rem;

  & > p {
    color: ${(props) => props.theme.secondary.dark2};
    line-height: 2rem;
    font-size: 1.4rem;
    margin-right: 2rem;
  }
  & > div {
    @media (max-width: 450px) {
      display: none;
    }
  }
`;
// Carousel
export const CarouselContainer = styled.div`
  /* min-height: 35rem; */
  & > div {
    background-image: url(${(props) => props.src});
    background-repeat: no-repeat;
    background-size: cover;
    object-fit: cover;
    background-position: top;
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    position: relative;
    padding: 1rem;

    & svg {
      font-size: 3rem;
      color: ${(props) => props.theme.secondary.white};
      cursor: pointer;
      @media (max-width: 700px) {
        color: ${(props) => props.theme.secondary.dark1};
      }
    }
    @media (max-width: 700px) {
      min-height: 13rem;
    }
  }
`;
export const AboutHotel = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);

  & p {
    padding: 0rem 2rem;

    & > h2 {
      font-size: 2.25rem;
      font-weight: 700;
      color: ${(props) => props.theme.secondary.main};
      border: 1px solid ${(props) => props.theme.secondary.light3};
      border-radius: 0.2rem;
      border-bottom: none;
      padding: 0.5rem 0.5rem 1.5rem 0.5rem;

      :not(:first-child) {
        margin-top: 3rem;
      }
    }
  }

  @media (max-width: 660px) {
    grid-template-columns: 1fr;
  }
`;
export const RoomBookBtn = styled.button`
  padding: 1rem 2rem;
  margin-right: 2rem;
  font-size: 1.3rem;
  border: none;
  font-weight: 300;
  text-transform: uppercase;
  position: relative;
  border-radius: 5px;
  overflow: hidden;
  flex: 10%;
  display: inline;
  background: ${(props) => props.theme.primary.light};
  color: ${(props) => props.theme.secondary.white};
  cursor: pointer;
  transition: all 0.2s linear;

  @media (max-width: 400px) {
    padding: 1rem;
  }

  :hover {
    background: ${(props) => props.theme.primary.main};
    box-shadow: 0rem 1px 0.3rem rgba(0, 0, 0, 0.3);
  }
`;
export const Filterbox = styled.div`
  padding: 1rem 2rem;
  border-bottom: 0.1rem solid ${(props) => props.theme.secondary.light2};
`;

export const DialogBox = styled.div`
  min-height: 100%;
  height: 100%;
  min-width: 100%;
  position: absolute;
  top: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 10;
  display: flex;
  justify-content: center;
  align-items: center;

  & > form {
    min-width: 40%;
    min-height: 50%;
    border-radius: 0.5rem;
    background-color: ${(props) => props.theme.secondary.light2};
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: flex-start;
    position: relative;
    box-shadow: 0 0 1rem ${(props) => props.theme.secondary.dark1};

    & > svg {
      position: absolute;
      top: -1rem;
      right: -1rem;
      font-size: 3rem;
      border-radius: 50%;
      cursor: pointer;
      background-color: ${(props) => props.theme.secondary.light2};
      color: ${(props) => props.theme.primary.dark};
    }
    & > div {
      margin: 0 auto;
      min-width: 60%;
      display: inline-block;

      & > div {
        display: flex;
        justify-content: center;
        align-items: center;

        :not(:first-child) {
          margin-top: 1rem;
        }

        & > span {
          flex: 40%;
          font-size: 1.3rem;
          font-weight: 700;
          letter-spacing: 0.2rem;
          color: ${(props) => props.theme.primary.dark};
        }
        & > select,
        & > input {
          text-align: start;
          flex: 60%;
          outline: none;
          border: none;
          font-weight: 500;
          padding: 0.5rem;
          border-radius: 0.3rem;
          box-shadow: 0 1rem 1rem ${(props) => props.theme.secondary.light2};
        }
        & > select {
          color: ${(props) => props.theme.secondary.black};
          background-color: ${(props) => props.theme.secondary.white};
        }
      }
    }
    & > button {
      border: none;
      outline: none;
      margin: 0 auto;
      padding: 1rem 2rem;
      border-radius: 0.3rem;
      background-color: ${(props) => props.theme.primary.main};
      color: ${(props) => props.theme.secondary.light1};
      font-size: 1.3rem;
      font-weight: 700;
      letter-spacing: 0.2rem;
      cursor: pointer;
      transition: all 0.2s linear;
      box-shadow: 0 0.1rem 0.9rem ${(props) => props.theme.secondary.dark3};

      :hover {
        background-color: ${(props) => props.theme.primary.dark};
      }
    }
  }
`;
export const LoginContainer = styled.div`
  height: 100vh;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;

  background-color: rgba(0, 0, 0,.1);
  padding: 3rem;

  & small {
    position: absolute;
    bottom: 1rem;
    right: 1rem;
    font-size: 1rem;
    font-weight: 600;
    color: ${(props) => props.theme.secondary.light1};
    display: inline-block;
  }
`;

export const LoginBox = styled.div`
  max-width: 100%;
  min-width: 100%;
  height: 100%;

  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  border-radius: 1rem;

  & > div {
    height: 100%;

    :first-child {
      flex: 70%;
      margin: 0 2rem;
      border-radius: 1rem;
      background: rgba(255, 255, 255, 0.8);
      background-image: url("https://res.cloudinary.com/dev-rajan/image/upload/v1626012610/Hotel-Management-App/hotel-2_yvhi1u.jpg");
      background-size: cover;
      background-repeat: no-repeat;
      background-position: top;

      & > div {
        width: 100%;
        height: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        background-color: rgba(0, 0, 0, 0.4);
      }
    }

    :nth-child(2) {
      flex: 30%;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      padding: 1rem;
      border-radius: 1rem;
      background: rgba(255, 255, 255, 0.7);

      & div {
        display: flex;
        align-items: center;

        & span {
          font-size: 1.6rem;
          font-weight: 800;
          color: ${(props) => props.theme.secondary.dark1};
          margin-top: 0.6rem;
          margin-left: 1rem;

          ::selection {
            background-color: ${(props) => props.theme.primary.main};
            color: ${(props) => props.theme.secondary.light1};
          }
        }
      }
    }

    & > form {
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      padding: 0 3rem;

      & span {
        margin: 1rem 0;
      }
      & label {
        font-weight: 600;
        color: ${(props) => props.theme.secondary.dark1};
        font-size: 1.2rem;

        ::selection {
          background-color: ${(props) => props.theme.primary.main};
          color: ${(props) => props.theme.secondary.light1};
        }
      }
      & input {
        display: block;
        min-width: 100%;
        border: none;
        outline: none;
        padding: 1rem;
        ::selection {
          background-color: ${(props) => props.theme.primary.main};
          color: ${(props) => props.theme.secondary.light1};
        }
        border-radius: 0.5rem;
        color: ${(props) => props.theme.secondary.dark1};
        background: ${(props) => props.theme.secondary.light2};
      }
      & button {
        margin: 2rem 0;
        padding: 0.9rem 0;
        background-color: ${(props) => props.theme.primary.main};
        color: ${(props) => props.theme.secondary.light1};
        font-size: 1.2rem;
        font-weight: 600;
        letter-spacing: 0.2rem;
        border: none;
        outline: none;
        border-radius: 0.5rem;
        cursor: pointer;
        box-shadow: 0 0.8rem 3rem rgba(0, 0, 0, 0.3);
        transform: scaleX(1.01);
        transition: all 0.2s linear;

        :hover {
          background-color: ${(props) => props.theme.primary.dark};
          box-shadow: 0 0.5rem 2rem rgba(0, 0, 0, 0.3);
          transform: scaleX(1.017);
        }
        :focus {
          transform: scaleX(1);
        }
      }
      & a {
        text-decoration: none;
        color: ${(props) => props.theme.primary.dark};
      }
    }
    & > p {
      font-size: 1.1rem;
      text-align: center;
      & a {
        text-decoration: none;
        color: ${(props) => props.theme.primary.dark};
      }
    }
  }
`;
