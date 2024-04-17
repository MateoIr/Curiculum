import { Box } from "@mui/material";
import { NightModeToggle } from "./NightModeToggle";
import Translate from "./Translate";
import DownloadButton from "./DownloadButton";
import "./Header.css";
export const Header = () => {
  return (
    <>
      <Box className="container">
        <Box className="conteinerBox">
          <Box className="download">
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
