import { ThemeProvider } from "styled-components";
import { theme } from "../utils/themes/Theme";
import { GlobalStyles } from "../components/StyleComponents";

function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Component {...pageProps} />
    </ThemeProvider>
  );
}

export default MyApp;
