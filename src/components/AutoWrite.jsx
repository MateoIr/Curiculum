import { useTypewriter, Cursor } from "react-simple-typewriter";
import { Typography } from "@mui/material";

const AutoWrite = ({ word }) => {
  const [text] = useTypewriter({
    words: [word],
    loop: {},
  });
  return (
    
      <Typography variant="h4" color="secondary" >
        {text}
        <Cursor />
      </Typography>
    
  );
};

export default AutoWrite;
