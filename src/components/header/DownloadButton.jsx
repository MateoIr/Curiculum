import { IconButton, Box } from "@mui/material";
import CloudDownloadIcon from "@mui/icons-material/CloudDownload";
import OpenInNewIcon from "@mui/icons-material/OpenInNew";

const DownloadButton = () => {
  return (
    <Box sx={{ width: 40 }}>
      CV
      <br></br>
      <a href="./Iriso_Mateo.pdf" target="_blank">
        <IconButton aria-label="delete">
          <OpenInNewIcon />
        </IconButton>
      </a>
      <a href="./Iriso_Mateo.pdf" download>
        <IconButton aria-label="delete">
          <CloudDownloadIcon />
        </IconButton>
      </a>
    </Box>
  );
};

export default DownloadButton;
