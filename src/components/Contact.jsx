import { Box, Typography, Grid, Tooltip } from "@mui/material";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import MailIcon from "@mui/icons-material/Mail";
import SendIcon from "@mui/icons-material/Send";
import ContentCopyIcon from "@mui/icons-material/ContentCopy";

const Contact = () => {
  const contactInfo = [
    {
      name: "Linkeding",
      linkPage: "https://www.linkedin.com/in/mateo-iriso-265174290/",
      logo: (
        <LinkedInIcon
          sx={{ color: "secondary.contrastText", textAlign: "center" }}
        />
      ),
      link: "linkedin.com/in/mateo-iriso-265174290/",
    },
    {
      name: "Github",
      linkPage: "https://github.com/MateoIr",
      logo: (
        <GitHubIcon
          sx={{ color: "secondary.contrastText", textAlign: "center" }}
        />
      ),
      link: "https://github.com/MateoIr",
    },
  ];
  const styles = {
    conteiner: {
      textDecoration: "none",
      ml: { sm: 2, md: 0 },
      display: "flex",
      flexFlow: "row",
      justifyContent: { sm: "flex-start", md: "center" },
      alignItems: "center",
    },
    conteinerMail: {
      display: "flex",
      flexFlow: "row",
      justifyContent: "center",
      alignItems: "center",
    },
    logoConteiner: {
      backgroundColor: "grey",
      width: 40,
      height: 40,
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      borderRadius: 20,
      mr: 1,
    },
    textConteiner: {
      display: "flex",
      flexFlow: "column",
      justifyContent: "end",
      alignItems: "flexStart",
      justifyItems: "initial",
    },
  };

  const copiarTexto = () => {
    // Seleccionar el campo de texto
    const inputElement = document.createElement("input");
    inputElement.value = "mateoirso@gmail.com";
    document.body.appendChild(inputElement);

    // Seleccionar el texto dentro del campo de texto y copiarlo al portapapeles
    inputElement.select();
    document.execCommand("copy");

    // Remover el campo de texto temporal
    document.body.removeChild(inputElement);
  };

  return (
    <Box sx={{ bgcolor: "secondary.contrast" }}>
      <Grid container spacing={4} mt={3} mb={0} pb={1}>
        <Grid item xs={12} sx={styles.conteinerMail}>
          <Box sx={styles.logoConteiner}>
            <MailIcon
              sx={{ color: "secondary.contrastText", textAlign: "center" }}
            />
          </Box>
          <input type="text" value="mateoiriso@gmail.com"></input>
          <SendIcon
            sx={{ color: "secondary.contrastText", m: 2, cursor: "pointer" }}
          />
          <Tooltip title="copy mail" arrow>
            <ContentCopyIcon
              sx={{ color: "secondary.contrastText", cursor: "pointer" }}
              onClick={copiarTexto}
            />
          </Tooltip>
        </Grid>
        {contactInfo.map((item, index) => (
          <Grid
            item
            key={index}
            sx={styles.conteiner}
            xs={12}
            md={6}
            component="a"
            href={item.linkPage}
          >
            <Box sx={styles.logoConteiner}>{item.logo}</Box>
            <Box sx={styles.textConteiner}>
              <Typography
                color="secondary.contrastText"
                sx={{ textAlign: "left" }}
              >
                {item.name}
              </Typography>
              <Typography color="secondary.contrastText2" sx={{display:{xs:"none",md:"flex"}}}>
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
