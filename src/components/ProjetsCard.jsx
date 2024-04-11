import { Box, Grid } from "@mui/material";
import LaunchIcon from "@mui/icons-material/Launch";
import GitHubIcon from "@mui/icons-material/GitHub";

const ProjetsCard = ({ image, goLink, github }) => {
  return (
    <Grid item sm={6}>
      <img src={image} alt="" style={{ width: "100%" }} />
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-around",
          marginX: 3,
          borderBottom: "1.2px solid #D7D6D6",
        }}
      >
        <a href={goLink} style={{textDecoration:"none"}}>
          <LaunchIcon color="secondary" />
        </a>
        <a href={github}>
          <GitHubIcon color="secondary" />
        </a>
      </Box>
    </Grid>
  );
};

export default ProjetsCard;
