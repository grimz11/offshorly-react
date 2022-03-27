import * as React from "react";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import Checkbox from "@mui/material/Checkbox";
import DeleteIcon from "@mui/icons-material/Delete";

import { useStore } from "@stores/initializer.store";
import { Box } from "@mui/system";
import Tooltip from "@mui/material/Tooltip";
import ListItemIcon from "@mui/material/ListItemIcon";
import IconButton from "@mui/material/IconButton";
import { Typography } from "@mui/material";

export const ListToDo: React.FC<any> = () => {
  const [checked, setChecked] = React.useState([1]);
  const { todos, updateTodo, deleteTodo } = useStore();

  const handleToggle = (value: number) => () => {
    const newChecked = [...checked];

    setChecked(newChecked);
    updateTodo.mutateAsync(value);
  };

  return todos && todos.length > 0 ? (
    <List sx={{ width: "100%", bgcolor: "background.paper", borderRadius: 2 }}>
      {todos?.map((item) => {
        const labelId = `checkbox-list-secondary-label-${item}`;
        const labelId2 = `delete-list-secondary-label-${item}`;

        return (
          <ListItem
            key={item.id}
            secondaryAction={
              <Tooltip title="Delete">
                <IconButton
                  edge="end"
                  aria-label="delete"
                  onClick={() => deleteTodo.mutateAsync(item.id)}
                >
                  <DeleteIcon
                    id={labelId2}
                    color="error"
                    sx={{ cursor: "pointer" }}
                  />
                </IconButton>
              </Tooltip>
            }
            disablePadding
          >
            <ListItemButton
              role={undefined}
              onClick={handleToggle(item.id)}
              dense
            >
              <ListItemIcon>
                <Tooltip title="Check if done">
                  <Checkbox
                    edge="end"
                    checked={item.state}
                    tabIndex={-1}
                    inputProps={{ "aria-labelledby": labelId }}
                  />
                </Tooltip>
              </ListItemIcon>
              <ListItemText id={labelId} primary={item.text}></ListItemText>
            </ListItemButton>
          </ListItem>
        );
      })}
    </List>
  ) : (
    <Box
      sx={{
        width: "100%",
        bgcolor: "background.paper",
        borderRadius: 2,
        height: "100%",
        alignItems: "center",
        display: "flex",
        justifyContent: "center",
      }}
    >
      <Typography variant="h4">No content</Typography>
    </Box>
  );
};
