import { Grid } from "@mui/material";
import Travsky from "../../imgs/Travsky.jpg";
import ProjetsCard from "./ProjetsCard";
import React from "../../imgs/react.png";
import { useTranslation } from "react-i18next";

import MaterialUI from "../../imgs/MaterialUI.png";
const Projets = () => {
  const [t] = useTranslation("global");
  return (
    <Grid
      container={12}
      sx={{
        pb: 2,
        display: "flex",
        justifyContent: "center",
        borderBottom: "1px solid grey",
      }}
    >
      <Grid item lg={8} md={10} xs={12}>
        <ProjetsCard
          image={Travsky}
          goLink="http://vps-3991849-x.dattaweb.com:5173/"
          github="https://github.com/MatiasAbregu/Repositorio-Frontend-Grupo2.git"
          languges={[React, MaterialUI]}
          description={t("travsky.message")}
        />
      </Grid>
    </Grid>
  );
};

export default Projets;
