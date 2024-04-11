import { Grid } from "@mui/material";
import Travsky from "../imgs/Travsky.jpg";
import ProjetsCard from "./ProjetsCard";
const Projets = () => {
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
      <ProjetsCard
        image={Travsky}
        goLink="http://vps-3991849-x.dattaweb.com:5173/"
        github="https://github.com/MatiasAbregu/Repositorio-Frontend-Grupo2.git"
      />
    </Grid>
  );
};

export default Projets;
