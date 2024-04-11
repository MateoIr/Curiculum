import {
  ThemeProvider,
  CssBaseline,
  Container,
  Typography,
} from "@mui/material";
import { useThemeContext } from "./theme/ThemeContextProvider.tsx";
import { Header } from "./components/Header.jsx";
import { useTranslation } from "react-i18next";
import "./App.css";
import AboutMe from "./components/AboutMe.jsx";
import Lenguages from "./components/Lenguages.jsx";
import AutoWrite from "./components/AutoWrite.jsx";

import Projets from "./components/Projets.jsx";
import Contact from "./components/Contact.jsx";
import DownloadButton from "./components/DownloadButton.jsx";
const App = () => {
  const { theme } = useThemeContext();
  const [t] = useTranslation("global");

  return (
    <>
      <ThemeProvider theme={theme}>
        <CssBaseline />

        <Header />
        <Container>
          <AboutMe text={t("AboutMe.message")} />
          <AutoWrite word={t("AutoWrite.lenguges")}></AutoWrite>
          <Lenguages />
          <AutoWrite word={t("AutoWrite.Proyects")}></AutoWrite>
          <Projets />
        </Container>
        <Contact />
      </ThemeProvider>
    </>
  );
};

export default App;
