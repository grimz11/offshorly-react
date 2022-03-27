import { createTheme } from "@mui/material/styles";

const { palette } = createTheme();
export const defaultTheme = {
  palette: {
    primary: {
      light: "#e3f2fd",
      main: "#90caf9",
      dark: "#42a5f5",
    },
    secondary: {
      light: "#f3e5f5",
      main: "#ce93d8",
      dark: "#ab47bc",
    },
    error: {
      light: "#e57373",
      main: "#f44336",
      dark: "#d32f2f",
    },
    success: {
      light: "#81c784",
      main: "#66bb6a",
      dark: "#388e3c",
    },
    background: {
      paper: "#FFFFFF",
    },
  },
};

export const ThemeUniverse = {
  default: defaultTheme,
};
