import "./App.css";
import { ThemeProvider, CssBaseline, Container } from "@mui/material";
import { useThemeContext } from "./theme/ThemeContextProvider.tsx";
import { Header } from "./components/header/Header.jsx";
import { useTranslation } from "react-i18next";
import AboutMe from "./components/AboutMe.jsx";
import Languages from "./components/languges/Languages.jsx";
import AutoWrite from "./components/AutoWrite.jsx";
import Projets from "./components/projects/Projets.jsx";
import Contact from "./components/footer/Contact.jsx";
const App = () => {
  const { theme } = useThemeContext();
  const [t] = useTranslation("global");

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <body>
        <header>
          <Header />
        </header>
        <Container>
          <section>
            <AboutMe text={t("AboutMe.message")} />
          </section>
          <section>
            <AutoWrite word={t("AutoWrite.languges")}></AutoWrite>
            <Languages />
          </section>
          <section>
            <AutoWrite word={t("AutoWrite.Proyects")}></AutoWrite>
            <Projets />
          </section>
        </Container>
        <footer>
          <Contact />
        </footer>
      </body>
    </ThemeProvider>
  );
};

export default App;
