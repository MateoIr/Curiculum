import { Grid } from "@mui/material";
import CSS3 from "../imgs/CSS3.png";
import HTML5 from "../imgs/HTML5.png";
import JS from "../imgs/javascript.png";
import React from "../imgs/react.png";
import Redux from "../imgs/Redux.png";
import MaterialUI from "../imgs/MaterialUI.png";
import CardLenguge from "./CardLenguge";

const Lenguages = () => {
  const imagesData = [
    { img: CSS3, textLenguage: "CSS" },
    { img: HTML5, textLenguage: "HTML5" },
    { img: JS, textLenguage: "Javascript" },
    { img: React, textLenguage: "React" },
    { img: Redux, textLenguage: "Redux" },
    { img: MaterialUI, textLenguage: "Material UI" },
  ];
  const style = {
    conteiner: {
      paddingX: {xs:6,md:12},
      display: "flex",
      justifyContent: "center",
      borderBottom: "1px solid grey",
      pb: 2,
    },
    item:{ pt: 5, justifyContent: "center", display: "flex" }
  };

  return (
    <Grid container sx={style.conteiner}>
      {imagesData.map((item, index) => (
        <Grid
          key={index}
          item
          xs={6}
          md={2}
          sx={style.item}
        >
          <CardLenguge
            img={item.img}
            textLenguage={item.textLenguage}
          />
        </Grid>
      ))}
    </Grid>
  );
};

export default Lenguages;
