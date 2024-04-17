import { Grid } from "@mui/material";
import CardLenguge from "./CardLanguges";
import languagesList from "./Languges.json";
import "./Languages.css";

const Languages = () => {
  return (
    <Grid container sx={{ paddingX: { xs: 6, md: 12 } }} className="languages">
      {languagesList.map((item, index) => (
        <Grid key={index} item xs={6} md={3} lg={2} className="languageItem">
          <CardLenguge
            img={item.img}
            textLenguage={item.textLenguage}
            lvl={item.lvl}
          />
        </Grid>
      ))}
    </Grid>
  );
};

export default Languages;
