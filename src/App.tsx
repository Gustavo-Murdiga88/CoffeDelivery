import { ThemeProvider } from "styled-components";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { RequestsContextProvider } from "./context/contextProducts";

import { DefaultTheme } from "./style/theme";
import { GlobalStyled } from "./style/global";

import { Router } from "./routes";

function App() {
  return (
    <ThemeProvider theme={DefaultTheme}>
      <RequestsContextProvider>
        <ToastContainer />
        <Router />
      </RequestsContextProvider>
      <GlobalStyled />
    </ThemeProvider>
  );
}

export default App;
