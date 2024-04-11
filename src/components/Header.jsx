import { Box } from "@mui/material";
import { NightModeToggle } from "./NightModeToggle";
import Translate from "./Translate";
import DownloadButton from "./DownloadButton";

export const Header = () => {
  const style = {
    moonStyle: { pr: 1, color: "#D7D6D6" },
    sunStyle: { pr: 1, color: "#242424" },
    lenguagemodeDark: { borderLeft: "2px solid grey", pl: 1, color: "#D7D6D6" },
    lenguagemodeLight: {
      borderLeft: "2px solid grey",
      pl: 1,
      color: "#242424",
    },
    conteinerBoxDark: {
      pt: 0.5,
      pr: 3,
      margin: 0,
      display: "flex",
      flexFlow: "row",
      justifyContent: "space-between",
    },
    conteinerBoxLight: {
      backgroundColor: "#D7D6D6",
      p: 0.5,
      pr: 5,
      margin: 0,
      display: "flex",
      flexFlow: "row",
      justifyContent: "end",
    },
    download: {m:1},
  };
  return (
    <>
      <Box 
        style={{
          // background: "rgb(24,24,24)",
          // background: "linear-gradient(180deg, rgba(24,24,24,1) 0%, rgba(255,255,255,0.0) 100%)",
          position: "fixed",
          width: "100%",
        }}
      >
        <Box sx={style.conteinerBoxDark}>
          <Box sx={style.download}>
            <DownloadButton />
          </Box>
          <Box>
          <NightModeToggle />
          <Translate />
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default Header;
