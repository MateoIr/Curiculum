import { PaletteMode } from "@mui/material";
import {
  amber,
  cyan,
  deepOrange,
  grey,
  lightBlue,
  red,
} from "@mui/material/colors";
import { dark } from "@mui/material/styles/createPalette";
import { Component } from "react";

const theme = {
  palette: {
    primary: amber,
  },
};

export const getDesignTokens = (mode: PaletteMode) => ({
  typography: {
    fontFamily: ["Source Code Pro", "monospace"].join(","),
  },
  palette: {
    mode,
    ...(mode === "light"
      ? {
          primary: grey,
          divider: amber[900],
          background: {
            default: "#fff",
            paper: grey[500],
          },
          text: {
            primary: "black",
            secondary: "#fff",
            contrast: "black",
          },
          secondary: {
            main: "#212121",
            light: grey[600],
            dark: grey[800],
            contrast: grey[900],
            contrastText: "#ffff",
            contrastText2: grey[700],
          },
        }
      : {
          primary: grey[0],
          divider: deepOrange[700],
          background: {
            default: grey[800],
            paper: grey[500],
          },
          text: {
            primary: "#fff",
            secondary: "black",
            contrast: "#fff",
          },
          secondary: {
            main: lightBlue[500],
            light: lightBlue[300],
            dark: lightBlue[900],
            contrast: grey["900"],
            contrastText: "#ffff",
            contrastText2: grey[700],
          },
        }),
  },
});

export default theme;
