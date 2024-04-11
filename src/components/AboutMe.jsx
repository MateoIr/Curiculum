import { Grid, Box, Typography } from "@mui/material";
import foto_prefil_cv from "../imgs/foto_prefil_cv.jpg";

import corchete from "../imgs/corchete.png";
const AboutMe = ({ text }) => {
  const style = {
    container: { pt: 8, pb: 2, borderBottom: "1px solid grey" },
    image: {
      width: "180px",
      borderRadius: "100px",
      boxShadow: "0px 0px 20px  rgba(3, 155, 299, 0.8)",
    },
    textAboutMe: {
      pt: { xs: 4, md: 0 },
      paddingX: { xs: 3, md: 0 },
      fontSize: { xs: 20, md: 25 },
    },
    corchete: { width: 50 },
    corchete2: {
      width: 50,
      transform: "rotate(180deg)",
    },
  };

  return (
    <>
      <Grid container sx={style.container}>
        <Grid item md={6} xs={12} sx={{display: "flex", flexFlow: "row", alignItems: "center" ,justifyContent:"center"}}>
          <img src={corchete} alt="profile image" style={style.corchete} />
          <Box
            sx={{ display: "flex", flexFlow: "column", alignItems: "center" }}
          >
            <img src={foto_prefil_cv} alt="profile image" style={style.image} />
            <Typography color="secondary.Dark">Junior Dev</Typography>
          </Box>
          <img src={corchete} alt="profile image" style={style.corchete2} />
        </Grid>

        <Grid item md={6} xs={12} sx={style.textAboutMe}>
          {text}
        </Grid>
      </Grid>
    </>
  );
};

export default AboutMe;
