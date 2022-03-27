import { Theme } from "@mui/material";
import { makeStyles } from "@mui/styles";

export const useStyles = makeStyles((theme: Theme) => {
  return {
    container: {
      backgroundColor: theme.palette.primary.light,
      height: "100vh",
      padding: 30,
      [theme.breakpoints.down("sm")]: {
        padding: 40,
        width: "unset",
      },
    },
  };
});
