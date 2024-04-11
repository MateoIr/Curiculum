import TranslateIcon from "@mui/icons-material/Translate";
import { useTranslation } from "react-i18next";
import { IconButton } from "@mui/material";

const Translate = () => {
  const [t, i18n] = useTranslation("global");
  const handleChangeLanguage = (lang) => {
    i18n.changeLanguage(lang);
  };

  const language = i18n.language;
  return (
    <>
      <IconButton sx={{ ml: 1 }} color="inherit">
        {language === "es" ? (
          <TranslateIcon color="secondary" onClick={() => handleChangeLanguage("en")} />
        ) : (
          <TranslateIcon color="secondary" onClick={() => handleChangeLanguage("es")} />
        )}
      </IconButton>
    </>
  );
};

export default Translate;
