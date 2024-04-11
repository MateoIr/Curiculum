import { Box, Typography } from "@mui/material";

const CardLenguge = ({ img, textLenguage}) => {
  const style = {
    darkMode: {
      pt: 2,
      bgcolor: 'secondary.dark',
      '&:hover': {
        bgcolor: 'secondary.main',
      },
      color: "#D7D6D6",
      width: 440,
      borderRadius: 2,
      m: 1,
      boxShadow: "0 4px 6px rgba(0, 0, 0, 0.8)",
      display: "flex",
      flexFlow: "column",
      justifyContent: "space-between",
    }
  };

  return (
    <>
      <Box sx={style.darkMode} variant="contained" backgeoud="paper">
        <Box>
          <img
            src={img}
            style={{ height: "65px", borderRadius: "3px" }}
          />
        </Box>
        <Box>
          <Typography variant="h7">{textLenguage}</Typography>
        </Box>
      </Box>
    </>
  );
};

export default CardLenguge;
