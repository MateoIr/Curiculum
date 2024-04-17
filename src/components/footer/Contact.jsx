import { Box, Typography, Grid, Tooltip } from "@mui/material";
import SendIcon from "@mui/icons-material/Send";
import ContentCopyIcon from "@mui/icons-material/ContentCopy";
import "./Contact.css";
import Icon from "./Icon";
import contactList from "./Contact.json";
import CopyTextButton from "./CopyTextButton";
const Contact = () => {
  return (
    <Box sx={{ bgcolor: "secondary.contrast" }}>
      <Grid container spacing={4} mt={3} mb={0} pb={1}>
        <Grid item xs={12} className="conteinerMail">
          <Box className="logoConteiner">
            <Icon name={contactList.mail.name} />
          </Box>
          <input type="text" value={contactList.mail.linkPage}></input>
          <SendIcon
            sx={{ color: "secondary.contrastText", m: 2, cursor: "pointer" }}
          />
          <Tooltip title="copy mail" arrow>
            <ContentCopyIcon
              sx={{ color: "secondary.contrastText", cursor: "pointer" }}
              onClick={CopyTextButton}
            />
          </Tooltip>
        </Grid>
        {contactList.others.map((item, index) => (
          <Grid
            item
            key={index}
            sx={{
              justifyContent: { sm: "flex-start", md: "center" },
              ml: { sm: 2, md: 0 },
            }}
            xs={12}
            md={6}
            component="a"
            href={item.linkPage}
            className="conteiner"
          >
            <Box className="logoConteiner">
              <Icon name={item.icon} />
            </Box>
            <Box className="textConteiner">
              <Typography
                sx={{ color: "secondary.contrastText", textAlign: "left" }}
              >
                {item.name}
              </Typography>
              <Typography
                sx={{
                  color: "secondary.contrastText2",
                  display: { xs: "none", md: "flex" },
                }}
              >
                {item.link}
              </Typography>
            </Box>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default Contact;
