import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import "./Translation.ts";
import { ThemeContextProvider } from "./theme/ThemeContextProvider.tsx";
import global_en from "./translations/en/global.json";
import global_es from "./translations/es/global.json";
import i18next from "i18next";
import { I18nextProvider } from "react-i18next";

i18next.init({
  interpolation: { escpeValue: false },
  lng: "es",
  resources: {
    es: {
      global: global_es,
    },

    en: {
      global: global_en,
    },
  },
});

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ThemeContextProvider>
      <I18nextProvider i18n={i18next}>
        <App />
      </I18nextProvider>
    </ThemeContextProvider>
  </React.StrictMode>
);
