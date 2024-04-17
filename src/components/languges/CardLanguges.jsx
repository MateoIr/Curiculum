import { Box, Typography } from "@mui/material";
import "./Languages.css";
const CardLenguge = ({ img, textLenguage, lvl }) => {
  return (
    <>
      <Box className="cardBox" variant="contained">
        <Box className="cardContainer">
          <Box className="frontCard" sx={{ bgcolor: "secondary.dark" }}>
            <Box>
              <img src={img} style={{ height: "65px" }} />
            </Box>
            <Box>
              <Typography color="textContrast">{textLenguage}</Typography>
            </Box>
          </Box>
          <Box className="backCard" sx={{ bgcolor: "secondary.light" }}>
            <Box>
              <Typography variant="h5" color="textSecondary">
                {lvl}
              </Typography>
            </Box>
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default CardLenguge;
