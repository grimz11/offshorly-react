import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import { AddTodo } from "./components/add.component";
import { ListToDo } from "./components/list.component";
import { useStyles } from "./styles";

export const HomeScene = () => {
  const classes = useStyles();

  return (
    <div className={classes.container}>
      <Typography variant="h3" mt={5} mb={3}>
        Todo App
      </Typography>
      <Grid container spacing={2}>
        <Grid item sm={6} xs={12}>
          <AddTodo />
        </Grid>
        <Grid item sm={6} xs={12}>
          <ListToDo />
        </Grid>
      </Grid>
    </div>
  );
};
