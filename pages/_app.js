import { ThemeProvider } from "styled-components";
import { theme } from "../utils/themes/Theme";
import { GlobalStyles } from "../components/StyleComponents";
import { wrapper } from "../redux/store";
  import 'react-toastify/dist/ReactToastify.css';

function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Component {...pageProps} />
    </ThemeProvider>
  );
}

export default wrapper.withRedux(MyApp);
