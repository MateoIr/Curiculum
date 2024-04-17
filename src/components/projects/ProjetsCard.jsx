import { Box, Grid, Typography } from "@mui/material";
import LaunchIcon from "@mui/icons-material/Launch";
import GitHubIcon from "@mui/icons-material/GitHub";
import { useTranslation } from "react-i18next";

const ProjetsCard = ({ image, goLink, github, languges, description }) => {
  const [t] = useTranslation("global");
  return (
    <Box sx={{}}>
      <Box sx={{ py: 2, backgroundColor: "grey", m: 6, borderRadius: 5 }}>
        <img
          src={image}
          alt=""
          style={{ width: "95%", borderRadius: 5, border: "1px solid white" }}
        />
        <Box sx={{ display: "flex", alignItems: "center" }}>
          <Typography variant="body2" sx={{ p: 2 }}>
            <b>{t("proyects.languages")}</b>
          </Typography>
          {languges.map((item, index) => (
            <img src={item} alt="" style={{ width: "10%" }} />
          ))}
        </Box>
        <Typography variant="body2" sx={{ p: 2, textAlign: "initial" }}>
          <b>{t("proyects.description")}</b>
          {description}
        </Typography>
      </Box>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-around",
          marginX: 3,
          borderBottom: "1.2px solid #D7D6D6",
        }}
      >
        <a href={goLink} style={{ textDecoration: "none" }}>
          <LaunchIcon color="secondary" />
        </a>
        <a href={github}>
          <GitHubIcon color="secondary" />
        </a>
      </Box>
    </Box>
  );
};

export default ProjetsCard;
