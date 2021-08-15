import styled, { createGlobalStyle } from "styled-components";

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
`;

//  Navbar Starts
export const NavHeader = styled.div`
  font-size: 1.4rem;
  background-color: ${(props) => props.theme.secondary.white};
  height: 6rem;
  border-bottom: 0.1rem solid ${(props) => props.theme.secondary.light2};
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media (max-width: 31.25em) {
    & {
      flex-wrap: wrap;
      height: 11rem;
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
  min-height: 60.7rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
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
export const SidebarListItem = styled.li`
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

// Hotel header
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
export const LocationBtn = styled.button`
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
