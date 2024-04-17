import { IconButton } from "@mui/material";
import { useThemeContext } from "../../theme/ThemeContextProvider";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import LightModeIcon from "@mui/icons-material/LightMode";

export const NightModeToggle = () => {
  const { mode, toggleColorMode } = useThemeContext();

  return (
    <IconButton sx={{ ml: 1 }} onClick={toggleColorMode}>
      {mode === "dark" ? (
        <LightModeIcon color="secondary" />
      ) : (
        <DarkModeIcon color="secondary" />
      )}
    </IconButton>
  );
};
