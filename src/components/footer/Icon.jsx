import React from "react";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import MailIcon from "@mui/icons-material/Mail";

const style = { color: "secondary.contrastText", textAlign: "center" };
const Icon = ({ name }) => {
  switch (name) {
    case "GitHubIcon":
      return <GitHubIcon sx={style} />;
    case "LinkedInIcon":
      return <LinkedInIcon sx={style} />;
    case "Mail":
      return <MailIcon sx={style} />;
    default:
      return null;
  }
};

export default Icon;
